# Npm

## login

```shell
npm login
```

## create package

-For an organization-scoped package, replace my-org with the name of your organization

```
npm init --scope=@my-org
```

npm organization packages are scoped and private by default
to publish as public

```shell
npm publish --access=public
```

# the correct order

## 1. auto version incrementing
- npm version patch

## 2. publish the package
- npm publish
