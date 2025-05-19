# 🛒 E-Commerce Platform

A simple e-commerce web application built with Node.js, Express.js, MongoDB (Mongoose), and EJS templating engine. It features user authentication, product listing, cart management, and order history.

---

## ✨ Features

- 🧑 User registration and login
- 📦 Product management (with image support)
- 🛍️ Cart system
- ⚙️ Account settings (name and contact update)
- 📷 Images stored in MongoDB (binary Buffer)
- 🌐 Server-side rendering using EJS

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app

2. Install dependencies
npm install

3. Start MongoDB (locally)
Make sure MongoDB is running locally on your machine:
mongod

4. Run the app
node app.js
Or, if using nodemon:
nodemon app.js

5. Open in browser
arduino http://localhost:3000

🔐 Environment Variables (Optional)
Create a .env file if you wish to store sensitive configs:
MONGO_URI=mongodb://localhost:27017/scatch

🧪 Dependencies
express
mongoose
ejs
body-parser
express-session
multer (for image uploads, if used)
connect-flash
Install with:

npm install express mongoose ejs body-parser express-session multer connect-flash
