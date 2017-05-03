const quotes = [
  {
    "quote" : "A posse ad esse non valet consequential"
  },
  {
    "quote" : "A probis probari, ab improbis improbari aequa laus est"
  },
  {
    "quote" : "Ab initio nullum, semper nullum"
  },
  {
    "quote" : "Aequam memento rebus in arduis servare mentem"
  },
 {
    "quote" : "Age, quod agis, et respice finem"
  },
  {
    "quote" : "Aliena vitia in oculis habemus, a tergo nostra sunt"
  },
  {
    "quote" : "Amicus certus in re incerta cernitur"
  },
  {
    "quote" : "An nescis, mi fili, quantilla prudentia mundus regatur?"
  },
  {
    "quote" : "Aquila non captat muscas"
  },
  {
    "quote" : "Asini exiguo pabulo vivunt"
  },
  {
    "quote" : "Beatae plane aures, quae non vocem foris sonantem, sed intus auscultant veritatem docentem"
  },
  {
    "quote" : "Concordia parvae res crescunt, discordia maximae dilabuntur "
  },
  {
    "quote" : "Cujusvis hominis est errare, nullius nisi insipientis in errore perseverare"
  },
  {
    "quote" : "Damnant quod non intellegunt"
  },
  {
    "quote" : "Difficile est proprie communia dicere"
  },
  {
    "quote" : "Edimus ut vivamus, non vivimus ut edamus"
  },
  {
    "quote" : "Ei incumbit probatio, qui dicit, non qui negat"
  },
  {
    "quote" : "Frustra fit per plura quod potest fieri per pauciora"
  },
  {
    "quote" : "Inter arma silent Musae"
  },
  {
    "quote" : "Irreparabilium (iprepara rabilium) felix oblivio rerum"
  },
  {
    "quote" : "Labor est etiam ipse voluptas"
  }
]

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}.”`;
  // source.innerText = random.source;
}

randomQuote();

document.querySelector("button").addEventListener('click', randomQuote)

