# CRUD Backend with MongoDB, Express, and Node.js

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This is a simple CRUD (Create, Read, Update, Delete) backend application built using MongoDB, Express, and Node.js. It provides a RESTful API for managing a collection of items in a MongoDB database.

## Features
- Create a new item
- Read an existing item
- Update an existing item
- Delete an existing item

## Technologies
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js installed on your local machine
- MongoDB instance running (either locally or using a cloud service like MongoDB Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clonehttps://github.com/Borngod/simpleCRUD.git
   cd simpleCRUD
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

 

### Running the Application
1. Start the server:
   ```bash
   npm run serve
   ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints
Here are the available API endpoints for managing items.

### Create a new item
- **URL:** `/items`
- **Method:** `POST`
- **Body Parameters:**
  ```json
  {
    "name": "Item Name",
    "description": "Item Description"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "item-id",
    "name": "Item Name",
    "description": "Item Description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

### Get all items
- **URL:** `/items`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "item-id",
      "name": "Item Name",
      "description": "Item Description",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
  ```

### Get a single item
- **URL:** `/items/:id`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "_id": "item-id",
    "name": "Item Name",
    "description": "Item Description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

### Update an item
- **URL:** `/items/:id`
- **Method:** `PUT`
- **Body Parameters:**
  ```json
  {
    "name": "Updated Item Name",
    "description": "Updated Item Description"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "item-id",
    "name": "Updated Item Name",
    "description": "Updated Item Description",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
  ```

### Delete an item
- **URL:** `/items/:id`
- **Method:** `DELETE`
- **Response:**
  ```json
  {
    "message": "Item deleted successfully"
  }
  ```

## Contributing
If you want to contribute to this project, feel free to submit issues or pull requests. Contributions are always welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
