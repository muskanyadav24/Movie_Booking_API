# 🎬 Movie Booking API

A simple backend project built using Node.js, Express, and MongoDB that allows users to register, login, book movies, and cancel bookings with dynamic refund logic.

---

## 🚀 Features

* 👤 User Registration & Login
* 🎬 Add & View Movies
* 🎟️ Book Movie Tickets
* ❌ Cancel Booking
* 💰 Dynamic Refund System (based on cancellation time)

---

## 🧠 Refund Logic

Refund depends on how early the user cancels the ticket:

| Time Before Show | Refund |
| ---------------- | ------ |
| ≥ 24 hours       | 80%    |
| ≥ 12 hours       | 60%    |
| ≥ 8 hours        | 50%    |
| ≥ 6 hours        | 40%    |
| ≥ 4 hours        | 30%    |
| ≥ 3 hours        | 20%    |
| < 3 hours        | 0%     |

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* bcrypt (for password hashing)

---

## 📁 Project Structure

```
project/
│── models/
│── controllers/
│── routes/
│── db/
│── index.js
│── .env
```

---

## ⚙️ Installation

```bash
cd project
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=8001
DB_CONNECTION_URL=mongodb://localhost:27017/moviebooking
```

---

## ▶️ Run Server

```bash
npm start
```

---

## 📬 API Endpoints

### 👤 User

* `POST /register` → Register user
* `POST /login` → Login user

### 🎬 Movie

* `POST /add-movie` → Add movie
* `GET /movies` → Get all movies

### 🎟️ Booking

* `POST /book-movie` → Book movie
* `POST /cancel-booking` → Cancel booking
* `GET /bookings` → Get all bookings

---

## 🧪 Testing

Use Postman to test APIs:

1. Register user
2. Login
3. Add movie
4. Book movie
5. Cancel booking

---

## ⚠️ Challenges Faced

* ❌ Route not found (`Cannot POST /add-movie`)
  → Fixed by correcting route path and server port

* ❌ Database case sensitivity issue
  → Resolved by using consistent lowercase DB name

* ❌ req.body undefined
  → Fixed by adding middleware:

  ```js
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  ```

* ❌ Field mismatch (`userName` vs `username`)
  → Standardized field naming

---

## ✅ Implemented Features

* 👤 User Registration (with validation & unique email/username)
* 🔐 User Login (with password hashing using bcrypt)
* 🎬 Add Movie API
* 📄 Get All Movies
* 🎟️ Book Movie Tickets
* ❌ Cancel Booking
* 💰 Dynamic Refund System based on cancellation time
* 🔗 MongoDB integration using Mongoose
* 📦 RESTful API structure (MVC pattern)

---

## 👨‍💻 Author

Muskan Yadav

---

## ⭐ Note

This is a beginner-friendly backend project to understand real-world concepts like booking systems, validation, and refund logic.
