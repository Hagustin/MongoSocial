# MongoSocial API 🚀

MongoSocial is a RESTful API built with Express.js, MongoDB, and Mongoose, designed for a social networking platform. It supports user management, thought sharing, reactions, and friend lists. This project demonstrates CRUD operations, relational data management, and NoSQL database integration.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Walkthrough Video](#walkthrough-video)
- [License](#license)

## Installation ⚙️

1. Clone the repository:

**HTTPS**
```bash
   git clone https://github.com/Hagustin/MongoSocial.git
   cd mongosocial
```
**SSH**
```bash
   git clone git@github.com:Hagustin/MongoSocial.git
   cd mongosocial

```

2. Install dependencies:
```bash
   npm install
```

3. Compile TypeScript files:
```bash
   npm build
```

4. Seed the database:
```bash
   npm run seed
```

5. Start the server:
```bash
   npm run start
```

## Usage 🖥️

Use Insomnia, Postman, or any API testing tool to test the following routes.

## API Endpoints 📡

### **Users**
- `GET /api/users` - Fetch all users.
- `GET /api/users/:id` - Fetch a single user by ID.
- `POST /api/users` - Create a new user.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId` - Add a friend.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend.

### **Thoughts**
- `GET /api/thoughts` - Fetch all thoughts.
- `GET /api/thoughts/:id` - Fetch a single thought by ID.
- `POST /api/thoughts` - Create a new thought.
- `PUT /api/thoughts/:id` - Update a thought by ID.
- `DELETE /api/thoughts/:id` - Delete a thought by ID.

### **Reactions**
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction.

## Technologies Used 🛠️
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Languages:** TypeScript, JavaScript
- **Tools:** Insomnia, Postman, MongoDB Compass

## Walkthrough Video 🎥
Click the link below to view the complete walkthrough demonstrating the functionality of the MongoSocial API:

[Walkthrough Video - MongoSocial API](#)

## License 📄
This project is licensed under the MIT License.

