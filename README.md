# Top Drawer / Web
Web is our public-facing web storefront.

## Setup
### Vagrant
Web uses [Vagrant](https://www.vagrantup.com/) to manage the development environement.  Install Vagrant if you haven't already and then run `vagrant up` in the project's root folder.  Vagrant should provision an environment that you can use to run the app locally.  Once the Vagrant virtual machine is up you can SSH into it using `vagrant ssh`.

## Running locally
SSH into your Vagrant virtual machine and then run:
```sh
cd code
npm start
```

This will start up a webpack development server.  You can reach the app at [http://1.2.3.4:8080](http://1.2.3.4:8080) in your local web browser.  Webpack will monitor changes to your files and rebuild automatically.  Changes are reflected immediately in the browser -- no refresh necessary.