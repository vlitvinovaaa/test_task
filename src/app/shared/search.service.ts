import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private GIT_SEARCH_API_URL = 'https://api.github.com/search/repositories';
  private GIT_SEARCH_API_HEADER: HttpHeaders = new HttpHeaders().append('Accept', 'application/vnd.github.mercy-preview+json');

  constructor(private http: HttpClient) {}

  public getRepositories(searchVal): Observable<any> {
    if (/\s/.test(searchVal)) {
      searchVal.split(' ').join('+');
    }
    return this.http.get(this.GIT_SEARCH_API_URL + '?q=' + searchVal + '&sort=stars',
                        {headers: this.GIT_SEARCH_API_HEADER}
                        ).pipe(map(response => {
                          return response;
    }));
  }
}
