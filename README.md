# Article Base - SailsJS based application

- npm install -g sails
- sails new <projectname>
- Run the app: sails lift
- Create new api: sails generate api <apiname>
- Set the migration in "~/config/models.js"
- Track file updates - Install nodemon - npm install -g nodemon
- Adding data using Blueprints => http://localhost:1337/article/create?title=Article2&body=My Second Post
- MongoDB adapter - npm install sails-mongo --save
- Edit "~/config/connections.js"
- Update "someMongodbServer" to "<someconnname>" and update the connection string to the required values
- Update the model - "api/models/Article.js" and add the "connection" as "<someconnname>"
- Check for http://localhost:1337/article | empty, can add data using blueprints
- Add the bootstrap Layout
- Add the necessary controller - actions, views
- sails the app 
