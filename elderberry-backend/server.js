const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const communities = [
    { id: 1, title: "Cooking Community", description: "Learn more about our mission and values.", posted: "Nov 12, 2024", goTo: "/communities/cooking" },
    { id: 2, title: "Life Lessons Community", description: "Learn more about our mission and values.", posted: "Oct 22, 2024", goTo: "/communities/life-lessons" },
    { id: 3, title: "Sports Community", description: "Reach out to our team for assistance.", posted: "Nov 15, 2024", goTo: "/communities/sports" },
    { id: 4, title: "Financial Community", description: "Financial tips and resources.", posted: "Nov 18, 2024", goTo: "/communities/financial" },
    { id: 5, title: "Social Skills Community", description: "Improve your social skills with us.", posted: "Nov 20, 2024", goTo: "/communities/social-skills" },
    { id: 6, title: "Botanical Community", description: "Explore botanical wonders.", posted: "Nov 22, 2024", goTo: "/communities/botanical" },
    { id: 7, title: "Therapy Community", description: "Find support and guidance.", posted: "Nov 25, 2024", goTo: "/communities/therapy" },
  ];

// API routes
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Example API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.get('/communities/:id', (req, res) => {
    res.render('Community.js', {id: req.params.id})
})

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
