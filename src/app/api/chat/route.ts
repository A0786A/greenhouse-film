import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Add runtime configuration
export const runtime = 'edge';

// Add dynamic configuration
export const dynamic = 'force-dynamic';

// System message to define the AI's role and knowledge
const systemMessage = {
  role: "system",
  content: `You are a knowledgeable greenhouse film specialist working for Greenhouse Film. Your role is to help customers understand our products and make informed decisions.

Key Products:
1. Clear Greenhouse Film ($299.99)
   - UV Protection
   - High Light Transmission
   - Durable Material
   - Weather Resistant

2. Diffused Greenhouse Film ($349.99)
   - Light Diffusion
   - Heat Retention
   - Anti-Condensation
   - Long Lifespan

3. Thermal Greenhouse Film ($399.99)
   - Thermal Insulation
   - Energy Saving
   - Frost Protection
   - Durable Coating

4. Anti-Drip Film ($379.99)
   - Anti-Drip Coating
   - Clear Visibility
   - Disease Prevention
   - Easy Installation

5. Shade Cloth ($249.99)
   - UV Protection
   - Temperature Control
   - Durable Material
   - Easy to Install

Company Information:
- Location: 800 W. 16th Street Long Beach, CA 90813
- Phone: (818) 893-9097, (818) 893-9014
- Email: info@greenhousefilm.com
- A subsidiary of Ferrari Metals, Inc.

Guidelines:
1. Always be professional and helpful
2. Provide accurate pricing and product information
3. Suggest relevant products based on customer needs
4. Explain technical features in simple terms
5. If unsure about something, offer to connect them with a human specialist
6. Keep responses concise but informative
7. Use the company's green color scheme in your language (e.g., "green solutions", "sustainable options")`
};

export async function POST(request: Request) {
  console.log('API route hit');
  
  // Log environment check
  console.log('Environment check:', {
    hasApiKey: !!process.env.OPENAI_API_KEY,
    apiKeyLength: process.env.OPENAI_API_KEY?.length,
    nodeEnv: process.env.NODE_ENV
  });

  if (!process.env.OPENAI_API_KEY) {
    console.error('OpenAI API key is not configured');
    return new NextResponse(
      JSON.stringify({ 
        error: 'OpenAI API key is not configured',
        details: 'Please check your .env.local file'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const body = await request.json();
    console.log('Request body:', body);

    if (!body.messages || !Array.isArray(body.messages)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Invalid request format',
          details: 'Messages array is required'
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Add system message to the conversation
    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant for Greenhouse Film, a company specializing in greenhouse solutions. You can help with product information, pricing, and general inquiries about greenhouse films and related products."
      },
      ...body.messages
    ];

    console.log('Sending messages to OpenAI:', messages);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
      max_tokens: 500,
    });

    console.log('OpenAI response:', completion);

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error('Invalid response format from OpenAI');
    }

    return new NextResponse(
      JSON.stringify({
        message: completion.choices[0].message.content
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Log the full error for debugging
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
    }

    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to process chat request',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 