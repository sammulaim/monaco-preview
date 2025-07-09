import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';

const editor = monaco.editor.create(document.getElementById('editor'), {
  value: '<html>\n  <body>\n    <h1>Hello from Monaco!</h1>\n  </body>\n</html>',
  language: 'html',
  theme: 'vs-dark'
});

const preview = document.getElementById('preview');
editor.onDidChangeModelContent(() => {
  const html = editor.getValue();
  preview.srcdoc = html;
});
