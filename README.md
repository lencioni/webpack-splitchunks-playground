This repo is set up to explore how to configure webpack 4 to remove chunks from
a list of bundles from every other bundle. This is currently not working as
desired.

To work with this repo, clone it and then

```sh
npm i
npm run build
```

The desired result is for any chunk that appears in `bundles/core.js` to not
appear in any other bundle. Once this is solved for a single core bundle, I'd
like to go farther and solve for N global "core" bundles.

[Relevant StackOverflow question](https://stackoverflow.com/questions/49163684/how-to-configure-webpack-4-to-prevent-chunks-from-list-of-entry-points-appearing)
