#!/bin/bash 

#da permiso para todo en el directorio express-app
 sudo chmod -R 777 /home/ec2-ubuntu/techflare-backend 

#navega hacia nuestro directorio de trabajo donde tenemos todos nuestros archivos de github 
cd /home/ec2-ubuntu/techflare-backend 

#agrega npm y node a la ruta 
export NVM_DIR= " $HOME /.nvm" 
 [ -s " $NVM_DIR /nvm.sh" ] && \. " $NVM_DIR /nvm.sh"   # carga nvm
 [ -s " $NVM_DIR /bash_completion" ] && \. " $NVM_DIR /bash_completion "   # carga nvm bash_completion (el nodo ahora está en la ruta) 

#instala módulos de nodo
 npm install 

#inicia nuestra aplicación de nodo en segundo plano
 npm start > app.out.log 2> app.err.log < /dev/null &