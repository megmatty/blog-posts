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

//Port Listen
app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
