# cookies

### Setting a cookie:

- To set a cookie, you can use the document.cookie property. The type of this property is string, so you don't need any specific TypeScript declarations for it.

```ts
function setCookie(name: string, value: string, daysToExpire: number) {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + daysToExpire * 24 * 60 * 60 * 1000
  );

  const cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookie;
}
```

```ts
// Example usage:
setCookie('username', 'John Doe', 7); // Sets a cookie named "username" with the value "John Doe" that expires in 7 days.
```

### Getting a cookie:

To retrieve a cookie's value, you can use the document.cookie property and parse the value from the string. Again, TypeScript doesn't require specific declarations for this.

```ts
function getCookie(name: string): string | null {
  const cookieValue = document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(name + '='));

  return cookieValue ? decodeURIComponent(cookieValue.split('=')[1]) : null;
}
```

```ts
// Example usage:
const username = getCookie('username');
console.log(username); // Output: "John Doe" or null if the cookie doesn't exist or has expired.
```

## Deleting a cookie:

- To delete a cookie, you can set its expiration date to a past date, which effectively removes it from the browser.

```ts
function deleteCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Example usage:
deleteCookie('username'); // Deletes the "username" cookie.
```

Remember that the document.cookie property returns all cookies as a single string, where cookies are separated by semicolons and spaces. You need to split and parse this string to access individual cookies.

While TypeScript can provide type safety for your code, it won't inherently protect you from security-related issues like XSS attacks. Ensure that you sanitize and validate any data before setting it as a cookie, and be cautious about storing sensitive information in cookies.
