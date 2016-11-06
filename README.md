# Offline Verifier 
[![CircleCI](https://circleci.com/gh/codex-media/offline-verifier/tree/master.svg?style=shield)](https://circleci.com/gh/codex-media/offline-verifier/tree/master) [![Join the chat at https://gitter.im/js-stack-from-scratch/Lobby](https://badges.gitter.im/offline-verifier/Lobby.svg)](https://gitter.im/offline-verifier/Lobby)

## Detect and Handle browser connection

## Features

- Handle online and offline events from browser

## For a live demo and short intro, please visit [offline-verifier.github.io](https://codex-media.github.io/offline-verifier/).

## Installing

Using npm:

```bash
$ npm install offline-verifier
```

Using bower:

```bash
$ bower install offline-verifier
```

Using cdn:

```html
<script src="https://unpkg.com/offline-verifier/bundler/offline-verifier.umd.js"></script>
```

## How to use

This module is written using [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html).

```js
import { Verifier } from "offline-verifier";
```

Or import everything into a namespace (`OfflineVerifier`):

```js
import * as OfflineVerifier from "offline-verifier";
var Verifier = OfflineVerifier.verifier;
```

Also you can use the `OfflineVerifier` global object, just load `bundler/offline-verifier.umd.js` file into your html file

```js
var Verifier = window.OfflineVerifier.Verifier;
```

To any case, after import/load the module, use it as follow:

```js
// instance Offline Verifier 
new Verifier({
    // add a listener function executed when internet connection is online
    onOnline: function(){
        // magic goes here
        alert('internet connection has been restablished');
    },
    // add a listener function executed when lost your internet connection
    onOffline: function(){
        alert('you has lost your current internet connection');
    }
}) 
```
## Examples

Take a look at the [`examples`](https://github.com/codex-media/offline-verifier/tree/master/examples) folder.

## documentation

[`documentation`](https://codex-media.github.io/offline-verifier/docs)

## Feedback
There are a lot of features I would like to see in this useful module. You can help to make project better contributing your code or just sending your feedback. If you miss some functionality you are welcome to rise a issue

List of issues/features can be found here (https://github.com/codex-media/offline-verifier/issues). However I personally plan to implement much more useful functions

## Release History

See the [CHANGELOG](CHANGELOG.md).

### TODO:

- [ ] add minified file
- [ ] add differente namespaces
- [ ] finish unit test
- [ ] distinguis between browser and nodejs based server

## Licence

(The MIT License)

Copyright (c) 2013-2016 Codex Media, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
