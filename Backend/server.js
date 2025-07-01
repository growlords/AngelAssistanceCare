const express = require('express');
const multer = require('multer');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

// Use CORS middleware
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');

const corsOptions = {
  origin: 'https://angelassistancecare.co', // ✅ Your new frontend domain
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));


app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public', 'CV', 'uploads')); // Save uploaded files to 'public/CV/uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique file name with timestamp
  },
});

const upload = multer({ storage });

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_MAIL, // Replace with your email
    pass: process.env.SMTP_PASSWORD, // Replace with your email password or app password
  },
});

// Endpoint to test the server
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Handle CV submission
app.post('/api/send-mail', upload.single('file'), async (req, res) => {
  try {
    const { username, LastName, Location, Email, Phone_Number } = req.body;

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).send('File upload failed!');
    }

    const mailOptions = {
      from: process.env.SMTP_MAIL, // Use environment variables
      to: process.env.SMTP_MAIL, // Use environment variables
      subject: 'New CV Submission',
      text: `
        A newcomer desires to join your circle:

        Name: ${username} ${LastName}
        Location: ${Location}
        Email: ${Email}
        Phone Number: ${Phone_Number}
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('CV submitted successfully!');
  } catch (error) {
    console.error('Error in CV submission:', error);
    res.status(500).send('An error occurred while submitting the CV.');
  }
});

// Handle contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { username, Phone_Number, Email, Message } = req.body;

    const mailOptions = {
      from: process.env.SMTP_MAIL, // Use environment variables
      to: process.env.SMTP_MAIL, // Use environment variables
      subject: 'New GET-IN_TOUCH Form Submission',
      text: `
        A new message has been received:

        Name: ${username}
        Phone Number: ${Phone_Number}
        Email: ${Email}
        Message: ${Message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Contact form submitted successfully!');
  } catch (error) {
    console.error('Error in contact form submission:', error);
    res.status(500).send('An error occurred while submitting the contact form.');
  }
});

// Handle subscribe form submission
app.post('/api/subscription', async (req, res) => {
  try {
    const { Email } = req.body;

    const mailOptions = {
      from: process.env.SMTP_MAIL, // Use environment variables
      to: process.env.SMTP_MAIL, // Use environment variables
      subject: 'Somebody Has Subscribed',
      text: `
        A new subscription received:

        Email: ${Email}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send('Subscription form submitted successfully!');
  } catch (error) {
    console.error('Error in subscription form submission:', error);
    res.status(500).send('An error occurred while submitting the subscription form.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
