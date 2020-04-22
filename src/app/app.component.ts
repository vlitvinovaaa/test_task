import { Component } from '@angular/core';
import { SearchFieldComponent } from "./search-field/search-field.component";
import { SearchResultsComponent } from "./search-results/search-results.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/_default.sass']
})
export class AppComponent {
  title = 'test';
}
