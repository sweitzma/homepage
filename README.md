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

### Compiling for development
The development version is compiled fast, not small. And NGINX serves the
development bundle at http://localhost:8080. While you work run `make watch`
which will make sure that the contents of `dev-dist` reflect the most 
recent code changes.

### Compiling for production
The production version is compiled small, not fast. And NGINX serves the
production bundle at http://localhost:8081. The main differences between the dev
and prod versions are that Javascript is minified and CSS is purged. See
([here](https://tailwindcss.com/docs/optimizing-for-production)).

Run `make compile` to write the production bundles to `dist`.

### Serving HTML/JS/CSS
We use Docker to actually serve the content to the browser locally. Here area a
few commands you'll need to know:
```
$ make build  # build serving image
$ make start  # start the serving container
$ make stop   # stop the serving container
```
You can see the devolopment bundle at http://localhost:8080 and the production
bundle at http://localhost:8081.

## Deployment
Right now you can visit the website at http://almostsam.com. It is hosted as a
static site in AWS S3. Deployment really just means copying the correct files
from locally to S3 at the moment.

To actually deploy, make sure you have `deploy/env_template` filled out as
`deploy/.env` and then run 
```
$ make deploy
```
which `compile` and then send the results to S3 for serving.
