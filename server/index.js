const express = require('express');
const app = express();

const {createMsg, readMsg, updateMsg, deleteMsg} = require('./controllers/messages_controller');

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


const baseUrl = '/api/messages';
app.post(baseUrl, createMsg);
app.get(baseUrl, readMsg);
app.put(baseUrl + '/:id', updateMsg);
app.delete(`${baseUrl}/:id`, deleteMsg);


const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));