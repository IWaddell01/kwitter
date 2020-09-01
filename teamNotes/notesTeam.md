# Team Notes / Misc Notes

Notes and instruction. A place for notation.

- added development branch

## Description

Kwitter team project. A reference guide for GIT, + etc.

## Contributing

### Basic Task Flow

Start- Get task -> Local changes to own branch -> Submit Pull Request -> Merge with Development Branch -> Test Thoroughly -> Merge with Master Branch -End

### How to make changes to project

    1 - CD to kwitter directory and create a new branch
        $ cd kwitterMainRepo/
        $ git checkout -b userNameBranch
    2 - Make changes/add new code/complete task, commit changes to branch
        $ git add fileNameThatWasChanged.js
        $ git commit -m "Commit message."
    3 - Push changed to BRANCH
        $ git push -u origin userNameBranch
    4 - Create merge request in GitLab.
        - Open GitLab repo in browser
        - You will see a drop-down to change the project branch
        - Go to your branch
        -  Raise a Pull request by clicking the "New pull request" next to the branch-selecting drop-down. Now it will just preview the pull request that you're about to raise. You can change any details, modify the pull request name and change the parent branch to which you're proposing the code change.
        - Create pull request. Once you're sure about all the details click on "Create pull request" to confirm the proposal.
    5 - Post in Slack you submitted a PR (pull request). Share the link to the PR. You can just copy it from the browser address bar.

## Authors

Product Owner:
Sprint 1 - Joseph Dubon

Scrum Master:
Sprint 1 - Lea McIver

QA Testers:
Sprint 1 - Ian Waddell and Saxton Cooper

- Roles are not concrete. All members are expected to contribute to all aspects of project.
