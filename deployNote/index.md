# Ubuntu Server Setup
Run **setup.sh** to install necessary tools for hosting a website.
## What the script does

#### Update repository
Update linux package repository, so the install commands will intall the latest version of the package/software

#### Setting up bash and vim (can be ignored)
- configure the bash to case-insensitive completion
- copy some common configuration for vim editor

#### Installing softwares
- Install nodejs and npm, this can also be other language for backend.
- Install Ngninx (web engine)
  - copy the template configuration file of nginx to its location.
  - let nginx reload the configuration file
  - add nginx to the system service, so it starts when the machine starts
  - start the nginx service
- Intall Certbot
  - Certbot is a free certification tool that can acquire a certificate and adds secure channel (enabling https) for the website.

#### Add backend to system service (for linux)
Backend script needs to actively listening on the port host the website, we can't let the terminal open to keep the script running.
One way to solve this is to setup a system service that runs the backend script.

###### Create a service file
1. create a service file that with the extension of **.service**, (i.e.: portfolio.service)
2. a template of the service file is available in the configs directory
3. Important fields in the file:
   1. **WorkingDirectory**: The absolute path to the directory that contains the backend script
   2. **ExecStart**: The absolute path to the directory of the backend software (i.e. /usr/bin/node  for backend hosted with nodejs) 

After created the service file, copy it to the directory **/lib/systemd/system/**, such as following
```bash
sudo cp ./configs/portfolio.service /lib/systemd/system/
```
The directory contains the services files that the system needs to run, after adding the file to the directory, we need to let the system know a new service file has been added.

**systemctl** is the command that is used to managing system services.

Here are some useful commands for adding a new service after adding a new service file(all need admin privilege):

```bash
###### Run the following 3 to start the new backend service #####
# update the service list, including new services and changed service files
sudo systemctl daemon-reload
# add the service to startup
sudo systemctl enable $service_name
# start the service
sudo systemctl start $service_name
###### Prey the backend starts! #####

##### just some other useful commands #####
# restart the service
sudo systemctl restart $service_name
# stop the service
sudo systemctl stop $service_name
```

## Enable https
After successfully host the website through http using nginx, run the following command to enable https:
```bash
sudo certbot --nginx
```

GGGGGGG
