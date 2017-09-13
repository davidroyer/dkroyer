var chokidar = require('chokidar');
var exec = require('child_process').exec;
var cmd = require('node-cmd');
var process = require('process');

const CurrentDirectory = process.cwd()
const ContentDirectoryName = 'static/Articles'
const ContentPath = `${CurrentDirectory}/${ContentDirectoryName}`
// const OutputPath =
// function runCompiler(error, stdout, stderr) { sys.puts(stdout) }

// cmd.run('touch example.created.file');

console.log('Waiting...');
// One-liner for current directory, ignores .dotfiles
chokidar.watch(ContentPath).on('all', (event, path) => {
  console.log(path);
  cmd.run('m2j -w 100 -c ./static/Articles/* -o ./static/api/posts.json');
});
