import { GitRepoItem } from './git-repo-item';

export interface GitRepo {
  'total_count': number;
  'incomplete_results': boolean;
  items: Array<GitRepoItem>;
}
