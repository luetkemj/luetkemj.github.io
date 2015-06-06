---
layout: post
title:  "WP DB Import with Vagrant"
date:   2015-06-02 12:07:30
categories: webdev
illustration: "/assets/posts/webdev-toolkit/toolkit.png"
---

Having depended on MAMP and PHPmyadmin for as long as I've been doing this stuff, moving to Vagrant presented me with a very real fear that I wouldn't be able to easily setup local installs of live sites. That involved duplicating the live site and importing the DB after running it through the old find and replace app Replacr.

It wasn't perfect but served my needs for any DB under 50MB. Sadly as I have been tasked with older installs and larger DBs that restriction has become problematic. Fortunately Vagrant once again steps in to save my butt.

This is mostly a command line process but I promise it's pretty basic, much faster than my previous mostly manual solution, and isn't restricted to the PHPmyadmin file size limits.

-----

db import in vagrant
This assumes you installed vagrant at the default location of vagrant-local

Get your db setup and in the right place.

Make sure that the db you will be importing is the same name as the db you will importing into. So if your local site has a database name of EXAMPLE.sql you need to make sure that the db you will be import also has a name of EXAMPLE.sql

move db to import to root of site
Move a copy of the db you will be importing to the root directory of the site you will be importing into. /vagrant-local/www/EXAMPLE/

ssh into vagrant - no credentials required
cd vagrant-local
vagrant ssh

cd to site
cd /vagrant/www/EXAMPLE


import db
wp db import DATABASE.sql

search and replace if needed
wp search-replace 'http://example.com' 'http://example.dev'

Makes use of the wp-cli which comes setup with vagrant. See http://wp-cli.org for more info