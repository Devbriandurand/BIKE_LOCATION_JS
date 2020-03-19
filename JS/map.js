
// --------------------- MAP ------------------
const mapCarte = L.map('mapid').setView([43.2961743, 5.3699525], 14);
L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapCarte);

class Map {
  constructor() {
    this.marker;
    this.responses;
  }

  afficherMarkerMap() {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        this.responses = JSON.parse(this.responseText);

        for (let response of this.responses) {
          this.marker = L.marker([response.position.lat, response.position.lng]);
          this.marker.addTo(mapCarte);
          console.log(response);
          this.marker.addEventListener('click', () => {

            document.getElementById('formStation').innerHTML = response.name;
            document.getElementById('formStatut').innerHTML = response.status;
            document.getElementById('formAdresse').innerHTML = response.address;
            document.getElementById('formVeloDispo').innerHTML = response.bike_stands;
            document.getElementById('formVilleStation').innerHTML = response.contract_name;
            document.getElementById('nomResa').innerHTML = response.name;
            document.getElementById('adresseResa').innerHTML = response.address;
            document.getElementById('buttonJeReserve').style.display = "block";
          });

        }
      }
    }
    request.open("GET", "https://api.jcdecaux.com/vls/v1/stations?contract=Marseille&apiKey=ee19fdbd1770b7e308ca8802830bb0a2535de9c8");
    request.send();

  }
}










