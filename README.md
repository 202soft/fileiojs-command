# File I/O js command

Builld cli tools for your own most powerfull file manager.

## Example

Build a command line tool to manage my lol files.

```javascript
#!/usr/bin/env node
// bin/jsiojs
var command = require('../lib/fileiojs-command_core.js');

command.configure("Funny", "lol", "// Haha", "42.0.0");
```