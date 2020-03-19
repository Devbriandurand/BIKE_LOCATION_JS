/* ------------------------------- CANVAS ----------------------------- */
class Canvas {
    constructor(color = "#2ba6c5de") {
        this.containerCanvas = document.getElementById('containerCanvas');
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.containBut = document.getElementById('containBut');
        this.effacer = document.getElementById('effacer');
        this.buttonReservation = document.getElementById('buttonReservation');
        this.timer = document.getElementById('timer');
        this.color = color;
        this.paint = false;
        this.painted = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = 4;
        this.context.strokeStyle = this.color;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.redraw();
        this.clearCanvas();
    }

    redraw() {
        this.canvas.addEventListener("mousedown", (e) => {
            this.paint = true;
            this.mouseX = e.clientX - (this.canvas.getBoundingClientRect().left);
            this.mouseY = e.clientY - (this.canvas.getBoundingClientRect().top + window.scrollX);
            this.lastPosition = {
                x: this.mouseX,
                y: this.mouseY
            };
        });

        this.canvas.addEventListener("mousemove", (e) => {
            if (this.paint) {
                this.mouseX = e.clientX - (this.canvas.getBoundingClientRect().left);
                this.mouseY = e.clientY - (this.canvas.getBoundingClientRect().top + window.scrollX);
                this.context.beginPath();
                this.context.moveTo(this.lastPosition.x, this.lastPosition.y);
                this.context.lineTo(this.mouseX, this.mouseY);
                this.context.closePath();
                this.context.strokeStyle;
                this.context.stroke();
                this.painted = true;
                this.lastPosition = {
                    x: this.mouseX,
                    y: this.mouseY
                };
            }
        });

        // AU RELARCHEMENT DU CLIQUE DE LA SOURIS ONT ARRETE L'ECRITURE
        this.canvas.addEventListener("mouseup", (e) => this.paint = false);

        // DES QUE L'ONT SORT DE LA ZONE DU CANVAS CELA ARRETE L'ECRITURE
        this.canvas.addEventListener("mouseleave", (e) => this.paint = false);

        // LORSQUE L'ONT CLIQUE AVEC LA SOURIS DANS LE CANVAS, LE CANVAS RETROUVE CES FONCTIONNALITES
        this.canvas.addEventListener("touchstart", (e) => {
            let touch = e.touches[0];
            this.paint = true;
            this.mouseX = touch.clientX - this.canvas.getBoundingClientRect().left;
            this.mouseY = touch.clientY - (this.canvas.getBoundingClientRect().top + window.scrollX);
            this.lastPosition = {
                x: this.mouseX,
                y: this.mouseY
            };
        });

        // RECUPERATION DES BOUTONS ENVOYER/EFFACER PUIS ONT L'AI FAIT APPARAITRE
        this.canvas.addEventListener('click', () => {
            this.effacer.style.display = "block";
            this.buttonReservation.style.display = "block";
            this.containBut.style.display = "block";
        });
        this.buttonReservation.addEventListener("click", () => {
            this.containerCanvas.replaceWith(this.timer);
            this.timer.style.display = 'block';
        });
    }

    // METHODE QUI NETTOIE LE CANVAS
    clearCanvas() {
        const resetButton = document.getElementById('effacer');
        resetButton.addEventListener('click', () => {
            this.resetCanvas();
            this.buttonReservation.style.display = 'none';
        });
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastPosition = {
            x: 0,
            y: 0
        };
    }
    resetCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.painted = false;
    }
}


