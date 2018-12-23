---
layout: post
title:  "WP DB Import with Vagrant"
date:   2015-06-06 12:07:30
categories: webdev
illustration: "/assets/posts/wp-db-imports-with-vagrant/files.png"
---

Having depended on MAMP and PHPmyadmin for as long as I've been doing this stuff, moving to Vagrant presented me with a very real fear that I wouldn't be able to easily setup local installs of live sites. With MAMP I had always done a find and replace through the old Replacr app and then uploaded the DB through PHPmyadmin.

It wasn't perfect but served my needs for any db under 50MB. Sadly as I have been tasked with older installs and larger DBs that restriction has become problematic. Fortunately Vagrant once again steps in to save my butt.

This is mostly a command line process but I promise it's pretty basic, much faster than my previous mostly manual solution, and isn't restricted to the PHPmyadmin file size limits. These steps while specific to Vagrant make use of the WP-CLI which is not specific to Vagrant. You could probably do this with MAMP and can definietly do this on your server if you set it up proper.


<div class="meta" markdown="1">

#### WARNING

If you are cloning a live site make sure you update your local wp-config.php file accordingly. Just copy the settings that Vagrant setup for you with the wp install.

</div>



## db import in vagrant

This assumes you installed vagrant at the default location of vagrant-local

 1. **Rename db**

    Make sure that the db you will be importing is the same name as the db you will be importing into. So if your local site has a database name of ```EXAMPLE.sql``` you need to make sure that the db you will be import also has a name of ```EXAMPLE.sql```

 2. **Move db**

    Make a copy of the db you will be importing and move it to the root directory of the site you will be importing into.

    ```/vagrant-local/www/EXAMPLE/```

 3. **ssh into vagrant**

    ```cd vagrant-local```

    ```vagrant ssh```

 4. **cd to site**

	```cd /vagrant/www/EXAMPLE```

 5. **Import db**

    ```wp db import DATABASE.sql```

 6. **Search and Replace** (optional)

    If you need to do a search and replace run the following command. It handles serialized data appropriately so you don't bugger up your site.

    ```wp search-replace 'http://example.com' 'http://example.dev'```

 7. **Celebrate** 🎉


<div class="meta" markdown="1">

#### Bits and Bobs

Commands that start with ```wp``` make use of the WP-CLI which comes setup with vagrant. See http://wp-cli.org for more info and available commands.

Vagrant does support PHPmyadmin at vvv.dev but the upload limit is actually lower than MAMP. This limit can be changed in your PHP.ini file for MAMP and I assume in Vagrant as well but I really don't think it's worth doing with how much easier the command line method is.

MAMP can *probably* do an SSH import just like Vagrant but I never learned how and am not going to at this point. If you figure it out, I'd love to hear about it.

</div>
