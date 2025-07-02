const questions = [
  { kate: "ev", 
    id: "yapimYili", 
    label: "Evin yapım yılı nedir?",
     type: "number", 
     placeholder: "Sayı giriniz." },
  { kate: "ev",
     id: "metrekare",
      label: "Evinizin metrekare büyüklüğü nedir?",
       type: "number",
        placeholder: "Metrekare olarak yazınız." },
  { kate: "ev",
     id: "yalitim",
      label: "Evinizde yalıtım var mı?", 
      type: "select", 
      options: [{ value: "", text: "Seçiniz" },
        { value: "var", text: "Var" }, 
        { value: "yok", text: "Yok" }] },
  { kate: "ev", id: "isinma", label: "Isınma yöntemi nedir?", type: "select", options: [{ value: "", text: "Seçiniz" }, { value: "dogalgaz", text: "Doğalgaz" }, { value: "katiyakit", text: "Katı Yakıt (kömür, odun)" }, { value: "elektrik", text: "Elektrik" }, { value: "yenilenebilir", text: "Yenilenebilir Enerji" }] },

  { kate: "ev", id: "elektrikTuketimi", label: "Aylık elektrik tüketiminiz (kWh)?", type: "number", placeholder: "Tipik bir aydaki kullanımınızı yazınız 🐝" },
  { kate: "ev", id: "suFaturasi", label: "Aylık su tüketiminiz (m³)?", type: "number", placeholder: "Tipik bir aydaki kullanımınızı yazınız 🐝" },
  { kate: "ev", id: "dogalgazFaturasi", label: "Aylık doğalgaz tüketiminiz (m³)?", type: "number", placeholder: "Tipik bir aydaki kullanımınızı yazınız 🐝" },
  { kate: "ev", id: "elektrikFaturasi", label: "Aylık elektrik faturası tutarınız (TL)?", type: "number", placeholder: "Tipik bir aydaki kullanımınızı yazınız 🐝" },

  { kate: "araba", id: "arabaKullanim", label: "Aylık araba kullanımınız kaç km?", type: "number" },
  { kate: "araba", id: "arabaTipi", label: "Araba tipi nedir?", type: "select", options: [{ value: "", text: "Seçiniz" }, { value: "benzinli", text: "Benzinli" }, { value: "dizel", text: "Dizel" }, { value: "elektrikli", text: "Elektrikli" }, { value: "hibrit", text: "Hibrit" }] },

  { kate: "tuketim", id: "etTuketimi", label: "Haftalık et tüketiminiz (kg)?", type: "number" },
  { kate: "tuketim", id: "sebzeTuketimi", label: "Haftalık sebze tüketiminiz (kg)?", type: "number" },

  { kate: "geriDonusum", id: "geriDonusumAliskanligi", label: "Geri dönüşüm alışkanlığınız nedir?", type: "select", options: [{ value: "", text: "Seçiniz" }, { value: "düzenli", text: "Geri dönüştürülebilir her şeyi ayırırım." }, { value: "bazen", text: "Yani elimden geldiğince..." }, { value: "hiç", text: "Geri dönüşüm bilmem benim için sadece çöp kutusu" }] }
];

function createForm() {
  const containerMap = {
    ev: document.getElementById("ev-form-items"),
    fatura: document.getElementById("fatura-form-items"),
    araba: document.getElementById("araba-form-items"),
    tuketim: document.getElementById("yemek-form-items"),
    geriDonusum: document.getElementById("recycle-form-items")
  };

  questions.forEach((q) => {
    const label = document.createElement("label");
    label.htmlFor = q.id;
    label.textContent = q.label;

    let input;

    if (q.type === "select") {
      input = document.createElement("select");
      input.id = q.id;
      input.name = q.id;
      q.options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
      input.type = q.type;
      input.id = q.id;
      input.name = q.id;
      if (q.placeholder) input.placeholder = q.placeholder;
      if (q.type === "number") input.min = 0;
    }

    const container = containerMap[q.kate];
    if (container) {
      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
  });
}

function hesap() {
  let toplam = 0;
  const values = {};

  for (let q of questions) {
    const el = document.getElementById(q.id);
    if (!el) continue;
    let val = el.value.trim();

    if (!val || (q.type === "select" && val === "")) {
      alert(`${q.label} alanını doldurunuz.`);
      el.focus();
      return;
    }
    values[q.id] = val;
  }

  toplam += parseFloat(values.metrekare) * 20;
  if (values.yalitim === "yok") toplam += 500;

  switch (values.isinma) {
    case "katiyakit": toplam += 1000; break;
    case "dogalgaz": toplam += 700; break;
    case "elektrik": toplam += 900; break;
    case "yenilenebilir": toplam -= 300; break;
  }

  toplam += parseFloat(values.elektrikTuketimi) * 0.5;
  toplam += parseFloat(values.suFaturasi) * 0.3;
  toplam += parseFloat(values.dogalgazFaturasi) * 1.5;
  toplam += parseFloat(values.arabaKullanim) * 0.2;

  switch (values.arabaTipi) {
    case "benzinli": toplam += 500; break;
    case "dizel": toplam += 700; break;
    case "elektrikli": toplam += 200; break;
    case "hibrit": toplam += 350; break;
  }

  toplam += parseFloat(values.etTuketimi) * 50;
  toplam -= parseFloat(values.sebzeTuketimi) * 10;

  switch (values.geriDonusumAliskanligi) {
    case "düzenli": toplam -= 200; break;
    case "bazen": toplam -= 100; break;
    case "hiç": toplam += 300; break;
  }

  document.getElementById("cfc").innerText = `${toplam.toFixed(2)} kg CO₂ salımı yaptınız.`;

  let dunya = (toplam / 2000).toFixed(2);
  document.getElementById("worldneed").innerText = `Yaşam tarzınız için ${dunya} dünya gerekirdi.`;

  let agac = Math.ceil((toplam * 12) / 22);
  document.getElementById("treework").innerText = `Bu salımı dengelemek ${agac} ağaç ile mümkün.`;
}

window.addEventListener("DOMContentLoaded", () => {
  createForm();
  document.getElementById("hesap").addEventListener("click", hesap);
});
