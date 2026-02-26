# Portfolio - Full Stack Deployment Guide

## 🏗️ Project Structure

```
├── frontend/          # React + Vite frontend
├── backend/           # Express + MongoDB backend
│   ├── admin.html    # Admin panel (standalone)
│   ├── routes/       # API routes
│   ├── models/       # MongoDB models
│   └── uploads/      # File uploads
```

## 🚀 Local Development

### Backend Setup
```bash
cd backend
npm install
# Edit .env with your MongoDB Atlas URI
npm run dev
```

Backend runs on: `http://localhost:5000`
Admin panel: `http://localhost:5000/admin.html`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs on: `http://localhost:5173`

## 📦 Free Deployment Options

### Option 1: Render + Vercel (Recommended)

**Backend on Render:**
1. Push code to GitHub
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your repo, select `backend` folder
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `JWT_SECRET`: Random secret key
   - `ADMIN_EMAIL`: Your admin email
   - `ADMIN_PASSWORD`: Your admin password
   - `FRONTEND_URL`: Your Vercel URL (add after frontend deploy)

**Frontend on Vercel:**
1. Install Vercel CLI: `npm i -g vercel`
2. In `frontend` folder: `vercel`
3. Add environment variable:
   - `VITE_API_URL`: Your Render backend URL

**Admin Panel Access:**
- Visit: `https://your-backend.onrender.com/admin.html`

### Option 2: Fly.io (Both Frontend & Backend)

```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Deploy Backend
cd backend
fly launch
fly secrets set MONGODB_URI="your-uri" JWT_SECRET="secret" ADMIN_EMAIL="email" ADMIN_PASSWORD="pass"
fly deploy

# Deploy Frontend
cd ../frontend
fly launch
fly deploy
```

### Option 3: Railway

1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Add backend service, set root directory to `backend`
4. Add environment variables
5. Repeat for frontend

## 🗄️ MongoDB Atlas Setup

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create free M0 cluster (512MB)
3. Database Access → Add User
4. Network Access → Add IP: `0.0.0.0/0` (allow all)
5. Connect → Get connection string
6. Replace `<password>` in connection string

## 🔐 Admin Panel Features

- **Login**: Use credentials from `.env`
- **Blogs**: Create, publish, delete blogs with images
- **CV**: Upload PDF CVs, set active version

## 📝 API Endpoints

### Public
- `GET /api/blogs` - Get published blogs
- `GET /api/blogs/:id` - Get single blog
- `GET /api/cv/active` - Get active CV

### Admin (requires Bearer token)
- `POST /api/auth/login` - Login
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `POST /api/cv/upload` - Upload CV
- `PATCH /api/cv/:id/activate` - Set active CV

## 💰 Cost Breakdown

- **Render**: Free tier (750 hrs/month)
- **Vercel**: Free tier (100GB bandwidth)
- **MongoDB Atlas**: Free M0 (512MB)
- **Total**: $0/month

## ⚠️ Limitations

- Render free tier sleeps after 15min inactivity
- Cold start: ~30 seconds
- MongoDB M0: 512MB storage limit
- File uploads stored on server (use Cloudinary for production)

## 🔧 Production Improvements

1. Use Cloudinary/S3 for file uploads
2. Add Redis caching
3. Implement rate limiting
4. Add image optimization
5. Set up CI/CD with GitHub Actions

## 📱 Admin Panel Access

Default credentials (change in `.env`):
- Email: `admin@example.com`
- Password: `admin123`

**First login creates admin account automatically**
