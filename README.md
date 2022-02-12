# DevDojo API

> Backend API for DevDojo application, which is a bootcamp directory website built using Node.js, Express and MongoDB

## Usage :

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies :

```
npm install
```

## Install Dev Dependencies Globally :
```
npm install -g nodemon
```

## Scripts Configuration :

```javascript
// Inside package.json file

// For Windows OS:
"scripts": {
    "start": "SET NODE_ENV=production & node server",
    "server": "nodemon server"
  },
  
// For Mac/Linux OS:
"scripts": {
    "start": "NODE_ENV=production node server",
    "server": "nodemon server"
  },
```

## Run App :

```
# Run in dev mode
npm run server

# Run in prod mode
npm run start
```

## Database Seeder :

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```
