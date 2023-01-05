// >=  supérieur ou égale à
// <=  inférieur ou égale à
// !=  différent ou égale à

let firstname = prompt('Quel est votre prénom ?')
let length = firstname.length
//for (let i = 0; i <= length; i++) {
        if (length > 10) { message = 'Votre prénom est trop long !' }
 else {
        message = 'Bonjour ' + firstname
}
//}
alert(message)



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