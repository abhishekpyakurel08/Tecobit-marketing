# Deployment Guide

## Vercel (Recommended)

1.  Connect your GitHub repository to Vercel.
2.  Add environment variables in Project Settings > Environment Variables:
    *   `MONGODB_URI`
    *   `PAYLOAD_SECRET`
    *   `NEXT_PUBLIC_SERVER_URL` (e.g., `https://your-project.vercel.app`)
    *   `OPENAI_API_KEY`
3.  Deploy! Vercel will automatically detect the Next.js framework.

## Railway

1.  Create a new project on Railway.
2.  Add a MongoDB service.
3.  Add your GitHub repository as a service.
4.  Add environment variables:
    *   `MONGODB_URI` (Use the internal connection string from the MongoDB service)
    *   `PAYLOAD_SECRET`
    *   `NEXT_PUBLIC_SERVER_URL`
    *   `OPENAI_API_KEY`
5.  Set the build command to `npm run build` and start command to `npm run start`.

## DigitalOcean App Platform

1.  Create a new App.
2.  Connect your GitHub repository.
3.  Edit the component settings.
4.  Add environment variables.
5.  Ensure you have a MongoDB instance available (DigitalOcean Managed Database or MongoDB Atlas).
