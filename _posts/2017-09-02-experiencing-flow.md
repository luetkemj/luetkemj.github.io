---
layout: post
title: "Experiencing Flow"
date:   2017-09-02 22:31:30
categories: [update]
---

Facebook's static type checker [Flow](https://flow.org/) had been on my radar for a while. Typescript left a bad taste in my mouth that was, in all honesty, more likely the fault of a bad combination of an early beta of angular2 and ionic. We don't do typing at work. Certain teammates may or may not experience debilitating java flashbacks at the thought of it.

In order to give flow a proper go I decided to try it on a branch of [Aglet Timekeeper](http://aglet.io/tools/timekeeper/). I am in the middle of implementing a new feature and there is, after all, no time like the present. Installation was surprisingly painless. The project already uses babel so I could skip most of the directions on the [installation docs](https://flow.org/en/docs/install/). A couple quick atom extensions for linting and the project was ready to go.

One of the nice things about adding flow to an existing project is it is activated on a per file basis. Meaning you can type check individual files instead of your entire project. 👌

First up was a utils file. This bit of code has a few functions used to build the data needed to display the timekeeper. With a fair bit of logic and some chunky math it seemed like a good choice. One of the selling points for flow is it's ability to find errors in your code. This particular file is already heavily unit tested so the chance of showcasing flow's error snooping skills seemed low.

Time to add some static types to the first function:

<img width="371" alt="screen shot 2017-09-05 at 6 33 00 pm" src="https://user-images.githubusercontent.com/29575193/30087876-c03f1ef8-9268-11e7-8b23-36303979830b.png">

Like so:

<img width="1221" alt="screen shot 2017-09-02 at 10 23 15 pm" src="https://user-images.githubusercontent.com/925980/30000450-f20455e0-9031-11e7-826a-0014771e9ab4.png">

What the hell? The function returns a string. I set it's type to a string. Is flow broken? This sucks. Flow sucks. Searching the error message resulted in bupkiss. I am confused. What am I missing? I can remove the type definition on the function and the error goes away but that's as bad as removing unit tests so you pass CI.

What is Flow trying to tell me?

...

Aha!

The variable sky is declared but never given a value. The conditional logic has no final else clause so it is possible that sky never becomes a string. This is why the error "possibly uninitialized variable" makes sense. It is possible that sky is uninitialized and thus null which is of course not compatible with the type string. Null !== string.

![](https://media.giphy.com/media/dQNP6OnyFUePu/giphy.gif)

After a quick look around the docs I found that you can prepend a type with a '?' to introduce a "maybe type". Since sky may or may not exist this seemed like a reasonable approach. Tests pass and flow is happy. 😎

<img width="450" alt="screen shot 2017-09-02 at 10 23 44 pm" src="https://user-images.githubusercontent.com/925980/30000486-9d78d026-9033-11e7-954c-62580901a697.png">

Happily typing my way through through the file I made it to the final function. buildTimeUI is the function that (big surprise) actually builds the time data for the UI. It returns an object that I type checked like so:

<img width="654" alt="screen shot 2017-09-02 at 10 24 26 pm" src="https://user-images.githubusercontent.com/925980/30000513-ff9ba7be-9034-11e7-988f-cd76a009f18d.png">

Why isn't this working? Object literal isn't compatible with object literal? What the hell... To get to the bottom of this I decided to run the cli and see if that offered a better explanation.

<img width="489" alt="screen shot 2017-09-02 at 10 25 07 pm" src="https://user-images.githubusercontent.com/925980/30000523-6a8219c8-9035-11e7-975f-c577d46ff0e8.png">

OMG - is this really doing what I think it is? In this function I expect sky to be a string. But I generate that string with the getSky function above which Flow expects to be a maybe type. It may be a string or it may be null.

The two objects are not equal.

![](https://media.giphy.com/media/uPnKU86sFa2fm/giphy.gif)

How to fix things? Instead of giving the function getSky a maybe type it should instead be typed as a 'string' and sky should be initialized as an empty string. like so:

<img width="432" alt="screen shot 2017-09-02 at 10 24 46 pm" src="https://user-images.githubusercontent.com/925980/30000546-08eb50de-9036-11e7-9502-e5dcd75eb519.png">

Suddenly flow is happy again!

<img width="532" alt="screen shot 2017-09-02 at 10 24 56 pm" src="https://user-images.githubusercontent.com/925980/30000555-75f5f04e-9036-11e7-95d3-b09fb2965441.png">

![](https://media.giphy.com/media/LxPsfUhFxwRRC/giphy.gif)

After reading the docs a bit further I was able to refactor the typing of the last function a bit to be more consistent with the others.

<img width="541" alt="screen shot 2017-09-02 at 11 16 33 pm" src="https://user-images.githubusercontent.com/925980/30000566-fa58d144-9036-11e7-964d-d7308cbd6b54.png">

Two bugs in a file I was pretty confident about...

![](https://media.giphy.com/media/NntRfaR7rnE4g/giphy.gif)

My only complaint is the linter could do a better job communicating. But that's not flow's fault.

Two thumbs up. Would Flow again 👍👍
