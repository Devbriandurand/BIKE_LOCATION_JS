// --------------------- DIAPORAMA ------------------

class Diaporama {
    constructor(tabDiaporama) {
        this.container = document.querySelector('#img0');
        this.boutonPrevious = document.querySelector('#previous');
        this.boutonPause = document.querySelector('#pause');
        this.boutonNext = document.querySelector('#next');
        this.boutonPlay = document.querySelector('#play');
        this.tabDiaporama = tabDiaporama;
        this.intervalId;
        this.index = 0;
        this.afficherChangeImage();
        this.ecouterBouton();
        this.keyPress();
    }

    afficherChangeImage() {
        this.intervalId = setInterval(() => {
            this.defilementAuto();
        }, 5000);
    }

    stopChangeImage() {
        clearInterval(this.intervalId);
        console.log('Nous avons mis le this sur Pause !')
    }

    defilementAuto() {
        this.index++;
        if (this.index === 4) {
            this.index = 0;
        }
        this.container.setAttribute('src', './PUBLIC/IMG/' + this.tabDiaporama[this.index]);
    }

    boutonImageNext() {        //Méthode qui permet d'incrémenter de 1 le diaporama, puis une fois que l'index est au max il retourne à 0
        this.index++;
        if (this.index === 4) {
            this.index = 0;
        }
        this.container.setAttribute('src', './PUBLIC/IMG/' + this.tabDiaporama[this.index]);
    }

    boutonImagePrevious() {//Méthode qui permet de décrémenter de 1 le diaporama, puis une fois que l'index est au min il retourne à 4
        this.index--;
        if (this.index === -1) {
            this.index = 3;
        }
        this.container.setAttribute('src', './PUBLIC/IMG/' + this.tabDiaporama[this.index]);
    }

    keyPress() {//Méthode permettant de faire défiler les image du diaporama avec les fleches du clavier(droite&gauche)
        document.addEventListener("keydown", e => {
            if (e.keyCode === 37) {
                this.boutonImagePrevious();
                console.log("Je viens d'appuyer sur la flèche de droite, du clavier");
            }
            if (e.keyCode === 39) {
                this.boutonImageNext();
                console.log("Je viens d'appuyer sur la flèche de gauche, du clavier");
            }
        });
    }

    ecouterBouton() {
        // Ont écoute le button Previous
        this.boutonPrevious.addEventListener('click', () => {
            this.boutonImagePrevious();
            console.log('Je vient de cliqué sur le bouton previous');
        });

        // Ont écoute le button Next
        this.boutonNext.addEventListener('click', () => {
            this.boutonImageNext();
            console.log('Je vient de cliqué sur le bouton next');
        });

        // Ont écoute le button Pause
        this.boutonPause.addEventListener('click', () => {
            this.boutonPause.replaceWith(this.boutonPlay);
            this.boutonPlay.style.display = "block";
            console.log("je viens de cliqué sur Pause");
            this.stopChangeImage();
        });
        // Ont écoute le button Play
        this.boutonPlay.addEventListener("click", () => {
            this.boutonPlay.replaceWith(this.boutonPause);
            this.afficherChangeImage();
            console.log("je viens de cliqué sur Play");
        });
    }
}