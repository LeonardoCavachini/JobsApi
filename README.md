# Jobs

Jobs is a simple APi where the user are able to register or apply on a vacancy, if the user are an admin user you can leave a comment.

## Requirements

- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)
- [NodeJs](https://nodejs.org/en/)
- [Git](https://git-scm.com/)

## Setup

- Clone this repository: `git clone https://github.com/LeonardoCavachini/JobsApi.git`;
- Enter the recently created folder;
- Run: `npm install`.

## Running on development
- Raise up DB with docker:
```
docker-compose up

```

- To run the application in development mode use the following command:

```
npm start

```

## Endpoints
- create admin user (POST)

```
http://localhost:3001/admin

body = { "name": "John", "email":"John@john.com", "phone":123456, "cpf":123456  }

```

- Login admin user (POST)

```
http://localhost:3001/admin/login

body = { "email":"John@john.com", "cpf":123456 }

```

- Create candidate user (POST)

```
http://localhost:3001/candidate

body = { "name": "John", "email":"John@john.com", "phone":123456, "cpf":123456 };

```

- Create vacancy (POST)

```

http://localhost:3001/vacancy

body = { "name":"Waiter", "level":"1 year of experience", "adminId":1 };

```
- Show vacancies (GET)

```

http://localhost:3001/vacancy 

http://localhost:3001/vacancy/:id

```

- Add candidate on vacancy (POST)

```
http://localhost:3001/vacancy/:id/add-candidates

body = { "candidateId":1 };

```