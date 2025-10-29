# 🏢 Get Hired!

**Get Hired!** is a modern web application designed to help employees manage their **job postings**, **job applications**, and **job candidates** efficiently — all in one place.

Built with the latest **React + Vite** stack, the app provides a fast, responsive, and delightful user experience with a sleek UI powered by **Tailwind CSS** and **shadcn/ui**.

---

## 🚀 Tech Stack

| Category                | Technology                                                |
| ----------------------- | --------------------------------------------------------- |
| Frontend Framework      | [React 19+](https://react.dev/)                           |
| Build Tool              | [Vite](https://vitejs.dev/)                               |
| Styling                 | [Tailwind CSS](https://tailwindcss.com/)                  |
| UI Components           | [shadcn/ui](https://ui.shadcn.com/)                       |
| Routing                 | [React Router](https://reactrouter.com/)                  |
| State Management        | [Zustand](https://zustand-demo.pmnd.rs/)                  |
| Data Fetching & Caching | [TanStack React Query](https://tanstack.com/query/latest) |

---

## ✨ Features

### � Job Postings

- Create and manage job postings
- View job postings history
- Edit and delete job postings

### 🌴 Job Applications

- Submit job applications
- Track job application status
- View job application history

### 🌴 Job Candidates

- Submit reimbursement with proof & amount
- Track approval and payment status
- Manage past reimbursement requests

### ⚙️ General

- User authentication (login/logout)
- Dashboard overview
- Responsive and accessible UI

---

## 🧩 Project Structure

```
get-hired/
├── public/                 # public files and images
├── src/
│   ├── assets/             # Static files and images
│   ├── components/         # Reusable UI components
│   ├── features/           # Feature-based modules (user, notification, attendance, leave, reimbursement)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Helper utilities (axios instance, constants)
│   ├── pages/              # Page-level components (Dashboard, Login, etc.)
│   ├── routes/             # App routing configuration
│   ├── store/              # Zustand stores
│   ├── App.tsx             # Root app component
│   ├── main.tsx            # Entry point
│   └── style/
│       └── index.css       # Global styles
└── vite.config.ts
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/aldiero141/get-hired.git
cd get-hired
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
VITE_API_URL=https://your-api-url.com
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

---

## 🧠 State Management & Data Fetching

- **Zustand** manages global app and authentication states.
- **React Query** handles server state, caching, and refetching logic.
- **Axios** is pre-configured for API communication with token refresh and error handling.

---

## 🖌️ UI & Design

- Built with **Tailwind CSS** for utility-first styling.
- **shadcn/ui** provides elegant, accessible component primitives.
- Fully responsive for desktop and mobile layouts.

---

## 🧰 Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `pnpm dev`      | Start the development server         |
| `pnpm build`    | Build the app for production         |
| `pnpm preview`  | Preview the production build locally |
| `pnpm lint`     | Run ESLint checks                    |
| `pnpm lint:fix` | Fix ESLint errors                    |

---

## 📦 Deployment

You can deploy **Get Hired!** easily using:

- **Vercel**
- **Netlify**
