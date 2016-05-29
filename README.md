# Top Drawer / Web
Web is our public-facing web storefront.

## Setup
### Development Environment
Web uses [Vagrant](https://www.vagrantup.com/) to manage the development environement.  Install Vagrant if you haven't already and then run `vagrant up` in the project's root folder.  The first time this is run Vagrant will provision the development environment for you.

Once the Vagrant virtual machine is up you can SSH into it using `vagrant ssh`.

### Running The App
SSH into your Vagrant virtual machine and then run:
```sh
cd code
npm start
```

This will start up a webpack development server.  You can reach the app at [http://1.2.3.4:8080](http://1.2.3.4:8080) in your local web browser.


#### A note about monitoring live code changes
Webpack can monitor changes to your files and rebuild automatically for you.  It even takes this a step further and will "hot swap" the compiled code while your browser window is open so you don't have to refresh the page.

If you want this functionality when running Webpack inside a virtual machine, you need a way to sync modified files to the guest operating system in realtime.  Normally this would be handled automatically using a shared folder system like NFS or SMB, but they unfortunately won't notify the guest operating system of filesystem changes (you can read more about it [here](https://github.com/webpack/webpack/issues/425)).

Instead, we use rsync to monitor filesystem changes on our host and sync files to our guest.  Virtualbox includes a handy command-line tool just for this purpose: `vagrant rsync-auto`.  Simply run it after you boot up your virtual machine with `vagrant up` and it will continue to sync changes between the host and guest filesystems.

Read more about `vagrant rsync-auto` here: [Vagrant: rsync-auto command](https://www.vagrantup.com/docs/cli/rsync-auto.html).

## Documentation
### CSS Modules
TODO