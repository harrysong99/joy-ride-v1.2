# Joy Ride v1.2

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
    "_id": "some uuid",
    "name": "John Doe"
    "email": "example@berkeley.edu"
    "password": "password"
    "serviceTime": 1
    "driver": true
    "location": 5
    "__v": 0
}
```

| API             | getUserByEmail                    |
| --------------- | --------------------------------- |
| Url             | `/api/users/:email`               |
| Method          | Get                               |
| Params          | email                             |
| Request Example | curl IP/api/users/example@foo.com |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some uuid",
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
        "_id": "some uuid",
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

| API             | updateUserLocation                           |
| --------------- | -------------------------------------------- |
| Url             | `/api/users/location/:email/:location`       |
| Method          | Put                                          |
| Params          | email, location                              |
| Request Example | curl IP/api/users/location/example@foo.com/4 |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some uuid",
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

| API             | updateUserDriver                                 |
| --------------- | ------------------------------------------------ |
| Url             | `/api/users/driver/:email/:driver`               |
| Method          | Put                                              |
| Params          | email, driver                                    |
| Request Example | curl IP/api/users/location/example@foo.com/false |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some uuid",
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

| API             | updateUserServiceTime                        |
| --------------- | -------------------------------------------- |
| Url             | `/api/users/location/:email/:serviceTime`    |
| Method          | Put                                          |
| Params          | email, serviceTime                           |
| Request Example | curl IP/api/users/location/example@foo.com/2 |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "some uuid",
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

| API             | deleteUser                        |
| --------------- | --------------------------------- |
| Url             | `/api/users/:email`               |
| Method          | Delete                            |
| Params          | email                             |
| Request Example | curl IP/api/users/example@foo.com |

Response Example

```
{
    "success": true,
}
```

| API             | getDidSurvey                                |
| --------------- | ------------------------------------------- |
| Url             | `/api/users/didSurvey/:email`               |
| Method          | Get                                         |
| Params          | email                                       |
| Request Example | curl IP/api/users/didSurvey/example@foo.com |

Response Example

```
{
    "success": true,
    "didSurvey": false
}
```

| API             | updateDidSurvey                             |
| --------------- | ------------------------------------------- |
| Url             | `/api/users/didSurvey/:email`               |
| Method          | Put                                         |
| Params          | email                                       |
| Request Example | curl IP/api/users/didSurvey/example@foo.com |

Response Example

```
{
    "success": true,
    "userData": {
        "_id": "someuuid",
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
