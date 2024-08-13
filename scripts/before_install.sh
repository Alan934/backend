#!/bin/bash 

#descargar node y npm
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash 
. ~/.nvm/nvm.sh 
nvm install node 

#crear nuestro directorio de trabajo si no existe
 DIR= "/home/ec2-ubuntu/express-app" 
if [ -d " $DIR " ]; then 
  echo  " ${DIR} existe" 
else 
  echo  "Creando directorio ${DIR}
   " mkdir  ${DIR} 
fi