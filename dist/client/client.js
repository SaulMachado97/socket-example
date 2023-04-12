import io from "socket.io-client";
class Client {
    constructor() {
        this.socket = io();
        this.socket.on('message', function (message) {
            console.log(message);
            document.body.innerHTML = message;
        });
        this.socket.on('random', function (message) {
            console.log(message);
            document.body.innerHTML += 'Winning number is ' + message + '<br/>';
        });
    }
}
const client = new Client();
