import * as monaco from 'monaco-editor';

const editorContainer = document.getElementById('editor');
const previewFrame = document.getElementById('preview');
const aiInput = document.getElementById('ai-input');
const aiButton = document.getElementById('ai-generate');

const editor = monaco.editor.create(editorContainer, {
  value: `<!DOCTYPE html>
<html>
  <head><title>AI Website</title></head>
  <body><h1>Welcome!</h1></body>
</html>`,
  language: 'html',
  theme: 'vs-dark',
  automaticLayout: true,
});

function updatePreview() {
  previewFrame.srcdoc = editor.getValue();
}

editor.onDidChangeModelContent(updatePreview);
updatePreview();

aiButton.addEventListener('click', async () => {
  const userPrompt = aiInput.value.trim();
  if (!userPrompt) return;

  aiButton.disabled = true;
  aiButton.textContent = "Generating...";

  try {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
  Authorization: `Bearer qun7_hqAOsjiUxfe5NQc9Nz06hAymycHBwRIA_AlJlFFZD6IWRzTsQMxetN-UgpSjP4aWaHaT4T3BlbkFJn2sFESUPUz4r-KoGlePOV2zCuG38qIfwQX5WrwCqrAzx5UnZiiECw9rNZ-nCXZHB3NmdYXMpMA`,
  'Content-Type': 'application/json',
},

  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are an expert HTML/CSS generator. Only return full HTML documents.' },
      { role: 'user', content: userPrompt }
    ]
  }),
});

        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are an expert HTML/CSS generator. Only return full HTML documents.' },
          { role: 'user', content: userPrompt }
        ]
      }),
    });

    const data = await response.json();
    const html = data.choices?.[0]?.message?.content || 'Failed to get response.';
    editor.setValue(html);
  } catch (error) {
    alert("Error generating code: " + error.message);
  }

  aiButton.disabled = false;
  aiButton.textContent = "Generate with AI";
});
