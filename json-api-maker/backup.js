const fs = require('fs')
const dir = require('node-dir')
const routesArray = []
var files = fs.readdirSync('./files');
console.log(files)

function createRoutesArray() {
  files.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/dynamic/' + name
      routesArray.push(route)
  });
}
createRoutesArray();
// console.log(routesArray)

// var name = file.substr(0, file.lastIndexOf('.'));
// var path = '/dynamic/' + name
// console.log(fileNames);
// fs.readFileAsync('./files/test1.md').then(function(data) {
// 	console.log(data);
// });
var filesArray = [];

    function returnRoutes() {
       return dir.readFiles('./files', {
            match: /.md$/,
            shortName: true,
            exclude: /^\./
            }, function(err, content, next) {
                if (err) throw err;
                // console.log('content:', content);
                next();
            },
            function(err, files){
                if (err) throw err;
                fileNamesArray = [];
                files.forEach(function (file) {
                    var name = file.substr(0, file.lastIndexOf('.'));
                    var path = '/dynamic/' + name
                    fileNamesArray.push(path)
                });
                console.log(fileNamesArray);
                return fileNamesArray;
            });
    }


// returnRoutes();

// function logIt() {
//     var result = returnRoutes();
//     console.log(result);
//     // console.log(returnRoutes());
// }
// logIt();