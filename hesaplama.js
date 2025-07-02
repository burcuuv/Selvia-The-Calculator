document.addEventListener("DOMContentLoaded", function () {
    const distance = document.getElementById("distance");
    const vehicletype = document.getElementById("vehicletype");
    const electric = document.getElementById("electric");
    const tshirt = document.getElementById("tshirt"); 
    const geritype = document.getElementById("geritype");
    const adet = document.getElementById("adet");
    const form = document.getElementById("carbon-footprint-form");

    const updateplaceholders = () => {
        distance.placeholder = "Mesafe (km)";
        electric.placeholder = "Kaç saat ?";
    };
 updateplaceholders();
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 


        let mesafe = Number(distance.value);
        let elektrikValue = Number(electric.value);
        let geriTuru = geritype.value;
        let tshirtValue = tshirt.value;
        let adetValue = Number(adet.value);
        let aracTuru = vehicletype.value;

        let aracCarpani = {
            car: 0.18,
            bus: 0.10,
            schbus: 0.4,
            train: 0.4,
            plane: 0.285,
            none: 0.0
        };

        let geriCarpani = {
            cam: -0.3,
            kagit: -1,
            plastik: -1.5,
            none1: 0.0
            
        };

        let kiyaFaktorleri = {
            tshirt: 6.9,
            ayakkabi: 10.6,
            pantolon: 35.1,
            elbise: 21.9,
            none2: 0.0
        };

        let ulasimEmisyonu = mesafe * aracCarpani[aracTuru];
        let elektrikEmisyonu = elektrikValue * 0.36;
        let kiyafetEmisyonu = kiyaFaktorleri[tshirtValue] || 0;
        let geriEmisyonu = adetValue * geriCarpani[geriTuru];

        let toplam = ulasimEmisyonu + elektrikEmisyonu + kiyafetEmisyonu + geriEmisyonu;
        let dunya = (toplam / 16.8).toFixed(2);

        document.getElementById("cfc").innerText = `${toplam.toFixed(2)} kg CO₂ salımı yaptınız.`;
        document.getElementById("worldneed").innerText = `Yaşam tarzınız için ${dunya} dünya gerekirdi.`;

        let agac = Math.ceil(toplam / 1.83); 
        document.getElementById("treework").innerText = `Bu salımı dengelemek için yaklaşık ${agac} ağaç bir ay boyunca çalışmalı.`;
    });
});
