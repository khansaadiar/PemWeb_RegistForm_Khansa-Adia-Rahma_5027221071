// backend/routes/accountsRouter.ts
import { Router } from 'express';
import passport from 'passport'; // Pastikan Anda sudah menginstall passport dan strategi passport yang sesuai

const router = Router();

router.post('/login', passport.authenticate('local', {
  successRedirect: '/api/success', // Ganti dengan rute yang sesuai
  failureRedirect: '/api/failure', // Ganti dengan rute yang sesuai
}));

export default router;
