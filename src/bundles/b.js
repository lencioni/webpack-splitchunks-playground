import React from 'react'; // -> core.bundle
import ReactDOM from 'react-dom'; // -> core.bundle
import 'redux'; // -> coreB.bundle
import 'react-motion'; // -> coreB.bundle

import '../core-module'; // -> core.bundle
import '../core-module-b'; // -> coreB.bundle
import '../non-core-module-b'; // -> b.bundle
