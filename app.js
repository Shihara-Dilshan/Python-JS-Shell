//const PythonShell = require('python-shell');
let {PythonShell} = require('python-shell')
let options = {
  mode: 'text',
  encording: 'utf8',
  pythonPath: '/usr/bin/python3',
  pythonOptions: ['-u'], // get print results in real-time
  scriptPath: './',
  args: ['value1', 'value2', 'value3']
};

let test = new PythonShell('test.py', options);

test.on('message', function (message){
    console.log(message);
})

 

