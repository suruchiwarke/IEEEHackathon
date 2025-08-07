function submitMCQ() {
  let score = Number(localStorage.getItem('score')) || 0;
  const answers = { q1: "Buch", q2: "Dienstag", q3: "Blue" };
  Object.keys(answers).forEach(q => {
    const val = document.querySelector(`input[name="${q}"]:checked`);
    if (val && val.value === answers[q]) score++;
  });
  localStorage.setItem('score', score);
  window.location.href = "page6.html";
}