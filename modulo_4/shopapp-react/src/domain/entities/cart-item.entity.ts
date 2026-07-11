import type { Product } from './product.entity'

export interface CartItem {
  product: Product
  quantity: number
}
