var fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
"A friend asks only for your time not your money.",
"A gambler not only will lose what he has, but also will lose what he doesn’t have.",
"A lifetime of happiness lies ahead of you.",
"Accept something that you cannot change, and you will feel better.",
"Advice is like kissing. It costs nothing and is a pleasant thing to do.",
"An acquaintance of the past will affect you in the near future.",
"Because you demand more from yourself, others respect you deeply.",
"Better ask twice than lose yourself once.",
"Curiosity kills boredom. Nothing can kill curiosity.",
"Depart not from the path which fate has you assigned.",
"Do not underestimate yourself. Human beings have unlimited potentials.",
"Don’t confuse recklessness with confidence.",
"Every flower blooms in its own sweet time.",
"Expect much of yourself and little of others.",
"For hate is never conquered by hate. Hate is conquered by love.",
"From listening comes wisdom and from speaking repentance.",
"Hard words break no bones, fine words butter no parsnips.",
"He who knows others is wise. He who knows himself is enlightened.",
"Help! I’m being held prisoner in a chinese bakery!",
"If you wish to see the best in others, show the best of yourself.",
"It is better to be an optimist and proven a fool than to be a pessimist and be proven right.",
"It is honorable to stand up for what is right, however unpopular it seems.",
"Listen not to vain words of empty tongue.",
"Man’s mind, once stretched by a new idea, never regains it’s original dimensions.",
"Nothing is more difficult, and therefore more precious, than to be able to decide.",
"Pennies from heaven find their way to your doorstep this year!",
"Pick battles big enough to matter, small enough to win.",
"Remember to share good fortune as well as bad with your friends.",
"Savor your freedom – it is precious.",
"Sift through your past to get a better idea of the present.",
"Soon life will become more interesting.",
"Stand tall. Don’t look down upon yourself.",
"Success is going from failure to failure without loss of enthusiasm.",
"Take care and sensitivity you show towards others will return to you.",
"The austerity you see around you covers the richness of life like a veil.",
"The first man gets the oyster, the second man gets the shell.",
"The one that recognizes the illusion does not act as if it is real.",
"There is no mistake so great as that of being always right.",
"To the world you may be one person, but to one person you may be the world.",
"Tonight you will be blinded by passion.",
"When your heart is pure, your mind is clear.",
"You always bring others happiness.",
"You are generous to an extreme and always think of the other fellow.",
"You begin to appreciate how important it is to share your personal beliefs.",
"You will enjoy good health; you will be surrounded by luxury.",
"Your biggest virtue is your modesty.",
"Your infinite capacity for patience will be rewarded sooner or later.",
"Your quick wits will get you out of a tough situation.",
"You love chinese food."];

document.querySelector(".btn").addEventListener("click", function() {
randomFortune();
buttonPress();
});

function randomFortune() {
  var num = Math.floor(Math.random() * 50);
  document.querySelector(".paper-text").innerHTML = "'" + fortunes[num] + "'";
}

function buttonPress() {
  document.querySelector(".btn").classList.add("pressed");
  setTimeout(function() {
    document.querySelector(".btn").classList.remove("pressed");
  }, 100);
}
