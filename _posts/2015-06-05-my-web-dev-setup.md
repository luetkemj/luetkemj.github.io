---
layout: post
title:  "My Web Dev Tool Kit"
date:   2015-06-05 12:07:30
categories: webdev
illustration: "/assets/posts/webdev-toolkit/toolkit.png"
---
<img class="hidden" src="{{ page.illustration }}" />

With my new laptop at AltLab having just arrived I figured now was an ideal time to share my web development tool kit.

I should also note that I work on a Mac and while this general setup should be possible on a PC or Linux machine I wouldn't know how to get you there.

As a quick note if you plan to follow along go ahead and grab [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the app store. It's huge and take a while to download. Might as well start now.

## Design Apps

 * **[Photoshop](http://www.adobe.com/products/photoshop.html)** For photo editing and illustration work
 * **[Illustrator](http://www.adobe.com/products/illustrator.html)** For vectors and type design work
 * **[Sketch](http://bohemiancoding.com/sketch/)** For designing websites - if I could only have one piece of design software this would be it.


## Text Editor 

 * **[Sublime Text 3](http://www.sublimetext.com/3)** Best text editor ever.

 You'll want to get package controll installed so you can get the right plugins for you. [Go here](https://packagecontrol.io/installation) and follow the directions.

## FTP Client

 * **[Transmit](https://panic.com/transmit/)** A solid mac only FTP client.


## Command Line

* **[Xcode](https://itunes.apple.com/us/app/xcode/https://itunes.apple.com/us/app/xcode/id497799835?mt=12)** Required for command line tools
* **[iTerm2](https://www.iterm2.com/)** A much nicer terminal than the default app
* **Command Line Tools** requires Xcode &#9757;
* **[OhMyZSH](https://github.com/robbyrussell/oh-my-zsh)** makes your terminal happy &#9786;

I work a fair amount with the terminal - nothing intense but several of the tools I use require it. You'll need to download Xcode in order to get access to the command line tools we'll be using in the rest of the setup below.

Once it's installed you have to run it at least once and accept the EULA. After accepting the EULA you can shut it down. 

To install the command line tools open up iTerm2 and paste the following command.

```bash
xcode-select --install
```

OhMyZSH make terminal soooo much better and easier to work with.


## Dev Tools

 * **[git](http://git-scm.com/download/mac)** Version control
 * **[Brew](http://brew.sh/)** Package manager for OSX
 * **[Node](https://nodejs.org/)** So many things...
 * **[Grunt](http://gruntjs.com/)** JavaScript Task Runner
 * **[Bower](http://bower.io/)** Package manager for the web
 * **[Composer](https://getcomposer.org/)** Dependency Manager for PHP
 * **[Bundler](http://bundler.io/)** Dependency Manager for Ruby

These tools are pretty necessary to my job these days. If you want to contribute to any open source software you are going to have to use git for sure and will almost certainly use at least one of the others. There are a few other tools out there that you might need at some point - [Browserify](http://browserify.org/) is one. But the list is already getting long and you can get pretty far with just those. Install anything else as you need it. 


## Dev Boxes

* **[Virtual Box](https://www.virtualbox.org/wiki/Downloads)** For running virtual machines
* **[Vagrant](https://www.vagrantup.com/downloads.html)** Development environments made easy
* **[VVV](https://github.com/Varying-Vagrant-Vagrants/VVV)** Vagrant configuration for WordPress
* **[VVV Site Creation Wizard](https://github.com/bradp/vv)**
* **[ScotchBox](https://box.scotch.io/)** Vagrant LAMP stack

I used to use MAMP but I've found that it can cause issues down the line if you need to change things up for a specific project. Also you don't get .dev in the free version.

I've been working with VVV for WordPress dev for some time now and it's fantastic. All the perks of MAMP Pro without any of the headaches. If you add the VVV Site Creation Wizard to the mix you'll find that this workflow far exceeds what is possible in MAMP.

If you need to do any other PHP programming that requires a database, Scotchbox will get it done for you.

Both VVV and Scotchbox require Vagrant which requires Virtual Box. 

Finally if you just need to spin up a quick local server, cd to your project root directory and run 

```bash
python -m SimpleHTTPServer
```

## MISC Bits and Bobs

* **[Spectacle](http://spectacleapp.com/)** Window managmement
* **[GifGrabber](http://www.gifgrabber.com/)** Like screen capture but for gifs
* **[Slack](https://slack.com/)** Team Communication
* **[Sunrise](https://calendar.sunrise.am/)** Calendar that makes sense of all my calendars
* **[Feedly](https://feedly.com/)** RSS reader

<div class="meta" markdown="1">

#### Final Thoughts

Next year I'm sure this will all change, but for now this setup will handle pretty much anything you can throw at it from a front end developer's perspective. 

Have fun, make happy.

</div>
