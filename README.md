# DevOps Dashboard

A production-style full-stack DevOps demo project showcasing an end-to-end **CI/CD pipeline using GitHub Actions**, **Self-Hosted Runner**, and **PM2**. The project demonstrates how code changes made by a developer are automatically built, tested, and deployed to a running application with zero manual deployment steps.

---

# Project Overview

This project consists of a **React (Vite)** frontend and an **Express.js** backend. The frontend is built using Vite and served by the Express backend.

Whenever code is pushed to the **main** branch:

1. GitHub Actions is triggered.
2. The application is built.
3. Basic automated tests are executed.
4. The React production build is generated.
5. The build is copied into the backend's `dist` directory.
6. PM2 restarts the backend application.
7. The updated application becomes immediately available.

---

# Architecture


                    Developer
                        │
                git add / commit / push
                        │
                        ▼
                 GitHub Repository
                        │
                        ▼
               GitHub Actions Workflow
                        │
      ┌─────────────────┼─────────────────┐
      │                 │                 │
      ▼                 ▼                 ▼
   Build Job        Test Job         Deploy Job
      │                 │                 │
      └─────────────────┼─────────────────┘
                        ▼
             Self Hosted Runner (Windows)
                        │
          Install Dependencies
                        │
               Build React App
                        │
         Copy Build → Backend/dist
                        │
               Restart PM2 Process
                        │
                        ▼
          Express.js serves React Build
                        │
                        ▼
               http://localhost:5000

---

# Tech Stack

## Frontend

* React
* Vite
* Axios
* Tailwind CSS
* React Icons

## Backend

* Node.js
* Express.js
* CORS
* dotenv

## DevOps

* Git
* GitHub
* GitHub Actions
* Self-Hosted Runner
* PM2
* Node.js 22

---

# Project Structure

DevOpsDashboard
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── routes
│   ├── dist
│   ├── app.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   ├── vite.config.js
│   └── package.json
│
└── .github
    └── workflows
        └── deploy.yml


---

# CI/CD Pipeline

The GitHub Actions workflow contains three jobs.

## 1. Build

This job:

* Checks out the source code
* Sets up Node.js
* Installs backend dependencies
* Installs frontend dependencies
* Builds the React application
* Uploads the production build as an artifact

---

## 2. Test

This job:

* Downloads the build artifact
* Executes backend validation
* Executes frontend validation
* Verifies that the build was successfully generated

---

## 3. Deploy

This job:

* Downloads the build artifact
* Copies the React build into the backend `dist` folder
* Restarts the backend using PM2
* Makes the updated application available immediately

---

# CI/CD Workflow

```text
Push Code
    │
    ▼
GitHub Actions Triggered
    │
    ▼
Build
    │
    ▼
Test
    │
    ▼
Deploy
    │
    ▼
PM2 Restart
    │
    ▼
Application Updated
```

---

# Self Hosted Runner

The workflow executes on a Windows Self-Hosted Runner instead of GitHub-hosted runners.

Benefits include:

* Faster deployments
* Access to local infrastructure
* No cloud VM required
* Suitable for internal enterprise deployments

---

# PM2

PM2 is used to manage the backend Node.js application.

Useful commands:

Start application

```bash
pm2 start app.js --name devops-backend
```

Restart application

```bash
pm2 restart devops-backend
```

View running processes

```bash
pm2 list
```

View logs

```bash
pm2 logs
```

Stop application

```bash
pm2 stop devops-backend
```

Delete application

```bash
pm2 delete devops-backend
```

---

# Running the Project Locally

## Clone Repository

```bash
git clone https://github.com/<your-username>/DevOpsDashboard.git

cd DevOpsDashboard
```

---

## Backend

```bash
cd backend

npm install

npm start
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# Production Deployment

The Express backend serves the React production build from the `backend/dist` directory.

Build the frontend:

```bash
cd frontend

npm run build
```

Copy the generated build into the backend:

```text
backend/
└── dist/
```

Restart PM2:

```bash
pm2 restart devops-backend
```

Open:

```text
http://localhost:5000
```

---

# GitHub Actions Workflow

The pipeline is automatically triggered whenever code is pushed to the `main` branch.

```text
Developer
      │
      ▼
git push origin main
      │
      ▼
GitHub Actions
      │
      ▼
Build
      │
      ▼
Test
      │
      ▼
Deploy
      │
      ▼
PM2 Restart
      │
      ▼
Application Updated
```

---

# Demo Scenario

1. Modify the React application (for example, change the dashboard title).
2. Commit the changes.

```bash
git add .

git commit -m "Updated dashboard title"

git push origin main
```

3. Observe the GitHub Actions workflow executing:

   * Build
   * Test
   * Deploy

4. Refresh the browser.

The updated application is immediately available without any manual deployment steps.

---

# Learning Objectives

By completing this project, you will learn:

* Git Fundamentals
* GitHub Repository Management
* GitHub Actions
* Workflow YAML
* CI/CD Concepts
* Build Pipelines
* Test Automation
* Deployment Automation
* Self-Hosted Runners
* PM2 Process Management
* React Production Builds
* Express.js Deployment
* Artifact Management
* End-to-End DevOps Workflow

---

# Future Enhancements

* Dockerize the application
* Deploy using Docker Compose
* Kubernetes deployment
* AWS EC2 deployment
* NGINX reverse proxy
* SSL/TLS with Let's Encrypt
* Automated unit testing
* Code quality scanning with ESLint
* Security scanning
* Multi-environment deployment (Dev, QA, Prod)
* Slack or Microsoft Teams deployment notifications
* Rollback strategy
* Blue-Green Deployment
* Canary Deployment

---

# Author

**Mohd Anas**

AWS Certified Solutions Architect – Professional
AWS Certified Developer – Associate
Cloud & DevOps SME 

---

# License

This project is intended for educational and demonstration purposes. Feel free to use and customize it for learning, workshops, and internal training sessions.
