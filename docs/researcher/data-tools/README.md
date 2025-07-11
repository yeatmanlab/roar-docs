# Data Tools
The purpose of this page is to get researchers familiar with various tools often used in the lab. If you have any questions regarding any of these tools, please refer to the [Data Requests Page](https://yeatmanlab.github.io/roar-docs/researcher/data-requests/). 

## GitHub 
This section will get researchers acquainted with using GitHub for research projects, IRB modifications, documentation updates, etc. 

### [GitHub Lingo](https://docs.github.com/en/get-started/learning-about-github/github-glossary) 
- Repository: A project's folder. A repository contains all of the project files (including documentation), and stores each file's revision history. Repositories can have multiple collaborators and can be either public or private.
- Clone: To copy the files of a repository to the user's local device. 
- Main: The "live" branch that should never directly be edited (unless approved by ROAR leads or Kelly Wentzlof, data scientist). The default development branch. Whenever you create a Git repository, a branch named main is created, and becomes the active branch. 
- Branch: A parallel version of a repository. It is contained within the repository, but does not affect the primary or main branch allowing you to work freely without disrupting the "live" version. When you've made the changes you want to make, you can merge your branch back into the main branch to publish your changes. 
- Commit: A "revision"--an individual change to a file (or set of files). When you make a commit to save your work, Git creates a unique ID that allows you to keep record of the specific changes committed along with who made them and when. 
- Push: To send your committed changes to a remote repository on GitHub.com where others can see them. 
- Fetch: When you're adding changes from the remote repository to your local working branch without committing them. 
- Pull: When you are fetching in changes and merging them. For instance, if someone has edited the remote file you're both working on, you'll want to pull in those changes to your local copy so that it's up to date.
- Merge:  Takes the changes from one branch (in the same repository or from a fork), and applies them into another.
- Pull Request: Proposed changes to a repository submitted by a user and accepted or rejected by a repository's collaborators. Linked to a specific branch and the changes pushed to that branch. 
- Issue: Suggested improvements, tasks or questions related to the repository.
- Markdown (.md, .Rmd): An incredibly simple semantic file format, not too dissimilar from .doc, .rtf and .txt. Markdown makes it easy for even those without a web-publishing background to write prose (including with links, lists, bullets, etc.) and have it displayed like a website.
- README: A text file containing information about the files in a repository that is typically the first file a visitor to your repository will see. 

### Downloading GitHub
Follow the instructions to [download GitHub Desktop](https://docs.github.com/en/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop). 

### Yeatman Lab GitHub 
Please tag Adam Richie-Halford in a slack message in #roar-pii-maintanence-requests requesting access to the Yeatman Lab GitHub. This will grant you access to all public and private repositories 

### Navigating the GitHub website 
On the Yeatman Lab homepage, users will see >100 different repositories. Each repository should have a README.md file which will explain what the repository stores and the researchers'/developers' goals. The user should find the repository that they would like to read/contribute to via the search bar or scrolling. 

### Cloning a repository 
Once the user finds the repository that they would like to contribute to, they will click the repository and be taken to the home page of the repository. To contribute to the files within the repository, the user will need to "clone" the repository to their local device. 

1. On the repository homepage, click the green button "<> Code". 
2. Click "Open wtith GitHub Desktop". 
3. User should already have GitHub Desktop downloaded, the User will see a page on GitHub Desktop asking which folder to clone the repository into--most common locations are a GitHub folder in the Documents directory or the Home directory. 
4. Once the user decides the location of the repository, click "Clone". 
5. The Desktop should say the repository name in the top left corner under "Current Repository", "main" indicating the user is on the main branch under "Current Branch" and a "Fetch origin" button. 
The repository now exists locally on the user's device. 

::: tip Try to clone a repository on GitHub

Try to clone the following repository [github-learning](https://github.com/yeatmanlab/github-learning). This repository is a fake repository, so feel free to play around, add text to the existing documents, add new files, rewrite text, etc. Please message Kelly Wentzlof on slack if you do not have access. 
:::


### Creating a new branch 
Before any changes are made, the user should create their own new branch and make changes on the new branch. Creating a branch can happen on the GitHub Desktop or on the GitHub.com website. 

*Desktop*: 
1. Click "Current Branch: main". 
2. Click "New Branch". 
3. Give the branch a name (Tip: Make sure to include your initials and enough of a description so other users can see what you are working on). 
4. Click "Create Branch" 
5. Now in the top left, the new branch name should be under "Current Branch". If it is not, please click "Current Branch" and select the correct branch. 
6. Click "Publish branch"--this pushes the branch to the GitHub.com website so other users can see the branch. 

*GitHub.com website*: 
1. On the repository homepage, next to the "main" button, the user should click "## Branches". 
2. In the top right corner, click the green button "New branch". 
3. Give the branch a name (Tip: Make sure to include your initials and enough of a description so other users can see what you are working on). 
4. Click "Create new branch". 
5. Now navigate back to GitHub Desktop, click the "Fetch" button. 
6. Please click "Current Branch" and select the new branch you created. 

::: tip Try to create a new branch 

Try to create a branch on the following repository [github-learning](https://github.com/yeatmanlab/github-learning). Please name the branch with your initials and an informational description of what you are changing (e.g., kw-adding-scatter-plot-iris).
:::

### Making a contribution to a repository
Once the user has cloned the repository to their local device, they will likely want to make a contribution to one or more of the files within the repository. Reminder to never edit the main branch and to only make edits on the new branch the user created. 

1. Locate the GitHub folder on your local device. 
2. Open the file you want to make a contribution to/edit. (Note: You can often open files in R Studio, Visual Studio Code, etc.)
3. Make the edits in whatever editor you chose (R Studio, VS Code, etc.). 
4. Press save. 
5. Open the GitHub Desktop. You should see the files you edited pop up under the left side tab under "Changes". 
6. Click the checkboxes for the files you want to commit. 
7. In the "Summary" box, Write a short summary of the changes you made on the files you selected. If you want to write in more detail about the changes you can write in the "Description" box. 
8. Before committing, click "Fetch origin" in the top middle, to make sure there aren't any changes that other users have made on your same branch that you did not previously have. 
    8a. If there are change that you were missing, you will see the button change from "Fetch origin" to "Pull" with the number of commits that you were missing. 
    8b. Click the "Pull" button. 
9. Click "Commit to branch-name". 
10. In the middle top, where it once said "Fetch origin", you will see an option to "Push origin". This will push all the changes you made to the GitHub.com website where other users can see it. 
The change(s) you made will now appear on the GitHub.com website under the branch you made. 

::: tip Try to make a contribution on a branch

Try to make a contribution to the branch that you created. Please remember to switch to your branch before committing and pushing any changes. 
:::

### Making a pull request (PR)
Once the user has pushed changes to their branch, they will have the option to create a pull request. Pull requests can happen after the user has already pushed changes to a branch.

This feature is especially helpful when multiple users are working on the same repository. 
- You have the option to assign reviewers who can review all code and commits that are pushed to the branch. 
- You can assign "assignees" who will be continuously working on the repository and making changes in the current pull request. 
- You can converse with other users in the comment section about various changes happening within the repository files. 
- You can navigate to "Files changed" and leave comments on the specific lines of the document/code. 
- You can @ people in the comments to notify them of an issue or a change. 
- You can see all the various commits, who made them, and the descriptions under "Commits". 

*From main page*: 
1. Direct yourself to the GitHub.com website on the repository you are working on. 
2. You will see a yellow highlighted bar pop up on the homepage of the repository which says "branch-name had recent pushes # seconds/minutes ago". 
3. Click the green button "Compare & pull request". 
4. The title section will prefill with the summary you had provided with the commit. If the summary does not highlight all the things you will be working on in the pull request, rewrite it and add an informative title and description for the entire pull request (not just the first commit). 
5. Click the green button "Create pull request". 
Now a pull request has been created. This pull request is associated with the branch that you created. Therefore, any commits that are pushed to the branch are recorded in the pull request. 

::: tip Try to make a pull request 

Try to create a pull request with a title, details, add an assignee and a reviewer for the commits you pushed to your branch. 
:::

### Merging a pull request into the main branch 
Once you have made all the changes you want to the files, you can merge this pull request into the main branch. However, you will often want someone to review your work before you do. 

1. GitHub will automatically check to see if there are any conflicts with the base branch (in most cases the base branch is the main branch). If there are merging issues, please have someone review and/or fill out a [data request form](https://github.com/yeatmanlab/roar-bigquery/issues) to get help with resolving the merging issues. 
2. If there are no merging issues, after being reviewed, click the green "Merge pull request" button. 
3. You can change the commit message or description to something more informational. 
4. Click "Confirm merge". 
5. You will then be told "Pull request successfully merged and closed". 
6. If you do not plan to make any more changes to the branch you were working out of, click "Delete branch". 
You now have merged a pull reqeust from your own branch into main. 

::: tip Try to merge the pull request 

Try to merge the pull request that you created with all the commits that you pushed to the branch you created (these should all be tracked within the same pull request). Review the changes and if there are no merging issues, merge into main. If there are merging issues, try to work through them, if you are struggling please fill out a [data request form](https://github.com/yeatmanlab/roar-bigquery/issues). 
:::

### Creating an issue 
Issues are a great way of tracking tasks and communication between users. 

1. On the homepage of the repository on the GitHub.com website, navigate to the "Issues" tab in the top left corner. 
2. Click the green button in the top right corner "New issue". 
3. Add a title to describe the task or question that needs to be done/answered. 
4. Add a description with all needed details and files that are involved. 
5. Assign the user you want to complete the issue/task. (Tip: Creating issues for yourself is a great way of keeping track of your tasks). 
6. Click the green button "Create". 
You can continue to comment within the issue to talk about progress with other users or to write notes to yourself. Additionally, you can comment the related pull requests or branches that are working on solving the issue. Comment the PR or branch by doing # and selecting the corresponding branch/PR from the dropdown that appears. 

::: tip Try to create an issue

Try to create an issue related to the current repository, it can be anything. Assign it to yourself and make a few comments, tag the pull request related to the issue, etc. 
:::

### Good practices 
- Always "Fetch origin" before committing changes. 
- Commit and Push more often than you would think--this helps other users see your changes in "live" time. 
- Creating a pull request for any new branch will help you keep track of your changes and make merging into main branch easier. 
- Be descriptive in your commits--you are communicating to the team not just making notes for yourself. 
- Never push to main. Even when you think you are the only one working on a repository, always work out of a separate branch and merge. 
- Don't be afraid to ask questions--GitHub is very daunting at the beginning, just reach out to devs or Kelly Wentzlof and everyone will be happy to help. 

### Try out GitHub
The repository [github-learning](https://github.com/yeatmanlab/github-learning) is a way for researchers to get hands-on experience with GitHub without the fear of messing up research code or lab materials. Feel free to mess around with it as much as possible, get comfortable with this fake repository, so you are confident in the real repository with real data. 
