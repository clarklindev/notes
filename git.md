# Git

[https://help.github.com/articles/set-up-git]()

---

## CONFIGURATION - Git with SSH

generate SSH key in git-bash:

[https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key]()

Git [http://git-scm.com]()

Github [http://github.com]()

## Create ssh key

```
ssh-keygen -t rsa -b 4096 -C "clark.lin@native.co.za"
```

When you're prompted to "Enter a file in which to save the key," press Enter.

SSH KEY: oASaVRBZQTxG0YzF7pQEVDS+zwetlZrrleR4bthd6to

---

## autostart SSH client:

```
eval $(ssh-agent -s)
```

## Add your SSH private key to the ssh-agent.

(drops here: /c/Users/xy40143/.ssh/id_rsa)

```
ssh-add ~/.ssh/id_rsa
```

add SSH key to github account

---

## Auto-launching ssh-agent on Git for windows

Copy the following lines and paste them into your ~/.profile or ~/.bashrc file in Git shell:

---

## 2. Installing Git

### Installation

- install with defaults
- run GIT bash (unix environment) (windows desktop shortcut)
- line endings -> checkout windows style, commit UNIX style

### Configuration

- 3 places GIT stores information
- depends on how widely you want configurations to apply
- configuration settings are stored in the .gitconfig file

1. system level config - configuration applies to every user (program files\Git\etc\gitconfig)

2. user level config - user home directory (documents and settings folder->username->.gitconfig)

3. project-by-project basis config - project folder/.git/config

---

COMMAND:

### listing of files/directories

```
ls -la
```

which git where git is installed

- returns "msysgit" which is the windows version

```
git --version
```

### lists commands for git

```
git help
```

### when reading up on command: f-forward, b-back, q-quit

```
git help <command>
```

system level settings.
program files/git/etc/gitconfig

```
git config --system
```

per-user level settings
documents and settings/.gitconfig

```
git config --global
```

project-level settings
project/.git/config

```
git config
```

### sets username

```
git config --global user.name "Clark.Lin"
```

### sets email

```
git config --global user.email "clark.cookie@gmail.com"
```

### sets default text editor

- to 'notepad.exe' and instructs to wait at line 1

```
git config --global core.editor "notepad.exe -wl1"
```

### use colors when outputting to command line

```
git config --global color.ui true
```

### lists configurations set

```
git config --list
```

### lists contents of file

```
cat .gitconfig
```

---

## 3. Getting started

- goto project folder (right-click choose: 'git bash here')
- then: git init
- git creates a .git folder (hidden) that stores tracking information
- to remove version control, remove .git folder

COMMAND:

```
git init
```

initialize project, get ready for tracking, start tracking changes

### OUR FIRST COMMIT: (tell git to track first change):

COMMAND:

```
git add .
```

- add every change that has been made to
  directory to staging index,
- dot(.) means in this working directory (can also be specific about file)

```
git commit -m "your message"
```

commit change and put in permanent memory

---

Basic cycle

1. make changes
2. add the change
3. commit changes to repository with message (only files added get commited)

### Commit message

- message should describe changes (label what we are doing...descriptive.)

### Best practice

- first short single-line summary (50 characters or less)
- then blank line
- then more complete description (72 chars limit per line)
- write commit messages in present tense (what this commit does)
- can add ticket tracking numbers from bug or support requests
- can develop shorthand message conventions

Viewing commit log

### COMMAND:

```
git help log
```

lists logs made up till now

```
git log
```

each commit has - unique id

- author (thats why user.name & email NB!!)
- date
- message

### limit number of commits (eg. git log –n 2)

```
git log -n
```

lists most recent 2 logs

```
git log -n 2
```

lists most recent 5 logs

```
git log -n 5
```

every commit since date

```
git log --since=2012-06-15
```

commits until this date

```
git log --until=2012-06-14
```

can search part of name

```
git log --author="kevin"
```

searches commit messages with string match

```
git log --grep="Init"
```

---

## 4. Git Concepts and Architecture

- Git uses 3 tree architecture
- tree is the file structure

repository -> checkout to working directory  
working -> commit changes back to repository

### 2 TREE ARCHITECTURE

- working copy makes changes to files then commit to repository
- 2 distinct trees because these files dont have to be the same between them

eg.

- checkout copy from repository,
- make changes, save changes in working copy
- if repository is shared, other may commit their changes to repository
- if i havent checked out a copy recently to get those changes,
  then working copy doesnt have their changes and repositories and working trees wont have same information

### 3 TREE ARCHITECTURE

has -repository

- staging index (add process)
- and working tree

eg.

- files are pulled from repository to working copy
- make some changes to some files files in working copy (eg. 10 files)
- but allows committing to only a subset of the files(eg. 5 of these files) as a change set
- by only adding these 5 files to the staging index
- commit the 5 files in one change set, the other 5 files are still saved in working tree
- commit only files one wants to as one changed set by putting on staging index then commit

### GIT WORKFLOW

- 3 trees(repository,stagin,working),
- file.txt added to working directory

### COMMAND:

pushes set of changes up to staging index

```
git add file.txt
```

Git Commit pushes changes to repository, tracked, has commit message about change

```
git commit -m "message"
```

### HOW GIT REFERES TO COMMITS (SNAPSHOT OF CHANGES)

- by hash values (SHA-1)
- when changes are submitted, GIT generates a checksum to the repository for each change set
- checksum is a number that is generated by taking data and feeding it into an algorithm into a simple number
- same data put into algorithm always equals same checksum coming out
  (changing data going in results in a different checksum)
- GIT uses checksums for data integrity
- GIT uses SHA-1 hash algorithm to create checksums( 40 character hexadecimal string (0-9,a-f))
- it is the same ID GIT uses to track commit
- parent refers to the previous checksum value

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_00.jpg?raw=true)

### THE HEAD POINTER

- Git maintains a reference variable called HEAD (a pointer),
- Purpose is to reference (point-to) a specific commit in the repository
- New commits make the pointer point to the new commit
- HEAD points to ‘tip’ of current branch in repository (ie. HEAD points to the most recent commit of the current branch)
  - ie. Last state of repository / what was last checked out
  - Ie. Head points to parent of next commit (think playback and record head of tape recorder)
    (Points at place where we are going to start recording next, place where we left off in our repository for the things that we’ve commited)

Truncated checksum...

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_01.jpg?raw=true)

After 3 commits head points to a614b5 (tip of the current branch in our repository)

By default, the branch we working on is the MASTER branch (main branch):

HEAD points to master branch current commit (tip)

Eg. 5c15e8 as first commit, at this point HEAD pointer points to the current commit

When we make a new commit, it says, the parent is going to be 5c15e8, and puts in that new commit

### HEAD moves with new commits

Git allows branching - with first commit, HEAD moves to that commit

If we switch branches and checkout master branch,head moves there

HEAD always points to the tip of the currently checked out branch from the repository

In .GIT directory, file called HEAD. Looking inside, get tells us what HEAD is currently pointing to,

It points to a branch eg. Refs/heads/master (folder)
Looking into master,

### COMMAND:

show the checksum of the latest commit

```
cat master
```

---

## 5. Making changes to files (core actions - make up about 75% of what we will do when using GIT)

### STATUS

reports back difference between working directory, staging index, and the repository

#### COMMAND:

```
git status
```

---

### ADDING FILES

Adding new files to working directory, GIT knows new files exist, but does NOT track
Adding to staging tracks text edits

#### COMMAND:

```
git add second_file.txt eg. adds file second_file.txt to staging
```

---

### COMMIT

Once commiting, GIT does not report those changes anymore, only reports differences between working folder and repository

#### COMMAND:

```
git commit -m "add second file to project" files in staging gets commited
```

---

### EDITING FILES

Git knows of files modified in the working folder
Same process as adding then committing

### VIEWING THE CHANGES IN WORKING DIRECTORY

In unix, program called D-I-F-F to compare files
Git uses diff term

--- old version (red) (repository)
+++ new changes (green) (working directory)

#### COMMAND:

```
git diff
```

to compare differences in repository (HEAD) with our working directory (actually comparing things are are unique/different about working directory only)

In git, it shows just modification changes on line by line bases.

see CHANGES in its place with COLOR

```
git diff --color-words contact.html
```

SEE "ALL CONTENT" DIFFERENCES for ALL files between REPOSITORY (HEAD) and WORKING directory

```
git diff
```

see "ALL CONTENT" DIFFERENCES for a SPECIFIC file between REPOSITORY (HEAD) and WORKING directory

```
git diff filename
```

see "ALL CONTENT" DIFFERENCES for ALL files between REPOSITORY (HEAD) and STAGING directory

```
git diff --staged
```

Can also check change by file-by-file basis
COMMAND:

```
git diff first_file.txt
```

#### VIEW THE CHANGES IN STAGING INDEX

Look at what is in the staging index and compare that to the repository

### COMMAND:

```
git diff --staged
```

### DELETING FILES

- Aim to delete files (from repository) and track deletions using GIT
- deleteing UNTRACKED files wont affect anything, we are talking about deleting from REPOSITORY
- Once files are in repository, there are 2 ways to delete them:

### 1. Move file out of working directory (eg. into recycle bin)

#### COMMAND:

```
git status          //shows as “deleted”
```

```
git add file_to_delete1.txt
```

use rm to update on staging

```
git rm file_to_delete1.txt
```

remove from repository

```
git commit -m "deleted first file"
```

### 2. Get GIT to do delete for us, and add it to staging directory at the same time (BEST METHOD)

#### COMMAND:

```
git rm file_to_delete2.txt
```

lets GIT remove (uses UNIX delete) AND adds to staging

```
git commit -m "deleted second file"
```

### MOVING & RENAMING FILES

Git sees moving and renaming as same thing

#### RENAMING

2 ways:

1. manually do renaming of changes on computer rename first.txt to primary_file.txt then tell GIT to stage those changes GIT sees a rename as - a file deleted AND a new file was created To put in staging, need to

COMMAND:

```
git add primary_file.txt
git rm first_file.txt
//then commit changes
```

```
git status //now GIT sees it was renamed
```

2. (BETTER METHOD)
   Do it from GIT and let GIT handle working in OS for us

   In GIT, a rename and a move are the same thing (like in UNIX)

#### COMMAND:

```
git mv second_file.txt secondary_file.txt
```

same as a rename (git does rename for us) & adds to staging index

```
git commit -m "commit message"
```

```
git status
```

### MOVING

```
git mv third_file.txt first_directory/third_file.txt
```

we created a first_directory directory and moved file

```
git status
```

git sees as a rename

---

## 6. USING GIT WITH A REAL PROJECT

Switch to the project directory

COMMAND:

```
git status
```

at this stage, git will tell us this folder(or parents) is not git repository

```
git init
```

creates .git folder

```
git log
```

at this stage, head isnt pointing anywhere useful yet (until commit)

```
git add .
```

add current directory

```
git commit -m "initial commit"
```

```
git log
```

shows initial commit SHA-1 hashtag

//EDITING SUPPORT NUMBER, replace-search string 4315 with 4314 using

COMMAND:

```
git diff contact.html
```

lists differences of the changes made under each other
(shows pages of results)

- Minus symbol(-) is old
- Plus symbol(+) is new
- (Minus key) + (Shift+S) + (return) to wrap results  
  Or use
- -S also wraps results

@@ -71, 7 @@ //starting at line 71, 7 lines

(disregarding the old copy minus section)

```
git diff --color-words contact.html
```

puts change side-by-side with color

```
git commit -am "your message"
```

telling git to add to staging index and commit

- all in one move
- This grabs everything in working directory
- Files not tracked/files getting deleted do not get included in this
- works well for modifications but not for new or deleted files
- m for message

### EDITING BACKPACK FILE NAME AND LINKS

Renaming the file:  
Changing tour_detail_backpack.html  
to  
tour_detail_backpack_cal.html

COMMAND:

```
git mv tours/tour_detail_backpack.html tours/tour_detail_backpack_cal.html
```

Searching through project search and replace all backpack.html text with backpack_cal.html

```
Modified: tours.html
Modified: tours/tour_detail_backpack_cal.html
Modified: tours/tour_detail_bigsur.html
```

Then we are ready to add to staging and commit...

COMMAND:

```
git add tours.html
```

add tours.html to staging

```
git add tours/\*
```

add all in tours/ folder

Say client calls and tells you to make changes in contact.html

- Best solution would be to deal with it as a separate commit as it is about something different and we want to try make our commits related to each other (single conceptual change)

---

## 7. UNDOING CHANGES

Undoing changes in GIT (working directory/stagging/commits)

### UNDOING CHANGES IN WORKING DIRECTORY

Eg. Deleting text in file, save, then close

COMMAND:

```
git status
```

shows file has been modified

```
git diff
```

shows all the text that has been removed (all the minuses)

- telling GIT to get the repository version, and checkout and replace whats in working directory
- Git checkout - has dual purpose, also used for working with branches (which take priority)
- What GIT does is it gets instructed to go to repository, get ‘named thing’ that i gave you, and make my working directory look like that
- When not checking out a branch, its good practice to use git checkout --filename

(-- means stay on the same branch)

#### COMMAND:

```
git checkout branchname
```

checkout a branch to make working directory look like repository

```
git checkout —somethingToGet
```

goes to repository and go get the named (file) thing i gave you, means stay on branch

eg.

```
git checkout --index.html
```

revert to file in repository (make my working directory look like repository index.html)

UNDOING CHANGES IN STAGING INDEX - RESET

- Use when you’re trying to put together a commit, and you accidentally add a file to staging area.
- unstage file saying look at HEAD pointer (HEAD points to last commit of the tip of the current branch on REMOTE repository),
  and reset yourself to be same as what that has)
  M in result from git status means modification
  git reset HEAD `<file>`

#### COMMAND:

```
git reset HEAD resources.html
```

### AMMEND CHANGES TO COMMITS (REPOSITORY)

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_02.jpg?raw=true)

We can only change most recent commit (snapshot C) since it has no reference to it
Can ammend files in staging to the most recent commit can also use same syntax for just changing a message.

COMMAND:

```
git commit --ammend -m "message"
```

edits very last commit

### RETRIEVE OLD VERSIONS OF A FILE FROM EARLIER COMMIT

- To make changes to older commits, best advice is to make new commits

(commits that undo what was done in those older commits)

- This maintains data integrity and the log file will accurately reflects the changes that were made over time
- In order to make new commits that undo changes to current files we can check our log and view previous versions of commit.
- By using a commit hash (SHA-1), we can retrieve a version of specific files
- Say we have done a couple of commits since an commit (C), we can get a copy of the file before the change was made retrieving file from an earlier commit eg. (A) by copying the SHA
- When you checkout from particular revision, GIT puts it into staging area ready for commit
- To commit, good idea to use SHA as message details (from which SHA)

COMMAND:

```
git checkout SHA_ID -- file_i_want
```

we can use the SHA commit id of the file we want

```
git checkout 2097d12603a34 -- resources.html
```

this reverts the file and adds to staging area . 2097d12603a34 is portion of the hash ref.

### REVERTING A COMMIT

when you made a change from A to B, and then switch it back from B to A (for something more complex we use merging technique)

undoing the changes for a specfic commit (d435j2dkjv345345dn) completely and totally to previous commit..anything added to a commit will be deleted, anything deleted will be added again, anything modified will be changed back to its previous state.

```
git revert SHA-value
```

eg. git revert d435j2dkjv345345dn

git makes the commit directly, git also asks if you want to change theAa commit message of (d435j2dkjv345345dn)

if you do not want to make the commit directly but rather let git put it in staging first use -in

```
git revert -in d435j2dkjv345345dn
```

- Undoing changes for a commit completely and creates a new commit
- Revert command takes all the changes that were there and it will flip them around (do exact opposite of those changes) back to previous state (deleted items added, added items deleted, anything modified will be changed back to previous state)
- For simple change use revert command, for complex change use merge command

#### COMMAND:

```
git revert da38660bbcd206a9aaa4
```

Allows editing commit message

Can have -in option which will put it in staging and not commit, waits for you to do your own commit

### USING RESET TO UNDO COMMITS

- Allows undoing multiple commits
- git reset allows us to specify where the HEAD pointer should point to
- rewind to a specific commit and continue writing from there
- You need to know your commit hash from the commit you want to revert to.
  You can get it from a GitHub URL like: [https://github.com/your-organization/your-project/commits/master]()

#### COMMAND:

```
git reset (option)
```

rewinds and moves HEAD to a point and discards other commits

3 types of reset options

#### --soft

basically revert repository
-ie. moves HEAD pointer and does nothing else (staging and working directory will contain the files in their later revised state, REPO - will be reverted back to an earlier version)

#### --mixed

(default) moves HEAD pointer to specified commit, REPOSITORY = STAGING (changes staging to match repository).

- working directory keeps changes we have made

#### --hard

- moves HEAD pointer in repository,
- REPOSITORY = STAGING = WORKING Dir
- Reset everything back to point in time.
  once we rewind HEAD, the log wont show the later SHA's anymore, so it is a good idea to make a copy of the SHAs
- Can still restore to a removed commit if we noted the commit SHA’s

#### COMMAND:

BASH:

```
git reset HEAD^1
```

DOS:

```
git reset HEAD~1
```

### SOFT RESET DEMO

```
git reset --soft da38660bbcd206
```

staging and working directory will have files in most recent state

### MIXED RESET DEMO

```
git reset --mixed da38660bbcd206
```

rolls back to a commit (changes ONLY in working directory, need to still add to staging)

### HARD REST DEMO

```
git reset --hard da38660bbcd206
```

makes staging and working directory same as repository

```
git push —force
```

```
git push --force <remote> <the-hash>:<the remote branch>
```

```
git push --force origin 606fdfaa33af1844c86f4267a136d4666e576cdc:master
```

```
git push -f origin v2/master:v2/master
```

### REMOVING UNTRACKED FILES FROM WORKING DIRECTORY

Eg useful for removing things like log files etc that you dont want in repository and you also want to remove from working directory too

```
git clean -n
```

a test run on what would be removed

```
git clean -f
```

FORCES a run and removes loose files (but from working directory only)

---

## 8. IGNORING FILES

Configure GIT to recognise which files to ignore in the project

Should include with project (commit .gitignor with project)

Create file:

project/.gitignore Create a special file in root of our project (no extension)

Rules

- List of files, one for each line
- Basic regular expressions

- ? [aeiou][0-9]

- Negate expressions with !

- \*.php asterisk wildcard for one or more characters ending in .php will get ignored,

- !index.php do not ignore index.php (NOT ignore ie will get tracked)

- Ignore all files in a directory with trailing slash/ eg. assets/videos/
- Making comments with #

UNDERSTANDING WHAT TO IGNORE

[https://help.github.com/articles/ignoring-files]()  
look at the good rules section

[https://github.com/github/gitignore]()  
lists all the different ignore files for a specific language

- Compiled source code
- Packages and compressed files (not used in project)
- Logs and databases (often changing files)
- O/S generated files
- End user-uploaded assets (images, PDF’s, videos)

### IGNORING FILES GLOBALLY

- Ignoring files in all repositories
- Settings n-ot tracked in repository
- Ignores become user specific as part of git configuration not project configuration
- git config --global core.excludesfile (tell where file is)

We can call this file what ever we want

#### COMMAND:

```
git config --global core.excludesfile ~/.gitignore_global
```

~ is the user directory for UNIX

```
git config --global core.excludesfile /Users/clarklin/.gitignore_global
```

windows absolute path

### REMOVE FROM STAGING

```
git rm --cached _._
```

```
git rm --cached "first file.txt"
```

### IGNORING TRACKED FILES

- Tell git to ignore some files after it is already being tracked AND remove from staging.

Git will not ignore a file it already started tracking before a rule was added to gitignore a file

To fix - this file must be untracked

Add the file to .gitignore (at this stage git still keeps track of tracked file. To prove this, editing working directory file of tempfile2.txt still shows it was modified on git status)

#### COMMAND:

```
git rm tempfile2.txt
```

removes from repository AND from working dir to stop tracking

OR

If we want to leave in repository, and working folder but not track changes,

```
git rm --cached tempfile2.txt
```

removes file ONLY from staging index and stop being tracked

### TRACKING EMPTY DIRECTORIES

Git DOES NOT track empty directories (GIT tracks files and tracks the directories to get to those files)

To track an empty directory, put small file inside (by convention .gitkeep)

Commit folder

#### COMMAND:

```
git add assets/pdfs/
```

---

## 9. NAVIGATING THE COMMIT TREE

Navigating the repositories commit tree

Referencing commits in GIT

Tree - structure of files in repository

Treeish - something that references part of the tree

- treeish is a reference to a commit because that commit references the tree
  (the GIT repository and all the files that are in there at that point)
- see it as something that points at a commit

### HOW CAN WE POINT AT A COMMIT?

- full SHA-1 hash (the full 40 characters)
- Short SHA-1 hash (atleast 4 chars and unambiguous 8-10chars)
- Using HEAD pointer (points to commit at the tip of currently checked out branch)
- Branch reference (tip of the branch \*doesnt have to be the checked out branch)
- Ancestry (using any of the above methods and referring to that objects ancestry

Eg. If we want parent commit

- we first provide the reference for what we want to focus on, and then we say, find its parent

- Using tilda ~ followed up number of generations to go up

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_03.jpg?raw=true)

### EXPLORING TREE LISTINGS

```
git ls-tree <tree-ish>

//lists files inside directory
git ls-tree <tree-ish> <directory>
```

Tree is a directory (we can take its hash value and look inside)

#### COMMAND:

```
git ls-tree HEAD
```

HEAD points to tip of currently checked out branch,

returns list of files in repository at that point

```
git ls-tree master
```

```
git ls-tree master^ assets/
```

lists git directory one commit back

```
git ls-tree 6w44394823048320s
```

points inside the tree with SHA value 6w44394823048320s

### HOW TO GET MORE FROM GIT COMMIT LOG

#### COMMAND:

```
git log --oneline -5
```

shows log on one line per commit, -5 shows last 5 commits

```
git log --since="2012-06-20"
git log --after="2012-06-20"
```

```
git log --until="2012-06-20"
git log --before="2012-06-20"
```

```
git log --since="2 weeks ago" --until="3 days ago"
git log --since=2.weeks --until=3.days
```

```
git log --author="" search by author
git log --grep ="" search by topic
```

```
git log 2907d12..acff87d
```

search a range between commit SHA hashes

Working on a particular file and you want to go back in history and see logs
COMMAND:

```
git log 43fdsf34.. Index.html
```

shows every log change to that file from a specific SHA hash

```
git log -p
```

patch option - shows diff of what has changed in each

```
git log -p 43fdsf34.. Index.html
```

```
git log --stat --summary
```

tells statistics about each. Gives idea about quantity of changes

```
git log --format=oneline
```

gives full SHA instead of partial SHA

```
git log --format=short
```

```
git log --format=medium
```

default

```
git log --format=full
```

more detail

```
git log --format=fuller
```

even more detail

```
git log --format=email
```

in email format

```
git log --format=raw
```

```
git log --graph
```

shows graph of every commit, if we have branches, with branching and merging, then this shows it well

```
git log --oneline --graph --all --decorate
```

### VIEWING COMMITS (specific)

git show <SHA hash> Showing diff of changes before and after
COMMAND:
git show sxf893392 shows the change of specific commit
git show --format=oneline HEAD^^

### COMPARING COMMITS

Comparing 2 different commits

- We are not comparing the commit snapshot (not just changes)
- We are comparing the directory that that commit references, the actual state of all the files in the repository at that point in time (so when comparing commits, we are comparing two directories and seeing what has changed between those directories
- Can compare commits over time (eg. between a week) or two branches.

#### COMMAND:

```
git diff cdae0ed
```

shows all the different things that have changed

(including renaming files) of the directory at that point in time vs. The current working directory

```
git diff cdae0ed tours.html
```

comparison between this previous point in time and working directory now.

Can compare 2 tree-ishs (as apposed to comparing to working directory using a range..)

#### COMMAND:

```
git diff cf78db8..cdae0ed
```

```
git diff cf78db8..cdae0ed tours.html
```

tells us what has changed between these commits in tours file

---

```
git diff cf78db8..HEAD
```

comparing to head

---

```
git diff cf78db8..HEAD^^
```

comparing to head parent parent

---

```
git diff --stat --summary 155efdfd..HEAD
```

shows summary of what has changed, and list of how many things changed

---

```
git diff -b 155efdfd..HEAD
git diff --ignore-space-change 155efdfd..HEAD
```

ignores changes to whitespace

---

```
git diff -w 155efdfd..HEAD
git diff --ignore-all-space 155efdfd..HEAD
```

ignores ALL whitespace

---

## 10. BRANCHING

- Allows you to try new ideas by branching
- Unsuccessful ideas(branch) can be thrown away
- Successful ideas can be folded back (merging)
- Allows isolating features or sections of work (for collaborating) and later merge back into master branch
- Still only ONE working directory
- fast context switching on branch change, takes all those files/folders in working directory and make them match the branch (continues on from new branch)
- Switching back to master branch, those changes from branch disappear (can switch back-and-forth)

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_04.jpg?raw=true)

**HEAD**
always moves and points to the last commit (tip of current branch)

Only once new commit has been made to revise navigation branch does HEAD move there

When ready to merge back in, a merge commit is made and HEAD moves there

---

### BRANCHING

#### COMMAND:

```
git branch
```

list all branches on local pc. \* denotes current branch

```
cat .git/HEAD
```

reference for head pointer in .git folder (ref:refs/heads/master)

inside is a reference to a branch

```
ls -la .git/refs/heads
```

all branches listed. new branches are added here..

```
cat .git/refs/heads/master
```

contains SHA points to a commit that is the tip of the current branch

---

### CREATING A NEW BRANCH

git branch `<name of branch>` no spaces, no punctuation, ONLY letters, numbers, and underscores

#### COMMAND:

```
git branch new_feature
```

at this point HEAD still points to Master’s tip

```
cat .git/refs/heads/new_feature
```

still points to same commit in master...  
only changes once commit in new branch is made

---

### SWITCHING BRANCHES

```
git checkout `<name of branch>`
```

changes branches

#### COMMAND:

```
git checkout new_feature
```

changes branch

```
cat .git/HEAD
```

ref: refs/heads/new_feature (now points to new_feature branch)

tips still identical as no changes have been made

Once a branch has changed, by modifying a file, and committing, we can see the difference between 2 branches

---

### CREATE A BRANCH AND SWITCH BRANCH

depending on which branch we are on, the new branch is replicated off that branch

#### COMMAND:

```
git checkout -b shorten_title
```

-b means create AND switch to new branch (shorten_title) at same time
(put this stuff in my working directory as a new branch)

```
git log --graph --oneline --decorate --all
```

gives different commits with tips of each branch

---

### SWITCHING BRANCHES WITH UNCOMMITED CHANGES

working directory needs to be mostly clean to make a switch (changes need to be saved)

‘mostly clean’ because it just has to be clean enough that there are no conflicts (we cant have anything that will cause us to lose data when making a switch) - if we have a new file with no conflicts. switching branches is fine.

3 options:

- scrapping changes by checkout file again
- commit changes to current branch
- can stash the changes (like a little pocket saved for later)

### COMPARING BRANCHES

```
git diff <names of branches>
```

```
git diff (old state) .. (new state)
```

#### COMMAND:

```
git diff master..new_feature
```

compares differences with tips of master and new_feature

```
git diff --color-words new_feature..shorten_title
```

shows same diff but all in one line

```
git diff --color-words new_feature..shorten_title^
```

comparing to shorten_title previous commit HEAD

### FIND OUT WHETHER A BRANCH CONTAINS EVERYTHING IN ANOTHER BRANCH

(whether it has been merged into another branch)

- it goes back up the ancestor chain and sees if \* it has the tip of the other branch in it,
  if it does, then it has all its ancestors

#### COMMAND:

```
git branch --merged
```

shows all branches that are completed included in this branch

---

### RENAMING BRANCHES

#### COMMAND:

```
git branch -m new_feature seo_title
```

renaming from new_feature to seo_title

---

### DELETING BRANCHES

```
git branch -d <name of branch to delete>
```

```
git branch --delete <name of branch to delete>
```

- cannot delete current branch, must switch branches to delete branch
- if we switch branches and delete a branch (but there is content in there not in current branch, tells us to use capital -D)

#### COMMAND:

```
git branch -d branch_to_delete //deletes branch
```

HEAD  
master  
origin/master  
origin/feature  
origin/HEAD  
origin/develop

### CONFIGURING THE COMMAND PROMPT TO SHOW THE BRANCH (GIT BASH)

changing so prompt always shows branch name (safety measure)

on windows:

GIT installs git-completion script

GIT installs command line prompt
and set prompt

### TO SET COMMAND PROMPT OURSELVES

#### COMMAND:

```
echo $PS1 //shows current prompt
```

open notepad.exe save as .bash_profile (no extension, save in same location as .gitconfig):

#### COMMAND:

```
export PS1='\W$(\_\_git_ps1 “(%s)”) > '
```

to run this file, type:

```
source ~/.bash_profile
```

---

## 11. MERGING BRANCHES

## 12. STASHING CHANGES

### Git SQUASHING commits

```
git rebase -i [COMMIT ID THE NUMBER OF COMMITS BACK TO REFERENCE]
```

then pick or squash

squash merges the commit with the previous commit that is 'left' as pick

```
git push -f
```

```
git rebase --abort
```

---

## 13. REMOTES

USING LOCAL AND REMOTE REPOSITORIES

- remote server hosts our repositories allowing collaboration
- ‘push’ changes up to remote server
- ‘fetch’ changes from remote server
- ‘origin/master’ branch is a branch on our local machine that tries to keep up with remote server branch
  (pointer moves with updates on remote server)
- git uses pointers

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_05.jpg?raw=true)

- HEAD pointer for master that points to the third commit (f36de)
- when we do a push and push it through remote server, it creates the commits there (f36de) and moves the HEAD pointer for master to the third commit
- and adds a pointer origin/master pointer to point to the same commit (f36de) on our local computer.

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_06.jpg?raw=true)

- then when we do a new commit (c69ba), it moves our master pointer to the commit,
- when we do a push, it creates that new object(c69ba) on the remote server and moves the pointer, and also increments origin/master.
- when a new change(923ea) occurs on remote server, it moves master pointer to point to that latest commit,
- when we do a fetch, computer fetches update to our computer(923ea) and origin/master points to it while master tip still points to where it was (c69ba).
- a merge is required to bring origin/master into master branch, where it would move master pointer to point to the latest commit(923ea).

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_07.jpg?raw=true)

- It is possible for someone to make a commit on the remote server while we’re in the process of making a commit on our local machine
- my new commit (ba8ce) makes our two branches diverged, we need to do a merge to bring them back together.
- next time we do a push, our master changes will be merged in and sent off to the remote server.

### PROCESS WHEN WORKING WITH A REMOTE

- do commits locally
- fetch latest from remote server (get origin branch in sync)
- merge any new work into what just came down from server
- push results back up to the remote server

### SETTING UP GITHUB ACCOUNT

- http://github.com
- github offers charts and graphs
- create an account (free public account)
- In order to connect to repository we need to create it
- after creation, gives 2 sets of helpful instructions.

steps to:

1. create a new respository on the command line
2. push an existing repository from the command line

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_08.jpg?raw=true)

### ADDING A REMOTE REPOSITORY (CREATING CONNECTION)

- we need to tell our local repository where to find the remote github repository
  git remote add `<alias> <remote url>`

//alias is github suggested, remote url github will give this

make sure it has personal github url

#### COMMAND:

```
git remote
```

gives list of remotes GIT knows about

```
git remote add origin https://github.com/clarklin/explore_california.git
```

```
git remote -v
```

shows url for fetching and pushing

### REMOVING A REMOTE

```
git remove rm <alias>
```

#### COMMAND:

```
git remove rm origin //removes from .git/config file
```

### CREATING A REMOTE BRANCH

- puts local code on remote repository

```
git push -u <alias> <branch>
```

-u sets up to track remote branch master from origin

#### COMMAND:

```
git push -u origin master pushing up master branch
```

```
git branch -r //shows remote branches
```

```
git branch -a //shows both local and remote branches
```

### CLONING A REMOTE REPOSITORY

- working with a repository someone else has made (fetching from remote repository)
- get path to repository string url
- git clone `<remote repository url>` makes a local clone
- git clone http://github.com/...git `<new repository name>`  
  creates a new directory `<new repository name>`
- gets files/folders from github to local repository
- dont have all branches since only push up to repository the master branch
- can specify the -b option and tell it which branch you want a different one, by default it will take whatever github has as its default branch
- we can control which branch is default in github admin controls

### TRACKING REMOTE BRANCHES

- tracking - local branch to stay closely in sync to remote repository
- regularly pull updates from repository and merge into local branch
- calling git push -u says push up, but make a note of this because we will be working with this branch frequently
  \*without -u option, it doe not track any remote branch, it just pushes it up
- calling git clone DOES DO TRACKING

Example of a tracking branch by calling

#### COMMAND:

```
cat.git/config
```

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_09.jpg?raw=true)

to make a branch tracking (3 choices)

1. edit: git/config by adding code to track

```
   [branch "master"]
   remote = origin
   merge = refs/heads/master
```

2. calling
   git config branch.`<name of branch>`.remote `<name of remote>`

   git config branch.`<name of branch>`.merge `<name of remote>`

#### COMMAND:

```
git config branch.non_tracking.remote origin
```

```
git config branch.non_tracking.merge refs/heads/master
```

3. (using git 1.7 and above)

```
   git branch --set-upstream <branch> <branch to track>
```

```
   git branch -u <branch> <branch to track>
```

#### COMMAND:

```
git branch -u non_tracking origin/non-tracking
```

### PUSHING CHANGES TO A REMOTE REPOSITORY

- make a change (local)
- commit change (local)
- push

#### COMMAND:

```
git push origin master
```

or

if tracking branch

```
git push
```

git push because it knows we are tacking the branch so assumes we want to go to that tracking branch

### FETCHING CHANGES FROM A REMOTE REPOSITORY

- a fetch is what synchronizes origin/master with whatever is on the remote repository
- origin/master doesnt automatically reflect remote repository
- we tell git to do a sync between the two
  git fetch `<name of what we want to fetch>`

#### COMMAND:

```
git log --oneline -5 origin/master
```

look at local copy of origin/master from last sync

```
git fetch origin
```

calling git fetch does pull down from Github (internet required)

- now origin/master is in sync with remote repository
- gets any git objects we dont have like branches
- pulls down bookmarks that reference the tips of each of the branches that are on the remote
  master is not affected as it remains unchanged
  to get these changes from origin/master, we do a merge

### Guidelines

- fetch before you work
- fetch before you push
- fetch often

### MERGING IN FETCHED CHANGES

git is in charge of origin/master (mirroring what is on remote repository)

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_10.jpg?raw=true)

our master branch is two commits behind,so it needs to add those 2 commits

### MERGING (BUT HAVE DONE ADDITIONAL COMMITS ON THE MASTER BRANCH)

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_11.jpg?raw=true)

- ba8ce commit needs to be merged in local version(origin/master), a merge commit will join these together
- possible that 9323ea commit in origin/master has conflicts with ba8ce
- first fetch origin (getting most up-to-date files in origin/master)
- resolve conflicts
- merge commit

#### COMMAND:

```
git merge origin/master
```

### DOING BOTH GIT FETCH AND GIT MERGE TOGETHER AT ONCE

git pull = git fetch + git merge

#### COMMAND:

```
git pull
```

### CHECKING OUT REMOTE BRANCHES (SWITCHING BRANCHES)

- remote branches are exactly like regular branches except we cannot check them out
- but since it is like any other branch, we can create a branch from it and we can then work with it
- to get these repository branches, we create a branch from it

git branch `<new branch name> <where new branch to come from? source starting point of branch>`

#### COMMAND:

```
git branch non_tracking origin/non_tracking
```

non_tracking branch set up to track remote branch

```
git checkout -b non_tracking origin/non-tracking
```

checking out as a new branch

### PUSHING TO AN UPDATED REMOTE BRANCH

eg. trying to push to an remote server that has been updated

![](https://github.com/clarklindeveloper/notes/blob/master/assets/git/Pasted_Graphic_12.jpg?raw=true)

- GIT never tries to do merge in a push
- GIT tells us theres new stuff on remote server (not sure to do about this),
- you need to fetch changes, sort it out, then try again
- git merge origin/master (merges my changes with origin master and create a new merge commit)
- then push again

### DELETING A REMOTE BRANCH

telling github to erase one of the branches in its repo

2 ways to do this:

- old method git push `<to remote> :<push contents up to server>`

COMMAND:

```
git push origin :non_tracking
```

use colon: to denote remove

- newer method

#### COMMAND:

```
git push origin --delete non_tracking
```

### ENABLE COLLABORATION

- goto project homepage on github
- click on admin
- left tab collaborators
- enter username of people collaborating on repository to add them to project (read/write access)

* on open source projects, all allowed to read, but limited to write to the repository
  to contribute, we fork the project (decide on changes and make sure someone else is not already working on these changes, then post an issue to stake out territory)
* then make a fork of the project (forking makes own version of project (with write access))
* make changes then when done, go back to main project page and make pull request
* a pull request is like raising your hand and telling them you have some feature
* you submit a message with your request
  maybe considered for incorporation into project for merge-in

---
