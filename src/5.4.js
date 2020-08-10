const user = {};

let handle = 'caro lina';
user[handle] = {};
user[handle].type = 'Admin';
user[handle].message = {};
user[handle].message.time = 30;
user[handle].message.time = 'sec'; //si funciona con el epacio
//user.carolina.message.type = 'sec'; por el espacio no funciona

handle = 'jaimesito';
const message = { type: 'dec', time: 60 };
user[handle] = { type: 'User', message: message };

console.log(user);

user.jaimesito.message.time = 10;

console.log(user);

// puedo cargar funciones en el objeto
const page = {
    onLoad: function () {
        console.log('Page was loaded');
    },
    onFinish: function () {
        console.log('Page was finished');
    },
};
/*ES6 y 7
const page = {
    onLoad() {
        console.log('Page was loaded');
    },
    onFinish() {
        console.log('Page was finished');
    },
};



const page = {
    onLoad:  () => {
        console.log('Page was loaded');
    },
    onFinish: () => {
        console.log('Page was finished');
    },
};


*/

let event = 'onFinish';
page.event();
// o tambien page[event]();
