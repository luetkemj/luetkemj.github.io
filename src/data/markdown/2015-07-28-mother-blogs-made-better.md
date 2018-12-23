---
layout: post
title:  "Mother Blogs Made Better"
date:   2015-07-28 15:57:30
categories: webdev
---

So much improvement!

About a month ago I released the first version of [ALT Lab Mother Blog](https://github.com/vcualtlab/motherblog), a plugin that greatly simplified the motherblog signup process. Since then I've squashed a bunch of bugs, rewritten much of the plugin, and added a bunch of needed features.

##New Features

**Subscribe to comments**

To subscribe to all comments within your chosen category add `get_comments="true"` to the [altlab_motherblog] shortcode. This will bring in all comments to posts within the specified categories to the mother blog as well. The one catch here is the comments come in as posts without any category associated at all. This is ok in that it seperates them well enough from the posts themselves and can be categorized later but ideally we would have them categorized automatically. Something for the future...

**Prevent Duplicate Signups**

During testing it became apparent that a student could signup as many times as they wanted. This didn't actually duplicate content as FWP seems smart enough to pull once from a group of identical feeds rather than once from each but it still duplicated the feeds and links. This was more of a hassle in the admin area than anything else but should no longer be an issue as we check the feed against the existing links before adding any new ones. If you try and signup twice you will be met with a nice little error that lets you know you're already signed up.

**Sub Categories**

Yes! We now have sub categories. A use case for this would be a class with weekly projects. Students sign up for your course with the main category and then receive sub categories for each weekly project. As they progress through the semester students need only check the appropriate category for each week's assignment. Then on your mother blog you can easily sort projects by the predefined categories.

Just add sub_categories with a comma separated list of category name like this: `sub_categories = "cat1, cat2,cat3,  cat4"` to the [altlab_motherblog] shortcode. 

##Bugs Mushed

**Current user role change**

Suppose you are making a mother blog and want another of your sites on the network signed up. Previously this would reassign your user role to subscriber. No more. We check if you are already a user before adding and setting a role.

**Technical muck**

A bunch of uninteresting mumbo jumbo. If you really want to see the rest go check it out on [github](https://github.com/vcualtlab/motherblog/).


##To Dos

 * Check for role before populating dropdown - to prevent signups of other motherblogs that a student happens to be a subscriber of.
 * Add category to comments