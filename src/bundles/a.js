import '../core-module'; // -> core.bundle
import '../core-module-b'; // -> coreB.bundle
import '../non-core-module'; // -> a.bundle
import(/* webpackChunkName: "FOO" */ '../non-core-module-b'); // -> FOO.bundle
