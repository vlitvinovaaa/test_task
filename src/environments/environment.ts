import {HttpHeaders} from '@angular/common/http';

export const environment = {
  production: false,
  GIT_SEARCH_API_BASE_URL: 'https://api.github.com/search/repositories',
  GIT_SEARCH_API_HEADER: new HttpHeaders().append('Accept', 'application/vnd.github.mercy-preview+json'),
  paramsQuery: '?q=',
  sortQuery: '&sort=stars',
  pageQuery: '&page='
};
