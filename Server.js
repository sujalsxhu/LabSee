// CommonJS style (easy to run)
const express = require('express');
const path = require('path');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/chat', async (req, res) => {
  try {
    if (!DEEPSEEK_API_KEY) {
      return res.status(500).json({ error: 'DEEPSEEK_API_KEY not set in env' });
    }
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'message required' });

    // Call DeepSeek (OpenAI-compatible style)
    const resp = await axios.post(
      'https://api.deepseek.com/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a helpful assistant that speaks Hindi.' },
          { role: 'user', content: message }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
        }
      }
    );

    const reply = resp.data?.choices?.[0]?.message?.content || 'No reply from API';
    res.json({ reply });
  } catch (err) {
    console.error('API error:', err?.response?.data || err.message);
    res.status(500).json({ error: 'API error', details: err?.response?.data || err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
