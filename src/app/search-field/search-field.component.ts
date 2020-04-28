import { Component } from '@angular/core';
import { SearchService } from '../shared/services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.sass']
})
export class SearchFieldComponent {
  repos;
  loading: boolean = false;
  showRepositories(searchField) {
    this.loading = true;
    this.searchService.getRepositories(searchField)
      .subscribe((response) => {
        console.log(response);
        this.loading = false;
        this.repos = response.items;
      });
  }
  constructor(private searchService: SearchService) {}

}
