export interface RevolutOrderResponse {
  id: string
  public_id: string
  amount: number
  currency: string
  description: string
  customer_email: string
  customer_id: string
  metadata: {
    customer_name: string
  }
  created_at: string
  status: string
}

export interface RevolutError {
  message: string
  code: string
  param?: string
} 