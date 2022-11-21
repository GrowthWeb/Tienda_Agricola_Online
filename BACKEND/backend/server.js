import { DBconnection } from './conections/conectDB.js';
import  {PORT}  from './conections/config.js';
import app from './conections/app.js'



DBconnection();
app.listen(PORT);
console.log('server listening in port', PORT);

