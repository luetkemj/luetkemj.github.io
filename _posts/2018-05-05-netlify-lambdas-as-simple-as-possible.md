---
layout: post
title: "Netlify Lambdas - As Simple As Possible"
date:   2018-05-05 15:25:30
categories: [update]
---


I could wax poetic about the wonder that is [Netlify](https://www.netlify.com/) or I could get to the point.

Let's get to the point.

Netlify does a wonderful job of running your build script and deploying your site. So good in fact it is difficult at times to know where Netlify's magic begins and ends. While messing around with Lambda functions on Netlify I found myself struggling to get a successful build going. With so much of the process abstracted away I found it difficult to modify my approach in any meaningful way.

Why was I having problems? Was my build script configuration buggered up? Were the settings on my Netlify account borked? Did I write my .toml file correctly? When exactly does Netlify deploy my functions and where exactly is it looking for them? Does it build them? Do I build them? Do I have to use their [build tool?](https://www.npmjs.com/package/netlify-lambda)

In the end I found that the best approach to take in order to grok things was a simple one.

As simple as possible.

This is not a complex tutorial. This is also not a tutorial aimed at beginners. It is simply an attempt to strip away all the complexities of modern web development in a concerted effort to focus on the singular problem at hand &mdash; understanding how Netlify deploys Lambda functions.

What follows is the most minimal approach to successfully deploy an AWS Lambda on Netlify I could come up with.

### UPDATE 180509

Project structure and build step has been updated in response to Phil Hawksworth's comment below. While everything worked as initially structured it is bad practice to put your production ready lambdas in your publish folder. Once you start making API calls to protected services that require secrets you are opening  up security holes by publishing your lambdas (and potentially secrets) client side.

Thanks for the catch Phil!

[Skip to the code on github.](https://github.com/luetkemj/test-netlify-lambdas/tree/simple)

### Setting up the project

```
# create a directory structure for our project
mkdir -p simple-lambdas/src/functions

# navigate to our new project
cd simple-lambdas

# create a package.json file with npm - just accept all the defaults.
npm init
```

Your project structure should look like this:

```
simple-lambdas
  - package.json
  - src
    - functions
```

### A simple function

Netlify does a [good job of explaining](https://www.netlify.com/docs/functions/#javascript-lambda-functions) how a Lambda function should be structured.

Create a file in `src/functions` named `hello.js` and paste Netlify's simple example function into it:

```
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
}
```

Netlify deploys your Lambda functions *AFTER* the build step.

*You must have a build step*.

Build steps can get complicated real fast with things like webpack, babel, etc. So we'll sort of fake it by copying our functions dir from `./src` to our project root at `./functions` and making an empty `./dist` dir we can point netlify at for our publish folder.

Add this script to your package.json:

```
"build": "rm -rf dist && rm -rf functions && cp -r src/functions functions && mkdir dist"
```

Your package.json should now look like this:

```
{
  "name": "simple-lambdas",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "rm -rf dist && rm -rf functions && cp -r src/functions functions && mkdir dist"
  },
  "author": "",
  "license": "ISC"
}
```

`npm run build` will delete `./dist` and `./functions` if they already exist, make a copy of `./src/functions` to `./functions` and make a new empty dir at `./dist`.

Finally, we need to tell Netlify how our project is structured. This can be done from their web interface but in this tutorial we will create a special settings file that will override those settings.

Create a file called `netlify.toml` in the root of your project with the following contents:

```
[build]
  command = "npm run build" # your build command
  publish = "./dist" # where your production ready code lives AFTER your build command has run
  functions = "./functions" # where your production ready lambda functions live AFTER your build command has run
```

Every root file in `./functions` will become an endpoint with the following structure:

`{your-site-root}/.netlify/functions/{filename}`

to see it in action deploy the project to Netlify and navigate to:

`{your-site-root}/.netlify/functions/hello`

In the end Netlify does surprising little with your project. It runs the build command you tell it to, publishes the production code from the directory you tell it to, and packages and deploys functions from the directory you tell it to. What happens in your build step is entirely up to **you**. Where you put your production ready code and Lambda functions is entirely up to **you**.

With this simple understanding, complexity may flourish.
