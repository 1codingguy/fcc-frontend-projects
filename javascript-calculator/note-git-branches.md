HEAD branch

- currently active/ checkout branch

local vs remote branches

1. creating new branches
   git branch <new-branch-name>

2. switching branches
   git checkout <other-branch>
   git switch <other-branch> - only purpose is to switch branch

3. renaming branch
   git branch -m <new-branch-name>

4. show the list of branches
   git branch

5. Publishing branches

- uploading a local branch for the first time
  `git push -u origin <local-branch>`
- the -u flag "establish a tracking connection"
