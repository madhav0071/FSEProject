# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: The user's first name (minimum 3 characters, required)
  - `lastname`: The user's last name (minimum 3 characters, optional)
- `email`: The user's email address (must be a valid email, required)
- `password`: The user's password (minimum 6 characters, required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object with the following properties:
- `email`: The user's email address (must be a valid email, required)
- `password`: The user's password (minimum 6 characters, required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

# User Profile Endpoint

## GET /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Body**: A JSON object containing the user details.

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Authentication required"
}
```

# User Logout Endpoint

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Responses

#### Success
- **Status Code**: 200 OK
- **Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "User Logged Out Successfully"
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Authentication required"
}
```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

### Request Body
The request body should be a JSON object with the following properties:
- `fullname`: An object containing:
  - `firstname`: The captain's first name (minimum 3 characters, required)
  - `lastname`: The captain's last name (minimum 3 characters, optional)
- `email`: The captain's email address (must be a valid email, required)
- `password`: The captain's password (minimum 6 characters, required)
- `vehicle`: An object containing:
  - `color`: The vehicle's color (minimum 3 characters, required)
  - `plate`: The vehicle's plate number (minimum 3 characters, required)
  - `capacity`: The vehicle's capacity (minimum 1, required)
  - `vehicleType`: The type of vehicle (must be one of 'car', 'motorcycle', 'auto', required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Responses

#### Success
- **Status Code**: 201 Created
- **Body**: A JSON object containing the authentication token and captain details.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "ltd": null,
      "lng": null
    }
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```
