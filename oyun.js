let choiceStats = { good: 0, bad: 0 };

const story = {
  Start: {
    backgroundClass: "park",
    text: [
      "Selvia: Selam Toprak! Endişeli gördüm seni, bir sorun mu var ?",
      "Toprak: Merhaba Selvia! Evet, aslında rüyamda gördüğüm bir şey beni çok düşündürüyor.",
    ],
    choices: [{ text: "Aaaa rüya mı! Ne gördüün ?", next: "Ruya" }],
    images: {
      selvia: "resimler/selviaidk.png",
      toprak: "resimler/topraksad.png"
    }
  },
  Ruya: {
    backgroundClass: "ruya",
    text: [
    "Toprak: Rüyamda herkes dünyayı pisletiyor, geri dönüşüm yapmıyordu. Buna biz de dahildik sonunda dünya yaşanamayacak bir yer olmuştu. Ben de rüyamı tekrardan yaşasam hangi kararları verirdim acaba diye düşünüyorum. ",
      "Selvia: E ozaman rüyanda olanları söyle. Yeniden rüya yaşama oyunu yapalım.",

    ],
    choices: [{ text: "Çok iyi bir fikir. Herkesin hareketlerini kontrol edemeyiz ama kendi hatalarımızı düzeltebiliriz !", next: "Yemek" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakidk.png"
    }
  },
  Yemek: {
    backgroundClass: "park",
    text: [
   "Toprak: İlk önce yemyeşil bir parkta salıncakta sallanıyorduk. Kuşlar cıvıl cıvıl ve deniz masmaviydi. Ben de bu güzel manzarayı seyrederken dayanamadım acıktım. Siz de acıktınız mı arkadaşlar?",
      "Selvia: Ben de acıktım. Hava da çok güzel, piknik mi yapsak?",

    ],
    choices: [{ text:" Evet, piknik harika olur! Ama ne getireceğiz?", next: "Piknik" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Piknik: {
    backgroundClass: "piknik",
    text: [
      "Selvia: Doğal ve sağlıklı şeyler getirelim. Mesela evden hazırladığımız mis gibi sandviçler ve bol bol çilek.",
      "Toprak: Sen ne dersin, arkadaşım?",
  
    ],
    choices: [
      { text: "Nefiss. Ben sandviç malzemelerini alayım en iyisi.", next: "SandChoice", type: "good" },
      { text: "Aslında kocaman bir hamburger söylesek ? Plastik kapta geliyor sanırım ama olsun.", next: "HamChoice", type: "bad" }
    ],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  HamChoice: {
    backgroundClass: "piknik",
    text: [
"Selvia: Hamburger çok lezzetliydi ama plastik kapta geldiği için doğaya zarar verdik.",
"Toprak: Evet, bu kaplar doğada çok uzun süre kalıyor ve geri dönüşümü zor. Birde annem içinde palm yağı olduğunu söylemişti.",

    ],
    choices: [{ text: "Palm yağı zararlı birşey mi ? Amaan canım bir kereden bir şey olmaz.", next: "Palm" }],
    images: {
      selvia: "resimler/selviaidk.png",
      toprak: "resimler/topraksad.png"
    }
  },
  SandChoice: {
    backgroundClass: "piknik",
    text: [
     "Selvia: Sandviçler harikaydı! Hem sağlıklı hem de doğaya zarar vermedik.",
     "Toprak: Evet, cam kavanozlarda getirdiğimiz çilekler de çok lezzetliydi.",
    ],
    choices: [{ text: "Bence de, hem sağlıklı yediğimiz hem de doğayı koruduğumuz için kendimi çok iyi hissediyorum.", next: "Yolculuk" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Palm: {
    backgroundClass: "piknik",
    text: [
      "Toprak: Öyle deme, palm yağı tropik ormanların yok olmasına neden oluyor. Bu da birçok hayvanın yaşam alanını kaybetmesine yol açıyor.",
      "Selvia: Hamburger, cips, çikolata işlenmiş gıdalarda palm yağı kullanımı sağlığımız için de zararlı. Ve daha da önemlisi sera gazı salınımını doğal gıdalara göre 3 kat artırıyor.",
      "Toprak: Doğayı ve sağlığımızı korumak için bu tür şeylerden uzak durmalıyız.",
    ],
    choices: [{ text: "Artık zararlı olduğunu bildiğim için tekrar yiyeceğimi sanmıyorum. Ama yine de lezzetliydi 🥲", next: "Yolculuk" }],
    images: {
      selvia: "resimler/selviasad.png",
      toprak: "resimler/toprakidk.png"
    }
  },
  Yolculuk: {
    backgroundClass: "piknik",
    text: [
      "Toprak: Yemeğimizi yedikten sonra bir de ne görelim. Okula geç kalmak üzereyiz ! Nasıl gidicez şimdi ?",
      "Selvia: Ozaman hemen bir taksi tutalım. Sen ne dersin?",
    ],
    choices: [
      { text: "Hayır canıım. Okul bir alt sokakta zaten her türlü yürüyerek yetişiriz", next: "Yurume", type: "good" },
      { text: "Evet taksiyle gidelim. Hiç yürüme havamda değilim.", next: "Taksi", type: "bad" }
    ],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Yurume: {
    backgroundClass: "okul",
    text: [
      "Selvia: Yürüyerek gitmek çok iyi bir fikirdi arkadaşım!",
      "Toprak: Evet, hem hava güzel hem de yürüyüş sağlıklı.",
    ],
    choices: [{ text: "Sizinle yürümek çok keyifliydi, hem derse de geç kalmadık. SÜper!", next: "Tenefus" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Taksi: {
    backgroundClass: "okul",
    text: [
      "Selvia: Taksiyle gitmek çok pahalıydı ama en azından geç kalmadık.",
      "Toprak: O egzoz gazı da neydi öyle! Hem de bu kadar kısa mesafeye.",
    ],
    choices: [{ text: "Hava kirliliğine bir katkı da bizden!", next: "Tenefus" }],
    images: {
      selvia: "resimler/selviaidk.png",
      toprak: "resimler/toprakidk.png"
    }
  },
  Tenefus: {
    backgroundClass: "okul",
    text: [
      "Sonra öğle arasında Levent’i bahçeye çöp atarken görüyoruz.",
      "Toprak: Levent neden çöpünü yere atıyorsun ? Hepsi geri dönüşüm kutusuna atılabilir malzemeden. ",
      "Levent: Offf ama çok uzakta. Şimdi buraya bırakırsam arkadaşlarımla oyun oynayabilirim. Ne olucak canım iki üç çöpten değil mi ?"

    ],
       choices: [
      { text: "Bende de çöp var hadi geri dönüşüm kutusuna kadar yarışalım!", next: "Yaris", type: "good" },
      { text: "Bence de. Ben de çöpümü bırakayım da beraber saklambaç oynayalım.", next: "Atik", type: "bad" }
    ],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Yaris: {
    backgroundClass: "okul",
    text: [
     "Levent: Vay canına! Bu kadar hızlı koşabileceğini bilmiyordum. Hem doğayo önemsiyorsun hem de eğleniyorsun.",
      "Toprak: Evet o çok hızlı, doğayı korumak çok önemli. Hem de bu şekilde eğleniyoruz.",
      "Levent: Haklısın, ben de artık çöplerimi yere atmamaya çalışacağım.",
    ],

    choices: [{ text: "Teşekkür ederim arkadaşlarım, sizlerde çok hızlıydınız.", next: "Bitis" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Atik: {
    backgroundClass: "okul",
    text: [
      "Toprak: Çöpleri yere attık ama kedi çöpleri parçaladı ve doğaya zarar verdik.",
      "Selvia: Evet, bu çöpler doğada çok uzun süre kalıyor ve hayvanlara zarar verebilir.",
      "Levent: Diğer türlü de tenefüste oyun oynamak için çok geç kalacaktık. Ama doğayı korumak da önemli.",

    ],
      
    choices: [{ text: "Ayy çok kötü kokuyor birde.", next: "Bitis" }],
    images: {
      selvia: "resimler/selviasad.png",
      toprak: "resimler/topraksad.png"
    }
  },
  Bitis: {
    backgroundClass: "sunset",
    text: [
"Toprak: Okul çıkışı bizim eve gidiyoruz. Neler yapsak ?"

    ],
       choices: [
      { text: "Televizyon izleyelim ama sıkılırsak kapatıp, boyama yapalım.", next: "Ayrilik", type: "good" },
      { text: "Televizyonu açalım, ışıkları da. Eğer sıkılırsak başka bir şey yaparız. Arkaplanda televizyonda oynar.", next: "Televizyon", type: "bad" }
    ],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
  Ayrilik: {
    backgroundClass: "sunset",
    text: [
      "Selvia: Televizyon izlemek yerine boyama yapmak çok daha eğlenceliydi!",
      "Toprak: Yarın görüşürüüz arkadaşlarım!",

    ],
      
    choices: [{ text: "Ben de çok eğlendim, görüşürüüz!", next: "Final" }],
    images: {
      selvia: "resimler/selviahappy.png",
      toprak: "resimler/toprakhappy.png"
    }
  },
   Televizyon: {
    backgroundClass: "sunset",
    text: [
"Televizyon izlenmediği halde açıkken, haberler de spiker iklim değişikliğinden bahsediyor. Enerji tasarrufu yapmadığımız için doğaya zarar verdiğimizi söylüyor.",
"Toprak: Evet, televizyon açıkken enerji israfı yapıyoruz. Ben gidip kapatacağım.",
    ],
      
    choices: [{ text: "Evet kapatalım en iyisi zaten geç de oldu evlere dönsek iyi olur.", next: "Final" }],
    images: {
      selvia: "resimler/selviasad.png",
      toprak: "resimler/toprakidk.png"
    }
  },

  Final: {
    backgroundClass: "park",
    text: [],
    choices: [{ text: "Yeniden oyna.", next: "Start", reset: true }],
    images: {}
  }
};

function setBackground(className) {
  document.body.className = '';
  document.body.classList.add(className);
}

const dialogueEl = document.getElementById("dialogue");
const choicesEl = document.getElementById("choices");
const characterImgs = document.getElementById("characterImgs");

function renderNode(nodeKey) {
  const node = story[nodeKey];

  if (nodeKey === "Final") {
    const good = choiceStats.good;
    const bad = choiceStats.bad;
    story.Final.text = [];

    if (good >= bad) {
      story.Final.text.push(
 "Toprak: O gün misler gibi uyumuşum. Sabah sizinle buluşmak için her zamanki parka gittiğimde bir tane elf yanımıza geldi. Bize kocaman sarıldı ve tebrik etti. Neden tebrik ettiğini sorunca da çevreme bilinçli davrandığımız için bizi Yeşil Kahraman ilan etti. Kahraman olmak süper bir şeymiş ya!"
      );
      story.Final.images = {
        toprak: "resimler/toprakhappy.png",
        elf: "resimler/elfhappy.png"
      };
    } else {
      story.Final.text.push(
    " Toprak: O gün misler gibi uyumuştum. Ama sabah her zamanki parka gittiğimde her zamanki yemyeşiller yoktu. Kuşlar kaçmıştı buradan. Sizi beklerken bir elf yanıma geldi. Seçimlerimiz doğayı etkiliyormuş da haberimiz yokmuş. Boşa harcadığımız her enerji kaynağı sera gazı salıyormuş, attığımız her çöp de sürdürülebilirliği. Bu dünyayı hep beraber kirletmişiz."
      );
      story.Final.images = {
        toprak: "resimler/topraksad.png",
        elf: "resimler/elfsad.png"
      };
    }
  }

  if (nodeKey === "Start" || node.choices.some(c => c.reset)) {
    choiceStats = { good: 0, bad: 0 };
  }

  if (node.backgroundClass) {
    setBackground(node.backgroundClass);
  }

  dialogueEl.innerHTML = "";
  node.text.forEach(line => {
    const p = document.createElement("p");
    p.innerHTML = line;
    dialogueEl.appendChild(p);
  });

  choicesEl.innerHTML = "";
  node.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => {
      if (choice.type === "good") choiceStats.good++;
      if (choice.type === "bad") choiceStats.bad++;
      renderNode(choice.next);
    };
    choicesEl.appendChild(btn);
  });

  characterImgs.innerHTML = "";
  if (node.images) {
    for (const [name, src] of Object.entries(node.images)) {
      const img = document.createElement("img");
      img.src = src;
      img.alt = name;
      characterImgs.appendChild(img);
    }
  }
}

renderNode("Start");
