import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.sass']
})
export class SearchFieldComponent {
  searchValue: string = 'Type at least 3 symbols';
  constructor() { }
  getSearchValue = (input) => {
    console.log(input.value);
  }
}
