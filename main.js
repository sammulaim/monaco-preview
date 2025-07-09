import * as monaco from 'monaco-editor';

<<<<<<< HEAD
const editorContainer = document.getElementById('editor');
const previewFrame = document.getElementById('preview');
const aiInput = document.getElementById('ai-input');
const aiButton = document.getElementById('ai-generate');

=======
<<<<<<< HEAD
// Load from .env or Vercel Environment Variables
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// Create the Monaco editor
const editor = monaco.editor.create(document.getElementById('app'), {
  value: `<!-- Ask me to create your website using the prompt below -->`,
=======
const editorContainer = document.getElementById('editor');
const previewFrame = document.getElementById('preview');
const aiInput = document.getElementById('ai-input');
const aiButton = document.getElementById('ai-generate');

>>>>>>> working-ai-version
const editor = monaco.editor.create(editorContainer, {
  value: `<!DOCTYPE html>
<html>
  <head><title>AI Website</title></head>
  <body><h1>Welcome!</h1></body>
</html>`,
<<<<<<< HEAD
=======
>>>>>>> 6a407fb (Working AI preview + append support)
>>>>>>> working-ai-version
  language: 'html',
  theme: 'vs-dark',
  automaticLayout: true,
});

<<<<<<< HEAD
function updatePreview() {
  previewFrame.srcdoc = editor.getValue();
}

editor.onDidChangeModelContent(updatePreview);
updatePreview();

=======
<<<<<<< HEAD
// Setup preview iframe
const iframe = document.getElementById('preview');

function updatePreview() {
  const code = editor.getValue();
  const blob = new Blob([code], { type: 'text/html' });
  iframe.src = URL.createObjectURL(blob);
}

editor.onDidChangeModelContent(() => {
  updatePreview();
=======
function updatePreview() {
  previewFrame.srcdoc = editor.getValue();
}

editor.onDidChangeModelContent(updatePreview);
updatePreview();

>>>>>>> working-ai-version
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
<<<<<<< HEAD
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
=======
>>>>>>> working-ai-version
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
>>>>>>> 6a407fb (Working AI preview + append support)
});

// AI Prompt Handler
window.handlePrompt = async function () {
  const prompt = document.getElementById('prompt').value;
  if (!prompt) return;

  const systemPrompt = `You're a helpful web developer. Generate a responsive HTML + CSS layout based on this prompt. No explanation, just return clean code.`;

  const response = await fetch("https://api.openai.com/v1/chat/completio
