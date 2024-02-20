let symboles = ['X', 'O'];
let tours = 0;
let leadBoard = document.getElementById("leaderboard");
let pions = document.querySelectorAll("#game button");
let resetButton = document.getElementById('reset');
let finPartie = false;
let leaderBoard = {};
let score = 0

pions.forEach(function(pion) {
  pion.disabled = true;
});


document.getElementById('start').addEventListener('click', function() {
  let joueur1 = document.getElementById('joueur1').value;
    let joueur2 = document.getElementById('joueur2').value;
    

  // Vérifier si les pseudos sont entrés
  if (joueur1 === "" || joueur2 === "") {
      const alert = document.createElement("div");
      alert.display = "block";
      alert.style.color = "red";
      alert.innerHTML = "Merci d'entrer un pseudo pour les 2 joueurs";
      leadBoard.appendChild(alert);
      setTimeout(() => {
        alert.innerHTML = "";
      }, 500);
      return; 
  }



  // Activer les boutons du jeu
  pions.forEach(function(pion) {
      pion.disabled = false;
  });

  this.disabled = true;
});


// Vérifie si la case est déjà prise

for (let i = 0, p = pions.length; i < p; i++){
    pions[i].addEventListener('click', function() {

      if (this.innerHTML !== '') {
        console.log("déjà jouer !");
        return;
    } else if ( this.innerHTML !== ''|| finPartie) {
      console.log("Partie terminé !");
      return;
    }

    

    let symbole = symboles[tours % 2];
    setSymbol(this, symbole);
    tours++;


    if (checkVictory(symbole)) {
        leadBoard.innerHTML = `Le joueur ${symbole} à gagner !`
        resetButton.style.display = 'block';
        finPartie = true;
        
    } else if (tours === pions.length) {
      leadBoard.innerHTML = `Aucun des joueurs n'a gagner !`
      resetButton.style.display = 'block';
      finPartie = true;
    }

        
    });
}

function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
}

function checkVictory(symbole) {
  let lignes = [
      [pions[0], pions[1], pions[2]],
      [pions[3], pions[4], pions[5]],
      [pions[6], pions[7], pions[8]],
      [pions[0], pions[3], pions[6]],
      [pions[1], pions[4], pions[7]],
      [pions[2], pions[5], pions[8]],
      [pions[0], pions[4], pions[8]],
      [pions[2], pions[4], pions[6]]
  ];

  for (let i = 0; i < lignes.length; i++) {
      if (lignes[i][0].innerHTML === symbole &&
          lignes[i][1].innerHTML === symbole &&
          lignes[i][2].innerHTML === symbole) {
          return true;
      }
      
  } 



  return false;
}


resetButton.addEventListener('click', function() {
  for (let i = 0, p = pions.length; i < p; i++){
      pions[i].innerHTML = '';
      pions[i].className = '';
      
  }
  tours = 0;
  this.style.display = 'none';
  document.getElementById('start').disabled = false;
  finPartie = false;
});