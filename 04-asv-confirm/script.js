/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let age, sex, city;
do {
    age = prompt("Quel est votre âge?");
    sex = prompt("Quel est votre sex");
    city = prompt("Quel est votre ville?");
    const confirmation = confirm(`Confirmez-vous ces informations?\nÂge: ${age}\nSexe: ${sex}\nCity: ${city}`);
} while(!confirmation);





/*Pose trois questions à l'utilisateur : son âge, sexe et ville. Affiche-les dans une 
>boîte de dialogue qui lui demandera de confirmer. S'il ne confirme pas ses informations,
recommence le processus*/
