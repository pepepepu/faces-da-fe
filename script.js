const content = [
  {
    category: "catolicismo",
    id: "c1",
    title: "SÃO GONÇALO",
    subtitle:
      "A dança da devoção e promessa que atravessa gerações no interior do estado.",
    img: "/assets/sao_goncalo/img01.jpg",
    feature: true,
    themeColor: "var(--gold-deep)",
  },
  // {
  //   category: "catolicismo",
  //   id: "c2",
  //   title: "SÃO GONÇALO",
  //   subtitle:
  //     "A dança da devoção e promessa que atravessa gerações no interior do estado.",
  //   img: "/assets/sao_goncalo/img01.jpg",
  //   feature: false,
  //   themeColor: "var(--gold-deep)",
  // },
  {
    category: "catolicismo",
    id: "c3",
    title: "BOM JESUS",
    subtitle:
      "A procissão das águas que renova a fé dos ribeirinhos todo começo de ano.",
    img: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=1200",
    feature: false,
    themeColor: "var(--gold-deep)",
  },

  {
    category: "matriz-africana",
    id: "m1",
    title: "AFOXÉ: O CORTEJO SAGRADO",
    subtitle: 'O "candomblé de rua" traz a força dos atabaques para o asfalto.',
    img: "https://images.unsplash.com/photo-1596205264662-723659c0373d?w=1200",
    feature: true,
    themeColor: "var(--red-deep)",
  },
  {
    category: "matriz-africana",
    id: "m2",
    title: "CACUMBI",
    subtitle:
      "Entre apitos e ganzás, a dança que celebra a ancestralidade negra.",
    img: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?w=1200",
    feature: false,
    themeColor: "var(--red-deep)",
  },

  {
    category: "sincretismo",
    id: "s1",
    title: "TAIEIRAS: RAINHAS DO CONGO",
    subtitle:
      "A coroação de reis negros dentro da igreja: o ápice do sincretismo.",
    img: "https://images.unsplash.com/photo-1629219572863-7e4444585c53?w=1200",
    feature: true,
    themeColor: "var(--orange-deep)",
  },

  {
    category: "pluralidade",
    id: "p1",
    title: "PENITENTES: O CANTO DAS ALMAS",
    subtitle:
      "No sertão profundo, homens encapuzados entoam cânticos seculares.",
    img: "https://images.unsplash.com/photo-1533422902779-8856c4475854?w=1200",
    feature: true,
    themeColor: "var(--yellow-deep)",
  },
];

const docs = [
  {
    title: "O SOM DO MAR",
    duration: "12 MIN",
    img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=1000",
  },
  {
    title: "REIS DO CONGO",
    duration: "15 MIN",
    img: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=1000",
  },
  {
    title: "ÁGUAS DE OXALÁ",
    duration: "10 MIN",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1000",
  },
  {
    title: "FÉ NO SERTÃO",
    duration: "18 MIN",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1000",
  },
];

function renderSite() {
  const categories = [
    "catolicismo",
    "matriz-africana",
    "sincretismo",
    "pluralidade",
  ];

  categories.forEach((cat) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;

    if (grid.innerHTML === "") {
      const items = content.filter((p) => p.category === cat);
      items.forEach((item) => {
        const featureClass = item.feature ? "feature" : "";

        let clickAction = `openArticle('${item.id}')`;

        if (item.id === "c2") {
          clickAction =
            "window.location.href='conteudos/sao-goncalo/index.html'";
        }

        grid.innerHTML += `
                    <article class="article-block ${featureClass}" onclick="${clickAction}">
                        <div class="article-img-box">
                            <img src="${item.img}" alt="${item.title}" loading="lazy">
                        </div>
                        <div class="article-content">
                            <div>
                                <span class="article-cat-tag">ED. 16 • ${item.category}</span>
                                <h3 class="article-title">${item.title}</h3>
                            </div>
                            <p class="article-subtitle">${item.subtitle}</p>
                        </div>
                    </article>
                `;
      });
    }
  });

  const cineGrid = document.getElementById("grid-especiais");
  if (cineGrid && cineGrid.innerHTML === "") {
    docs.forEach((doc) => {
      cineGrid.innerHTML += `
                <a href="#" class="video-block-cinema">
                    <img src="${doc.img}" class="video-thumb" alt="${doc.title}" loading="lazy">
                    <div class="video-meta">
                        <span class="video-label">DOCUMENTÁRIO • ${doc.duration}</span>
                        <h3 class="video-title-cinema">${doc.title}</h3>
                    </div>
                    <div class="play-overlay"><i class="ph-fill ph-play-circle"></i></div>
                </a>
            `;
    });
  }
}

function openArticle(id) {
  const item = content.find((i) => i.id === id);
  if (!item) return;

  document.getElementById("art-title").innerText = item.title;
  document.getElementById("art-subtitle").innerText = item.subtitle;
  document.getElementById("art-cat").innerText = item.category;

  document.getElementById("art-img").style.backgroundImage =
    `url('${item.img}')`;
  document.querySelector(".art-hero-overlay").style.background =
    `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))`;

  document.getElementById("art-body").innerHTML = generateLoremIpsum();

  document.getElementById("home-view").classList.add("hidden");
  document.getElementById("article-view").classList.remove("hidden");

  window.scrollTo(0, 0);
}

function closeArticle() {
  document.getElementById("article-view").classList.add("hidden");
  document.getElementById("home-view").classList.remove("hidden");
}

function generateLoremIpsum() {
  return `
        <p><span class="drop-cap">A</span> fé em Sergipe não é apenas sentida; ela é performada, dançada e vestida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. A tradição se mantém viva nas ruas de paralelepípedo.</p>

        <div class="pull-quote">"A cultura popular é a oração que o povo dança com os pés no chão."</div>

        <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.</p>

        <p>Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.</p>

        <p>Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Fusce convallis metus id felis luctus adipiscing.</p>
    `;
}

// Inicializar
document.addEventListener("DOMContentLoaded", () => {
  renderSite();
});
