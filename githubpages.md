## learning to use github / github pages to host your repository as a test link

* from the command line
```
ng build --prod --output-path docs
```
* this command creates a docs folder in the local repository
* from the project repository on github, go to settings
* under GitHub Pages section, choose source
* you want to select 'master branch / docs folder'
* make sure index.html base href points to this <base href="."/>
* call ng build generates new files in the docs folder

## non angular git repositories

* create a docs folder and put all files that belong in the test link inside
* settings 'GitHub Pages' -> set source to 'master branch / docs folder' 
* get the link from github `https://<githubaccount>.github.io/<projectfolder>/index.html`