# NodeJS/Express API
This application serves a client which posts contact information to a supervisor.  The list of supervisors is accessed from a third party endpoint, the response is transformed, and then served to the client.

## Run Local
NodeJS must be installed. See: https://nodejs.org/en/download/

From the command line:
```
npm install
```

Then run the server:
```
npm run server
```

Server may then be accessed at:
```
localhost:5000/api/
```

## Run with Docker
Docker must be installed and running.  See: https://docs.docker.com/engine/install/

Step 1, build image from command line:
```
docker build . -t server
```

Step 2, upon successful image build, from command line:
```
docker run -i -p 5000:5000 server
```

Server may then be accessed at:
```
localhost:5000/api/
```

Step 3, shut down server, from Docker Desktop, or from command line:
```
docker rm -f server
```

Alternative, run server with client by ```docker-compose``` See: https://github.com/RobertDGordon/lf-react-node#readme

## Endpoints
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