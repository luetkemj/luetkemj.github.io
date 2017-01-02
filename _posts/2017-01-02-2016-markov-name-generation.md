---
layout: post
title: "Markov Name Generation"
date:   2017-01-02 11:17:30
categories: [update]
---

About six months ago I began writing [Scribe](https://github.com/luetkemj/scribe) - a toolkit for dungeon masters. There are no plans to ever market or even release the project beyond it's public repo on github. It's raison d'etre is simply to provide a set of interesting problems for me solve as I learn Javascript.

As I was researching existing tools for roleplaying games I found this neat [fantasy name generator](https://donjon.bin.sh/name/markov.html) written in Javascript that uses [Markov chains](https://en.wikipedia.org/wiki/Markov_chain) to create new names based on the style of a sample set. A use case for this is to create random and new names that sound elvish or dwarven.

Being as I had never heard of Markov or his chains I had to do a bit of research to figure out how this generator worked and why it used Markov chains in the first place.

There is a quick explanation on [Donjon](https://donjon.bin.sh/code/name/) as well as the source for use in personal projects. But as I mentioned before Scribe is about learning more than it is about creating an actual piece of software and as such I decided to take a stab at writing my own version.

First we'll take a quick look at Markov chains. We will then look at how they can be used to solve our own problem. Finally we will talk briefly about this theory in practice and how we might expand, experiment, and improve further.


### Markov Chains

Suppose we wanted to create a mock weather forecast for a fantasy game. We might decide to have two weather states - sunny and rainy. To create our mock forecast we could just randomly switch between the two each day. This might create a forecast like the following:

s s **R** s **R** **R** s s s s **R** s **R** s **R** s s **R** **R** s **R** **R**

As expected our days randomly jump from sun to rain and rain to sun. However if we are trying to model a forecast that represents reality this approach fails.

A way to create a more realistic sequence might be to switch between rain and sun not randomly but based on the likelihood that a sunny day will be followed by rain or more sun. This approach might result in a sequence like the following:

s s s s s s **R** **R** s s s s s s **R** **R** **R** **R** s s s s

You may notice how the sequence now has a certain stickiness to it as opposed to the random jumpiness we began with.

Given a system that steps through a series of states like our forecast, a Markov chain is simply a way to model the chance of moving from one given state to another.

A model for our forecast may look like this:

```javascript
{
	sunny: {
		sunny: 75%,
		rainy: 25%
	},
	rainy: {
		rainy: 40%,
		sunny: 60%
	}
}
```

Our model predicts that on a sunny day we have a 75% percent chance that the next day will be sunny and a 25% chance that it will be rainy. Whereas on a rainy day we have a 40% chance that the next day will be rainy and a 60% chance it will be sunny.

### How does this help us?

If you remember the problem we are attempting to solve is to generate names in the style of a sample set. We could try something rather simplistic like finding all the characters that appear in the sample set and scrambling them into new names but much like our weather example our results would be far too random and unlikely to sound much like our sample set.

Instead we will use Markov chains in order to create a sequence of characters patterned after our sample set.

First we need to know what characters occur in our sample set. A result with a Z or X in it would not be in the style of our sample set if it contained zero instances of Z or X.

Given a sample set of `[sampson, samantha]` we would expect an array containing only unique characters from our set like `[s,a,m,p,o,n,t,h]`.

In order to select subsequent characters in the style of our sample set we need to determine what characters proceed each character in our array of unique characters. An example model that contains this information might look like:

```javascript
{
	s: {a: 2, o: 1},
	a: {m: 2, n: 1},
	m: {p: 1, a: 1},
	p: {s: 1},
	o: {n: 1},
	n: {t: 1},
	t: {h: 1},
	h: {a: 1}
}
```
So from our object we can now see that the character 's' is followed by 'a' two times and 'o' once. Therefore whenever our current character is 's' we know it can only be followed by an 'a' or an 'o'. Furthermore we know that it will be followed by an 'a' twice as often as it will be followed by an 'o'.

Here's a series of names beginning with 'S' generated with our model.

'Samamam', 'Sontham', 'Santham', 'Samanth', 'Santhan', 'Samamps'.

Some of these are a bit silly but notice how all of them sound similar to the seed names of Samantha and Sampson.

### Theory in Practice

To see this in practice you can take a look at the [name generator](https://github.com/luetkemj/scribe-name-generator/tree/3899d3865cd221680aaadc6213be23c48eb29891) I'm working on for Scribe. While functional there are still many things to do that could improve the current implementation.

### Improvements

I'd like to try breaking the names into character pairs or even syllables instead of individual characters to see how the results change. Currently the length of generated names is hardcoded but I would like to instead determine the length based on the sample set much the same way we determine the characters.

### Experimentation

I'm interested in seeing the results as I tinker with the model and feed it larger data sets. What might happen if I recursively feed the model it's own results? Or purposely add mistakes to the set to allow the results to evolve much like DNA code errors?

Curiosity abounds!
