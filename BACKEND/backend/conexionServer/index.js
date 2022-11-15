import { DBconnection } from '../conexionServer/conectDB.js';
import { PORT } from './config.js';
import app from './app.js'



DBconnection();
app.listen(PORT);
console.log('server listening in port', PORT);

