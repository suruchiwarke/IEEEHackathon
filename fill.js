function submitFill() {
  let score = Number(localStorage.getItem('score')) || 0;
  const answers = { f1: "ist", f2: "mein", f3: "esse" };
  Object.keys(answers).forEach(q => {
    const val = document.querySelector(`input[name="${q}"]`);
    if (val && val.value.trim().toLowerCase() === answers[q].toLowerCase()) score++;
  });
  localStorage.setItem('score', score);
  window.location.href = "page4.html";
}