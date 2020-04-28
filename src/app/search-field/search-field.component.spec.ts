import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFieldComponent } from './search-field.component';

describe('SearchFieldComponent', () => {
  let component: SearchFieldComponent;
  let fixture: ComponentFixture<SearchFieldComponent>;
  let searchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFieldComponent ],
      providers: [{
        provide: searchService,
        useValue: jasmine.createSpyObj('searchService', ['getRepositories'])
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
