// >=  supérieur ou égale à
// <=  inférieur ou égale à
// !=  différent ou égale à

// let variable = []; ces brackets sont utilisé afin de donner multiple valeurs; comme un tableau.


// Compter le nb de voyelle & consonnes d'un mot

//const word = prompt('Ecris un mot')
//let arrayVowels = ['a','e','i','o','u','y'];
//let nbVoyel = 0;
//let nbCons = 0;

//for(let i = 0; i < word.length; i++){
//        if(arrayVowels.includes(word[i])){
//                nbVoyel++;
//        }else{
//                nbCons++;
//        }
//}
//alert(nbVoyel + ' Voyelles ' + nbCons + ' Consonnes ');


// OR
let button = document.getElementById('start');

button.addEventListener('click', function () {
        alert(countVoyCons(prompt('Tape ton nom !')));
});

function countVoyCons(word) {
        let arrayVowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        let nbVoyel = 0;
        let nbCons = 0;

        [...word].forEach(letter => {
                if (arrayVowels.includes(letter)) {
                        nbVoyel++;
                } else {
                        nbCons++;
                }
        });
        return nbVoyel + ' Voyelles ' + nbCons + ' Consonnes ';
}

// Initiation JS

//alert('Hello World !')


//let maVariable = "toto"
//alert('Bonjour ' + maVariable);


//let firstname = prompt('Quel est votre prénom ?')
//alert('Bonjour ' + firstname + ' !')



//Boucle "Bonjour"

//let names = ['Cédric', 'Julien', 'Paul'];
//for(let i=0; i < names.length; i++)
// { alert('Bonjour ' + names[i])}

// OR

//let listName = ['Cédric','Paul','Jean','Najia'];
//for(let i = 0; i < listName.length; i++){
//        alert(listName[i]);
//}



// Calcule le nombre de lettres et affiche un message diff si >10

//let firstname = prompt('Quel est votre prénom ?')
//let length = firstname.length
//let message= ""
//for (let i = 0; i <= length; i++) {
//        if (length > 10) { message = 'Votre prénom est trop long !' }
// else {
//        message = 'Bonjour ' + firstname
//}
//}
//alert(message)


//Retourne seulement les noms de 4 lettres

//let listNames = ['pierre', 'paul', 'jack', 'jean', 'de', 'la', 'fontaine'];
//let arrayReturn = [];
//let nb = listNames.length;

//for (let i = 0; i < nb; i++) {
//        if (listNames[i].length == 4) {
//                arrayReturn.push(listNames[i])
//        }
//}
//console.log(arrayReturn);

//OR

//let just4_Letters = () => {
//let listNames = ['pierre','paul','jack','jean','de','la','fontaine'];
//let theWords = listNames.filter(words => words.length === 4)
//document.write(theWords ); }
//just4_Letters();


// CALCULS

// let nb1 = 5;
// let nb2 = 15;
// let result = nb1 * nb2;

// alert('Ce résultat est de : ' + result)




// Majorité/Mineur

//let age=19;
//let message ="";
//if(age >= 18){
//        message="Vous êtes majeur !";
//}else{
//        message= "Vous êtes mineur !";
//}
//alert(message);





// Donner le carré d'un nombre

//let nb = 5;
//let result= nb ** 2;
//alert(result)




//Table de multiplication

//let number = prompt('Quel table de multiplication voulez-vous réviser ?');
//let result;

//for (let i = 0; i <= 10; i++) {
//    result = i * number;
//    alert(number + '*' + i + '=' + result);
//}


// Compter jusqu'à 10 !!

//for (let i = 1; i <= 10; i++) {
//    alert(i);
//}


// Pension sur le nombre d'enfants

//let nbchild = prompt('Combien d\'enfants avez vous ?')
//let result
//if (nbchild <=2) {
//        result= nbchild*50
//} else {
//        result = nbchild*70
//}
//alert('Vous avez le droit à une pension de ' + result + '€')



// Remplacer tous les 'e' d'un prénom en 3

//let firstname = prompt('Rentrez votre nom en minuscule :')
//        firstname = firstname.replaceAll('e', '3')
//alert(firstname)
//


// OR


//let firstname = prompt('Saisir votre prénom')
//for (i=0; i < firstname.length; i++)
//{
//      if(firstname[i] = 'e')
//      {
//              firstname = firstname.replace('e','3')
//      }
//}
//alert(firstname)






// Donner son prénom; il est retourné sous forme d'1 lettres par 1 jusqu'à la fin

//let firstname = prompt('Votre prénom : ')
//for(let i = 0; i < firstname.length; i++) {
//       alert(firstname.charAt(i));
//}

// OR

//let firstname = prompt('Votre prénom : ');
//let charArray = firstname.split('');
//let nbChar = charArray.length;
//for (let i = 0; i < nbChar ; i++ ) {
//        alert(charArray[i])
//}