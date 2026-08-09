export interface Faq {
  id: string
  question: string
  answer: string
  category: string
}

export const faqs: Faq[] = [
  {
    id: 'f1',
    category: 'Delivery',
    question: 'Do you deliver nationwide?',
    answer: 'Yes — we deliver across all 36 states. Lagos deliveries typically arrive in 2–4 business days; other states take 4–7 business days.',
  },
  {
    id: 'f2',
    category: 'Delivery',
    question: 'How long does delivery take?',
    answer: '2–4 business days within Lagos, and 4–7 business days for other states, once your order is confirmed.',
  },
  {
    id: 'f3',
    category: 'Returns',
    question: 'Do you accept returns?',
    answer: 'Yes, within 5 days of delivery, provided the item is unworn, unwashed, and has its original tags attached.',
  },
  {
    id: 'f4',
    category: 'Returns',
    question: 'Can I exchange sizes?',
    answer: 'Absolutely. Message us on WhatsApp with your order number and we\'ll arrange a size exchange.',
  },
  {
    id: 'f5',
    category: 'Ordering',
    question: 'How do I order?',
    answer: 'Simply take a screenshot of your favorite items and send it to us via Instagram DM or WhatsApp. We\'ll confirm availability and payment details directly.',
  },
  {
    id: 'f6',
    category: 'Ordering',
    question: 'Do you restock?',
    answer: 'Popular pieces are restocked regularly. Follow us on Instagram or join our WhatsApp channel for restock announcements.',
  },
]
