//Thinkful Blog API Challenge
	//It should support the four CRUD operations for a blog posts resource.
	// GET and POST requests should go to /blog-posts.
	// DELETE and PUT requests should go to /blog-posts/:id.
	// Use Express router and modularize routes to /blog-posts.
	// Add a couple of blog posts on server load so you'll automatically 
		//have some data to look at when the server starts.

const express = require('express');

const app = express();

const blogpostRouter = require('./blogpostRouter');

app.use('/blog-posts', blogpostRouter);

// both runServer and closeServer need to access the same
// server object, so we declare `server` here, and then when
// runServer runs, it assigns a value.
let server;

// this function starts our server and returns a Promise.
// In our test code, we need a way of asynchronously starting
// our server, since we'll be dealing with promises there.
function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    }).on('error', err => {
      reject(err)
    });
  });
}

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
};


//Port Listen
// app.listen(process.env.PORT || 8080, () => {
//   console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
// });

module.exports = {app, runServer, closeServer};
