import { NgxImageFallbackModule } from './../ngx-image-fallback.module';
import { DebugElement, Component, SimpleChange } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageFallbackComponent } from './ngx-image-fallback.component';
import { By } from '@angular/platform-browser';

function imgLoaded<T>(img: DebugElement, fixture: ComponentFixture<T>): void {
	img.triggerEventHandler('load', {});
	fixture.detectChanges();
}

function imgFailed<T>(img: DebugElement, fixture: ComponentFixture<T>): void {
	img.triggerEventHandler('error', {});
	fixture.detectChanges();
}

describe('NgxImageFallback logic', () => {
	let component: NgxImageFallbackComponent;
	let fixture: ComponentFixture<NgxImageFallbackComponent>;
	let element: HTMLElement;
	let img: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxImageFallbackComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxImageFallbackComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		element = fixture.elementRef.nativeElement;
		img = fixture.debugElement.query(By.css('img'));
	});

	it(`creates`, () => {
		expect(component).toBeTruthy();
	});

	it(`marks image as loading`, () => {
		expect(component.imageLoading).toBe(true);
		expect(component.showImage).toBe(true);
		expect(element.classList.contains(component.classWhileLoading)).toBe(true);
		expect(element.classList.contains(component.classOnSuccess)).toBe(false);
		expect(element.classList.contains(component.classOnError)).toBe(false);
	});

	it(`marks image as failed with image event`, () => {
		imgFailed(img, fixture);

		expect(component.imageLoading).toBe(false);
		expect(component.showImage).toBe(false);
		expect(element.classList.contains(component.classWhileLoading)).toBe(false);
		expect(element.classList.contains(component.classOnSuccess)).toBe(false);
		expect(element.classList.contains(component.classOnError)).toBe(true);
	});

	it(`marks image as failed with custom event`, () => {
		component.onError(null);

		expect(component.imageLoading).toBe(false);
		expect(component.showImage).toBe(false);
		expect(element.classList.contains(component.classWhileLoading)).toBe(false);
		expect(element.classList.contains(component.classOnSuccess)).toBe(false);
		expect(element.classList.contains(component.classOnError)).toBe(true);
	});

	it(`marks image as success with image event`, () => {
		imgLoaded(img, fixture);

		expect(component.imageLoading).toBe(false);
		expect(component.showImage).toBe(true);
		expect(element.classList.contains(component.classWhileLoading)).toBe(false);
		expect(element.classList.contains(component.classOnSuccess)).toBe(true);
		expect(element.classList.contains(component.classOnError)).toBe(false);
	});

	it(`marks image as success with custom event`, () => {
		component.onLoad(null);

		expect(component.imageLoading).toBe(false);
		expect(component.showImage).toBe(true);
		expect(element.classList.contains(component.classWhileLoading)).toBe(false);
		expect(element.classList.contains(component.classOnSuccess)).toBe(true);
		expect(element.classList.contains(component.classOnError)).toBe(false);
	});

	it(`hides image while loading by default`, () => {
		expect(img.classes['image-fallback-hide-img']).toBe(true);
	});

	it(`hides image while loading if previous image was a failure`, () => {
		imgFailed(img, fixture);

		expect(img.classes['image-fallback-hide-img']).toBe(true);
	});

	it(`doesn't hide image while loading if previous image was a success`, () => {
		imgLoaded(img, fixture);

		expect(img.classes['image-fallback-hide-img']).toBe(undefined);
	});

	it(`hides fallback if image is loading`, () => {
		expect(component.showImage).toBe(true);
		expect(element.children[0] instanceof HTMLImageElement).toBe(true);
		expect(element.children.length).toBe(1);
	});

	it(`hides fallback if image loaded successfully`, () => {
		imgLoaded(img, fixture);

		expect(component.showImage).toBe(true);
		expect(element.children[0] instanceof HTMLImageElement).toBe(true);
		expect(element.children.length).toBe(1);
	});

	it(`shows fallback if image failed`, () => {
		imgFailed(img, fixture);

		expect(component.showImage).toBe(false);
		expect(element.children.length).toBe(0);
	});

	it(`changes src on changes if new one given`, () => {
		const first = 'first-path';
		const second = 'second-path';

		component.src = 'first-path';
		fixture.detectChanges();

		component.ngOnChanges({
			src: new SimpleChange(first, second, false),
		});
		fixture.detectChanges();

		expect(component.showImage).toBe(true);
		expect(element.classList.contains(component.classWhileLoading)).toBe(true);
		expect(element.classList.contains(component.classOnSuccess)).toBe(false);
		expect(element.classList.contains(component.classOnError)).toBe(false);
	});

	it(`doesn't repaint if not given new src on changes`, () => {
		const first = 'first-alt';
		const second = 'second-alt';

		component.alt = first;

		imgFailed(img, fixture);

		component.ngOnChanges({
			alt: new SimpleChange(first, second, false),
		});
		fixture.detectChanges();

		expect(component.showImage).toBe(false);
		expect(element.classList.contains(component.classWhileLoading)).toBe(false);
		expect(element.classList.contains(component.classOnSuccess)).toBe(false);
		expect(element.classList.contains(component.classOnError)).toBe(true);
	});


});

@Component({
	template: `<ngx-image-fallback><span>Fail</span></ngx-image-fallback>`,
})
class NgxImageFallbackTesterComponent {}

describe(`ng-content shown`, () => {
	let fixture: ComponentFixture<NgxImageFallbackTesterComponent>;
	let elementImageFallback: HTMLElement;
	let img: DebugElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxImageFallbackTesterComponent],
			imports: [NgxImageFallbackModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxImageFallbackTesterComponent);
		fixture.detectChanges();
		img = fixture.debugElement.query(By.css('img'));

		elementImageFallback = fixture.elementRef.nativeElement.children[0];
	});

	it(`shows image if it is still loading`, () => {
		expect(elementImageFallback.children[0] instanceof HTMLImageElement).toBe(true);
	});

	it(`shows image if it successfully loaded`, () => {
		imgLoaded(img, fixture);

		expect(elementImageFallback.children[0] instanceof HTMLImageElement).toBe(true);
	});

	it(`shows fallback if image failed loading`, () => {
		imgFailed(img, fixture);

		expect(elementImageFallback.children[0] instanceof HTMLSpanElement).toBe(true);
	});
});
