import express, { request, response } from 'express';

const app = express();

app.get('/test', (request, response) => {
    response.send('Hello World');
});

app.listen(3000, () => console.log('Server is running'));
