import * as monaco from 'monaco-editor';

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: '<h1>Hello world</h1>',
  language: 'html',
  theme: 'vs-dark'
});

async function generate(prompt, append = false) {
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
    const html = data.choices?.[0]?.message?.content || 'Failed to get response.';
    
    if (append) {
      editor.setValue(editor.getValue() + '\n\n' + html);
    } else {
      editor.setValue(html);
    }

    document.getElementById('preview').srcdoc = editor.getValue();
  } catch (error) {
    alert("Error generating code: " + error.message);
  }
}

const chatBox = document.createElement('div');
chatBox.style.position = 'fixed';
chatBox.style.bottom = '0';
chatBox.style.left = '0';
chatBox.style.width = '100%';
chatBox.style.background = '#222';
chatBox.style.padding = '10px';
chatBox.innerHTML = `
  <input id="prompt" placeholder="Describe what you want..." style="width: 70%; padding: 8px;" />
  <button id="generateBtn">Replace</button>
  <button id="appendBtn">Append</button>
`;

document.body.appendChild(chatBox);

document.getElementById('generateBtn').onclick = () => {
  const prompt = document.getElementById('prompt').value;
  generate(prompt, false);
};

document.getElementById('appendBtn').onclick = () => {
  const prompt = document.getElementById('prompt').value;
  generate(prompt, true);
};
