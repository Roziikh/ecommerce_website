# ecommerce_website

Welcome to my React and Node project to build a fully-functional e-commerce website using MongoDB, Mongoose, Node.JS, ExpressJS, React.JS, Bootstrap, HTML5 and CSS3.

## Getting Started

### 1. Clone repo
```
$ git clone github link
$ cd .. project
```

### 2. Create .env File

- duplicate .env.example in backend folder and rename it to .env

### 3. Setup MongoDB

- Local MongoDB
  - Install it from [here](https://www.mongodb.com/try/download/community)
  - In .env file update MONGODB_URI=mongodb://localhost/your-db-connection
- OR Atlas Cloud MongoDB
  - Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - In .env file update MONGODB_URI=mongodb+srv://your-db-connection

### 4. Run Backend

```
$ cd backend
$ npm install
$ npm start
```


### 5. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 7. backend/.env.example

JWT_SECRET=
MONGODB_URI=
PAYPAL_CLIENT_ID=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_URL=
CLOUDINARY_API_SECRET=
GOOGLE_API_KEY=
MAILGUN_DOMIAN=
MAILGUN_API_KEY=

author - Roziikh
