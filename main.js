import * as monaco from 'monaco-editor';

// Load from .env or Vercel Environment Variables
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

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

  const response = await fetch("https://api.openai.com/v1/chat/completio
