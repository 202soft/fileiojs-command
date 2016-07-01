# fileio-command.js

Builld cli tools for your own most powerfull file manager.

![Npm Version](https://img.shields.io/npm/v/fileiojs-command.svg)
![Power](https://img.shields.io/badge/power-%E2%88%9E-green.svg)
![Licence](https://img.shields.io/npm/l/fileiojs-command.svg)
![Node Required](https://img.shields.io/node/v/fileiojs-command.svg)
[![Build Status](https://travis-ci.org/202soft/fileio.js.svg?branch=master)](https://travis-ci.org/202soft/fileiojs-command)
[![Code Climate](https://codeclimate.com/github/202soft/fileio.js/badges/gpa.svg)](https://codeclimate.com/github/202soft/fileiojs-command)
[![Dependencies Status](https://david-dm.org/202soft/fileio.js.svg)](https://david-dm.org/202soft/fileiojs-command)
![Monthly Download](https://img.shields.io/npm/dm/fileiojs-command.svg)
![Total Download](https://img.shields.io/npm/dt/fileiojs-command.svg)

## Example

Build a command line tool to manage my lol files.

```javascript
#!/usr/bin/env node
// bin/jsiojs
var command = require('fileiojs-command');

command.configure("Funny", "lol", "// Haha", "42.0.0");
```