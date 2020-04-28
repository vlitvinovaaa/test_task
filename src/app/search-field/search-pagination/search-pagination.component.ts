import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.sass']
})
export class SearchPaginationComponent {
  @Input() repos;
  @Output() paginatePage = new EventEmitter<number>();

  activePage = 1;
  constructor() { }

  switchPagination(activePage) {
    this.activePage = activePage;
    this.paginatePage.emit(activePage);
  }
}
