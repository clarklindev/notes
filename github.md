# Github + SSH

## Setup SSH Keys with Github

1. generate SSH Key using github email address

You'll be prompted to a couple of times. 
Press enter for the first prompt. 
Choose a passphrase for the second prompt, or press enter twice for no passphrase.

```bash
ssh-keygen -t rsa -b 4096 -C "email@yourdomain.com"
```

2. got to github.com

* log in
* settings -> SSH and GPG keys -> New SSH Key
* give title and paste your PUBLIC key in

# Github 
create new repository

### setup username / email for repository or use global config
remove --global to set up local details for project
```
git config --global user.name "your name"
git config --global user.email "you@example.com"
```

## creating git repo locally and push to and existing empty project on Github

*make sure empty repository is already created on github.com
without -add a README file 
without -add .gitignore


### create a new repository on the command line
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:swagfinger/ssh.git
git push -u origin main
```
### setting up where to upload to
```
git remote add upstream https://github.com/(github account name)/(project name).git
```

### update the upload repository directory
```
git remote set-url origin new.git.url/here
```

### push an existing repository from the command line
```
git remote add origin git@github.com:swagfinger/ssh.git
git branch -M main
git push -u origin main
```
