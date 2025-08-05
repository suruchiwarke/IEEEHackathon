function submitMCQ() {
  let score = Number(localStorage.getItem('score')) || 0;
  const answers = { q1: "Berlin", q2: "Apfel", q3: "Blau" };
  Object.keys(answers).forEach(q => {
    const val = document.querySelector(`input[name="${q}"]:checked`);
    if (val && val.value === answers[q]) score++;
  });
  localStorage.setItem('score', score);
  window.location.href = "page3.html";
}