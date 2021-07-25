# Cat Card Application

Some of libraries and packages in the given code was outdated and deprecated. Therefore, I replaced that with new packages. Details are mentioned in below table. 

| Previous Package   |      New Package      |  Reason to change |
|----------|:-------------:|------:|
|request |  axios |“request” package is deprecated |
|@mapbox/blend |    sharp   |“@mapbox/blend” package was last updated in 3 years ago.   And it is not supporting for node newer versions. |
|dotenv |  |Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env |


## How to run the Programme

### Prerequisite 
Programme has been written in Node.js firstly, install node v14.2.0

Following node packages used in solution 

* axios: "^0.21.1",
* dotenv: "^10.0.0",
* minimist: "^1.2.5",
* sharp: "^0.28.3"


Firstly, run npm install in terminal
```
npm install
```
Secondly, run app.js in root folder
```
node app.js
```

# Note 
### Same application I refactor according to clean architecture 
https://github.com/dinukaw007/cat-card-application
