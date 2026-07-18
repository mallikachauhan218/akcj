import Razorpay from 'razorpay';
import shortid from 'shortid';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;
    const options = {
      amount: amount * 100, 
      currency,
      receipt: shortid.generate(),
      payment_capture: 1,
    };

    try {
      const response = await razorpay.orders.create(options);
      res.status(200).json({
        orderId: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      res.status(400).json({ error: 'Unable to create order' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}