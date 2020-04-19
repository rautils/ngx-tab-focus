import {
	Component,
	ViewEncapsulation,
	Input,
	ViewChild,
	AfterViewInit,
	ElementRef,
	OnDestroy,
	ChangeDetectionStrategy,
	Renderer2,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { Observable, fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'tab-focus',
	templateUrl: './ngx-tab-focus.component.html',
	styleUrls: ['./ngx-tab-focus.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxTabFocusComponent implements AfterViewInit, OnChanges, OnDestroy {
	private ngUnsubscribe: Subject<void> = new Subject<void>();

	@Input()
	public styleOnClick = false;

	@Input()
	public styleOnHover = false;

	@Input()
	private styleClassName = 'tab-focus-style';

	@Input()
	private activeClassName = 'tab-focus-active';

	@ViewChild('wrapper', { static: false })
	private wrapper: ElementRef<HTMLButtonElement>;

	@ViewChild('content', { static: false })
	private content: ElementRef<HTMLDivElement>;

	private focused = false;
	private paintedBecauseHover = false;

	constructor(private element: ElementRef, private renderer: Renderer2) {}

	ngAfterViewInit(): void {
		this.refresh();
	}

	ngOnChanges(changes: SimpleChanges): void {
		const modified = (prop: string): boolean => {
			return changes.hasOwnProperty(prop) && !changes[prop].isFirstChange;
		}
		if (modified('styleOnClick') || modified('styleOnHover')) {
			this.refresh();
		}
	}

	ngOnDestroy(): void {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}

	public refresh(): void {
		this.ngUnsubscribe.next();

		const elemObs = this.obsUntilDestroy(fromEvent(this.element.nativeElement, 'focus'));
		elemObs.subscribe(() => this.focus());

		const focusObs = this.obsUntilDestroy(fromEvent(this.wrapper.nativeElement, 'focus'));
		focusObs.subscribe(() => this.onFocus());

		const blurObs = this.obsUntilDestroy(fromEvent(this.wrapper.nativeElement, 'blur'));
		blurObs.subscribe(() => this.onBlur());

		if (this.styleOnClick) {
			const focusWithinObs = this.obsUntilDestroy(
				fromEvent(this.content.nativeElement, 'focus')
			);
			focusWithinObs.subscribe(() => this.focus());
		}

		if (this.styleOnHover) {
			const focusHoverObs = this.obsUntilDestroy(
				fromEvent(this.content.nativeElement, 'mouseenter')
			);
			focusHoverObs.subscribe(() => this.setStyle(true));

			const mouseLeaveObs = this.obsUntilDestroy(
				fromEvent(this.content.nativeElement, 'mouseleave')
			);
			mouseLeaveObs.subscribe(() => this.removeStyle(true));
		}
	}

	public focus(): void {
		this.wrapper.nativeElement.focus();
	}

	public blur(): void {
		this.wrapper.nativeElement.blur();
	}

	private onFocus(): void {
		this.focused = true;
		this.setStyle();
	}

	private onBlur(): void {
		this.focused = false;
		this.removeStyle();
	}

	private obsUntilDestroy<T>(obs: Observable<T>): Observable<T> {
		return obs.pipe(takeUntil(this.ngUnsubscribe));
	}

	private setStyle(becauseHover = false): void {
		this.paintedBecauseHover = this.focused ? false : becauseHover;

		this.renderer.addClass(this.content.nativeElement, this.styleClassName);
		this.renderer.addClass(this.element.nativeElement, this.activeClassName);
	}

	private removeStyle(becauseHover = false): void {
		if (!becauseHover || this.paintedBecauseHover) {
			this.renderer.removeClass(this.content.nativeElement, this.styleClassName);
			this.renderer.removeClass(this.element.nativeElement, this.activeClassName);
		}
	}
}
