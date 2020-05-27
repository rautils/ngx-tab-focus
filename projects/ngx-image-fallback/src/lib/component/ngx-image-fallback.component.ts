import {
	Component,
	ViewEncapsulation,
	ChangeDetectionStrategy,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	OnInit,
	Renderer2,
	OnChanges,
	SimpleChanges,
} from '@angular/core';
import { ImageAttributeAbstractComponent } from './image-attributes.abstract.component';

@Component({
	selector: 'ngx-image-fallback',
	templateUrl: './ngx-image-fallback.component.html',
	styleUrls: ['./ngx-image-fallback.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxImageFallbackComponent extends ImageAttributeAbstractComponent implements OnInit, OnChanges {
	@Input()
	public imgClass = '';

	@Input()
	public classWhileLoading = 'image-fallback-loading';

	@Input()
	public classOnError = 'image-fallback-failed';

	@Input()
	public classOnSuccess = 'image-fallback-success';

	@Output()
	private imageLoad: EventEmitter<Event> = new EventEmitter<Event>();

	@Output()
	private imageError: EventEmitter<Event> = new EventEmitter<Event>();

	public imageLoading = true;
	private imageFailed = false;
	private lastImageSuccess = false;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		super();
	}

	ngOnInit(): void {
		this.paint();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hasOwnProperty('src')) {
			this.imageLoading = true;
			this.imageFailed = false;

			this.paint();
		}
	}

	public onLoad(event: Event): void {
		this.imageLoad.emit(event);

		this.imageLoading = false;
		this.imageFailed = false;
		this.lastImageSuccess = true;

		this.paint();
	}

	public onError(event: Event): void {
		this.imageError.emit(event);
		this.imageLoading = false;
		this.imageFailed = true;
		this.lastImageSuccess = false;

		this.paint();
	}

	public get hideLastImage(): boolean {
		return this.imageLoading && !this.lastImageSuccess;
	}

	public get showImage(): boolean {
		return !this.imageFailed;
	}

	private paint(): void {
		this.renderer.removeClass(this.elementRef.nativeElement, this.classOnError);
		this.renderer.removeClass(this.elementRef.nativeElement, this.classOnSuccess);
		this.renderer.removeClass(this.elementRef.nativeElement, this.classWhileLoading);

		if (this.imageLoading) {
			this.renderer.addClass(this.elementRef.nativeElement, this.classWhileLoading);
		} else if (this.imageFailed) {
			this.renderer.addClass(this.elementRef.nativeElement, this.classOnError);
		} else {
			this.renderer.addClass(this.elementRef.nativeElement, this.classOnSuccess);
		}
	}

}
