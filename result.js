window.onload = function() {
  let score = Number(localStorage.getItem('score')) || 0;
  document.getElementById('score').innerText = `You Scored: ${score} out of 18`;
  localStorage.removeItem('score');
};