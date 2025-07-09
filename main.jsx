import * as monaco from 'monaco-editor';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: "<!-- Write your HTML here -->\n<h1>Hello, AI Website!</h1>",
  language: 'html',
  theme: 'vs-dark',
  automaticLayout: true,
});

const previewFrame = document.getElementById('preview');

// Sync editor changes with preview
editor.onDidChangeModelContent(() => {
  const html = editor.getValue();
  previewFrame.srcdoc = html;
});

// Create AI prompt input
const promptBox = document.createElement('div');
promptBox.style.position = 'fixed';
promptBox.style.bottom = '10px';
promptBox.style.left = '10px';
promptBox.style.right = '10px';
promptBox.style.display = 'flex';
promptBox.style.gap = '8px';
promptBox.style.padding = '10px';
promptBox.style.backgroundColor = '#1e1e1e';

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Ask AI to generate code...';
input.style.flex = '1';
input.style.padding = '8px';
input.style.border = '1px solid #555';
input.style.backgroundColor = '#2d2d2d';
input.style.color = 'white';

const button = document.createElement('button');
button.innerText = 'Generate';
button.style.padding = '8px 16px';
button.style.backgroundColor = '#4caf50';
button.style.border = 'none';
button.style.color = 'white';
button.style.cursor = 'pointer';

promptBox.appendChild(input);
promptBox.appendChild(button);
document.body.appendChild(promptBox);

// Handle click
button.onclick = async () => {
  const prompt = input.value;
  if (!prompt) return;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const html = data.choices?.[0]?.message?.content || 'AI response failed.';
editor.setValue(editor.getValue() + '\n\n' + html);
    input.value = '';
  } catch (err) {
    alert("Error: " + err.message);
  }
};
