# Personal Homepage

## Running locally
We need a few things to get started running locally:
 - yarn installed
 - docker installed

Once we have these tools we can run
```
$ yarn install
```
to install all of the javascript dependencies.

Now we can actually build the javascript bundle located in `dist/bundle.js` that
the `dist/index.html` file assumes exists. It is not checked in because it is
just javascript compiled by esbuild. To create it we can run
```
$ make watch
```

Now that all of our files are ready to serve, we need a web server running to actually serve them. This project uses Nginx running in a Docker container. We can build the image with
```
$ make build
```
and start the container running the web server by running
```
$ make start
```
Starting should (assuming MacOs + Firefox) pop open a Firefox web browser with the page on `localhost:8080`.

We can stop the nginx container at any time with
```
$ make stop
```

## Developing locally
One thing the running locally section does not address is how to easily make
code changes to the React code and see them on the web browser. We can use
esbuild to watch files as we change them and rebuild the `bundle.js` file by running
```
$ make watch
```
