var filiojs = require('fileiojs');
var colors = require("colors");
var program = require('commander');

var _manager;
var _ext;

module.exports.configure = (type, ext, msg, version) => {
    _manager = filiojs.manager(type, ext, msg);
    _ext = ext;
    program.version(version);
    program.parse(process.argv);    
}

_program("create [filename]", `Create a new ${_ext} file`, (filename) => 
    _manager
      .createFile(filename)
      .then(() => _success(`File '${filename}' created with success !`))
      .fail(_fail)    
  );

_program("delete [filename]", `Delete a ${_ext} file`, (filename) => 
    _manager
      .deleteFile(filename)
      .then(() => _success(`File '${filename}' deleted with success !`))
      .fail(_fail)      
  );
  
_program("rename [oldname] [newname]", `Rename a ${_ext} file`, (oldname, newname) => 
    _manager
        .renameFile(oldname, newname)
        .then(() => _success(`File '${oldname}' moved to '${newname}' with success !`))
        .fail(_fail)
  );

_program("copy [source] [destination]", `Copy a ${_ext} file`, (source, destination) => 
    _manager
        .copyFile(source, destination)
        .then(() => _success(`File '${source}' copied to '${destination}' with success !`))
        .fail(_fail)
  );
  
_program("show [filename]", `Show a ${_ext} file`, (filename) => 
    _manager
        .showFile(filename)
        .then((content) => console.info(content))
        .fail(_fail)
  );


if (!process.argv.slice(2).length) {
  program.outputHelp();
}

function _program(command, description, doIt) {
  program
    .command(command)
    .description(description)
    .action(doIt);
}

function _success(message){ console.info(message .green); }
function _fail(message) { console.error(message .red); }