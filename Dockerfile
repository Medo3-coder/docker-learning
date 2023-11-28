
FROM node:14 as base

WORKDIR /app
COPY package.json .
RUN npm install 
COPY . .       
EXPOSE 4000
CMD [ "npm" , "run" , "start-dev" ] 


# FROM node:14 as development

# WORKDIR /app 
# COPY package.json .
# RUN npm install 
        # COPY . . means :  copy all my files inside container
# COPY . .  
# EXPOSE 4000  
# CMD [ "npm" , "run" , "start-dev" ]



# FROM node:14 as production

# WORKDIR /app 
# COPY package.json .
# RUN npm install  --only=production
# COPY . .  
# EXPOSE 4000  
# CMD [ "npm" , "start" ]




# dockerfile: build to run image then image i can run container with it



