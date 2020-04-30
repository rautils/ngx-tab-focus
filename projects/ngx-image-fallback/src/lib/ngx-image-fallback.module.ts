import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageAttributeAbstractComponent, NgxImageFallbackComponent } from './component';

@NgModule({
	declarations: [ImageAttributeAbstractComponent, NgxImageFallbackComponent],
	imports: [CommonModule],
	exports: [NgxImageFallbackComponent],
})
export class NgxImageFallbackModule {}
