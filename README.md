# Jet Set Globe 🌍

**Jet Set Globe** is a full-stack web application that allows users to browse, book, and list vacation accommodations such as villas, houses, farmhouses, and more. With real-time map integration, media uploads, and seamless UI/UX, JetSetGlobe provides an intuitive platform for both renters and property listers.

## 🌐 Live Demo

🔗 [JetSetGlobe on Render](https://jet-set-globe.onrender.com)

## 🚀 Features

- Browse vacation accommodations by location, type, and amenities
- Add your own property listings with image uploads
- Real-time location display using **Mapbox API**
- Upload and manage media with **Cloudinary**
- Authentication and authorization using **Passport.js**
- Modern and responsive UI for an engaging user experience
- Deployment on **Render** for continuous cloud hosting
- Organized backend using **MVC Architecture**

## 🛠️ Tech Stack

**Frontend**:
- HTML, CSS, JavaScript
- EJS Templating Engine

**Backend**:
- Node.js
- Express.js

**Database**:
- MongoDB with Mongoose

**Other Integrations**:
- Passport.js for authentication
- Cloudinary for image storage
- Mapbox API for location mapping
- Render for deployment

## 📁 Project Structure (MVC)

```

JetSetGlobe/
├── models/         # MongoDB models
├── views/          # EJS templates
├── routes/         # Express route definitions
├── controllers/    # Business logic
├── public/         # Static assets (CSS, JS, images)
├── config/         # Configurations (DB, auth)
├── app.js          # Main Express app
├── .env            # Environment variables

````

## 🧪 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jetsetglobe.git
   cd jetsetglobe

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file with the following:

   ```env
   DB_URL=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_key
   CLOUDINARY_SECRET=your_secret
   MAPBOX_TOKEN=your_mapbox_token
   SESSION_SECRET=your_session_secret
   ```

4. **Run the app**

   ```bash
   npm start
   ```

5. Open your browser at `http://localhost:3000`

## 📸 Screenshots

### 🏠 Home Page
![Home Page](https://i.postimg.cc/fRNKq5V9/Screenshot-2025-05-15-125754.png)

### 📍 Listing Details
![Listing Details](https://i.postimg.cc/mDCkn3zP/Screenshot-2025-05-15-130227.png)

### 📍 Map View
![Map View](https://i.postimg.cc/yxfHpWPJ/Screenshot-2025-05-15-130358.png)
