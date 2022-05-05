let form = document.querySelector("#form");
let nb1 = document.querySelector("#nb1");
let nb2 = document.querySelector("#nb2");
let calcules = document.querySelector("#calculId");
let submit = document.querySelector('#submit');
let content = document.querySelector('#content');
let operateur = calcules.options[calcules.selectedIndex].value;

/******************Créaction de la fonction submit attacher event************************ */

let resultat;

submit.addEventListener('click', (e) => {
    // Récupération des éléments
    let nb1 = document.querySelector("#nb1");
    let nb2 = document.querySelector("#nb2");
    let operateur = calcules.options[calcules.selectedIndex].value;
    e.preventDefault();
    // alert('ok');
    // Permet d'afficher les valeur et les opérateurs
    console.log(nb1.value);
    console.log(nb2.value);
    console.log(operateur);
    
    if (isNaN(nb1.value) || isNaN(nb2.value)) {
        alert('Veillez entrer des chriffres stp pour commencer les calcules')
    }
    // calcule de l'addition
    else if (operateur == '+') {
         //prevent va permet d'enlever les contraintes du navigateur 
        e.preventDefault();
        // calcule
        //Number va permet d'avoir des chriffres
        resultat = Number(nb1.value) + Number(nb2.value);
        //créaction de la class 'fonddescription' 
        content.className = 'fonddescription'
        //permet d'afficher le resustal
        content.innerHTML = 'le resultat est: '+ resultat
    }
        // calcule de la soustration
    else if (operateur == '-') {
        //prevent va permet d'enlever les contraintes du navigateur 
        e.preventDefault();
        //créaction de la class 'fonddescription' 
        content.className = 'fonddescription'
        // calcule
        resultat = nb1.value - nb2.value;
        //permet d'afficher le resustal
        content.innerHTML = 'le resultat est: ' + resultat
    }
        // calcule de la division
    else if (operateur == '/') {
        e.preventDefault();
         //créaction de la class 'fonddescription' 
        content.className = 'fonddescription'
        // calcule
        resultat = nb1.value / nb2.value;
        //permet d'afficher le resustal
        content.innerHTML = 'le resultat est: ' + resultat
    }
        // calcule de la multiplication
    else if (operateur == '*') {
        console.log(nb1.value);
        console.log(nb2.value);
        e.preventDefault();
         //créaction de la class 'fonddescription' 
        content.className = 'fonddescription'
        // calcule
        resultat = nb1.value * nb2.value;
        //permet d'afficher le resustal
        content.innerHTML = 'le resultat est: ' + resultat
        // erreur
    } else {
        alert('errreur dans le programmation');
    }
        
    
})




// Conseil :
/*      

        ->Pour savoir si la fonction marche. il est bien de faire alert('ok').
        
        -> Pour savoir si les éléments est bien recupérer, il est bien de créer 
        grâce innerHTML avec une div qui va afficher les éléments .      
        
       -> En cas de problème: utilisation de console.log pour voir le problème        

 */

