# SSH

- protocol (communication language)
- encrypted
- communication over shell (terminal)
- windows needs ssh client (putty) https://www.ssh.com/ssh/putty/windows/

Benefits of SSH

- dont need to add password all the time
- remotely access another computer

```cmd
ssh {user eg. root}@{host}
```

## sudo install

```cmd
sudo apt-get install {app}
<!-- sudo apt-get install git -->
<!-- sudo apt-get install nodejs -->
```

## sudo update / upgrade

```cmd
sudo apt-get update

<!-- it'll figure out what the latest version of each package and dependency is, but will not actually download or install any of those updates. -->

sudo apt-get upgrade

<!-- downloads and installs the updates for each outdated package and dependency on your system. But just running sudo apt-get upgrade will not automatically upgrade the outdated packages - you'll still have a chance to review the changes and confirm that you want to perform the upgrades. -->
```

## copy desktop folder into server

- install rsync
- cd into folder on desktop
- and put in a folder called 'abc'

```cmd
rsync -av . root@host:~/abc
```

## hosting websites

- using a digital ocean server you can set up a hosting website like godaddy
- uses Apache web server
- last updated 2021-12: https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-16-04

### apache

- functionality and components are broken up into units so they can be configured independently
- virtual host - is the unit that describes domain or website .
- virtual hosts - allow administrator to use one server to host multiple domains or sites off of a single IP by using a matching mechanism
- Each domain that is configured will direct the visitor to a specific directory holding that site's information, never indicating that the same server is also responsible for other sites.

### learn how to serve different content to different visitors:

#### prerequisites

1. create a sudo-enabled non-root user
2. apache is installed

```cmd
sudo apt-get update
sudo apt-get install apache2
```

##### Step 1 - Creating the Directory Structure

- task: make 2 test domains test.com and example.com
- document root (the top-level directory that Apache looks at to find content to serve) will be set to individual directories under the /var/www directory.
  - /var/www/test.com
  - /var/www/example.com
- /public_html is in each of these folders to put our files

```cmd
sudo mkdir -p /var/www/example.com/public_html
sudo mkdir -p /var/www/test.com/public_html
```

##### Step 2 - grand permissions

- by default - folder is owned by root user
- granting regular user permission / $USER variable will take the value of the user you are currently logged in as, and given permission

```cmd
sudo chown -R $USER:$USER /var/www/example.com/public_html
sudo chown -R $USER:$USER /var/www/test.com/public_html
```

- grant (files/folder) read access to visitors

```cmd
sudo chmod -R 755 /var/www
```

##### Step 3 - Creating Demo Pages for Each Virtual Host

- creating demo index.html files (open using nano)

```cmd
nano /var/www/{{example.com}}/public_html/index.html
nano /var/www/{{test.com}}/public_html/index.html
```

```html
<!-- example index.html -->
<html>
  <head>
    <title>Welcome to Example.com!</title>
  </head>
  <body>
    <h1>Success! The example.com virtual host is working!</h1>
  </body>
</html>
```

```html
<!-- test index.html -->
<html>
  <head>
    <title>Welcome to Test.com!</title>
  </head>
  <body>
    <h1>Success! The test.com virtual host is working!</h1>
  </body>
</html>
```

##### Step 4 - Creating New Virtual Host Files

- Virtual host files are the files that specify the actual configuration of our virtual hosts
- and dictate how the Apache web server will respond to various domain requests
- 000-default.conf - default virtual host file.
- Ubuntu configuration requires that each virtual host file end in .conf
- task: copy it (000-default.conf) over to create a virtual host file for each of our domains

```cmd
sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/example.com.conf
```

- Open the new file in your editor with root privileges:

```cmd
sudo nano /etc/apache2/sites-available/example.com.conf
```

```conf
; FILE: /etc/apache2/sites-available/example.com.conf
<VirtualHost *:80>
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

###### Copying the First Virtual Host and Customizing for Second Domain

- open with administrative privileges

```cmd
sudo cp /etc/apache2/sites-available/example.com.conf /etc/apache2/sites-available/test.com.conf
sudo nano /etc/apache2/sites-available/test.com.conf
```

```conf
; FILE: /etc/apache2/sites-available/test.com.conf
<VirtualHost *:80>
    ServerAdmin admin@test.com
    ServerName test.com
    ServerAlias www.test.com
    DocumentRoot /var/www/test.com/public_html
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

##### Step 5 - Enabling the New Virtual Host Files

- Apache includes some tools to enable virtual host files.
- 2ensite - can be used to enable our sites

```cmd
sudo a2ensite example.com.conf
sudo a2ensite test.com.conf
```

###### disable the default site

```cmd
sudo a2dissite 000-default.conf
```

###### restart apache

```cmd
sudo systemctl restart apache2
```

##### Step 6 - Setting Up Local Hosts File (Optional)

- modifying the hosts file on your local computer
- allows us to test this process by temporarily modifying the hosts file on your local computer.
- intercept any requests for the domains that you configured and point them to your server (like what DNS server would do when using registered domain)
- details you need to add are:
  - the public IP address of your VPS server
  - the domain you want to use to reach that VPS

```cmd
<!-- on linux or mac -->
sudo nano /etc/hosts

<!-- windows -->
https://docs.microsoft.com/en-US/troubleshoot/windows-server/networking/cannot-modify-hosts-lmhosts-files

```

- assuming that my VPS IP address is 203.0.113.10, I could add the following lines to the bottom of my hosts file:

```
<!-- /etc/hosts -->
127.0.0.1   localhost
127.0.1.1   guest-desktop
203.0.113.10 example.com
203.0.113.10 test.com

```

##### Step 7 - Testing Your Results

http://example.com - Success! the example.com virtual host is working!
http://test.com - Success! the test.com virtual host is working!

- for long-term web domain - purchasing a domain name for each site you need and setting it up to point to your VPS server.
- conclusion - a single server handling two separate domain names.

---

## ssh symmetrical encryption vs asymmetrical encryption vs hashing

- encryption uses secrets to decrypt

### symmetrical encryption

uses same encryption and decryption key

## asymmetrical encryption

## hashing

```

```

```

```
