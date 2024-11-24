import { NextResponse } from 'next/server'

interface ApiError extends Error {
  details?: unknown;
  cause?: unknown;
  stack?: string;
}

export async function POST(req: Request) {
  if (!process.env.REVOLUT_SECRET_KEY) {
    console.error('Missing REVOLUT_SECRET_KEY environment variable')
    return NextResponse.json(
      { error: 'Server configuration error: Missing API key' },
      { status: 500 }
    )
  }

  try {
    const { email, name } = await req.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    console.log('Creating order with:', {
      email,
      name,
      apiKeyPrefix: process.env.REVOLUT_SECRET_KEY.substring(0, 10) + '...',
    })

    const orderData = {
      amount: 9900,
      currency: "USD",
      customer_email: email,
      customer_name: name,
    }

    console.log('Request payload:', JSON.stringify(orderData, null, 2))

    const response = await fetch('https://merchant.revolut.com/api/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REVOLUT_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Revolut-Api-Version': '2024-09-01',
      },
      body: JSON.stringify(orderData),
    })

    const responseText = await response.text()
    console.log('Raw Revolut Response:', responseText)

    let responseData
    try {
      responseData = JSON.parse(responseText)
    } catch (e) {
      console.error('Failed to parse response:', e)
      return NextResponse.json(
        { error: 'Invalid response from payment provider' },
        { status: 500 }
      )
    }

    console.log('Revolut API Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
      data: responseData,
    })

    if (!response.ok) {
      console.error('Revolut API error:', responseData)
      return NextResponse.json(
        { 
          error: responseData.message || responseData.detail || 'Failed to create order',
          details: responseData 
        },
        { status: response.status }
      )
    }

    return NextResponse.json({
      id: responseData.id,
      token: responseData.token,
      checkout_url: responseData.checkout_url,
    })
  } catch (error: unknown) {
    const apiError = error as ApiError
    console.error('Error in create-order:', {
      message: apiError.message,
      stack: apiError.stack,
      cause: apiError.cause,
    })

    return NextResponse.json(
      { 
        error: 'Failed to create order',
        details: apiError.message,
        stack: process.env.NODE_ENV === 'development' ? apiError.stack : undefined
      },
      { status: 500 }
    )
  }
} 