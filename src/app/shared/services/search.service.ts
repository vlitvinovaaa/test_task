import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { pipe, Observable } from "rxjs";
import { GitRepo } from "../models/git-repo";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {}

  public getRepositories = (searchVal, reqPage): Observable<GitRepo> => {
    return this.http.get<GitRepo>(environment.GIT_SEARCH_API_BASE_URL +
                                      environment.paramsQuery +
                                      searchVal.replace(/\s/g, "+").toLowerCase() +
                                      environment.sortQuery +
                                      environment.pageQuery +
                                      reqPage,
                        {headers: environment.GIT_SEARCH_API_HEADER})
                            .pipe(map(res => res));
  }
}
