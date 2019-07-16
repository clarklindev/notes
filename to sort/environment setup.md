IDE SETUP

The following line can added to your command line profile to make locally installed Node.js dependency binaries available:

```
PATH="$PATH:./node_modules/.bin"
```

ALLOW INSTALL PERMISSION
sudo spctl --master-disable

SSH SETUP VS HTTPS

https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

start SSH agent
eval "\$(ssh-agent -s)”

//THEN LINK IT
plink.exe git@bitbucket.org
or
plink.exe git@github.com

——————————————————

macOS 10.12.2 or later
add to : ~/.ssh/config

Host \*
AddKeysToAgent yes
UseKeychain yes
IdentityFile ~/.ssh/id_rsa

——————————————————

Add your SSH private key to the ssh-agent and store your passphrase in the keychain
name of file is dependent on what we called it in the step above

ssh-add -K ~/.ssh/id_rsa

——————————————————

Copy the SSH key to your clipboard

pbcopy < ~/.ssh/id_rsa.pub

——————————————————
——————————————————
HTTPS Setup

git -c core.longpaths=true config --get remote.origin.url

git remote -v

git credential-osxkeychain

Tell Git to use osxkeychain helper using the global credential.helper config:
git config --global credential.helper osxkeychain

The next time you clone an HTTPS URL that requires a password, you'll be prompted for your username and password, and to grant access to the OSX keychain. After you've done this, the username and password are stored in your keychain and you won't be required to type them in to Git again.

SSH SETUP

REMOVE ALL ‘\_LOCK’ files

git remote -v

HTTPS to SSH
git remote set-url origin git@github.com:USERNAME/REPOSITORY.git

——————————————————

GITHUB

TERMINAL

to make terminal show full path
export PS1='\u@\H:\w$ '
export PS1='\w$ '

Inside PS1 value, "\w" represents the full path, where "\W" represents the current directory name only.
colors eg:

(green) \[\033[01;32m\]
(black) \[\033[00m\]
(blue) \[\033[01;34m\]

The first number is the style (1=bold), followed by a semicolon,
then background color, then color

and then the actual number of the color, possible styles (effects) are:

0 = default colour
1 = bold
4 = underlined
5 = flashing text (disabled on some terminals)
7 = reverse field (exchange foreground and background color)
8 = concealed (invisible)

The possible backgrounds:
40 = black background
41 = red background
42 = green background
43 = orange background
44 = blue background
45 = purple background
46 = cyan background
47 = grey background
100 = dark grey background
101 = light red background
102 = light green background
103 = yellow background
104 = light blue background
105 = light purple background
106 = turquoise background
107 = white background

All possible colors:
31 = red
32 = green
33 = orange
34 = blue
35 = purple
36 = cyan
37 = grey
90 = dark grey
91 = light red
92 = light green
93 = yellow
94 = light blue
95 = light purple
96 = turquoise
97 = white

You can also change other kinds of files when using the ls command by defining each kind with:
bd = (BLOCK, BLK) Block device (buffered) special file
cd = (CHAR, CHR) Character device (unbuffered) special file
di = (DIR) Directory
do = (DOOR) [Door][1]
ex = (EXEC) Executable file (ie. has 'x' set in permissions)
fi = (FILE) Normal file
ln = (SYMLINK, LINK, LNK) Symbolic link. If you set this to ‘target’ instead of a numerical value, the color is as for the file pointed to.
mi = (MISSING) Non-existent file pointed to by a symbolic link (visible when you type ls -l)
no = (NORMAL, NORM) Normal (non-filename) text. Global default, although everything should be something
or = (ORPHAN) Symbolic link pointing to an orphaned non-existent file
ow = (OTHER*WRITABLE) Directory that is other-writable (o+w) and not sticky
pi = (FIFO, PIPE) Named pipe (fifo file)
sg = (SETGID) File that is setgid (g+s)
so = (SOCK) Socket file
st = (STICKY) Directory with the sticky bit set (+t) and not other-writable
su = (SETUID) File that is setuid (u+s)
tw = (STICKY_OTHER_WRITABLE) Directory that is sticky and other-writable (+t,o+w)
*.extension = Every file using this extension e.g. \_.rpm = files with the ending .rpm

to make it show ALWAYS create a .bash_profile file in user directory
source ~/.bash_profile

OR

nano ~/.bash_profile

add

# Show always fullpath on terminal

export PS1='\u@\H [\w]\$ '

# or simply (CLARK PREFFERED)

export PS1='[\w]\$ '

PROMPTING
When executing interactively, bash displays the primary prompt PS1 when it is ready to read a command, and the secondary prompt PS2 when it needs more input to complete a command. Bash allows these prompt strings to be customized by
inserting a number of backslash-escaped special characters that are decoded as follows:
\a an ASCII bell character (07)
\d the date in "Weekday Month Date" format (e.g., "Tue May 26")
\D{format}
the format is passed to strftime(3) and the result is inserted into the prompt string; an empty format results in a locale-specific time representation. The braces are required
\e an ASCII escape character (033)
\h the hostname up to the first `.'
\H the hostname
\j the number of jobs currently managed by the shell
\l the basename of the shell's terminal device name
\n newline
\r carriage return
\s the name of the shell, the basename of $0 (the portion following the final slash)
\t the current time in 24-hour HH:MM:SS format
\T the current time in 12-hour HH:MM:SS format
\@ the current time in 12-hour am/pm format
\A the current time in 24-hour HH:MM format
\u the username of the current user
\v the version of bash (e.g., 2.00)
\V the release of bash, version + patch level (e.g., 2.00.0)
\w the current working directory, with $HOME abbreviated with a tilde
\W the basename of the current working directory, with $HOME abbreviated with a tilde
\! the history number of this command
\# the command number of this command
\$ if the effective UID is 0, a #, otherwise a $
\nnn the character corresponding to the octal number nnn
\\ a backslash
\[ begin a sequence of non-printing characters, which could be used to embed a terminal control sequence into the prompt
\] end a sequence of non-printing characters

PROXY

Sometimes there is proxy issues

# Manual PAC address

--proxy-pac-url=<pac-file-url>
--proxy-pac-url="http://FWDProxy.za.omlac.net/accelerated_pac_base.pac"

Git SSH Problem
When you have: ssh: connect to host ssh.github.com port 443: Bad file number
Open .gitconfig file and in the end put:

[url "https://github.com/"]
insteadOf = git://github.com/

If your company replaces the SSL certificate in User Settings, place following:
// Place your settings in this file to overwrite the default settings
{
"http.proxyStrictSSL": false,
"http.proxy": "http://127.0.0.1:3128" //your CNTLM
}

- git config --global http.proxy http://proxyuser:proxypwd@proxy.server.com:8080
  [br /] - change proxyuser to your proxy user
- change proxypwd to your proxy password
- change proxy.server.com to the URL of your proxy server
- change 8080 to the proxy port configured on your proxy server
- If you decide at any time to reset this proxy and work without proxy:
- Command to use:
- git config --global --unset http.proxy
- Finally, to check the currently set proxy:
- git config --global --get http.proxy

SOURCETREE
click 'remote'
host = bitbucket
preferred protocol = SSH
authentication = basic
username = x (even though you can login with clark.lin@native.co.za)
password = x

adding SSH Key to SSH agent

NEED TO DO BOTH SOURCETREE PUTTY KEY GENERATOR!!! AND FROM COMMANDLINE

to get ur ssh keys working in sourcetree, keep trying loading the key using the generated one from ssh-keygen,
and save public / private key

goto Tools->Options->

choose OpenSSH option under SSH Client Configuration
and use the openSSHKey you export from sourcetree keygen

=======================================================================
NVM

nvm install 8.1.2
nvm use 8.1.2
nvm -v

node -v

npm install gulp-cli -g

for every version of nvm use...
yo have to do a gulp install

run gitbash from folder

set PATH
setx PATH "%PATH%;./node_modules/.bin"

ALTERNATIVE OPTIONS??
%PATH%;.\node_modules\.bin;
export PATH="\$PATH:./node_modules/.bin"

============================================================================

# SSH

# Sourcetree

SSH

DOWNLOAD pageant - http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html
[br /]https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html

Create keys
generate public/private key with 'Putty Key Generator'
enter passphrase for generated public key
save public key (no extension)
save private key (has a .ppk extension)

then in pageant (accessed from toolbar)

- add the private key (.ppk)
- copy public key and add to Bitbucket

Bitbucket/github -> SSH Keys

- add the public key

get a repository link using ssh url from bitbucket/github
and sourcetree will prompt a request

# ========================================================================

HOW TO YSE SSH-AGENT TO CACHE YOUR SSH CREDENTIALS?

in bash:

ssh-agent

outputs (something similar), paste into agent.env

SSH_AUTH_SOCK=/tmp/ssh-gHnKm8KqfPhd/agent.9468; export SSH_AUTH_SOCK;
SSH_AGENT_PID=8708; export SSH_AGENT_PID;
echo Agent pid 8708;

Copy/paste the 2 first lines from above:

ssh-add .ssh/id_rsa

Identity added: .ssh/id_rsa (.ssh/id_rsa)'

ssh-add -l //list fingerprints of all identities

# ========================================================================

MAKE SURE when you install git, to choose SSH or OPENSSH method
(the example below chooses SSH)

# ========================================================================

NB!!! Git uses your windows user folder as the username by default
you need to edit this manually by using the bitbucket/github account details in the gitconfig

# ========================================================================

AUTOMATIC SETUP with PROFILE (version1)

add below to c:\users\(user folder)\.profile
===================================== DO NOT INCLUDING THIS LINE =====================================================

PATH="\$PATH:./node_modules/.bin"

# SSH Agent setup

env=~/.ssh/agent.env

agent_load_env () { test -f "$env" && . "$env" >| /dev/null ; }

agent_start () {
(umask 077; ssh-agent >| "$env")
. "$env" >| /dev/null ; }

agent_load_env

# agent_run_state: 0=agent running w/ key; 1=agent w/o key; 2= agent not running

agent_run_state=$(ssh-add -l >| /dev/null 2>&1; echo $?)

if [ ! "$SSH_AUTH_SOCK" ] || [ $agent_run_state = 2 ]; then
agent_start
ssh-add
elif [ "$SSH_AUTH_SOCK" ] && [ $agent_run_state = 1 ]; then
ssh-add
fi

unset env

===================================== DO NOT INCLUDING THIS LINE =====================================================

c:\users\(user folder)\.ssh\agent.env
===================================== DO NOT INCLUDING THIS LINE =====================================================

SSH_AUTH_SOCK=/tmp/ssh-7zgoHYgoiiAx/agent.9332; export SSH_AUTH_SOCK;
SSH_AGENT_PID=11648; export SSH_AGENT_PID;
echo Agent pid 11648;

===================================== DO NOT INCLUDING THIS LINE =====================================================

OR

# ========================================================================

AUTOMATIC SETUP with PROFILE (version2)

add below to c:\users\(user folder)\.profile
===================================== DO NOT INCLUDING THIS LINE =====================================================

PATH="\$PATH:./node_modules/.bin"

SSH_ENV="\$HOME/.ssh/environment"
GIT_SSH="/usr/bin/ssh.exe"

function start_agent {
echo "Initializing new SSH agent..."
/usr/bin/ssh-agent | sed 's/^echo/#echo/' > "${SSH_ENV}"
echo succeeded
chmod 600 "${SSH_ENV}"
. "\${SSH_ENV}" > /dev/null
/usr/bin/ssh-add;
}

# Source SSH settings, if applicable

if [ -f "${SSH_ENV}" ]; then
. "${SSH_ENV}" > /dev/null
#ps ${SSH_AGENT_PID} doesn't work under cygwin
ps -ef | grep ${SSH_AGENT_PID} | grep ssh-agent$ > /dev/null || {
start_agent;
}
else
start_agent;
fi

===================================== DO NOT INCLUDING THIS LINE =====================================================

c:\users\(user folder)\.ssh\environment

===================================== DO NOT INCLUDING THIS LINE =====================================================

SSH_AUTH_SOCK=/tmp/ssh-4B2j9n4cODCt/agent.7560; export SSH_AUTH_SOCK;
SSH_AGENT_PID=5648; export SSH_AGENT_PID;
#echo Agent pid 5648;

===================================== DO NOT INCLUDING THIS LINE =====================================================

# ========================================================================

SETTING UP PAGEANT
c:\Users\clark.lin\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\

create a shortcut of pageant and add it here

edit the target field and add link to keys after the path to pageant (dont wrap in "")
"C:\Program Files\PuTTY\pageant.exe" c:\Users\clark.lin\.ssh\puttygen-private.ppk

========================================================================
DOWNLOAD NVM here...
https://github.com/coreybutler/nvm-windows

delete: C:\Users<user>\AppData\Roaming\npm
uninstall node.js delete
========================================================================
========================================================================
VISUAL STUDIO CODE SETUP

"terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
"terminal.integrated.shellArgs.windows": ["--login","-i"]
========================================================================
========================================================================

SSH REPOSITORIES vs HTTPS

SSH method
SSH REPOSITORIES require public/private key pair,
the developer needs to be added as a trusted user on github/bitbucket by the administrator for a specific repository by sending the public key to be accepted.
the repository does public/private key comparisons so it checks the public key against a list of accepted users and then grants/denies authentication

with HTTPS method
the developer does not require permission to gain access to the repository
