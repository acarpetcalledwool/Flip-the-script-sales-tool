const quizContainer = document.getElementById('quiz-container');

quizContainer.innerHTML = `
  <p>Question: Are you looking for product A or product B?</p>
  <button onclick="choose('A')">Product A</button>
  <button onclick="choose('B')">Product B</button>
`;

function choose(product) {
  alert(`You chose Product ${product}. Let’s explore!`);
}
