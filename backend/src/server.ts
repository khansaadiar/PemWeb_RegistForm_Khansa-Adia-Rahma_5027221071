import express from 'express';
import payload from 'payload';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';

require('dotenv').config();
const app = express();

app.use(bodyParser.json());

app.use(cors());

// Inisialisasi Payload
const initPayload = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });
};

// Endpoint untuk login
// app.post('/api/accounts/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await payload.collection('accounts').findOne({ email });

//     if (user) {
//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (passwordMatch) {
//         res.json({ success: true, user });
//       } else {
//         res.status(401).json({ success: false, message: 'Invalid email or password' });
//       }
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid email or password' });
//     }
//   } catch (error) {
//     console.error('Login failed:', error);
//     res.status(500).json({ success: false, message: 'Internal Server Error' });
//   }
// });

app.get('/', (_, res) => {
  res.redirect('/admin');
});


const start = async () => {
  // Inisialisasi Payload
  await initPayload();

  // ...

  app.listen(8000, () => {
    console.log('Server listening on port 8000');
  });
};

start();
