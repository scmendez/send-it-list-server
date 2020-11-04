# Send-It List

## Description

Climbers are able to keep track of routes they are projecting, want to climb, and have climbed using information from the Mountain Project API.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving routes to my three lists
-  **Login:** As a user I can login to the platform so that I can see my lists
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Search new routes** As a user I want to be able to search routes on a map and add them to my "Want to climb" list
-  **Want to climb** As a user I want to keep a list of routes that I hope to climb in the future
-  **Projects** As a user I want to keep track of routes I've attempted, including personal notes
-  **Have climbed** As a user I want to see a list of routes I have sent
-  **Route detail page** As a user I want to see details of the routes and additional information depending on the list it's in

## Backlog

Inactivity alert:
- Sending messages to a predetermined number if a solo climber hasn't checked back in within a set period of time
  
# Client

## Routes

- / - Homepage
- /signup - Signup form
- /login - Login form
- /profile - user profile with four links leading to Projects, Want to climb, Have climbed, Search new routes
- /current-projects - list of routes working on
- /future-projects - list of routes to work on in the future
- /sent-projects - list of routes already sent
- /(current/future/sent)/projects/route - details of clicked on route
- /search-new-routes - find new routes on map to add to /future-projects
- 404

## Pages

- Home Page (public)
- Sign in Page (public)
- Log in Page (public)
- Profile Page (user only)
- Project Lists Pages (user only)
- Route detail Page (user only)
- Search new routes Page (public [leads to sign up page] & user)
- 404 Page (public)

## Components

- Search Routes component
  - Input: location & type
  - Output: list of routes that match that location & type
- Route component
  - Output: route name  

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
```

ClimbingRoute model

```
createdBy - ObjectID<User>
routeId - id (db)
name - String 
type - String (db)
rating - String (api)
pitches - Number (api)
location - String (db)
personalNotes - String
dateAccomplished - Date
listType - String, Enum ['current', 'future', 'sent']

```

## API Endpoints/Backend Routes

- POST /auth/signup
  - body:
    - username
    - email
    - password
- POST /auth/login
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET /user/project
  - body:
    - listType
    - route
- POST /user/project
  - body:
    - personalNotes
    - dateAccomplished
- DELETE /user/project/delete
  - body: (empty)
  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
