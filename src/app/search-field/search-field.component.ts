import { Component } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Repo } from "./model/repo";

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.sass']
})
export class SearchFieldComponent {
  repos: Repo;
  showRepositories(searchVal) {
    this.searchService.getRepositories(searchVal)
      .subscribe((response) => {
        this.repos = response.items;
        console.log(this.repos);
      });
  }
  constructor(private searchService: SearchService) {}

}
