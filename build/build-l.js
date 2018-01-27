const languages = require('./languages.js');
const exec = require('child_process').exec;

let languagesArr = [];
Object.keys(languages).map(function(language){
  let buildExec = 'node build/build.js ' + language;
  languagesArr.push(buildExec)
});


var buildFun = function(buildExec) {
  return new Promise(function(resolve, reject) {
    exec(buildExec,(error, stdout, stderr) => {
      if (error) {
        console.log("build-error" + error)
      }
      resolve();
    })
  });
};

var asyncFun = async function() {
  for (var i = 0; i < languagesArr.length; i++) {
    await buildFun(languagesArr[i]);
  }
};

asyncFun();
