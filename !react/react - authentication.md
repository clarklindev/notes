# react - Authentication

- traditionally authentication is handled on the server (session on server)

## How authentication work in SPAs

1. SPA sends authentication data to server for validation
2. server sends back a token (session) js object
3. stored in localStorage (persistence), (immune to loss of data on page refreshes) on client
4. pass token along with requests to protected resources on server
5. server receives token to verify authentication

## Required App Adjustments

- signup/sign in view
- protect some routes
- pass token received to backend for requests to protected routes

## Adding the auth form

## Loggin out users

- resetting the token to null and userID to null in auth reducer

## accessing protected resources

- update rules in Firebase

```js
{

    // all need authentication
    "rules":{
        ".read":"auth != null",
        ".write":"auth != null"
    }
    //
    "rules":{
    {
      "ingredients": {
        ".read":"true",
        ".write":"true"
      },
      "orders":{
        ".read":"auth != null",
        ".write":"auth != null"
      }
    }

}
```
