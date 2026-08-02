# UploadImgO

UploadImgO is a full-stack image sharing web application built using the MERN Stack. It allows users to upload, store, preview, download, and manage images efficiently. The project uses Cloudinary for cloud image storage and MongoDB Atlas for storing image information.

---

## Features

- Upload images to Cloudinary
- Store image details in MongoDB Atlas
- Preview uploaded images
- Download images
- Delete images
- Responsive user interface
- RESTful API architecture
- Secure backend with Express.js

---

## Tech Stack

### Frontend
- React.js
- CSS3
- JavaScript

### Backend
- Node.js
- Express.js
- Multer

### Database
- MongoDB Atlas
- Mongoose

### Cloud Storage
- Cloudinary

### Authentication
- JSON Web Token (JWT)
- bcryptjs

---

## Project Structure

```
UploadImgO
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── package.json
│   └── index.js
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/UploadImgO.git
```

### Install dependencies

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=YOUR_MONGODB_URI
CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET
JWT_SECRET=YOUR_SECRET
```

### Run the application

Backend

```bash
npm start
```

Frontend

```bash
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload` | Upload an image |
| GET | `/api/images` | Get all uploaded images |
| DELETE | `/api/images/:id` | Delete an image |
| POST | `/api/auth/signup` | Register a new user |
| POST | `/api/auth/login` | Login user |

---

## Future Improvements

- User profile management
- Private image galleries
- Multiple image upload
- Drag and drop upload
- Search and filter images
- Image sharing with links
- Image compression
- Responsive dashboard

---

## Learning Outcomes

This project helped in understanding:

- Full-stack web development
- REST API development
- File upload handling
- Cloudinary integration
- MongoDB Atlas
- Express.js
- React.js
- JWT Authentication
- Backend architecture
- State management

---

## Author

**Yashpreet Singh Gujral**

B.Tech CSE (AI & ML)

Chandigarh University

---

## License

This project is licensed under the MIT License.
