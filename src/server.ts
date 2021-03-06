import express, { request, response } from 'express';

const app = express();

app.get('/test', (request, response) => {
    return response.send('Hello World');
});

app.post('test-post', (request, response) => {
    return response.send('Hello Post Route');
});

app.listen(3000, () => console.log('Server is running'));
