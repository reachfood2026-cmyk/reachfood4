import { Router } from 'express';
import { checkoutService } from '../services/checkout.service.js';

const router = Router();

// Track checkout session
router.post('/session', async (req, res, next) => {
  try {
    const { sessionId, currentStep, cartState, personalInfo, checkoutInfo } = req.body;

    const session = await checkoutService.upsertSession(sessionId, {
      currentStep,
      cartState,
      personalInfo,
      checkoutInfo
    });

    res.json({ success: true, data: session });
  } catch (error) {
    next(error);
  }
});

// Mark session as abandoned
router.post('/abandon', async (req, res, next) => {
  try {
    const { sessionId, abandonedAtStep } = req.body;
    await checkoutService.markAbandoned(sessionId, abandonedAtStep);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Complete session
router.post('/complete', async (req, res, next) => {
  try {
    const { sessionId, orderId } = req.body;
    await checkoutService.completeSession(sessionId, orderId);
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});

// Get abandonment stats (admin)
router.get('/stats', async (req, res, next) => {
  try {
    const stats = await checkoutService.getAbandonmentStats();
    res.json({ success: true, data: stats });
  } catch (error) {
    next(error);
  }
});

export default router;
