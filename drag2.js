let dragAnswers = {};
document.querySelectorAll('.drag').forEach(el => {
  el.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text', el.textContent);
  });
});
document.querySelectorAll('.drop').forEach(el => {
  el.addEventListener('dragover', e => e.preventDefault());
  el.addEventListener('drop', e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    el.textContent = data;
    dragAnswers[el.getAttribute('data-answer')] = data;
  });
});
function submitDrag() {
  let score = Number(localStorage.getItem('score')) || 0;
  ["Brot", "Milch", "Kaffee"].forEach(ans => {
    if (dragAnswers[ans] === ans) score++;
  });
  localStorage.setItem('score', score);
  window.location.href = "page8.html";
}