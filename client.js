/*
Jason Rikard 3/2014
jsndev.net

Renegade-x Node.js RCON Client for Ren-x v001Open Beta 1

Functionality:
Tail the logs and administer server commands remotely.

Known commands
a - authenticate
s - subscribe to logs
u - unsubscribe 
c - execute command like admin kickplayer or say hello world.  Only very a few admin commands work atm
*/



var net = require('net');

//Game Server IP and Port
var HOST = '0.0.0.0';
var PORT = 1234;

//Game Server admin pw
var PASS = 'secure_password'

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    //authenticate.  Append 'a' so specifiy auth command to server per their protocol. \n tells the server to execute the command.
    client.write('a' + PASS + '\n');
    //subscribe to public log.  You'll log output from chat, player/vehicle kills, player connect/disconnect and endgame score
    client.write('s\n');

    //Unsubscribe if you need to.
    //client.write('u\n');
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket≠
client.on('data', function(data) {
    console.log('DATA: ' + data);
});

client.on('error', function(e) {
    console.log('error');
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});


//Watch for commands from the CLI or stdin
process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function(text) {
    //console.log('received data:', util.inspect(text));
    if (text === 'quit\n') {
        client.destroy();
    } else {
        client.write('c' + text);
    }
});
