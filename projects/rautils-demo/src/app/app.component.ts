import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public libraries: {path: string, name: string}[] = [
		{name: 'NgxTabFocus', path: 'ngx-tab-focus'}
	];

}
