## Aranya – MERN Stack E-Commerce Platform

Aranya is a full-stack e-commerce web application built using the MERN stack, designed to support both B2C and B2B workflows.
The platform includes modern UI/UX, secure authentication, product management, cart & order flow, and online payments via Razorpay.

## Live Demo

Frontend: https://aranya-client.onrender.com

Backend API: https://aranya-iigc.onrender.com

## Tech Stack
Frontend

React (CRA)

React Router DOM

Context API

Axios

CSS / Responsive UI

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT Authentication

Payments

Razorpay (Checkout + Verification)

Deployment

Render (Frontend & Backend)

## Key Features
** Authentication & Authorization

User signup & login

JWT-based authentication

Role-based access (Admin / User)

## Product Management

Add / update / delete products (Admin)

Product images support

Categories & filtering

Pagination & lazy loading

## Cart & Checkout

Add / remove products from cart

Persistent cart

Secure checkout flow

## Online Payments

Razorpay integration

Payment verification

Order creation after successful payment

## Orders System

User can view their orders

Admin can view all orders

Order status management (Admin)

## UI / UX Enhancements

Dark mode toggle

Skeleton loaders

Floating cart button

Scroll-to-top

Hover animations

Fully responsive layout

## Project Structure
Aranya/
│
├── client/                 # React frontend
│   ├── src/
│   └── public/
│
├── controllers/            # Backend controllers
├── routes/                 # API routes
├── models/                 # Mongoose models
├── middlewares/            # Auth & role middlewares
├── config/                 # DB & config files
├── server.js               # Entry point
└── .env                    # Environment variables

## Environment Variables
Backend (.env)
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET_KEY=your_razorpay_secret

Frontend (Render Environment)
REACT_APP_API=https://aranya-iigc.onrender.com
REACT_APP_RAZORPAY_KEY=your_razorpay_key

## Run Locally
Clone Repository
git clone https://github.com/your-username/Aranya.git
cd Aranya

Backend Setup
npm install
npm run server

Frontend Setup
cd client
npm install
npm start

## Security Notes

JWT used for secure API access

Admin routes protected

Payment verification handled on backend

## Current Status

 UI & Deployment Completed
 Razorpay Integrated completed
 Orders backend & frontend finalization in progress
 Product image rendering optimization ongoing

## Author

Krishna kumar
Electronics & Communication Engineer | Full-Stack Developer | ASD
Passionate about building scalable web applications using MERN stack.

## License

This project is for learning and portfolio purposes.
