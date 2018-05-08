This repo is set up to explore how to configure webpack 4 to remove chunks from
a list of bundles from every other bundle.

To work with this repo, clone it and then:

```sh
npm i
npm run build
```

The desired result is for any chunk that appears in `bundles/core.js` or
`bundles/core-b.js` to not appear in any other bundle (and also not be moved to
a separate asset). This is working, but it causes the core bundles to not be
executed.

Opening `index.html` in your browser should log the following to your console:

```
core module
core bundle
core module b
core bundle b
core bundle c
non-core module
non-core b2
non-core module b
```

However, it currently logs this:

```
core module
core module b
non-core module
non-core b2
non-core module b
```

If I remove the `cacheGroups` configuration, I am able to produce the desired
execution, but not the desired bundle shapes.
