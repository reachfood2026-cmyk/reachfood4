import { Router } from 'express';
import authRoutes from './auth.routes.js';
import productsRoutes from './products.routes.js';
import ordersRoutes from './orders.routes.js';
import customersRoutes from './customers.routes.js';
import checkoutRoutes from './checkout.routes.js';
import prisma from '../config/database.js';

const router = Router();

// Auth routes
router.use('/auth', authRoutes);

// Product and subscription routes (includes admin and public)
router.use('/', productsRoutes);

// Order routes (includes admin and public)
router.use('/', ordersRoutes);

// Customer routes (admin only)
router.use('/', customersRoutes);

// Checkout tracking routes
router.use('/checkout', checkoutRoutes);

// Health check
router.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      success: true,
      message: 'API is running',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch {
    res.status(503).json({
      success: false,
      message: 'API is running but database is unavailable',
      database: 'disconnected',
      timestamp: new Date().toISOString()
    });
  }
});

export default router;
