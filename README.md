# Ali Murtaza - DevOps Portfolio

Full-stack portfolio website with admin panel for blog and CV management.

## 🚀 Quick Start

### Local Development

**Backend:**
```bash
cd backend
npm install
# Configure .env with MongoDB URI
npm run dev
```
Access admin panel: `http://localhost:5000/admin.html`

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Access website: `http://localhost:5173`

### Using Docker Compose
```bash
docker-compose up
```

## 📁 Project Structure

```
├── frontend/          # React + TypeScript + Vite
│   ├── pages/        # Page components
│   ├── components/   # Reusable components
│   └── public/       # Static assets
│
├── backend/          # Express + MongoDB
│   ├── routes/       # API endpoints
│   ├── models/       # Mongoose schemas
│   ├── middleware/   # Auth middleware
│   ├── admin.html    # Admin panel UI
│   └── uploads/      # File storage
```

## 🌐 Free Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Recommended Stack:**
- Frontend: Vercel (Free)
- Backend: Render (Free)
- Database: MongoDB Atlas M0 (Free)

**Total Cost: $0/month**

## 🔐 Admin Features

- ✍️ Create and publish blog posts
- 🖼️ Upload blog images
- 📄 Upload and manage CV versions
- 🔒 JWT authentication

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Multer (file uploads)

## 📝 Environment Variables

**Backend (.env):**
```env
MONGODB_URI=mongodb+srv://...
PORT=5000
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
FRONTEND_URL=http://localhost:5173
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000/api
```

## 📚 API Documentation

### Public Endpoints
- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:id` - Get single blog
- `GET /api/cv/active` - Get active CV

### Admin Endpoints (Auth Required)
- `POST /api/auth/login` - Admin login
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `POST /api/cv/upload` - Upload CV
- `PATCH /api/cv/:id/activate` - Set active CV

## 🎯 Features

- 📱 Fully responsive design
- 🎨 Modern UI with TailwindCSS
- 🔒 Secure admin authentication
- 📝 Rich blog management
- 📄 CV version control
- 🖼️ Image upload support
- ⚡ Fast performance with Vite

## 📄 License

MIT License - Feel free to use for your own portfolio!

---

Built with ❤️ by Ali Murtaza
