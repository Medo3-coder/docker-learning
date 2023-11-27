//make sync from local to container hot reload  (bind mount) 2 way binding 
docker run --name express-node-appcontainer -v D:\Docker-in-practice\node-app:/app -d -p 4000:4000 express-node-app


//to get rid of write full path use ${pwd}
docker run --name express-node-app-container -v ${pwd}:/app:ro -d -p 4000:4000 express-node-app 


// 1 way binding if change happens in container read only 
docker run --name express-node-appcontainer -v D:\Docker-in-practice\node-app:/app:ro -d -p 4000:4000 express-node-app


// anonymous volumes -> هتحدد فولدر مش هيحصل في تغير في الكونتيتر مهما حصل في الالبيكشن 
docker run --name express-node-app-container -v ${pwd}:/app:ro -v /app/node_modules -d -p 4000:4000 express-node-app

//remove container 
docker rm express-node-app-container -f

//to see running containers
docker ps 

//to execute command inside container
docker exec -it express-node-appcontainer  bash  


//to see logs in container
docker logs express-node-appcontainer


//to build image 
docker build -t express-node-app .




--Definition of volume in Dockerfile

In the context of Docker, a volume is a persistent storage location that exists outside of the container. 
Volumes are useful for storing data that needs to persist even if the container is stopped or removed



//Docker compose
Docker Compose is a tool that was developed to help define and share multi-container applications. 
With Compose, we can create a YAML file to define the services and with a single command, 
can spin everything up or tear it all down.



// production
 docker-compose -f docker-compose.prod.yml up -d 


 // development
 docker-compose -f docker-compose.dev.yml up -d


 // run main docker-compose and choose which environment to run prod/dev  ep 11



 //to take last changes from production 
 docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build


 //context 
  context defines either a path to a directory containing a Dockerfile,




# ARG NODE_ENV 
# RUN if [ "$NODE_ENV" = "production" ]; \
# 		then npm install --only=production; \
# 		else npm install; \
# 		fi