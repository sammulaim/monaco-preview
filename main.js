import * as monaco from 'monaco-editor';

// Replace with your OpenAI API Key (keep private!)
const OPENAI_API_KEY = "YOUR_API_KEY_HERE";

// Create the Monaco editor
const editor = monaco.editor.create(document.getElementById('app'), {
  value: `<!-- Ask me to create your website using the prompt below -->`,
  language: 'html',
  theme: 'vs-dark',
  automaticLayout: true,
});

// Setup preview iframe
const iframe = document.getElementById('preview');

function updatePreview() {
  const code = editor.getValue();
  const blob = new Blob([code], { type: 'text/html' });
  iframe.src = URL.createObjectURL(blob);
}

editor.onDidChangeModelContent(() => {
  updatePreview();
});

// AI Prompt Handler
window.handlePrompt = async function () {
  const prompt = document.getElementById('prompt').value;
  if (!prompt) return;

  const systemPrompt = `You're a helpful web developer. Generate a responsive HTML + CSS layout based on this prompt. No explanation, just return clean code.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    })
  });

  const data = await response.json();
  const html = data.choices?.[0]?.message?.content;

  if (htm
