// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-projects__taging';
import { getTestBed } from '@angular/core/projects__taging';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/projects__taging';

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular projects__taging environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the projects__tags.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
