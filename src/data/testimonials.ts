export interface Testimonial {
  id: string
  customerName: string
  rating: number
  message: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    customerName: 'Adaeze O.',
    rating: 5,
    message: 'The wool coat photos didn\'t do it justice — the fit and finish feel genuinely premium. Delivery to Abuja took three days.',
  },
  {
    id: 't2',
    customerName: 'Tomiwa A.',
    rating: 5,
    message: 'I messaged on WhatsApp about sizing and got a reply in minutes. Ordered the trousers a size up as advised and they fit perfectly.',
  },
  {
    id: 't3',
    customerName: 'Ifeoma K.',
    rating: 4,
    message: 'Beautiful fabric quality on the silk dress. Exchanged for a smaller size with no stress at all.',
  },
  {
    id: 't4',
    customerName: 'Chidi E.',
    rating: 5,
    message: 'Love the minimalist aesthetic – the pieces feel like they were made for me. Will definitely be ordering again.',
  },
]
