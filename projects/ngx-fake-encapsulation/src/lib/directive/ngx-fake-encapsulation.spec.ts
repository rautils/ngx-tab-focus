import { NgxFakeEncapsulationModule } from './../ngx-fake-encapsulation.module';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Component, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
	selector: `fake-encapsulation-container`,
	template: `<div><div id="encapsulated" ngxFakeEncapsulation></div></div>`,
})
class NgxFakeEncapsulationInnerTesterComponent {}

@Component({
	selector: `fake-encapsulation-tester`,
	template: `<fake-encapsulation-container _nghost-test></fake-encapsulation-container>`,
})
class NgxFakeEncapsulationOutterTesterComponent {}

@NgModule({
	declarations: [NgxFakeEncapsulationInnerTesterComponent, NgxFakeEncapsulationOutterTesterComponent],
	imports: [NgxFakeEncapsulationModule],
	exports: [NgxFakeEncapsulationInnerTesterComponent, NgxFakeEncapsulationOutterTesterComponent],
})
class NgxFakeEncapsulationTesterModule {}

describe(`NgxFakeEncapsulationDirective`, () => {
	let fixture: ComponentFixture<NgxFakeEncapsulationOutterTesterComponent>;
	let encapsulated: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NgxFakeEncapsulationTesterModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxFakeEncapsulationOutterTesterComponent);
		fixture.detectChanges();
		encapsulated = fixture.debugElement.query(By.css(`#encapsulated`)).nativeElement;
	});

	it(`creates`, () => {
		expect(encapsulated).toBeTruthy();
	});

	it(`gets the proper encapsulation`, () => {
		expect(encapsulated.getAttributeNames().includes(`_ngcontent-test`)).toBe(true);

	});
});
