# LedgerFlow

LedgerFlow is a lightweight prototype for managing invoice and receipt workflows with a simple front-end experience and a Node.js backend API.

## Features

- Responsive prototype UI for document submission and approval tracking
- Registration and login flows
- Backend API for authentication and document handling
- Optional Supabase and MongoDB integration for persistence

## Project structure

- `index.html` and `script.js` – front-end prototype UI
- `ledgerflow-prototype.CSS` – styling for the prototype
- `my-backend/` – Express backend API with authentication and document routes

## Getting started

### 1. Install front-end dependencies

```bash
npm install
```

### 2. Install backend dependencies

```bash
cd my-backend
npm install
```

### 3. Configure environment variables

Copy the backend example environment file and update it with your own values:

```bash
cd my-backend
copy .env.example .env
```

Example values:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/ledgerflow
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

### 4. Run the backend

```bash
cd my-backend
npm start
```

### 5. Open the front-end

Open `index.html` in your browser or serve the project folder with a simple static server.

## Notes

- The backend can run without MongoDB or Supabase configured, but those integrations unlock full persistence and storage features.
- The prototype is intended for demonstration and local development.
