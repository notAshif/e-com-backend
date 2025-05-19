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

## 📁 Project Structure

E-commerce/
│
├── models/
│ ├── user.js # User schema
│ └── product.js # Product schema
│
├── routes/
│ └── index.js # Main route handlers
│
├── views/
│ ├── partial/ # Header/footer includes
│ ├── account.ejs # User profile + cart/orders
│ └── ...
│
├── public/ # Static assets
├── uploads/ # (Optional) Image uploads
├── app.js / server.js # Main app entry point
├── package.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/ecommerce-app.git
cd ecommerce-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Start MongoDB (locally)
Make sure MongoDB is running locally on your machine:

bash
Copy
Edit
mongod
4. Run the app
bash
Copy
Edit
node app.js
Or, if using nodemon:

bash
Copy
Edit
nodemon app.js
5. Open in browser
arduino
Copy
Edit
http://localhost:3000
🔐 Environment Variables (Optional)
Create a .env file if you wish to store sensitive configs:

ini
Copy
Edit
MONGO_URI=mongodb://localhost:27017/scatch
PORT=3000
🧪 Dependencies
express

mongoose

ejs

body-parser

express-session

multer (for image uploads, if used)

connect-flash

Install with:

bash
Copy
Edit
npm install express mongoose ejs body-parser express-session multer connect-flash
