import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();

// Body parser configuration
// following configuration should be included before router
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json());

// CORS
server.app.use( cors({ origin:true, credentials:true }) );

// Router configuration
server.app.use( '/', router )

// Running server
server.start(() => {
    console.log(`Server running at ${ server.port }`);
});
