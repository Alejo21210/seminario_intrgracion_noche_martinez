export type OrderingOption = 'price' | '-price' | 'name' | '-name' | 'stock'

export interface ProductFilters {
  search: string
  categoryId: number | null
  ordering: OrderingOption
}
