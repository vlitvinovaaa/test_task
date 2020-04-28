import {Component, EventEmitter, Input, Output} from '@angular/core';
import { SearchService } from "../../shared/services/search.service";

@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.sass']
})
export class SearchPaginationComponent {
  @Input() repos;
  @Output() paginatePage = new EventEmitter<number>();

  activePage: number = 1;

  constructor(private searchService: SearchService) { }

  switchPagination(activePage) {
    this.activePage = activePage;
    this.paginatePage.emit(activePage);
  }
}
