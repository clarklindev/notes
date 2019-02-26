# Angular Firebase

## AngularFire

[https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md]()

[https://alligator.io/angular/cloud-firestore-angularfire/]()

#### install angular

```
npm install @angular/cli
```

#### create a new project

```
ng new <project-name>
cd <project-name>
```

#### test run project

- in browser open http://localhost:4200

```
ng serve
```

### Install AngularFire and Firebase

```
npm install angularfire2 firebase --save
```

### Add Firebase config to environments variable

- Firebase configuration can be found in the [firebase console](https://console.firebase.google.com/)

* From the project overview page,
* 'Add Firebase to your web app'

![](https://github.com/clarklindeveloper/notes/blob/master/assets/firebase/firebase-setup.JPG?raw=true)

- open `/src/environments/environment.ts` and add your Firebase configuration.

```
export const environment = {
  production: false,
  firebase: {
    apiKey: '<your-key>',
    authDomain: '<your-project-authdomain>',
    databaseURL: '<your-database-URL>',
    projectId: '<your-project-id>',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '<your-messaging-sender-id>'
  }
};
```

#### setup @NgModule for the AngularFireModule

- Open /src/app/app.module.ts, inject the Firebase providers, and specify your Firebase configuration.

```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase)
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

### Custom FirebaseApp names

You can optionally provide a custom FirebaseApp name with initializeApp.

```js
imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name')
  ],
```

### Setup the other individual modules @NgModules

add these to the imports

- AngularFireModule
- AngularFirestoreModule
- AngularFireAuthModule
  //- AngularFireDatabaseModule
- AngularFireStorageModule
- AngularFireMessagingModule (Future release)
- environment

#### /src/app/app.module.ts

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule,
		AnuglarFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
		AngularFirestoreModule, // imports firebase/firestore, only needed for database features
		AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
		AngularFireStorageModule // imports firebase/storage only needed for storage features
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

### inject AngularFireStore

#### /src/app/app.component.ts

```js
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	constructor(db: AngularFirestore) {}
}
```

### Bind Firestore collection to a list

#### /src/app/app.component.ts

```js
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent {
	items: Observable<any[]>;
	constructor(db: AngularFirestore) {
		this.items = db.collection('items').valueChanges();
	}
}
```

#### /src/app/app.component.html

```html
<ul>
  <li class="text" *ngFor="let item of items | async">
    {{item.name}}
  </li>
</ul>
```

### run app

\*after running app run localhost:4200 in browser

```
ng serve
```
