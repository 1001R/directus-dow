To build and install the module

- Build it
  ```shell
  npm run build
  ```
- Create a new subdirectory `extensions/modules/dow` in your Directus instance
- Copy the contents of directory `dist` to the subdirectory created in the previous step
- Restart Directus. Alternatively, you may set environment variable `EXTENSIONS_AUTO_RELOAD=true` before starting Directus. In this case, you don't need to restart Directus when you rebuild and update the module.