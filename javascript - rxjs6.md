# RXJS 6.0

RXJS creation methods, types, schedulers, utilities

## syntax:

```
import {Observable, Observer, Subscription, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs' ;
```

RXJS/Operators

```
import {map, filter, scan } from 'rxjs/operators';
```

Operator renamed

catch() => catchError()  
do() => tap()  
finally() => finalize()  
switch() => switchAll()  
throw() => throwError()  
fromPromise() => from() (this automatically detects the type)

Pipe  
RXJS chaining of operators
Becomes Piping the result of one operator to another

## RXJS5 TO RXJS6

command:

```
rxjs-5-to-6-migrate -p src/tsconfig.app.json
```

## RXJS5

```
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

getEmployees():Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this.\_url).catch(this.errorHandler);
}

errorHandler(error:HttpErrorResponse){
  return Observable.throw(error.message || 'Server Error');
}
```

## RXJS6
```
import {Observable, throwError as observableThrowError} from 'rxjs';  
import {catchError} from 'rxjs/operators'  
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

getEmployees():Observable<IEmployee[]>{  
  return this.http.get<IEmployee[]>(this.\_url).pipe(catchError(this.errorHandler));  
}

errorHandler(error:HttpErrorResponse){  
  return observableThrowError(error.message || 'server error');  
}
​
```