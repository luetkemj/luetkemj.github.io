---
layout: post
title:  "Built With Jekyll Part 2"
date:   2015-06-16 10:27:30
categories: webdev
illustration: "/assets/posts/built-with-jekyll/octocat.png"
---
<img class="hidden" src="{{ page.illustration }}" />

Jekyll has fantastic documentation. And getting started with Jekyll couldn't be any easier! Direct from the below is the Quick-start guide to getting started with Jekyll. &#9759;

{% highlight bash %}
~ $ gem install jekyll
~ $ jekyll new my-awesome-site
~ $ cd my-awesome-site
~/my-awesome-site $ jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}

...if any of that looks familiar to you, you probably don't need to read any further. Just head over to the Jekyll docs and have at it. You'll be fine. For the rest of you that have that no idea what to do with any of those squigglies and dollar signs, stick around. We'll work through it.

##Requirements

Before we get into what that mess above is there are some [requirements](http://jekyllrb.com/docs/installation/). Jekyll runs on Linux, Unix, and Mac OS X as well as Windows. Unfortunately, [Windows installation](http://jekyllrb.com/docs/windows/#installation) is a bit different, has it's own docs, and is beyond the scope of this guide. For our purposes I will assume we are all working on a Mac.

**Xcode**

Working with Jekyll requires a few terminal commands. For that we need to install [Xcode](https://itunes.apple.com/us/app/xcode/https://itunes.apple.com/us/app/xcode/id497799835?mt=12). Xcode is pretty large. You may wanna grab a coffee while it downloads. 

All downloaded and installed? Awesome, go ahead and launch it, accept the EULA and then shut it down. We won't need it anymore.

**Command Line Tools**

Now that we Xcode on your machine we can now install command line tools. Open up Terminal (it comes pre-installed on all macs), paste the following command into it, and press enter.

```bash xcode-select --install```

Everything go akay? Awesome!

<div class="meta" markdown="1">
#### EDITOR'S NOTE

I got reports of the following error happening for a couple people:

```/usr/bin/xcode-select: /usr/bin/xcode-select: cannot execute binary file```

If you get that error just skip the step and move on. 

If anyone actually knows what that's about I would love to hear it in the comments.
</div>


**Ruby**

Jekyll is written in Ruby and Ruby comes installed on Macs so you should be good to go but let's run a couple quick commands just to be sure.

In your terminal app type the following command and press enter:

```ruby -v```

You should see something like 

```ruby 2.0.0p481 (2014-05-08 revision 45883) [universal.x86_64-darwin14]```

If instead you get: ```ruby: command not found``` then you're gonna have to [install it yourself](https://www.ruby-lang.org/en/).

```ruby -v``` is a command that will tell us what version of ruby we are running. We see from the output that at the time of this writing I am running version 2.0.0p481.

**RubyGems**

Now that we have Ruby installed the next thing we need is RubyGems. Again if you are on a Mac you probably just have this. We'll check our version again just to be sure.

```gem -v```

Look familiar? "gem" is our command for RubyGems and -v is how we check the version number. This time I get ```2.0.14``` if you have to install it yourself you will find detailed instructions on [rubygems.org](https://rubygems.org/pages/download). 

RubyGems is a package manager framework for Ruby. It's what we will use to install Jekyll later.

**NodeJS**

The last thing we need before we can hit that Quick-start is NodeJS. Node does not come preinstalled on anything as far as I know but the install is super easy. Just head over to [nodejs.org](https://nodejs.org/) and download the installer. 

Finished? Perfect. We ready.

Ok, let's go line by line on the Quick-start so we fully understand what we're doing. 

{% highlight bash %}
~ $ gem install jekyll
{% endhighlight %}

That squiggly is called a tilde and is a shortcut for your home directory. You don't actually type it. If we were to move to another directory, say a folder on your desktop called "untitled" you would see something like ```~/Desktop/untitled```. Again, you wouldn't actually type any of that - it's just there in the terminal so you knwo where you are.

What about that dollar sign? You don't actually type that either. It just means that you are a normal user and is automatically placed at the start of every command. You only have to actually type everything that comes after the $.

```gem install jekyll``` is the command we type into terminal to install jekyll. Technically speaking, "gem" is the program we want to run, "install" is the command, and "jekyll" is the argument. Together they form a nice programatic sentance.

So, now that we know what we're actually doing, go ahead and install Jekyll.

{% highlight bash %}
gem install jekyll
{% endhighlight %}

If you get a permissions error you may have to add ```sudo``` to the command. ```sudo``` which means "Super User Do" will run the command as a super user on your system and require your password. This is the password you use when logging into your computer.

The sudo version of this command looks like ```sudo gem install jekyll```

All set? Fantastic! Next we'll create our blog.

<div class="meta" markdown="1">
#### EDITOR'S NOTE

From here on out I will only include the commands you actually type and forgo adding the ```~ $``` bits as they can be confusing since you don't actually have to type them in.
</div>


{% highlight bash %}
jekyll new my-awesome-site
{% endhighlight %}

Here we type "jekyll" to know what program we are running, "new" as our command, and "my-awesome-site" as the argument. "my-awesome-site" is the name of your site directory. It can be anything you want. If you want your site to be "joe-bloggs-blog" then you would type ```jekyll new joe-bloggs-blog```. After you hit enter Jekyll will create a new directory (folder) with the name you passed and install all the files needed for a brand new Jekyll blog.

You did it! You created your first Jekyll Blog!!!

Although I suppose you want to actually see it now. For that we have a couple more quick commands.

{% highlight bash %}
cd my-awesome-site
{% endhighlight %}

Here we are changing directory (cd) to our new site. Think of this as opening finder and double clicking on your sites folder. Don't forget to change "my-awesome-site" to whatever you named your blog. 

As I mentioned earlier when we talked about the ~, commands run in our current working directory. We cd (change directory) into our site directory so we can run jekyll commands in there.

The last command we need to run will spin up a local server for our jekyll site so we can actually view it in a browser.

{% highlight bash %}
jekyll serve
{% endhighlight %}

In your terminal "my-awesome-site" should be replaced with the name of your own site.

Now what about this last bit in the quickstart?

{% highlight bash %}
# => Now browse to http://localhost:4000
{% endhighlight %}

That hash # is the start of a comment. It's a signal to the computer that it should ignore this line. It's a special note just to you - the web developer - and you don't have to type it in. It's simply telling you to open up your favorite browser and go to localhost:4000. This is how you can access a local server on your machine to view your website before it actually goes live on the internet. So go ahead, open up your favorite browser and go to [http://localhost:4000](http://localhost:4000)...

🎉

Now do you feel like a web developer? You should!

<div class="meta" markdown="1">

#### Next Up:

We'll learn how to actually write posts and pages as well as set up version control with github *and* launch our site on github. Exciting! 😁

### In this series

<a href="{{ site.baseurl }}/150602/built-with-jekyll/">Built With Jekyll</a><br/>
<a href="{{ site.baseurl }}/150616/built-with-jekyll-part2/">Built With Jekyll Part 2</a>

</div>



