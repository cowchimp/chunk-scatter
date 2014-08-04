Chunk Scatter
=============

"Chunk Scatter" is a simple tool for analyzing HTTP responses that use chunked encoding. It plots each chunk on a scatter graph to help visualize when each chunk was received by the client. By understanding exactly when and what your server is transmitting, you can optimize server flushing for improved performance.

Running Chunk Scatter
---------------------

1. install [node.js](http://nodejs.org)
2. run `npm install`
3. run `node bin/www`
4. go to `http://localhost:3000`

License
-------

MIT