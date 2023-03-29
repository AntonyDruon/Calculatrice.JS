const touches = [...document.querySelectorAll("button")]; // on transforme en tableau via [...    ]

const listeKeycode = touches.map(touche=>touche.dataset.key)// on récupère un nouveau tableau avec que les key via l'ancien tableau avec la fonction map()
// console.log(listeKeycode);
const ecran = document.querySelector(".ecran");

document.addEventListener('keydown', function(e){ // quand on appuie sur la touche du clavier
    const valeur = e.keyCode.toString();//on recupère la valeur de la touche et on la transforme en chaine de caractère via toString()
    calculer(valeur)
})
document.addEventListener('click', function(e){
    const valeur = e.target.dataset.key;// on récupère la valeur du click 
    calculer(valeur)
})

const calculer = function(valeur){
    if(listeKeycode.includes(valeur)){  //on vérifie si la touche du clavier contient la valeur du keycode inclut dans la liste des keycode
        if (valeur === '8'){// si on click ou on presse la keycode 8 (la touche C de la calculatrice)
                
                ecran.textContent = "";// on affiche une chaine de caractère vide (on supprime ce qu'il y a l'écran)
         
        } else if (valeur === '13') { // si on click ou on presse la keycode 13(la touche =)
                const calcul = eval(ecran.textContent);//on stock dans la variable calcul et on utilise la fonction eval qui va evaluer le contenu de l'écran
                ecran.textContent = calcul // on renvoie le resultat du calcul sur l'écran
         } else {
                const indexKeycode = listeKeycode.indexOf(valeur);// on récupère l'index de la listeKeycode équivalent a la valeur
                const touche = touches[indexKeycode];// on stock dans la variable touches l'indexkeycode qui correspond à la valeur determiné juste au dessus
                ecran.textContent += touche.innerHTML;//on affiche à l'écran 
        }
    }    
} 
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul')
})



// document.querySelector("#un").addEventListener("click" , function(){
   
//     result.innerHTML = "1"
// })

// document.querySelector("#deux").addEventListener("click",function(){
//    result.innerHTML ="2"
// })
// document.querySelector("#trois").addEventListener("click",function(){
//     result.innerHTML ="3"
//  })
//  document.querySelector("#quatre").addEventListener("click",function(){
//     result.innerHTML ="4"
//  })
//  document.querySelector("#cinq").addEventListener("click",function(){
//     result.innerHTML ="5"
//  })
//  document.querySelector("#six").addEventListener("click",function(){
//     result.innerHTML ="6"
//  })
//  document.querySelector("#sept").addEventListener("click",function(){
//     result.innerHTML ="7"
//  })
//  document.querySelector("#huit").addEventListener("click",function(){
//     result.innerHTML ="8"
//  })
//  document.querySelector("#neuf").addEventListener("click",function(){
//     result.innerHTML ="9"
//  })
//  document.querySelector("#zero").addEventListener("click",function(){
//     result.innerHTML ="0"
//  })
//  document.querySelector("#plus").addEventListener("click",function(){
//     result.innerHTML ="+"
//  })
//  document.querySelector("#moins").addEventListener("click",function(){
//     result.innerHTML ="-"
//  })
//  document.querySelector("#multiplier").addEventListener("click",function(){
//     result.innerHTML ="x"
//  })
//  document.querySelector("#diviser").addEventListener("click",function(){
//     result.innerHTML ="/"
//  })
//  document.querySelector("#egal").addEventListener("click",function(){
//     result.innerHTML ="="
//  })
//  document.querySelector("#reset").addEventListener("click",function(){
//     result.innerHTML ="C"
//  })
//  document.querySelector("#point").addEventListener("click",function(){
//     result.innerHTML ="."
//  })




