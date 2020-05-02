import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[ngxFakeEncapsulation]',
})
export class NgxFakeEncapsulationDirective implements OnInit {
	constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) {}

	ngOnInit(): void {
		this.update();
	}

	public update(): void {
		try {
			const host = this.host;

			const encapsulationValues = host
				.getAttributeNames()
				.filter((prop) => prop.includes(`_ngcontent`) || prop.includes(`_nghost`))
				.map((prop) => prop.replace(`_ngcontent-`, ``).replace(`_nghost-`, ``));

			for (const value of encapsulationValues) {
				const encapsulation = `_ngcontent-${value}`;

				this.renderer.setAttribute(this.element.nativeElement, encapsulation, ``);
			}
		} catch (e) {
			// no host element;
		}
	}

	private get host(): HTMLElement {
		let hostFound = false;
		let lastNode = this.element.nativeElement;

		while (!hostFound) {
			lastNode = lastNode.parentElement;
			const properties = lastNode.getAttributeNames();
			hostFound = properties.filter((prop) => prop.includes(`_nghost`)).length === 1;
		}

		return lastNode;
	}
}
