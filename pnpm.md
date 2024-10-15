powershell: 

```
iwr https://get.pnpm.io/install.ps1 -useb | iex
```





### npm to pnpm 
- if the project uses npm and locked in package versions, the project folder comes with `package-lock.json`
- using pnpm will not "save" the package version, you can convert from npm to pnpm's `pnpm-lock.yaml` lock format

```
pnpm import
```