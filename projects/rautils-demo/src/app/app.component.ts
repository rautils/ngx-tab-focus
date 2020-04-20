import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public libraries: {path: string, name: string}[] = [
		{name: 'NgxTabFocus', path: 'ngx-tab-focus'}
	];

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			if (params.hasOwnProperty('library')) {
				if (this.libraries.find((library) => library.path === params.library)) {
					this.router.navigate(['/', params.library]);
				}
			}
		})
	}

}
