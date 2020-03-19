// --------------------- FORMULAIRE ------------------
class Formulaire {
    constructor() {
        this.prenom = document.getElementById("prenom");
        this.nom = document.getElementById("nom");
        this.buttonForm = document.getElementById("buttonJeReserve");
        this.formAdresse = document.getElementById("formAdresse");
        this.clicked = false;
        this.timer = document.getElementById("timer");
        this.adresseStation = document.getElementById("formAdresse");
        this.containerCanvas = document.getElementById("containerCanvas");
        this.canvas = document.getElementById("canvas");
        this.buttonResa = document.getElementById("buttonReservation");

    }
    espion() {
        // Espionne remplissage du formulaire et stocke dans localStorage :
        this.nom.addEventListener('input', () => {
            localStorage.setItem("nom", this.nom.value);
        })
        this.prenom.addEventListener('input', () => {
            localStorage.setItem("prenom", this.prenom.value);
        })

        // Au clique du button, check que les champs soient bien remplis :
        this.buttonForm.addEventListener("click", () => {
            // Si champ nom vide
            if (this.nom.value === "") {
                alert("Veuillez renseigner votre nom");
                this.containerCanvas.style.display = "none";
            }
            // Si champ prénom vide
            if (this.prenom.value === "") {
                alert("Veuillez renseigner votre prénom");
                this.containerCanvas.style.display = "none";
            } else {
                this.containerCanvas.style.display = "block";
            }
        })
        this.save();
    }

    save() {
        // Affiche les données de localStorage dans le formulaire :
        this.nom.value = localStorage.getItem("nom");
        this.prenom.value = localStorage.getItem("prenom");
        console.log(localStorage.nom);
        console.log(localStorage.prenom);
        console.log(localStorage.length);
    }
    afficherCanvas() {
        this.buttonResa.addEventListener("click", () => {
            this.containerCanvas.style.display = 'block';
        });
    }
}



const formulaire = new Formulaire();
formulaire.espion();

