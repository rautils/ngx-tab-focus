import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabFocusComponent } from './ngx-tab-focus.component';

describe('NgxTabFocusComponent', () => {
	let component: NgxTabFocusComponent;
	let fixture: ComponentFixture<NgxTabFocusComponent>;

	let wrapper: HTMLButtonElement;
	let content: HTMLDivElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgxTabFocusComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgxTabFocusComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		wrapper = fixture.nativeElement.querySelector('.tab-focus__wrapper');
		content = fixture.nativeElement.querySelector('.tab-focus__content');
	});

	it(`creates`, () => {
		expect(component).toBeTruthy();
	});

	it(`can be focused and blured by function`, (done) => {
		component.focus();
		fixture.detectChanges();

		fixture.whenStable().then(() => {
			expect(document.activeElement).toBe(wrapper);

			component.blur();
			fixture.detectChanges();

			fixture.whenStable().then(() => {
				expect(document.activeElement).not.toBe(wrapper);

				done();
			});
		});
	});
});
