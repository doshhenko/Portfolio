
let duration = 0.8;
let delay = 0.1;
let hardSkillsText = document.querySelector(".hard_skills");
let letters = hardSkillsText.textContent.split("");
hardSkillsText.textContent = "";
let middle = letters.filter(e => e !== " ").length / 2;
letters.forEach((letter, i) => {
  let span = document.createElement("span");
  span.textContent = letter;
  span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
  hardSkillsText.append(span);
});




