import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	public libraries: { path: string; name: string }[] = [
		{ name: 'NgxTabFocus', path: 'ngx-tab-focus' },
		{ name: 'NgxImageFallback', path: 'ngx-image-fallback' },
		{ name: 'NgxFakeEncapsulation', path: 'ngx-fake-encapsulation' },
	];

	private activeLibrary: string = null;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params.hasOwnProperty('library')) {
				if (this.libraries.find((library) => library.path === params.library)) {
					this.navigate(params.library);
				}
			}
		});
	}

	public async navigate(path: string) {
		await this.router.navigate([`/${path}`], {
			skipLocationChange: true,
			queryParamsHandling: 'merge'
		});
		this.activeLibrary = path;
	}

	public isActive(library: { path: string; name: string }): boolean {
		return this.activeLibrary === library.path;
	}
}
