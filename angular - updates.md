## http vs httpClient

### Service using http method

- allows us to take response and map to json

<!-- app.module -->

```ts
import { HttpModule } from "@angular/http";
@NgModule({
	imports:[HttpModule]
})
```

<!-- <filename>.service.ts -->

```ts
import "rxjs/add/operator/map";
constructor(private http:Http){}

public getBranches() {
	return this.http.get(this.url).map(res => res.json());
}
```

### service using HttpClient method

- removes the need to convert to .json() as it returns json object

<!-- app.module -->

```ts
import { HttpClientModule } from "@angular/common/http";
@NgModule({
	imports:[HttpClientModule]
})
```

<!-- <filename>.service.ts -->

```ts
import { HttpClient } from '@angular/common/http';

constructor(private http:HttpClient){}

public getBranches() {
	return this.http.get(this.url);
}
```

---
