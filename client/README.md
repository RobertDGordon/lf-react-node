# React Notification Form
This application is a client notification form that connects to an API which returns a list of supervisors the user can then select from and fill out the form to post a notification to the API.

## Run Local
NodeJS must be installed. See: https://nodejs.org/en/download/

From the command line:
```
npm install
```

Then run the client:
```
npm start
```

Server may then be accessed at:
```
localhost:3000/
```

## Run with Docker
Docker must be installed and running.  See: https://docs.docker.com/engine/install/

- Step 1, build image from command line:
```
docker build . -t client
```

- Step 2, upon successful image build, from command line:
```
docker run -i -p 3000:3000 client
```

- Client may then be accessed at:
```
localhost:3000/
```

- Step 3, shut down client, from Docker Desktop, or from command line:
```
docker rm -f client
```

## Alternative, run server with client by ```docker-compose```
Run both server and client at the same time, See: https://github.com/RobertDGordon/lf-react-node#readme