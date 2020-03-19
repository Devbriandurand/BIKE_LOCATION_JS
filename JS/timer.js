// --------------------- COMPTEUR ------------------
class Timer {
    constructor(ms = 1320000, minTimer = "min", secTimer = "sec", textTimerContainer = "textTimer") {
        this.time = ms / 1000;
        this.prenom = document.getElementById("prenom");
        this.nom = document.getElementById("nom");
        this.minTimer = document.getElementById(minTimer);
        this.secTimer = document.getElementById(secTimer);
        this.textTimerContainer = document.getElementById(textTimerContainer);
        this.timer = document.querySelector('.timer');
        this.boutonAnulResa = document.getElementById('annulation');
        this.minTimer.textContent = this.minute;
        this.secTimer.textContent = this.second;
        this.endTimeEvent = new Event('endTimeEvent', { bubbles: true });
        this.minutes();
        this.seconds();
        this.demarrageChrono();
        this.annulResa();
    }
    init() {
        this.minutes();
        this.seconds();
        this.demarrageChrono();
    }
    demarrageChrono() {
        let chrono = setInterval(() => {
            this.interval = chrono;
            this.time--;
            if (this.time > -1) {
                this.minutes();
                this.seconds();
                this.minTimer.textContent = this.minute;
                this.secTimer.textContent = this.second;
            }
            else {
                this.timer.style.display = 'none';
                this.stop();

            }
        }, 1000);
    }

    stop() {
        clearInterval(this.interval);
        document.dispatchEvent(this.endTimeEvent);
    }

    minutes() {
        this.minute = Math.floor(this.time / 60);
    }

    seconds() {
        this.second = Math.floor(this.time - (this.minute * 60));
    }

    annulResa() {
        this.boutonAnulResa.addEventListener("click", (event) => {
            localStorage.removeItem('nom');
            localStorage.removeItem('prenom');
            document.location.reload(true);
        });
    }

}