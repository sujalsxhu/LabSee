# LabSee.AI 🚀

<p align="center">
  <img src="A_digital_vector_graphic_design_features_a_logo_fo.png" alt="LabSee.AI Logo" width="200"/>
</p>

LabSee.AI is a **ChatGPT-like AI chatbot** powered by **DeepSeek API**, built using **Node.js + Express**. It allows you to run your own AI assistant locally with simple setup and REST API endpoints.

---

## ⚡ Features
- ChatGPT-style responses using DeepSeek API  
- Lightweight Node.js + Express server  
- Easy `.env` configuration for API keys  
- REST API endpoint for integration in apps  

---

## 🔧 Installation & Setup

```bash
# Clone this repository
git clone https://github.com/sujalsxhu/LabSee.AI
cd LabSee.AI

# Install dependencies
npm install

# Copy example environment file
cp .env.example .env

# Open .env and add your DeepSeek API key
nano .env
# Example:
# DEEPSEEK_API_KEY=your_api_key_here

# Start the server (default port: 3000)
node Server.js
