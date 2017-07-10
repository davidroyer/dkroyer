var chokidar = require('chokidar');
var exec = require('child_process').exec;
var cmd = require('node-cmd');
var process = require('process');

const CurrentDirectory = process.cwd()
const ContentDirectoryName = 'static/blog'
const ContentPath = `${CurrentDirectory}/${ContentDirectoryName}`
// function runCompiler(error, stdout, stderr) { sys.puts(stdout) }

// cmd.run('touch example.created.file');

console.log('Waiting...');
// One-liner for current directory, ignores .dotfiles
chokidar.watch(ContentPath).on('all', (event, path) => {
  console.log('MY COMPILER RAN!');
  cmd.run('m2j -w 100 -c ./static/blog/* -o ./static/api/posts.json');
});
