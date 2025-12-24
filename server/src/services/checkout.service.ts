import prisma from '../config/database.js';

export const checkoutService = {
  async upsertSession(sessionId: string, data: {
    currentStep: number;
    cartState: object;
    personalInfo?: object;
    checkoutInfo?: object;
  }) {
    return await prisma.checkoutSession.upsert({
      where: { sessionId },
      update: {
        currentStep: data.currentStep,
        cartState: data.cartState,
        personalInfo: data.personalInfo,
        checkoutInfo: data.checkoutInfo,
        lastActiveAt: new Date()
      },
      create: {
        sessionId,
        currentStep: data.currentStep,
        cartState: data.cartState,
        personalInfo: data.personalInfo,
        checkoutInfo: data.checkoutInfo
      }
    });
  },

  async markAbandoned(sessionId: string, step: number) {
    await prisma.checkoutSession.update({
      where: { sessionId },
      data: {
        abandonedAt: new Date(),
        currentStep: step
      }
    });
  },

  async completeSession(sessionId: string, orderNumber: string) {
    // Find the order by orderNumber to get the ID
    const order = await prisma.order.findUnique({
      where: { orderNumber }
    });

    if (order) {
      await prisma.checkoutSession.update({
        where: { sessionId },
        data: {
          completedAt: new Date(),
          orderId: order.id
        }
      });
    }
  },

  async getAbandonmentStats() {
    const abandoned = await prisma.checkoutSession.findMany({
      where: {
        completedAt: null,
        abandonedAt: { not: null }
      }
    });

    const byStep = abandoned.reduce((acc, session) => {
      acc[session.currentStep] = (acc[session.currentStep] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    return {
      total: abandoned.length,
      byStep: {
        productSelection: byStep[0] || 0,
        personalInfo: byStep[1] || 0,
        checkoutInfo: byStep[2] || 0
      }
    };
  }
};
