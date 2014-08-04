Chunk Scatter
=============

"Chunk Scatter" is a simple tool for analyzing HTTP responses that use chunked encoding. It plots each chunk on a scatter graph to help visualize when each chunk was received by the client. By understanding exactly when and what your server is transmitting, you can optimize server flushing for improved performance.

#### [Demo](http://scatter.cowchimp.com): See it in action
#### [Blog post](http://blog.cowchimp.com/chunk-scatter-http-chunked-response-analysis-tool): Learn why and how to use Chunk Scatter

Screenshot
----------

![Screenshot](http://blog.cowchimp.com/content/images/2014/Aug/chunk_scatter_screenshot.png)

Running Chunk Scatter
---------------------

1. Install [node.js](http://nodejs.org)
2. Run `npm install`
3. Run `node bin/www`
4. Go to `http://localhost:3000`

Using Chunk Scatter
-------------------

1. Enter one or more URLs into the textbox separated by a new line  
   Define an alias for each endpoint by adding it before the URL with a comma between them
2. Click 'OK' (or Ctrl+Enter) to generate the scatter graph
3. The y-axis represents the accumulated length of the response in terms of the number of characters  
   The x-axis is simply the time in milliseconds since the request started
4. Hover over any point and get a tooltip showing when the chunk was received and the response length at that time

   See [this](http://blog.cowchimp.com/chunk-scatter-http-chunked-response-analysis-tool) blog post for more info

The Code
--------

Dependencies: [Express.js](http://expressjs.com), [request](http://github.com/mikeal/request), [async](http://github.com/caolan/async), [Angular.js](http://angularjs.org), [Google Charts](http://developers.google.com/chart)  
Tested on IE9+

License
-------

MIT