import express from 'express';
import mongoose from 'mongoose';
import routes from './router';

class App {

    constructor() {
        this.server = express();
        mongoose.connect('mongodb+srv://rnsofdi:rnsofdi2024@devhouse.unfjems.mongodb.net/?retryWrites=true&w=majority')
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;