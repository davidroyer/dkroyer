var chokidar = require('chokidar');
var exec = require('child_process').exec;
var cmd = require('node-cmd');
// function runCompiler(error, stdout, stderr) { sys.puts(stdout) }

// cmd.run('touch example.created.file');

console.log('Waiting...');
// One-liner for current directory, ignores .dotfiles
chokidar.watch('../static/blog').on('all', (event, path) => {
  cmd.run('m2j -w 100 -c ../static/blog/* -o ../static/api/posts.json');
});