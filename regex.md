# RegEx

```js
var desired = stringToReplace.replace(/[^\w\s]/gi, '');
```

replacing characters - do this as a whitelist - replace the characters which aren't in your safelist.

- The caret (^) character is the negation of the set [...],
- gi say global and case-insensitive
- the safelist in this example is digits, word characters, underscores (\w) and whitespace (\s)
- to remove whitespace remove \s
