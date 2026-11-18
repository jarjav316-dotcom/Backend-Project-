# Backend Project - Node.js, Express.js & MongoDB CRUD API

A beginner backend tutorial project following [Intro to Backend Web Development – Node.js & Express Tutorial for Beginners](https://www.youtube.com/watch?v=KOutPbKc9UM&t=2s) by Shivani (Hack Club).

## 📚 What This Project Covers

- Setting up a Node.js project with Express.js
- Connecting to a MongoDB Atlas cloud database using Mongoose
- Creating database models with Mongoose Schema
- Building RESTful CRUD APIs using the **Model-Route-Controller (MRC)** architecture
- Testing APIs with Postman

---

## 🛠️ Tech Stack

| Tool       | Purpose                        |
|------------|-------------------------------|
| Node.js    | JavaScript runtime             |
| Express.js | Web framework for Node.js      |
| MongoDB    | NoSQL cloud database (Atlas)   |
| Mongoose   | ODM for MongoDB                |
| dotenv     | Environment variable management|
| nodemon    | Dev server auto-restart        |

---

## 📁 Project Structure

```
Backend Project/
├── controllers/
│   └── product.controller.js    # Logic for each CRUD operation
├── models/
│   └── product.model.js         # Mongoose schema & model
├── routes/
│   └── product.route.js         # Express route definitions
├── .env                         # Environment variables (not committed)
├── .gitignore
├── index.js                     # App entry point
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd "Backend Project"
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new **Cluster** (free tier M0)
3. Create a **database user** (username & password)
4. Add your IP to the **Network Access** list (or allow all: `0.0.0.0/0`)
5. Click **Connect** → **Connect your application** → Copy the connection string

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/backend-project?retryWrites=true&w=majority
PORT=3000
```

> Replace `<username>`, `<password>`, and the cluster URL with your actual values.

### 5. Run the server

```bash
# Development (auto-restarts on file changes)
npm run dev

# Production
npm start
```

You should see:
```
Connected to MongoDB!
Server is running on port 3000
```

---

## 📡 API Endpoints

Base URL: `http://localhost:3000/api/products`

| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| GET    | `/api/products`       | Get all products       |
| GET    | `/api/products/:id`   | Get a single product   |
| POST   | `/api/products`       | Create a new product   |
| PUT    | `/api/products/:id`   | Update a product       |
| DELETE | `/api/products/:id`   | Delete a product       |

---

## 📦 Product Model

```js
{
  name:     String  (required),
  quantity: Number  (required, default: 0),
  price:    Number  (required, default: 0),
  image:    String  (optional),
  createdAt: Date   (auto),
  updatedAt: Date   (auto)
}
```

---

## 🧪 Testing with Postman

### Create a Product (POST)
- **URL:** `http://localhost:3000/api/products`
- **Method:** `POST`
- **Body (JSON):**
```json
{
  "name": "iPhone 15 Pro",
  "quantity": 10,
  "price": 999
}
```

### Get All Products (GET)
- **URL:** `http://localhost:3000/api/products`
- **Method:** `GET`

### Get Single Product (GET)
- **URL:** `http://localhost:3000/api/products/<id>`
- **Method:** `GET`

### Update a Product (PUT)
- **URL:** `http://localhost:3000/api/products/<id>`
- **Method:** `PUT`
- **Body (JSON):**
```json
{
  "quantity": 25,
  "price": 899
}
```

### Delete a Product (DELETE)
- **URL:** `http://localhost:3000/api/products/<id>`
- **Method:** `DELETE`

---

## 📝 Notes

- Never commit your `.env` file (it's listed in `.gitignore`)
- The project uses **MRC (Model-Route-Controller)** architecture to keep code organized and clean
