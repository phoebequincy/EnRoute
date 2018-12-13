# OnRoute

[Deployed link](http://google.com/)

### Wireframes
[Wireframes]()

### A style guide

[Color Scheme](/Users/phoebe.quincy/Desktop/g106/Q2/onroute/On Route Style Guide.pdf)


### Planning
<link href="https://trello.com/b/PIQdWpm5/onroute"


### Schema/ERD for Database
[ERD]()

### Server Routes Plan
People
POST /api/signup - Create a new user
POST /api/login - User login
GET /api/users/:id - Retrieve user information
PATCH /api/users/:id - Update a single user
DELETE /api/users/:id - Delete a user account


Vehicles
POST /api/ambulance - Create a new ambulance
GET /api/ambulance - Retrieve all ambulances
GET /api/ambulance/:id - Retrieve a single ambulance
PATCH /api/ambulance/:id - Update a single ambulance
DELETE /api/ambulance/:id - Delete an ambulance


Events
GET /api/events/:id/locations/:type - Retrieve an emergency event location
POST /api/events/:id/locations/:type - Post an emergency event location
PATCH /api/events/:id/locations/:type - Update an emergency event location

Stretch:

Messages
GET /api/messages/:id/messages/:type - Retrieve a message
POST /api/messages/:id/messages/:type - Post a message
PATCH /api/messages/:id/messages/:type - Update a message
