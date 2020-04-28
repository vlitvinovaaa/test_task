import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { pipe } from "rxjs";
import {Observable} from "rxjs";
import { GitRepo } from "../models/git-repo";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  GIT_SEARCH_API_BASE_URL = 'https://api.github.com/search/repositories';
  GIT_SEARCH_API_HEADER: HttpHeaders = new HttpHeaders().append('Accept', 'application/vnd.github.mercy-preview+json')
    .append("Access-Control-Allow-Origin", "*");

  constructor(private http: HttpClient) {}

  public getRepositories = (searchVal): Observable<GitRepo> => {
    return this.http.get<GitRepo>(this.GIT_SEARCH_API_BASE_URL + '?q=' + searchVal.replace(/\s/g, "+").toLowerCase() + '&sort=stars',
                        {headers: this.GIT_SEARCH_API_HEADER})
                            .pipe(map(res => res));
  }
}
