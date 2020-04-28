import {Component, OnDestroy, OnInit} from '@angular/core';
import { SearchService } from '../shared/services/search.service';
import {GitRepoItem} from '../shared/models/git-repo-item';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.sass']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  repos: Array<GitRepoItem>;
  loading = false;
  emptyResult = false;
  searchCacheQuery = '';
  subscription: Subscription;

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchCacheQuery = localStorage.getItem('searchCacheQuery');
  }

  showRepositories(searchField: string, $event?: number) {
    this.loading = true;
    localStorage.setItem('searchCacheQuery', searchField);
    this.subscription = this.searchService.getRepositories(searchField, $event)
      .subscribe((response) => {
        this.loading = false;
        if (!response.items.length) {
          return this.emptyResult = true;
        }
        this.emptyResult = false;
        this.repos = response.items;
      }, error => {
        console.log(error);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
