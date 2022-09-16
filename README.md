# React Client - NodeJS/Express API 
This full stack application is a client notification form that connects to an API which returns a list of supervisors the user can then select from and fill out the form to post a notification to the API.

## Docker - Run server with client by ```docker-compose```
Docker must be installed and running.  See: https://docs.docker.com/engine/install/

Run both server and client at the same time, from command line:
```
docker-compose up
```

## Run Local
NodeJS must be installed. See: https://nodejs.org/en/download/

Client, see: https://github.com/RobertDGordon/lf-react-node/tree/main/client#readme

Server, see: https://github.com/RobertDGordon/lf-react-node/tree/main/server#readme

## API Endpoints
1. GET /api/supervisors
2. POST /api/submit

### GET /api/supervisors
Response Body:
```
    {
        [
            "jurisdiction - lastName, firstName"
        ]
    }
```

### POST /api/submit
Request Body:
```
    {
        firstName: "", *required
        lastName: "", *required
        email: "",
        phoneNumber: "",
        notifyBy: "",
        Supervisor: "" *required
    }
```