          INSTRUCTIONS FOR USING SWAGGER

### LINK: https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4

###1 Install Swagger JS Doc and Swagger UI  Express
  npm install swagger-jsdoc swagger-ui-express

###2 Add code into app.js

  const swaggerJSDoc = require("swagger-jsdoc");
  const swaggerUi = require("swagger-ui-express");

  const swaggerDefinition = {
    info: {
      title: "Calendar",
      version: "1.0.0",
      description: "Internship Program At CES",
    },
    host: `localhost:${port}`,
    basePath: "/",
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        name: "Authorization",
        scheme: "bearer",
        in: "header",
      },
    },
  };

  const options = {
    swaggerDefinition,
    apis: ["./routes/*.js"],
  };


  const swaggerSpec = swaggerJSDoc(options);

  app.get("/swagger.json", (request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.send(swaggerSpec);
  });

  ##Note: URL Path: /api-docs
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

###3  Object @Swagger 
Before you could write your routes, referencing your object, you needed to go to the actual object declaration file and tell Swagger what made up your object

/**
 *  @swagger
 *  definitions:
 *  (object-name) Ex: User:
 *  type: object
 *  properties:
 *    (insert object's properties here)
 *    Ex: username: type: string
 *    required:
 *      (insert object's properties you need require)
 *      Ex: - username
 *  methods:
 *    (insert object's method that you code)
 *    Ex: emailValidator
 */

###4 Route Schema @Swagger
The next thing to cover is writing the Swagger documentation for each of the routes.

For Example: Route: Login
/**
* @swagger
* /login:
*   post:
*     tags:
*       - User
*     name: Login
*     summary: Logs in a user
*     consumes:
*       - application/json
*     parameters:
*       - name: body
*         in: body
*         schema:
*           $ref: '#/definition/User'
*           type: object
*           properties:
*             username:
*               type: string
*             password:
*               type: string
*               format: password
*         required:
*           - username
*           - password
*     responses: 
*       200:
*         description: User found and logged in successfully
*       400:
*          desxription: Username or password is incorrect
*/

For example: Route Checked Day

/**
* @swagger
* /checked:
*   post:
*     tags:
*       - CheckedDay
*     name: Checked Day in Habit
*     summary: Checked Day in Habit
*     security:
*       - bearerAuth: []
*     consumes:
*       - application/json
*     produces:
*       - application/json
*     parameters:
*       - in: query
*         name: habitID, dayChecked, note, color
*         schema:
*           type: String, Date, String, String
*         required:
*           - dayChecked, Node
*     responses:
*       200:
*         description: Checked day is success
*         schema:
*           $ref: '#/definition/CheckedDay'
*       400:
*         description: Checked day is fail
*/

same for other paths