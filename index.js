let nameHero = "Romeu";
let experienceXP = 0;
let experienceLVL = "";

if(experienceXP < 1.000){
    experienceLVL = "Ferro";
} else if (experienceXP >= 1.001 || experienceXP <= 2.000){
    experienceLVL = "Bronze";
} else if (experienceXP >= 2.001 || experienceXP <= 5.000){
    experienceLVL = "Prata";
} else if (experienceXP >= 6.001 || experienceXP <= 7.000){
    experienceLVL = "Ouro";
} else if (experienceXP >= 7.001 || experienceXP <= 8.000){
    experienceLVL = "Platina";
} else if (experienceXP >= 8.001 || experienceXP <= 9.000){
    experienceLVL = "Ascendente";
} else if (experienceXP >= 9.001 || experienceXP <= 10.000){
    experienceLVL = "Imortal";
} else {
    experienceLVL = "Radiante"
}

console.log(`O Herói de nome ${nameHero} está no nível de ${experienceLVL}`);