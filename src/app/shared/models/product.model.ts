export interface Product {
  id: number,
  name: string,
  price: number,
  category?: Category
}

export interface CartItem extends Product {
  qtt: number
}

export type Category = 'Furniture' | 'Food' | 'Electronic'
