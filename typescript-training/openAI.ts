{
  "name": "free-ai-router",
  "version": "1.0.0",
  "description": "OpenAI-compatible router that auto-rotates across free-tier AI providers (Groq, OpenRouter, Gemini, HuggingFace) when one hits its rate limit.",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  },
  "dependencies": {
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}