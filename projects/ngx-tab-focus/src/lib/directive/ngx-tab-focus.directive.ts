import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
	selector: '[ngxTabFocus]',
})
export class NgxTabFocusDirective implements OnInit {
	private contentCSS: string = `

		.ngx-tab-focus__content {
			position: relative;
			display: block;

			width: 100%;
			height: 100%;
		}

		.ngx-tab-focus__content:focus {
			outline: none;
		}

		`;

	private headStyleId = `ngx-tab-focus__style`;

	constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}

	ngOnInit(): void {
		this.addStyleToHeader();

		this.createInnerElement();
	}

	public get styleId(): string {
		return this.headStyleId;
	}

	private createInnerElement(): void {
		const span = this.renderer.createElement('span') as HTMLSpanElement;
		this.renderer.addClass(this.elementRef.nativeElement, 'ngx-tab-focus__wrapper');
		this.renderer.addClass(span, 'ngx-tab-focus__content');

		for (const child of Array.from(this.elementRef.nativeElement.children)) {
			this.renderer.appendChild(span, child);
		}

		span.innerText = this.elementRef.nativeElement.innerText;
		this.elementRef.nativeElement.innerText = null;
		span.tabIndex = -1;

		this.renderer.appendChild(this.elementRef.nativeElement, span);
	}

	private addStyleToHeader(): void {
		const headNodes = Array.from(document.head.children);

		if (headNodes.filter((node) => node.id === this.styleId).length === 0) {
			const style = this.renderer.createElement('style') as HTMLStyleElement;
			style.id = this.styleId;
			style.innerHTML = this.contentCSS;
			this.renderer.appendChild(document.head, style);
		}
	}
}
