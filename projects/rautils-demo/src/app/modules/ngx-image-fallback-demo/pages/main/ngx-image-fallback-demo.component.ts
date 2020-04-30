import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'ngx-image-fallback-demo',
	templateUrl: './ngx-image-fallback-demo.component.html',
	styleUrls: ['./ngx-image-fallback-demo.component.scss'],
})
export class NgxImageFallbackDemoComponent implements OnInit, OnDestroy {
	public basicImage =
		'https://avatars0.githubusercontent.com/u/15218519?s=60&u=2a0ce3180de9f435f176322a8fc1a1332efe9ff7&v=4';

	public randomImage = `https://picsum.photos/200?random=1`;

	public changinImage = `https://picsum.photos/200?random=11`;

	private changingImageInterval: number = null;

	ngOnInit(): void {
		this.changingImageInterval = setInterval(() => {
			if (Math.random() > 0.3) {
				const randomInt = Math.round(Math.random() * 100);
				this.changinImage = `https://picsum.photos/200?random=${100 + randomInt}`;
			} else {
				this.randomImage = `wrong_url`;
			}
		}, 2000);
	}

	ngOnDestroy(): void {
		clearInterval(this.changingImageInterval);
	}

	public randomizeImage(): void {
		if (Math.random() > 0.3) {
			const randomInt = Math.round(Math.random() * 100);
			this.randomImage = `https://picsum.photos/200?random=${randomInt}`;
		} else {
			this.randomImage = `woopsies`;
		}
	}
}
