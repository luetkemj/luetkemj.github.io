---
layout: post
title:  "Simple Signups"
date:   2015-05-28 11:45:30
categories: webdev
illustration: "taking-names.png"
---

[Simple Signups](https://github.com/vcualtlab/simple-signups) is an agnostic single purpose WordPress theme designed and built to handle signups.

We built it to aid in the signup process for Common Book sessions at VCU. In the past this has been a lo-tech affair consisting of emails and phone calls to a single point person.

I’ll write more about how to administer the theme and get into the nuts and bolts of the thing in separate posts but for now we’ll just examine the workflow for our users.





## Home Page

The default view lists all sessions

1. Instructions
2. Fuzzy search
3. Unavailable session is <del>struckthrough</del>
4. Available session
5. Availablity details

*fig. 1*
![fig. 1](https://i.imgur.com/DEzGKbo.png)





## Fuzzy Search

Here we are searching for "Brandt" which results in all sessions in the Brandt building. The search looks in the title so it's all fair game.

1. Search input
2. Live results

*fig. 2*
![fig. 2](https://i.imgur.com/hbvkXYn.png)





## The Sign Up Form

After selecting a session the user will find a form allowing them to signup.

1. Name and Email required

![fig. 3](https://i.imgur.com/W4JkzS9.png)





## Success!

After successful completion of the form the user's name will appear in the list.

1. User's name appears under session
2. Availability details are updated

![fig. 4](https://i.imgur.com/AgldGtC.png)


## Feedback

When a session fills up it becomes struckthrough

1. Unavailable session

![fig. 5](https://i.imgur.com/d6qhKsf.png)


## Error!

What happens if a user signs up twice?

1. Custom error message for duplicate signups

[fig. 6](https://i.imgur.com/BmjyD7t.png)

## Wait List

If a user signs up after a session has become unavailable they will be wait listed. Admins can promote waitlisted users at their discretion.

1. Wait List added when appropriate
2. User on wait list

![fig. 7](https://i.imgur.com/T0ucwUm.png)


### Issues / Features to Add

As I wrote this I realized that I had overlooked basic unavailable session management. Would be nice if you could just hide unavailable sessions. If however you support waitlisting and want to keep them visible we should provide a simple way for users to sort accordingly.

Did you notice that spelling error? Google says waitlist is two words... oops.

<div class="meta" markdown="1">

#### Next Up:

The next Simple Signups update will be on administering the theme and the various features available.


#### Final Thoughts

What do you think? Useful or no?

I described this as agnostic up above because while I consider this a single purpose theme and am pretty well opposed to themes that try to be all things for everyone I do like to support creativity and alternate uses. Would love to see some unconventional uses for this theme.

A screw driver is a lever in a pinch after all.

</div>
