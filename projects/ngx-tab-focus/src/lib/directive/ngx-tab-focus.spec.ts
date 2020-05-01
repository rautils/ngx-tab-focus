import { NgxTabFocusModule } from './../ngx-tab-focus.module';
import { ComponentFixture, TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
	template: `<button ngxTabFocus><h1>btn text</h1></button>`,
})
class NgxTabFocusTesterComponent {}

describe(`NgxTabFocusDirective basic`, () => {
	let fixture: ComponentFixture<NgxTabFocusTesterComponent>;
	let button: HTMLButtonElement;

	const getSpan: () => Element = (): Element => {
		return button.children[0];
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxTabFocusTesterComponent],
			imports: [NgxTabFocusModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxTabFocusTesterComponent);
		fixture.detectChanges();
		button = fixture.debugElement.nativeElement.querySelector(`button`);
	});

	it(`can be added to an element`, () => {
		expect(button).toBeTruthy();
	});

	it(`should have an inner span`, () => {
		expect(button.children.length).toBe(1);
		const child = getSpan();
		expect(child instanceof HTMLSpanElement).toBe(true);
	});

	it(`should have proper classes`, () => {
		expect(button.classList.contains(`ngx-tab-focus__wrapper`)).toBe(true);
		const child = getSpan();
		expect(child.classList.contains(`ngx-tab-focus__content`)).toBe(true);

		expect(
			Array.from(document.head.children).filter(
				(node) => node.id === `ngx-tab-focus__style`
			).length
		).toBe(1);
	});

	it(`should inherit its children to the inner span`, () => {
		const span = getSpan();
		const spanChildren = span.children;
		const spanChild = spanChildren[0];
		expect(span.children.length).toBe(1);
		expect(spanChild instanceof HTMLHeadingElement).toBe(true);
	});

	it(`shouldn't get focused on click`, fakeAsync(() => {
		button.click()
		tick();

		expect(document.activeElement).not.toBe(button);
		expect(document.activeElement instanceof HTMLBodyElement).toBe(true);
	}));
});
