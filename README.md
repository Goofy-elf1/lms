# LMS SaaS Platform

A full-stack Learning Management System built with Next.js and Supabase, featuring AI-powered voice tutoring, subscription billing, and real-time session management.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

---

## Overview

This project is a production-ready LMS SaaS application where users can create AI tutors, conduct voice-based tutoring sessions, and manage subscriptions. The platform integrates Vapi for real-time voice AI, Clerk for auth and billing, and Supabase as the primary database and storage backend.

---

## Tech Stack

| Technology | Role |
|---|---|
| **Next.js** | Full-stack React framework — handles routing, SSR, and API routes |
| **TypeScript** | Static typing across the entire codebase |
| **Supabase** | PostgreSQL database, real-time subscriptions, and file storage |
| **Clerk** | Authentication, user management, and subscription/billing management |
| **Vapi** | Voice AI SDK for real-time conversational tutoring agents |
| **Tailwind CSS** | Utility-first CSS framework for layout and styling |
| **shadcn/ui** | Accessible, composable UI components built on Radix UI + Tailwind |
| **Zod** | Runtime schema validation and type inference for form and API data |
| **Sentry** | Error tracking and performance monitoring |

---

## Features

- **AI Voice Tutors** — Create custom tutors with configurable subjects, topics, and conversation styles; sessions are powered by Vapi's low-latency voice AI.
- **Authentication** — Sign-up and sign-in via Clerk with support for Google OAuth and other providers.
- **Subscription Management** — Plan selection, upgrades, and billing are handled through Clerk's billing integration.
- **Tutor Builder** — Users define their own AI tutors by specifying subject, focus area, and preferred interaction style.
- **Search & Discovery** — Filter and search tutors by subject or topic.
- **Real-time Database** — Supabase powers live data sync for session state and tutor records.
- **Responsive UI** — Fully functional across desktop and mobile viewports.
- **Modular Codebase** — Components are scoped and reusable; logic is separated from presentation throughout.

---

## Getting Started

### Prerequisites

- Node.js 18+
- Accounts for: Clerk, Supabase, Vapi

### Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd <project-directory>

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env.local
# Fill in keys for Clerk, Supabase, and Vapi

# 4. Start the development server
npm run dev
```

### Required Environment Variables

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=
```

---

## Project Structure

```
/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility functions, Supabase client, Vapi config
├── public/           # Static assets (icons, images)
└── types/            # Shared TypeScript types and Zod schemas
```

Static assets are served from `/public`. External images can be sourced from [Unsplash](https://unsplash.com) or generated as needed.
