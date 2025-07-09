import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';

const defaultHTML = `<html>
  <body>
    <h1>Hello from Monaco!</h1>
  </body>
</html>`;

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: defaultHTML,
  language: 'html',
  theme: 'vs-dark'
});

const preview = document.getElementById('preview');

// Initial render
preview.srcdoc = defaultHTML;

// Update preview on change
editor.onDidChangeModelContent(() => {
  const html = editor.getValue();
  preview.srcdoc = html;
});
