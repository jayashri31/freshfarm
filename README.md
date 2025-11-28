# FreshFarm - Online Grocery Store

A modern, full-stack grocery shopping application built with vanilla JavaScript, Node.js, Express, and MongoDB.

## Features

- 🛒 Browse fresh fruits, vegetables, and dairy products
- 🔐 User authentication (Sign up & Login)
- 🛍️ Shopping cart functionality
- 💳 Checkout process
- 📱 Responsive design
- 🎨 Clean and modern UI with Outfit font
- 🔄 Real-time cart updates

## Tech Stack

**Frontend:**
- HTML5
- CSS3 (Vanilla CSS)
- JavaScript (ES6+)
- Phosphor Icons

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## Local Development

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jayap31/freshfarm.git
cd freshfarm
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for local):
Create a `.env` file in the root directory:
```
MONGODB_URI=mongodb://localhost:27017/freshfarm
PORT=3000
```

4. Start MongoDB (if running locally):
```bash
mongod
```

5. Start the backend server:
```bash
node server.js
```

6. Open the frontend:
Open `index.html` in your browser or use a local server.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "New Project" and import your GitHub repository

4. Configure the project:
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string

6. Click "Deploy"

### MongoDB Atlas Setup (for production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist all IP addresses (0.0.0.0/0) for Vercel
5. Get your connection string and add it to Vercel environment variables

## Project Structure

```
freshfarm/
├── index.html          # Main HTML file
├── app.js             # Frontend JavaScript
├── style.css          # Styles
├── server.js          # Backend API
├── package.json       # Dependencies
├── vercel.json        # Vercel configuration
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## API Endpoints

- `POST /api/signup` - Create new user account
- `POST /api/login` - Authenticate user

## Features in Detail

### Authentication
- Users must sign up before they can shop
- Credentials are stored securely in MongoDB
- Session management via localStorage

### Shopping
- Filter products by category (All, Fruits, Vegetables, Dairy)
- Add items to cart
- Update quantities
- Remove items
- View order summary with tax calculation

### Responsive Design
- 3-column grid on desktop
- 2-column grid on tablets
- Single column on mobile

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

Jayap31

## Acknowledgments

- Product images from Unsplash
- Icons from Phosphor Icons
- Font: Outfit from Google Fonts
