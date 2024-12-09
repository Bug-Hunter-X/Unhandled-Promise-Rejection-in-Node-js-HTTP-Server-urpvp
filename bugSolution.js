const http = require('http');

const server = http.createServer((req, res) => {
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error'); // Send a response to the client
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  return 'Async operation successful';
} 