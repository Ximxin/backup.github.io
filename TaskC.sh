#!/bin/bash

function install_crond(){
#判断系统是否为CentOS和CentOS版本
if [ "`grep "CentOS" /etc/*release`" ];then
YUM_=yum
OS=CentOS
	if [ ! -z "`grep "CentOS release 6.[0-9] " /etc/*release`" ];then
	  services=service
	   services_crond=service crond restart
	    cronds=crond
	    else
	    cronds=crond
	   services=systemctl
	  services_crond=systemctl restart crond
	fi
else
OS=Ubuntu&Debian
services=service
cronds=cron
YUM_=apt-get
fi

#写入Search crontabs到crontab测试
echo '# Search crontabs' >/var/baks/test.cron
crontab /var/baks/test.cron

#检查是否安装crond和crontabs，未安装则安装该软件
if [ -z "`$services $cronds | grep "Usage:.*"`" ] && [ -z "`crontab -l | grep "Search crontabs"`" ];then
	if [ $OS == "CentOS" ];then
	  $YUM_ install -y vixie-cron crontabs
	   $services_crond
	    elif [ $OS == "Ubuntu&Debian" ];then
	   $YUM_ install -y cron cronrabs
	  $services cron restart
	fi
fi
}

#判断TaskC.sh是否存在/bin目录，不存在时移动到/bin目录并给予执行权限
if [ ! -e /bin/TaskC.sh ];then
cd "$(dirname "$0")"
chmod +x TaskC.sh
mv TaskC.sh /bin
fi

time_=`date +%Y%m%d` #时间变量
tar zcvf ${time_}_etc.tar.gz /etc/* #压缩文件

#判断/var/baks文件夹是否存在，不存在时创建/var/baks文件夹
if [ ! -e /var/baks ];then
mkdir -p /var/baks
fi

mv ${time_}_etc.tar.gz /var/baks #移动压缩文件到/var/baks文件夹

#判断是否备份成功并写入log日志文件
if [ ! -e /var/baks/${time_}_etc.tar.gz ];then
echo "${time_}备份失败！" >>/var/baks/backup_etc.log
else
echo "${time_}备份成功！" >>/var/baks/backup_etc.log
fi

#写入crontab自动执行任务。
echo '0 8 * * * /bin/TaskC.sh' >/var/baks/test.cron
crontab /var/baks/test.cron
exit 2;
