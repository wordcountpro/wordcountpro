document.getElementById('text-input').addEventListener('input', function () {
  let text = this.value.trim();
  document.getElementById('word-count').textContent = text.split(/\s+/).filter(w => w).length;
  document.getElementById('char-count').textContent = text.length;
  document.getElementById('sentence-count').textContent = text.split(/[.!?]+/).filter(s => s).length;
  document.getElementById('paragraph-count').textContent = text.split(/\n+/).filter(p => p).length;
});
