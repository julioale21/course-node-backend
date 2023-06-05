const express = require('express');
const cors = require('cors');
const routes = require('../routes/users.routes');
const { dbConnection } = require('../db/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        dbConnection();
        
        this.middlewares();
        this.routes();

    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, routes);
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running on port ', this.port);
        } )
    }
}

module.exports = Server;