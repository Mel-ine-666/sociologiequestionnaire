var counter = 0;

function addElement() {
    // crée un nouvel élément div
    var newDiv = document.createElement("div");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(`${counter}`);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);
  
    counter += 1;
    // ajoute le nouvel élément créé et son contenu dans le DOM
    var currentDiv = document.getElementById('main');
    currentDiv.appendChild(newDiv);
  }
