# Joy Ride v1.2

https://joyride21.herokuapp.com/

A ride sharing platform for college students to make carpooling easy and convenient

## How to Run Locally

1. git clone this repository
2. run 'npm install' in root directory to make sure everything is setup
3. create 'credentials.json' in root directory

```
{
    "username": "",
    "password": "",
    "dbname": "joy-ride",
    "secretOrKey": ""
}
```

4. run 'npm install' in client directory to install dependencies
5. run 'npm run dev' to host the website locally

## How to Load in Chrome Extension

1. run 'npm run build'
2. open chrome browser and navigate to chrome://extensions/
3. turn on developer mode and click load unpacked
4. select joy-ride repo and make sure to select 'build' folder
5. (for now) run 'npm run dev' in joy-ride repo to host website locally

---

## API Documentation

---

### User Routes

| API             | login                   |
| --------------- | ----------------------- |
| Url             | `/api/users/login`      |
| Method          | Post                    |
| Params          |                         |
| Request Example | curl IP/api/users/login |

Response Example

```
{
    "success": true,
    "token": "Bearer + token..."
}
```

Note:

```
{
    "email": "example@foo.com"
    "password": "example&password+1234"
}
```

| API             | register                   |
| --------------- | -------------------------- |
| Url             | `/api/users/register`      |
| Method          | Post                       |
| Params          |                            |
| Request Example | curl IP/api/users/register |

Response Example

```
{
    "_id": "some-uuid",
    "name": "John Doe"
    "email": "example@berkeley.edu"
    "password": "password"
    "serviceTime": 1
    "driver": true
    "location": 5
    "__v": 0
}
```

| API             | getUserById                    |
| --------------- | ------------------------------ |
| Url             | `/api/users/id/:id`            |
| Method          | Get                            |
| Params          | id                             |
| Request Example | curl IP/api/users/id/some-uuid |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 1
        "driver": true
        "location": 5
        "__v": 0
    }
}
```

| API             | getUserByEmail                          |
| --------------- | --------------------------------------- |
| Url             | `/api/users/email/:email`               |
| Method          | Get                                     |
| Params          | email                                   |
| Request Example | curl IP/api/users/email/example@foo.com |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 1
        "driver": true
        "location": 5
        "__v": 0
    }
}
```

| API             | getUserByName                    |
| --------------- | -------------------------------- |
| Url             | `/api/users/`                    |
| Method          | Get                              |
| Query           | name                             |
| Request Example | curl IP/api/users/?name=John Doe |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 1
        "driver": true
        "location": 5
        "__v": 0
    }
}
```

| API             | updateUser                                 |
| --------------- | ------------------------------------------ |
| Url             | `/api/users/update`                        |
| Method          | Put                                        |
| Body            | name, email, location, serviceTime, driver |
| Request Example | curl IP/api/users/update                   |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "5f751f04dbcd9d5417cf20df",
        "name": "John Doe",
        "email": "john@google.com",
        "password": "password",
        "serviceTime": 3,
        "driver": false,
        "location": 1,
        "didSurvey": false,
        "__v": 0
    }
}
```

| API             | updateUserLocation                     |
| --------------- | -------------------------------------- |
| Url             | `/api/users/location/:id/:location`    |
| Method          | Put                                    |
| Params          | id, location                           |
| Request Example | curl IP/api/users/location/some-uuid/4 |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 1
        "driver": true
        "location": 4
        "__v": 0
    }
}
```

| API             | updateUserDriver                           |
| --------------- | ------------------------------------------ |
| Url             | `/api/users/driver/:id/:driver`            |
| Method          | Put                                        |
| Params          | id, driver                                 |
| Request Example | curl IP/api/users/location/some-uuid/false |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 1
        "driver": false
        "location": 4
        "__v": 0
    }
}
```

| API             | updateUserServiceTime                     |
| --------------- | ----------------------------------------- |
| Url             | `/api/users/serviceTime/:id/:serviceTime` |
| Method          | Put                                       |
| Params          | id, serviceTime                           |
| Request Example | curl IP/api/users/location/some-uuid/2    |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe"
        "email": "example@foo.com"
        "password": "password"
        "serviceTime": 2
        "driver": true
        "location": 4
        "__v": 0
    }
}
```

| API             | deleteUser                  |
| --------------- | --------------------------- |
| Url             | `/api/users/:id`            |
| Method          | Delete                      |
| Params          | id                          |
| Request Example | curl IP/api/users/some-uuid |

Response Example

```
{
    "success": true,
}
```

| API             | getDidSurvey                          |
| --------------- | ------------------------------------- |
| Url             | `/api/users/didSurvey/:id`            |
| Method          | Get                                   |
| Params          | id                                    |
| Request Example | curl IP/api/users/didSurvey/some-uuid |

Response Example

```
{
    "success": true,
    "didSurvey": false
}
```

| API             | updateDidSurvey                       |
| --------------- | ------------------------------------- |
| Url             | `/api/users/didSurvey/:id`            |
| Method          | Put                                   |
| Params          | id                                    |
| Request Example | curl IP/api/users/didSurvey/some-uuid |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some-uuid",
        "name": "John Doe",
        "email": "example@foo.edu",
        "password": "hashedpassword",
        "serviceTime": 2,
        "driver": false,
        "location": 4,
        "didSurvey": true,
        "__v": 0
    }
}
```

| API             | updateEveryDidSurvey             |
| --------------- | -------------------------------- |
| Url             | `/api/users/everyDidSurvey`      |
| Method          | Put                              |
| Params          |                                  |
| Request Example | curl IP/api/users/everyDidSurvey |

Response Example

```
{
    "success": true,
    "msg": "Thank you for completing the survey!"
}
```
