# Hospital Management System

## Overview

The **Hospital Management System** is a full-stack web application designed to streamline the management of hospitals, including patient records, appointments, doctor management, billing, and inventory. The system includes user authentication and authorization, an admin portal for managing doctors and appointments, and an AI-powered chatbot for patient assistance.

## Features

### 1. User Portal

- **New User Registration**: 
  New users (patients) can register by providing their personal details such as name, email, contact number, and password. The registration process ensures that each patient has a unique account.

- **User Login**:
  Registered users can log in securely using their email and password. Passwords are encrypted to ensure user privacy and security.

- **Authentication & Authorization**:
  - **Authentication**: The system verifies user credentials (email and password) for secure login.
  - **Authorization**: Different user roles are provided (e.g., Admin, Doctor, Patient). Each role has specific permissions. For instance:
    - Patients can book appointments and view their medical records.
    - Admins have full access to manage the hospital's operations.

- **Appointment Booking**:
  Patients can easily browse available doctors and book appointments. They can also view, reschedule, or cancel upcoming appointments.

- **AI-powered Chatbot**:
  The user portal includes an AI-powered chatbot designed to assist patients with common inquiries, such as appointment scheduling, doctor availability, and general health-related questions.

---

### 2. Admin Portal

- **Manage Appointments**:
  Admins can view and manage all appointments in the system. This includes:
  - Approving, rescheduling, or canceling appointments.
  - Assigning doctors to specific appointments.
  
- **Doctor Management**:
  Admins can:
  - Add new doctors, including their specialization, contact details, and available time slots.
  - Edit or remove existing doctor profiles.
  
- **User Management**:
  Admins have the ability to view all registered users, with options to activate, deactivate, or delete accounts.

---

### 3. Doctor Portal

- **Manage Patient Appointments**:
  Doctors can view their daily appointment schedule, with detailed information about each patient.
  
- **Access Patient Records**:
  Doctors can access patient records, including medical history, past appointments, and treatments.

---

## Installation

### Prerequisites:
- Node.js
- MongoDB
- React.js

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/hospital-management-system.git
   cd hospital-management-system

2. Install dependencies for both frontend and backend:
    - bash
    - Copy code
    - cd backend
    - npm install
    - cd ../frontend
    - npm install
3. Set up environment variables:
  - Create a .env file in both the frontend and backend directories.
  - Add the required configurations like database URLs, JWT secrets, etc.

## Tech Stack
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT & Cookies
AI Chatbot: BotPress
