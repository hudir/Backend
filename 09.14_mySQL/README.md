```sh
sudo mysql

show databases;
use databaseName;
show tables;

```

## set root password
```sh
ALTER USER 'root@localhost' IDENTIFIED WITH mysql_native_password BY 'mypassword';

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789'; FLUSH PRIVILEGES; 


exit

mysql -u root -p
```

## GUI Admin pannel (phpmyadmin)
```
sudo apt install phpmyadmin
## select apache2
## select password(recommened same root password for mysql)

sudo nano /etc/apache2/apache2.conf
```

go to the last line add the following
```
Include /etc/phpmyadmin/apache.conf
Include /etc/phpmyadmin/apache.conf
```

Ctrl + x to exit 
```
sudo systemctl restart apache2.service
```
if there is no php on your linux, run
```
sudo apt-get install php
```

http://localhost/phpmyadmin