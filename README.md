🏋️ Gym Class Scheduling and Membership Management System
This project is a full-featured Gym Management API built with TypeScript, Express.js, and JWT Authentication. It supports role-based access for Admins, Trainers, and Trainees, enforcing strict business logic around scheduling, booking, and role permissions.

📌 Project Overview
This system streamlines gym operations with secure and scalable APIs. Key features include:

- Role-based access (Admin, Trainer, Trainee)

- Daily class scheduling (max 5 per day, 2 hours each)

- Class booking system (max 10 trainees per class)

- Trainee profile management

Class cancellation and error handling

| Layer          | Tech Used            |
| -------------- | -------------------- |
| Programming    | TypeScript           |
| Web Framework  | Express.js           |
| Database       | MongoDB              |
| ORM / ODM      | Mongoose             |
| Authentication | JWT (JSON Web Token) |

Documentation Postman

## 🧩 Roles & Permissions

| Role    | Permissions                                                 |
| ------- | ----------------------------------------------------------- |
| Admin   | Create trainers, schedule classes, assign trainers          |
| Trainer | View assigned classes                                       |
| Trainee | Manage profile, book/cancel booking (with limit validation) |

📊 Relational Diagram

Or Link to Diagram

```bash
https://drive.google.com/file/d/1lGGOwNmXeW-hrZXlpapO0bmdojJ797mH/view?usp=sharing
```

---

## 🚀 Getting Started

This project requires **Node.js** and **npm** to be installed on your system.

1. Clone this repository:

   ```bash
   git clone https://github.com/hmmasudsarder/gym_class_and_scheduling.git
   ```

2. Navigate to the project directory:becareful

   ```bash
   cd gym_class_and_scheduling
   ```

3. Install dependencies:

   ```bash
   npm install

   ```

4. Create a `.env` file in the root directory and configure the following variables:

   ```json
   PORT=5000
   DATABASE_URL=<your_db_URL>
   BCRYPT_SALT_ROUNDS=10
   DEFAULT_PASS=Masud123
   JWT_ACCESS_EXPIRES_IN=15m
   JWT_ACCESS_SECRET=<YOur_Secret_here>
   JWT_REFRESH_SECRET=<Your_refrest_secret>
   JWT_REFRESH_EXPIRES_IN=365d
   ```

### ▶️ Running the API

Start the development server:

```bash
npm run dev
```

This will start the server on port 5000 by default.

Check the server status at:
http://localhost:5000

### 🌐 Deployment

The Book Shop API is deployed and live on Vercel, making it accessible for testing and integration.

**Base URL:**  
🌍 https://gym-class-and-scheduling.vercel.app/

````

Response:

```javascript
{
    server is ongoing 🏃‍♂️‍➡️☄️
}
````

### 🚀 API Endpoints

## 📬 Postman Documentation:

🔗 Postman Collection Link https://no9999-8557.postman.co/workspace/Team-Workspace~fde2221a-4c2c-4c38-8cdd-d7652b4669f7/collection/34164465-55c8868c-1535-4541-9d70-3db07db14b5e?action=share&creator=34164465&active-environment=34164465-578ac48b-d9ce-42f7-a0ec-90370f447c1e

## Authentication

### 📚 API Documentation

The API uses standard HTTP methods (`GET`, `POST`, `PUT`, `DELETE`) for CRUD operations. Below is the detailed documentation of the endpoints.

---

| Endpoint             | Method | Description                |
| -------------------- | ------ | -------------------------- |
| `/api/auth/register` | POST   | Register a user            |
| `/api/auth/login`    | POST   | Login user and receive JWT |

```bash
  {
  "name": "MasudSardar",
  "email": "masudsardar@gmail.com",
  "password": "PassWord1232",
  "role": "TRAINEE",
  "userStatus": "active",
  "profilePhoto": "https://example.com/profile/masud.jpg"
}
```

```bash
  {
    "email": "masudsardar@gmail.com",
    "password": "admin1@Pass"
}
```

# Response

```bash
  {
    "success": true,
    "message": "Login is successfully",
    "statusCode": 202,
    "data": {
        "neme": "MasudSardar",
        "email": "masudsardar@gmail.com",
        "role": "ADMIN",
        "id": "687cd7e13ce0142abd12b119"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hc3Vkc2FyZGFyQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlkIjoiNjg3Y2Q3ZTEzY2UwMTQyYWJkMTJiMTE5IiwiaWF0IjoxNzUzMDEyOTk2LCJleHAiOjE3NTMzNTg1OTZ9.oSxWxh26hCKP38edS1muwL9yHbCtf66byL_YBROSmdc"
}
```

```bash
  {
    "success": true,
    "message": "Register is successfully",
    "statusCode": 201,
    "data": {
        "name": "MasudSardar",
        "email": "masudsardar@gmail.com",
        "password": "",
        "role": "ADMIN",
        "profilePhoto": "https://example.com/profile/masud.jpg",
        "userStatus": "active",
        "_id": "687cd7e13ce0142abd12b119",
        "createdAt": "2025-07-20T11:49:53.357Z",
        "updatedAt": "2025-07-20T11:49:53.357Z",
        "__v": 0
    }
   }
```

## Admin

| Endpoint                     | Method | Description                 |
| ---------------------------- | ------ | --------------------------- |
| `/api/scheduling/create`     | POST   | Admin schedules a new class |
| `/api/user`                  | GET    | View all users              |
| `/api/scheduling`            | GET    | View all class schedules    |
| `/api/scheduling/:id`        | GET    | View one class schedules    |
| `/api/scheduling/:id`        | DELETE | Delete one class schedules  |
| `/api/trainer/create-tainer` | POST   | Admin creates a trainer     |
| `/api/trainer`               | GET    | Admin get all trainer       |
| `/api/trainer/:id`           | DELETE | Admin Delete one trainer    |

## Trainer

| Endpoint           | Method | Description         |
| ------------------ | ------ | ------------------- |
| `/api/trainer/:id` | GET    | Get Trainer Profile |

## Trainee

| Endpoint                      | Method | Description                |
| ----------------------------- | ------ | -------------------------- |
| `/api/user/profileUpdate/:id` | PATCH  | User Update her Profile    |
| `/api/bookings/booked`        | POST   | Trainee Booking a class    |
| `/api/bookings/`              | GET    | Trainee Get All Bookins    |
| `/api/bookings/cancel/:id`    | DELETE | Trainee Cancel The Booking |

## 📦 Success Response Example

## Admin

```bash
  {
    "date": "2025-07-21",
    "startTime": "03:00",
    "endTime": "04:00",
    "trainer": "687c0281ec58c18622925d98",
    "classTitle": "Evening Cardio Blast"
}
```

```bash
  {
    "success": true,
    "message": "Schedule created successfully",
    "statusCode": 201,
    "data": {
        "date": "2025-07-21",
        "startTime": "03:00",
        "endTime": "05:00",
        "trainer": "687c0281ec58c18622925d98",
        "_id": "687cde0117a6c68f4073f12a",
        "createdAt": "2025-07-20T12:16:01.012Z",
        "updatedAt": "2025-07-20T12:16:01.012Z",
        "__v": 0
    }
}
```

```bash
  {
  "name": "John Doe",
  "email": "johndoe4321@example.com",
  "password": "P@ssw0rd!",
  "role": "TRAINER"
}

```

```bash
 {
    "success": true,
    "message": "Trainer created successfully",
    "statusCode": 201,
    "data": {
        "name": "John Doe",
        "email": "johndoe4321@example.com",
        "password": "",
        "role": "TRAINER",
        "profilePhoto": "",
        "userStatus": "active",
        "_id": "687cdfc317a6c68f4073f132",
        "createdAt": "2025-07-20T12:23:31.329Z",
        "updatedAt": "2025-07-20T12:23:31.329Z",
        "__v": 0
    }
}
```

## Trainee

```bash
 {
    "trainee": "687bf7d56341592382aaa342",
    "schedule": "687cbee5f553967cb03d9bcd"
}
```

```bash
 {
    "success": true,
    "message": "Booking successful",
    "statusCode": 201,
    "data": {
        "trainee": "687cdfc317a6c68f4073f132",
        "schedule": "687cbee5f553967cb03d9bcd",
        "_id": "687ce93523a2a0e2cb73f9ac",
        "createdAt": "2025-07-20T13:03:49.295Z",
        "updatedAt": "2025-07-20T13:03:49.295Z",
        "__v": 0
    }
}
```

## 🧪 Testing Instructions

## ✅ Admin Test Credentials

```bash
  email: "masudsardar@gmail.com",
  password: "admin1@Pass",
```

🔎 Testing Features
Login as Admin and:

Create trainers

Create up to 5 classes per day

Assign trainers to classes

Login as Trainer and:

View only your assigned classes

Login as Trainee and:

Update your profile

Book available class (max 10 slots)

Try booking full class to test limit

Cancel your own bookings

📂 Running Locally
🧰 Prerequisites
Node.js

MongoDB or PostgreSQL

Prisma or Mongoose

Postman

📥 Installation
bash
Copy
Edit
git clone https://github.com/hmmasudsarder/gym_class_and_scheduling.git
cd gym-management-system
npm install
🧾 Environment Setup
Create .env file:

ini
Copy
Edit
PORT=5000
DATABASE_URL=<Your_Connection_URL>
JWT_SECRET=your_jwt_secret
▶️ Start Server
bash
Copy
Edit
npm run dev
The server will start at: http://localhost:5000

🌐 Live API
📡 Base URL:
https://gym-class-and-scheduling.vercel.app