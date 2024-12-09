const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    // Error handling missing here.  The response is never sent
    console.error('Error:', err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might throw an error
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Simulated asynchronous error');
  }
  return 'Async operation successful';
}