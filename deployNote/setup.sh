#!/bin/bash
# stop execution upon exception
set -e

echo "Update repository"
sudo apt-get update

sudo echo "Setting Up Bash"
# add option to /etc/inputrc to enable case-insensitive tab completion for all users
sudo echo 'set completion-ignore-case On' >> /etc/inputrc
# may have to use this instead if you are not a superuser:
sudo echo 'set completion-ignore-case On' | sudo tee -a /etc/inputrc


echo "Setting Up Vim"
# copy vimrc to local user
sudo cp ./configs/.vimrc ~/.vimrc 
# copy vimrc to root
sudo cp ./configs/.vimrc /root/.vimrc

echo "Setting Up Git"
git config --global core.editor "vim"

echo "Installing Nodejs and npm"
sudo apt-get install nodejs npm

echo "Setting Up Nginx"
sudo apt-get install nginx
# copy nginx config
sudo cp ./configs/nginx.conf /etc/nginx/nginx.conf
echo "Adding and enabling nginx to system service"
sudo nginx -s reload
sudo systemctl enable nginx
sudo systemctl start nginx

echo "Installing Certbot for https"
sudo apt-get install certbot
sudo apt-get install python3-certbot-nginx
