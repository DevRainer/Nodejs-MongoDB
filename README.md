# Node.js API with MongoDB and Prisma

This is a RESTful API project developed in Node.js using Express, Prisma, and MongoDB for user management. The API provides CRUD operations (Create, Read, Update, Delete) for users.

## Technologies Used

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for Node.js
- **Prisma**: ORM for database
- **MongoDB**: NoSQL database
- **CORS**: To allow requests from different origins

## Prerequisites

Before starting, make sure you have installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) or an account on [MongoDB Atlas](https://www.mongodb.com/atlas)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the project root and add:
   ```
   DATABASE_URL="your-mongodb-connection-string"
   ```

   **Note**: Replace `your-mongodb-connection-string` with your MongoDB connection URL. If using MongoDB Atlas, you can get the connection string from the Atlas dashboard.

4. Run Prisma migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Running the Project

To run the project in development mode:

```bash
npm run dev
```

The server will start on port 3000. You can access the API at: http://localhost:3000

## API Endpoints

### List Users
- **GET** `/usuarios`
- Returns a list of all users.

### Create User
- **POST** `/usuarios`
- Request body (JSON):
  ```json
  {
    "name": "User Name",
    "email": "user@email.com",
    "age": 25
  }
  ```

### Update User
- **PUT** `/usuarios/:id`
- Parameters: `id` (User ID)
- Request body (JSON):
  ```json
  {
    "name": "Updated Name",
    "email": "user@email.com",
    "age": 26
  }
  ```

### Delete User
- **DELETE** `/usuarios/:id`
- Parameters: `id` (User ID)

## Project Structure

```
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── prisma/
│   ├── schema.prisma  # Database schema
│   └── prisma.config.ts # Prisma configuration
└── README.md          # This file
```

## Available Scripts

- `npm run dev`: Runs the server in development mode with auto-reload

## Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## License

This project is under the ISC license.

## Author

Rainer Gomes
