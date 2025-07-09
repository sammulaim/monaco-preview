import * as monaco from 'monaco-editor';

const editor = monaco.editor.create(document.getElementById('app'), {
  value: `<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: sans-serif; }
    </style>
  </head>
  <body>
    <h1>Hello from Monaco!</h1>
    <p>This is a live preview.</p>
    <script>
      console.log("JS is working!");
    </script>
  </body>
</html>`,
  language: 'html',
  theme: 'vs-dark',
  automaticLayout: true,
});

const iframe = document.createElement('iframe');
iframe.style.width = '50%';
iframe.style.height = '100vh';
iframe.style.position = 'fixed';
iframe.style.right = '0';
iframe.style.top = '0';
iframe.style.border = 'none';
document.body.appendChild(iframe);

function updatePreview() {
  const code = editor.g
