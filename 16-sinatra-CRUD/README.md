# Sinatra CRUD

## Questions

- GET/POST
    - different HTTP methods


## Controller Actions

- Index
    - a READ controller action that responds with a list of "all the things" 
- Show
    - another READ controller action but rather than responding with all the things it will respond with a single thing
- New
    - part of our CREATE. This controller action is a READ request for a new form 
- Create
    - second part of our CREATE. This controller action is an actual CREATE. Which means that it is a POST request. 
- Edit
    - first part of our UPDATE. This controller action is a GET request because our user is simply getting our edit form. 
- Update
    - last step of our UPDATE. This controller action will respond to a PATCH/PUT request and use the information from the edit form to edit the instance in question
- Delete

## HTTP Methods

- GET
- POST
- PATCH/PUT
- DELETE