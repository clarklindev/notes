# firebase

- install firebase-tools
- firebase login
- firebase init
  - choose Functions: Configure and deploy Cloud Functions
- firebase deploy
- install google-cloud/storage
  - navigate to functions folder/
  - enable storage to the cloud bucket (folder)
- import into index.js with const {Storage} = require('@google-cloud/storage');
  - https://cloud.google.com/storage/docs/uploading-objects

<!-- imagemagic image manipulation package-->

- npm install --save child-process-promise;
- imagemagic is pre-installed on the env the cloud functions run in
- use package that allows us to run tools (binaries) that are installed on the server the cloud function runs in
- require('child-process-promise').spawn;

```
<!-- install -->
npm install -g firebase-tools

<!-- login -->
firebase login

<!-- init -->
firebase init

<!-- deploy -->
firebase deploy

<!-- google-cloud/storage -->
<!-- navigate to functions folder -->
npm install --save @google-cloud/storage

<!-- import into index.js -->
const {Storage} = require('@google-cloud/storage');

<!-- spawn -->
<!-- in functions folder -->
npm install --save child-process-promise
```
