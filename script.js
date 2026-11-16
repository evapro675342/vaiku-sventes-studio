const ADMIN_PASSWORD = "svajonuburbulai2025";
const STORAGE_KEY = "svajonuburbulai-content-v1";

const defaultContent = {
  hero: {
    title: "Vaikystės džiaugsmas, kurį norisi prisiminti vėl ir vėl",
    subtitle:
      "Organizuojame naujas, įsimintinas šventes su linksmais personažais, muzika, žaidimais ir atsakingu dėmesiu kiekvienam mažajam svečiui.",
    button: "Rezervuoti šventę"
  },
  characters: [
    {
      id: 1,
      name: "Mėlyna Žvaigždė",
      description: "Linksma, šviesi ir draugiška, ji sukuria pačią geriausią šventės nuotaiką.",
      photo:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      name: "Rožinė Burbuolė",
      description: "Būtinai sukelia šypsenas, šokius ir nuostabias fotosesijas su visais vaikais.",
      photo:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      name: "Turkio Drakonas",
      description: "Energijos ir žaismingų žaidimų meistras, kuris verčia vaikams norėti dar daugiau.",
      photo:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      name: "Geltonas Saulės berniukas",
      description: "Trumpos šypsenos, džiaugsmo ir pasitikėjimo įkvėpėjas kiekvienoje šventėje.",
      photo:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
    }
  ],
  programs: [
    {
      id: 1,
      title: "Gimtadieniai",
      icon: "🎂",
      description: "Pasirinkite individualias, šiltas ir iki smulkmenų suplanotas gimtadienio šventes.",
      details: ["Tema pagal vaiko pomėgius", "Žaidimai ir mini konkursai", "Dovanos ir dekoracijos"]
    },
    {
      id: 2,
      title: "Vaikų šventės",
      icon: "🎈",
      description: "Klasikinės ar teminės šventės visuose amžiaus tarpsniuose – nuo sąskambių iki stilingų dekoracijų.",
      details: ["Teminiai renginiai", "Aktorinė veikla", "Nuotaikinga muzika"]
    },
    {
      id: 3,
      title: "Žaidimai ir pramogos",
      icon: "🎪",
      description: "Linksmi žaidimai, atrakcijos ir grupinės veiklos, kurios palaiko energiją ir šypsenas.",
      details: ["Judrūs žaidimai", "Konkursai ir prizai", "Pritaikyta vaikų amžiui"]
    },
    {
      id: 4,
      title: "Privatus renginys",
      icon: "✨",
      description: "Užsakovui pritaikytos šventės, kurių atmosfera yra unikali ir be streso.",
      details: ["Individ. planas", "Peržiūra prieš renginį", "Menkiausias poreikis"]
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Rožinė sfera",
      image:
        "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 2,
      title: "Balionų žaidimai",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 3,
      title: "Džiaugsmo akimirka",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80"
    },
    {
      id: 4,
      title: "Muzikos vakarėlis",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80"
    }
  ],
  pricing: [
    {
      id: 1,
      title: "Mini šventė",
      price: "199",
      description: "Puiki pasirinkta trumpoms, bet labai linksmas žaidimų valandoms.",
      highlight: false,
      features: ["1 personažas", "1 valanda", "Dekoracijos"]
    },
    {
      id: 2,
      title: "Standartinė šventė",
      price: "349",
      description: "Populiariausias pasirinkimas šeimoms ir vaikų gimtadieniams.",
      highlight: true,
      features: ["2 personažai", "2 valandas", "Žaidimai ir muzika"]
    },
    {
      id: 3,
      title: "VIP šventė",
      price: "599",
      description: "Pilnai pritaikyta išskirtinė, įsimintina ir labai speciali šventė.",
      highlight: false,
      features: ["3 personažai", "3 valandos", "Fleshing & dekoracija"]
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Ieva",
      relation: "Mama",
      text: "Viskas buvo tobula: nuo dekoracijų iki personažų, vaikams tai buvo pats gražiausias vakaras.",
      stars: 5
    },
    {
      id: 2,
      name: "Tomas",
      relation: "Tėvas",
      text: "Aiškus planas, malonios dvasios atmosfera ir ypatingai kūrybiški žaidimai. Labai rekomenduoju!",
      stars: 5
    },
    {
      id: 3,
      name: "Miglė",
      relation: "Šventės organizatorė",
      text: "Šventė buvo nepaprastai miela, žaisminga ir profesionaliai organizuota. Visiems labai patiko.",
      stars: 5
    }
  ],
  contacts: {
    phone: "+370 600 12345",
    email: "svajonuburbulai@gmail.com",
    instagram: "https://instagram.com/svajonuburbulai",
    facebook: "https://facebook.com/svajonuburbulai",
    address: "Vilnius, Lietuva"
  }
};

function getStoredContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(defaultContent));
    return JSON.parse(raw);
  } catch (error) {
    return JSON.parse(JSON.stringify(defaultContent));
  }
}

function saveStoredContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

function renderHomePage() {
  const content = getStoredContent();

  const heroTitle = document.getElementById("hero-title");
  const heroSubtitle = document.getElementById("hero-subtitle");
  const heroButton = document.querySelector("#hero .button-primary");
  if (heroTitle) heroTitle.textContent = content.hero.title;
  if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
  if (heroButton) heroButton.textContent = content.hero.button;

  const charactersGrid = document.getElementById("characters-grid");
  if (charactersGrid) {
    charactersGrid.innerHTML = content.characters
      .map(
        (character) => `
          <article class="character-card">
            <img class="character-photo" src="${character.photo}" alt="${character.name}" />
            <div class="character-content">
              <h3>${character.name}</h3>
              <p>${character.description}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  const programsGrid = document.getElementById("programs-grid");
  if (programsGrid) {
    programsGrid.innerHTML = content.programs
      .map(
        (program) => `
          <article class="program-card">
            <div class="program-icon">${program.icon}</div>
            <h3>${program.title}</h3>
            <p>${program.description}</p>
          </article>
        `
      )
      .join("");
  }

  const galleryGrid = document.getElementById("gallery-grid");
  if (galleryGrid) {
    galleryGrid.innerHTML = content.gallery
      .map(
        (item) => `
          <article class="gallery-item">
            <img src="${item.image}" alt="${item.title}" />
            <span>${item.title}</span>
          </article>
        `
      )
      .join("");
  }

  const pricingList = document.getElementById("pricing-list");
  if (pricingList) {
    pricingList.innerHTML = content.pricing
      .map(
        (item) => `
          <article class="price-card ${item.highlight ? "featured" : ""}">
            ${item.highlight ? '<span class="price-badge">Populiariausia</span>' : ""}
            <h3>${item.title}</h3>
            <div class="price-value">${item.price}€<span>/paketas</span></div>
            <p>${item.description}</p>
            <ul>
              ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  const reviewsGrid = document.getElementById("reviews-grid");
  if (reviewsGrid) {
    reviewsGrid.innerHTML = content.testimonials
      .map(
        (review) => `
          <article class="review-card">
            <div class="review-stars">${"★".repeat(review.stars)}</div>
            <p>“${review.text}”</p>
            <div class="review-author">
              <div class="review-avatar">${review.name[0]}</div>
              <div>
                <strong>${review.name}</strong>
                <span>${review.relation}</span>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  const contactPhone = document.getElementById("contact-phone");
  const contactEmail = document.getElementById("contact-email");
  const contactInstagram = document.getElementById("contact-instagram");
  const contactFacebook = document.getElementById("contact-facebook");

  if (contactPhone) {
    contactPhone.textContent = content.contacts.phone;
    contactPhone.href = `tel:${content.contacts.phone.replace(/\s+/g, "")}`;
  }
  if (contactEmail) {
    contactEmail.textContent = content.contacts.email;
    contactEmail.href = `mailto:${content.contacts.email}`;
  }
  if (contactInstagram) {
    contactInstagram.textContent = "Instagram";
    contactInstagram.href = content.contacts.instagram;
  }
  if (contactFacebook) {
    contactFacebook.textContent = "Facebook";
    contactFacebook.href = content.contacts.facebook;
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = this.elements.name.value.trim();
      alert(`Ačiū, ${name}! Jūsų užklausa išsiųsta. Susisieksime su jumis artimiausiu metu.`);
      this.reset();
    });
  }
}

function renderAdmin() {
  const loginScreen = document.getElementById("login-screen");
  const adminApp = document.getElementById("admin-app");
  const passwordInput = document.getElementById("password-input");
  const loginButton = document.getElementById("login-button");

  const openAdmin = () => {
    loginScreen.classList.add("hidden");
    adminApp.classList.remove("hidden");
    renderAdminForms();
  };

  const checkPassword = () => {
    if (passwordInput.value === ADMIN_PASSWORD) {
      openAdmin();
    } else {
      alert("Neteisingas slaptažodis.");
    }
  };

  if (loginButton) {
    loginButton.addEventListener("click", checkPassword);
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") checkPassword();
    });
  }
}

function renderAdminForms() {
  const content = getStoredContent();
  const adminPanel = document.getElementById("admin-panel");
  if (!adminPanel) return;

  adminPanel.innerHTML = `
    <section class="admin-section">
      <h2>Pagrindinis puslapis</h2>
      <div class="admin-form">
        <div class="form-grid">
          <div class="form-field">
            <label>Hero pavadinimas</label>
            <input type="text" data-section="hero" data-key="title" value="${escapeHtml(content.hero.title)}" />
          </div>
          <div class="form-field">
            <label>Mygtuko tekstas</label>
            <input type="text" data-section="hero" data-key="button" value="${escapeHtml(content.hero.button)}" />
          </div>
        </div>
        <div class="form-field">
          <label>Hero aprašymas</label>
          <textarea data-section="hero" data-key="subtitle">${escapeHtml(content.hero.subtitle)}</textarea>
        </div>
      </div>
    </section>

    <section class="admin-section">
      <h2>Personažai</h2>
      <div class="list-editor" id="characters-editor"></div>
      <button class="add-btn" type="button" data-add="characters">+ Pridėti personažą</button>
    </section>

    <section class="admin-section">
      <h2>Švenčių programos</h2>
      <div class="list-editor" id="programs-editor"></div>
      <button class="add-btn" type="button" data-add="programs">+ Pridėti programą</button>
    </section>

    <section class="admin-section">
      <h2>Galerija</h2>
      <div class="list-editor" id="gallery-editor"></div>
      <button class="add-btn" type="button" data-add="gallery">+ Pridėti nuotrauką</button>
    </section>

    <section class="admin-section">
      <h2>Kainoraštis</h2>
      <div class="list-editor" id="pricing-editor"></div>
      <button class="add-btn" type="button" data-add="pricing">+ Pridėti kainą</button>
    </section>

    <section class="admin-section">
      <h2>Atsiliepimai</h2>
      <div class="list-editor" id="testimonials-editor"></div>
      <button class="add-btn" type="button" data-add="testimonials">+ Pridėti atsiliepimą</button>
    </section>

    <section class="admin-section">
      <h2>Kontaktai</h2>
      <div class="form-grid">
        <div class="form-field">
          <label>Telefonas</label>
          <input type="text" data-section="contacts" data-key="phone" value="${escapeHtml(content.contacts.phone)}" />
        </div>
        <div class="form-field">
          <label>El. paštas</label>
          <input type="text" data-section="contacts" data-key="email" value="${escapeHtml(content.contacts.email)}" />
        </div>
        <div class="form-field">
          <label>Instagram</label>
          <input type="text" data-section="contacts" data-key="instagram" value="${escapeHtml(content.contacts.instagram)}" />
        </div>
        <div class="form-field">
          <label>Facebook</label>
          <input type="text" data-section="contacts" data-key="facebook" value="${escapeHtml(content.contacts.facebook)}" />
        </div>
      </div>
    </section>

    <div style="display:flex; justify-content:flex-end; margin-top: 10px;">
      <button type="button" class="save-btn" id="save-content">Išsaugoti pakeitimus</button>
    </div>
  `;

  bindAdminInputs();
  renderEditorList("characters", content.characters, [
    { key: "name", label: "Vardas" },
    { key: "description", label: "Aprašymas", type: "textarea" },
    { key: "photo", label: "Nuotrauka (URL)" }
  ]);

  renderEditorList("programs", content.programs, [
    { key: "title", label: "Pavadinimas" },
    { key: "icon", label: "Ikona" },
    { key: "description", label: "Aprašymas", type: "textarea" }
  ]);

  renderEditorList("gallery", content.gallery, [
    { key: "title", label: "Pavadinimas" },
    { key: "image", label: "Nuotrauka (URL)" }
  ]);

  renderEditorList("pricing", content.pricing, [
    { key: "title", label: "Pavadinimas" },
    { key: "price", label: "Kaina (€)" },
    { key: "description", label: "Aprašymas", type: "textarea" },
    { key: "highlight", label: "Populiariausias", type: "checkbox" }
  ]);

  renderEditorList("testimonials", content.testimonials, [
    { key: "name", label: "Vardas" },
    { key: "relation", label: "Ryšys" },
    { key: "text", label: "Atsiliepimas", type: "textarea" },
    { key: "stars", label: "Žvaigždės (1-5)" }
  ]);

  bindAddButtons();
  bindSaveButton();
}

function renderEditorList(sectionName, items, fields) {
  const target = document.getElementById(`${sectionName}-editor`);
  if (!target) return;

  target.innerHTML = items
    .map(
      (item, index) => `
        <div class="editor-item" data-section="${sectionName}" data-index="${index}">
          <div class="editor-item-header">
            <strong>${sectionName[0].toUpperCase() + sectionName.slice(1).replace(/s$/, "")}</strong>
            <button type="button" class="remove-item" data-remove="${sectionName}" data-index="${index}">Pašalinti</button>
          </div>
          <div class="form-grid">
            ${fields
              .map((field) => {
                const name = field.key;
                const value = item[name] ?? "";
                const inputType = field.type === "textarea" ? "textarea" : field.type === "checkbox" ? "checkbox" : "text";

                if (inputType === "checkbox") {
                  return `
                    <div class="form-field" style="grid-column: 1 / -1;">
                      <label style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" data-section="${sectionName}" data-index="${index}" data-key="${name}" ${value ? "checked" : ""} />
                        ${field.label}
                      </label>
                    </div>
                  `;
                }

                return `
                  <div class="form-field" style="grid-column: 1 / -1;">
                    <label>${field.label}</label>
                    ${inputType === "textarea"
                      ? `<textarea data-section="${sectionName}" data-index="${index}" data-key="${name}">${escapeHtml(value)}</textarea>`
                      : `<input type="${inputType}" data-section="${sectionName}" data-index="${index}" data-key="${name}" value="${escapeHtml(value)}" />`}
                  </div>
                `;
              })
              .join("")}
          </div>
        </div>
      `
    )
    .join("");
}

function bindAdminInputs() {
  document.querySelectorAll("[data-section][data-key]").forEach((input) => {
    input.addEventListener("input", () => {
      const section = input.dataset.section;
      const key = input.dataset.key;
      const content = getStoredContent();
      if (section === "hero") {
        content.hero[key] = input.value;
      }
      if (section === "contacts") {
        content.contacts[key] = input.value;
      }
      saveStoredContent(content);
      renderHomePage();
    });
  });

  document.querySelectorAll("[data-section][data-index][data-key]").forEach((input) => {
    input.addEventListener("input", () => {
      const content = getStoredContent();
      const section = input.dataset.section;
      const index = Number(input.dataset.index);
      const key = input.dataset.key;
      const value = input.type === "checkbox" ? input.checked : input.value;
      content[section][index][key] = value;
      saveStoredContent(content);
      renderHomePage();
    });
  });
}

function bindAddButtons() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.add;
      const content = getStoredContent();

      if (section === "characters") {
        content.characters.push({
          id: Date.now(),
          name: "Naujas personažas",
          description: "Aprašymas čia",
          photo: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80"
        });
      }

      if (section === "programs") {
        content.programs.push({
          id: Date.now(),
          title: "Nauja programa",
          icon: "✨",
          description: "Įraše aprašymą",
          details: []
        });
      }

      if (section === "gallery") {
        content.gallery.push({
          id: Date.now(),
          title: "Nauja nuotrauka",
          image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80"
        });
      }

      if (section === "pricing") {
        content.pricing.push({
          id: Date.now(),
          title: "Nauja kaina",
          price: "299",
          description: "Aprašymas",
          highlight: false,
          features: ["Paslauga 1", "Paslauga 2"]
        });
      }

      if (section === "testimonials") {
        content.testimonials.push({
          id: Date.now(),
          name: "Naujas klientas",
          relation: "Mama",
          text: "Puiki patirtis.",
          stars: 5
        });
      }

      saveStoredContent(content);
      renderAdminForms();
    });
  });

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.dataset.remove;
      const index = Number(button.dataset.index);
      const content = getStoredContent();
      content[section].splice(index, 1);
      saveStoredContent(content);
      renderAdminForms();
    });
  });
}

function bindSaveButton() {
  const saveButton = document.getElementById("save-content");
  if (saveButton) {
    saveButton.addEventListener("click", () => {
      renderHomePage();
      alert("Pakeitimai išsaugoti! ");
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  const page = document.body.dataset.page;

  if (page === "home") {
    renderHomePage();
  }

  if (page === "admin") {
    renderAdmin();
  }
}

document.addEventListener("DOMContentLoaded", init);

window.addEventListener("storage", () => {
  if (document.body.dataset.page === "home") {
    renderHomePage();
  }
});

































































































