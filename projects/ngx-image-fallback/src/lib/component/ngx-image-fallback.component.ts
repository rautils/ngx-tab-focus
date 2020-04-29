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

@Component({
	selector: 'image-fallback',
	templateUrl: './ngx-image-fallback.component.html',
	styleUrls: ['./ngx-image-fallback.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxImageFallbackComponent implements OnInit, OnChanges {
	@Input()
	private classWhileLoading = 'image-fallback-loading';

	@Input()
	private classOnError = 'image-fallback-failed';

	@Input()
	private classOnSuccess = 'image-fallback-success';

	@Input()
	private imageSrc = '';

	@Input()
	private imageAlt = '';

	@Input()
	private imageSizes = '';

	@Input()
	private imageSrcset = '';

	@Output()
	private imageLoad: EventEmitter<Event> = new EventEmitter<Event>();

	@Output()
	private imageError: EventEmitter<Event> = new EventEmitter<Event>();

	public imageLoading = true;
	private imageFailed = false;

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

	ngOnInit(): void {
		this.paint();
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.hasOwnProperty('imageSrc')) {
			this.imageLoading = true;
			this.imageFailed = false;

			this.paint();
		}
	}

	public onLoad(event: Event): void {
		this.imageLoad.emit(event);

		this.imageLoading = false;
		this.imageFailed = false;

		this.paint();
	}

	public onError(event: Event): void {
		this.imageError.emit(event);
		this.imageLoading = false;
		this.imageFailed = true;

		this.paint();
	}

	public get src(): string {
		return this.imageSrc;
	}

	public get alt(): string {
		return this.imageAlt;
	}

	public get sizes(): string {
		return this.imageSizes;
	}

	public get srcset(): string {
		return this.imageSrcset;
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
