#!/bin/bash

filehome=`cd "${0%/*}" >/dev/null 2>&1;pwd`
currenthome=`pwd`
username=`w | grep ".*bash TaskA.sh" | cut -d " " -f 1`

function master(){
if [ "$username" == "root" ];then
	echo -e "Current user:\033[32mroot\033[0m"
	echo -e "Current user mian directory:\033[32m/root\033[0m"
else
	echo -e "Current user:\033[32m$username\033[0m"
	if [ -e "/home/$username" ];then
		echo -e "Current user mian directory:\033[32m/home/$username\033[0m"
	else
		echo -e "\033[2;31mNot found current user mian directory !\033[0m"
	fi
fi
}

if [ $filehome == "$currenthome" ];then
	master
else
	echo -e "\033[31mError, please switch to \033[32m$filehome\033[0m \033[31mdirectory execution\033[0m \033[32mbash TaskA.sh\033[0m"
fi
