/* exercice switch avec un "alert" et "conole.log" */

const motapp = "Becode"
let motuser = prompt("Veuillez écrire: " + motapp);

switch (motuser){
    case motapp:
        alert("C'est exellent!!")
        break
    case "Becoode":  
        alert("Il y a un 'o' en trop")
        break
    case "becode":
        console.log("C'est correct également")
        break
}
    