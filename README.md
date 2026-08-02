![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens)

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00C9FF,100:92FE9D&height=250&section=header&text=UploadImgO&fontSize=55&fontColor=ffffff&animation=fadeIn"/>
</p>


![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_GITHUB_USERNAME&layout=compact&theme=tokyonight)

![GitHub Streak](https://streak-stats.demolab.com?user=YOUR_GITHUB_USERNAME&theme=tokyonight)


[![Typing SVG](https://readme-typing-svg.demolab.com?font=Poppins&size=28&duration=3500&pause=1000&color=00C2FF&center=true&vCenter=true&width=900&lines=Full+Stack+Developer;MERN+Stack+Developer;Cloud+Enthusiast;Problem+Solver;Always+Learning+New+Technologies)](https://git.io/typing-svg)

<p align="center">

<img src="https://skillicons.dev/icons?i=react,nodejs,express,mongodb,js,html,css,git,github,vscode"/>

</p>

![Stars](https://img.shields.io/github/stars/YOUR_USERNAME/UploadImgO?style=for-the-badge)

![Forks](https://img.shields.io/github/forks/YOUR_USERNAME/UploadImgO?style=for-the-badge)

![Issues](https://img.shields.io/github/issues/YOUR_USERNAME/UploadImgO?style=for-the-badge)

![Last Commit](https://img.shields.io/github/last-commit/YOUR_USERNAME/UploadImgO?style=for-the-badge)

## Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-success?style=for-the-badge)](YOUR_LIVE_LINK)

[![Source Code](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](YOUR_REPO_LINK)

![Stars](https://img.shields.io/github/stars/USERNAME/UploadImgO?style=for-the-badge)

![Forks](https://img.shields.io/github/forks/USERNAME/UploadImgO?style=for-the-badge)

![Issues](https://img.shields.io/github/issues/USERNAME/UploadImgO?style=for-the-badge)

![Repo Size](https://img.shields.io/github/repo-size/USERNAME/UploadImgO?style=for-the-badge)
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
