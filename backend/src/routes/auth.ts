// const { Router } = require('@payloadcms/server');
// const bcrypt = require('bcryptjs');

// const router = new Router({
//   route: '/auth',
// });

// router.route({
//   method: 'post',
//   path: '/login',
//   async handler(req, res) {
//     const { username, password } = req.body;

//     // Ganti logika otentikasi sesuai kebutuhan
//     // Misalnya, kita hanya memeriksa apakah username dan password cocok
//     if (username === 'admin' && password === 'password') {
//       // Kirim respon sukses jika login berhasil
//       res.status(200).json({ message: 'Login successful' });
//     } else {
//       // Kirim respon gagal jika login gagal
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   },
//   router.post('/register', (req, res) => {
//     const { email, password, name } = req.body;
  
//     // Check if user with the same email already exists
//     const existingUser = users.find(u => u.email === email);
//     if (existingUser) {
//       return res.status(400).json({ success: false, message: 'User with the same email already exists' });
//     }
  
//     // Create a new user
//     const newUser = {
//       id: users.length + 1,
//       email,
//       password, // You should hash the password in a real-world scenario
//       name,
//     };
  
//     users.push(newUser);
  
//     res.status(201).json({ success: true, user: { id: newUser.id, email: newUser.email, name: newUser.name } });
//   });
  
// module.exports = router;

import { Access } from 'payload/config';

export const authorOrAdmin: Access = ({ req: { user } }) => {
  if (!user) {
    return false;
  }

  if (user.collection === 'accounts') {
    return true;
  }

  return {
    senderID: {
      equals: user.id,
    },
  };
};