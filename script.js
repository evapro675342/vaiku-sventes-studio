const STORAGE_KEY = "partyhit-content-v2";
const defaultContent = {
  site: {
    brand_name: "PartyHIT", tagline: "Šventės, pilnos džiaugsmo.", hero_kicker: "Žavingos vaikų šventės",
    hero_title: "Mažos šventės. Dideli prisiminimai.", hero_highlight: "Dideli prisiminimai.",
    hero_subtitle: "PartyHIT pripildo vaikų šventes juoko, spalvų ir įsimintinų akimirkų – nuo pirmo žaidimo iki paskutinio burbulo.",
    hero_cta: "Rezervuoti šventę", hero_image_url: "", phone: "+370 600 12345", email: "svajonuburbulai@gmail.com",
    instagram_url: "https://instagram.com/", facebook_url: "https://facebook.com/", location: "Atvykimo zona – derinama", footer_note: "Šventės, pilnos džiaugsmo."
  },
  characters: [
    { id: 1, name: "Mėlyna Žvaigždė", role: "Nuotykių ieškotoja", description: "Linksma, šviesi ir draugiška – ji sukuria pačią geriausią šventės nuotaiką.", quote: "Pasiruošę nuotykiui?", image_url: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80", color: "sky", order: 1, is_active: true },
    { id: 2, name: "Rožinė Burbuolė", role: "Burbulų ekspertė", description: "Šokių, burbulų ir nuostabių fotosesijų su visais vaikais meistrė.", quote: "Pūskime džiaugsmą!", image_url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80", color: "rose", order: 2, is_active: true },
    { id: 3, name: "Turkio Drakonas", role: "Žaidimų kapitonas", description: "Žaismingų iššūkių ir energingų žaidimų meistras.", quote: "Kas pasiruošęs žaisti?", image_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80", color: "turq", order: 3, is_active: true },
    { id: 4, name: "Saulės draugas", role: "Šypsenų nešėjas", description: "Į kiekvieną šventę atneša šilumos, juoko ir daug geros nuotaikos.", quote: "Šiandien švenčiame!", image_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80", color: "sun", order: 4, is_active: true }
  ],
  programs: [
    { id: 1, title: "Gimtadieniai", kicker: "1,5–3 val.", age_range: "3–10 m.", description: "Asmeniškai pritaikytos gimtadienio šventės su žaidimais, muzika ir personažais.", highlights: ["Tema pagal vaiko pomėgius", "Žaidimai ir konkursai", "Daug smagių akimirkų"], image_url: "", color: "rose", order: 1, is_active: true },
    { id: 2, title: "Vaikų šventės", kicker: "Pagal susitarimą", age_range: "Visoms progoms", description: "Teminės šventės, kuriose kiekvienas mažasis svečias randa sau smagios veiklos.", highlights: ["Teminiai renginiai", "Kūrybinė veikla", "Nuotaikinga muzika"], image_url: "", color: "grape", order: 2, is_active: true },
    { id: 3, title: "Žaidimai ir pramogos", kicker: "Lanksti trukmė", age_range: "Pagal grupę", description: "Judrūs žaidimai, konkursai ir pramogos, pritaikytos vaikų amžiui.", highlights: ["Judrūs žaidimai", "Konkursai ir prizai", "Burbulų šou"], image_url: "", color: "turq", order: 3, is_active: true },
    { id: 4, title: "Privatus renginys", kicker: "Individualiai", age_range: "Visai šeimai", description: "Unikali, jūsų poreikiams pritaikyta programa be rūpesčių organizuojant.", highlights: ["Individualus planas", "Jūsų pasirinkta tema", "Asmeninis dėmesys"], image_url: "", color: "sun", order: 4, is_active: true }
  ],
  gallery: [
    { id: 1, title: "Spalvinga šventė", media_type: "image", media_url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80", span: "normal", order: 1, is_active: true },
    { id: 2, title: "Balionų žaidimai", media_type: "image", media_url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80", span: "normal", order: 2, is_active: true },
    { id: 3, title: "Džiaugsmo akimirka", media_type: "image", media_url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80", span: "normal", order: 3, is_active: true },
    { id: 4, title: "Muzikos vakarėlis", media_type: "image", media_url: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=80", span: "normal", order: 4, is_active: true }
  ],
  pricing: [
    { id: 1, title: "Mini šventė", price: "140 €", meta: "1,5 val. · iki 10 vaikų", description: "Mažam ratui namuose ar kieme – be streso ir be ilgų pasiruošimų.", features: ["1 personažas", "Žaidimų programa", "Burbulų šou", "Muzika ir garsas"], is_popular: false, color: "rose", order: 1, is_active: true },
    { id: 2, title: "Pilna šventė", price: "220 €", meta: "2 val. · iki 15 vaikų", description: "Populiariausias pasirinkimas – nuo sutikimo iki torto akimirkos.", features: ["1 personažas + asistentas", "Veido dažymas", "Balionų figūros", "Dovanėlė gimtadienio kaltininkui", "Teminė mini fotosesija"], is_popular: true, color: "grape", order: 2, is_active: true },
    { id: 3, title: "Didžioji šventė", price: "320 €", meta: "3 val. · iki 25 vaikų", description: "Darželiams, dideliems kiemams ir šventėms, kur visi nori dalyvauti.", features: ["2 personažai", "Sceninis magijos šou", "Veido dažymas ir piešimas ant rankų", "Piñata", "Foto zona su rekvizitu"], is_popular: false, color: "turq", order: 3, is_active: true }
  ],
  testimonials: [
    { id: 1, author_name: "Ieva", child_name: "Emilijos mama", text: "Viskas buvo tobula: nuo dekoracijų iki personažų. Vaikams tai buvo pati gražiausia šventė!", rating: 5, order: 1, is_active: true },
    { id: 2, author_name: "Tomas", child_name: "Tėvelis", text: "Aiškus planas, smagūs žaidimai ir puiki nuotaika. Rekomenduojame!", rating: 5, order: 2, is_active: true },
    { id: 3, author_name: "Miglė", child_name: "Šventės viešnia", text: "Šventė buvo žaisminga ir profesionaliai organizuota – visiems labai patiko.", rating: 5, order: 3, is_active: true }
  ],
  contacts: { phone: "+370 600 12345", email: "svajonuburbulai@gmail.com", instagram: "https://instagram.com/", facebook: "https://facebook.com/", location: "Atvykimo zona – derinama" }
};

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function getStoredContent() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return stored ? { ...clone(defaultContent), ...stored, site: { ...defaultContent.site, ...(stored.site || {}) }, contacts: { ...defaultContent.contacts, ...(stored.contacts || {}) } } : clone(defaultContent);
  } catch { return clone(defaultContent); }
}
function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}
function renderHomePage() {
  const content = getStoredContent();
  const setText = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value || ""; };
  setText("hero-kicker", content.site.hero_kicker); setText("hero-title", content.site.hero_title); setText("hero-subtitle", content.site.hero_subtitle); setText("hero-cta", content.site.hero_cta);
  setText("footer-brand", content.site.brand_name); setText("footer-note", content.site.footer_note); setText("contact-location", content.site.location); setText("footer-year", new Date().getFullYear());
  const phone = document.getElementById("contact-phone"); if (phone) { phone.textContent = content.site.phone; phone.href = `tel:${content.site.phone.replace(/[^+\d]/g, "")}`; }
  const email = document.getElementById("contact-email"); if (email) { email.textContent = content.site.email; email.href = `mailto:${content.site.email}`; }
  const instagram = document.getElementById("contact-instagram"); if (instagram) instagram.href = content.site.instagram_url;
  const facebook = document.getElementById("contact-facebook"); if (facebook) facebook.href = content.site.facebook_url;

  const characters = document.getElementById("characters-grid");
  if (characters) characters.innerHTML = content.characters.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<article class="character-card"><img class="character-photo" loading="lazy" src="${escapeHtml(x.image_url)}" alt="${escapeHtml(x.name)}" /><div class="character-content"><span class="eyebrow accent">${escapeHtml(x.role)}</span><h3>${escapeHtml(x.name)}</h3><p>${escapeHtml(x.description)}</p><p><em>„${escapeHtml(x.quote)}“</em></p></div></article>`).join("");
  const programs = document.getElementById("programs-grid");
  if (programs) programs.innerHTML = content.programs.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<article class="program-card"><div class="program-icon">${x.color === "sun" ? "☀️" : x.color === "turq" ? "🎪" : x.color === "sky" ? "⭐" : "🎉"}</div><h3>${escapeHtml(x.title)}</h3><p><strong>${escapeHtml(x.kicker)} · ${escapeHtml(x.age_range)}</strong></p><p>${escapeHtml(x.description)}</p><ul>${(x.highlights || []).map((v) => `<li>${escapeHtml(v)}</li>`).join("")}</ul></article>`).join("");
  const gallery = document.getElementById("gallery-grid");
  if (gallery) gallery.innerHTML = content.gallery.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<article class="gallery-item">${x.media_type === "video" ? `<video controls preload="metadata" aria-label="${escapeHtml(x.title)}" src="${escapeHtml(x.media_url)}"></video>` : `<img loading="lazy" src="${escapeHtml(x.media_url)}" alt="${escapeHtml(x.title)}" />`}<span>${escapeHtml(x.title)}</span></article>`).join("");
  const prices = document.getElementById("pricing-list");
  if (prices) prices.innerHTML = content.pricing.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<article class="price-card ${x.is_popular ? "featured" : ""}">${x.is_popular ? '<span class="price-badge">Rekomenduojama</span>' : ""}<h3>${escapeHtml(x.title)}</h3><p class="price-meta">${escapeHtml(x.meta)}</p><div class="price-value">${escapeHtml(x.price)}</div><p>${escapeHtml(x.description)}</p><ul>${(x.features || []).map((v) => `<li>${escapeHtml(v)}</li>`).join("")}</ul><a href="#contact" class="button button-secondary">Rinktis programą</a></article>`).join("");
  const reviews = document.getElementById("reviews-grid");
  if (reviews) reviews.innerHTML = content.testimonials.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<article class="review-card"><div class="review-stars" aria-label="${Number(x.rating) || 5} iš 5 žvaigždučių">${"★".repeat(Math.min(5, Math.max(1, Number(x.rating) || 5)))}</div><p>„${escapeHtml(x.text)}“</p><div class="review-author"><div class="review-avatar">${escapeHtml((x.author_name || "?")[0])}</div><div><strong>${escapeHtml(x.author_name)}</strong><span>${escapeHtml(x.child_name)}</span></div></div></article>`).join("");
  const select = document.getElementById("booking-program");
  if (select) { const current = select.value; select.innerHTML = '<option value="">Pasirinkite programą</option>' + content.pricing.filter((x) => x.is_active !== false).sort((a,b) => a.order-b.order).map((x) => `<option value="${escapeHtml(x.title)}">${escapeHtml(x.title)} – ${escapeHtml(x.price)}</option>`).join(""); select.value = current; }
}
function renderAdmin() {
  const login = document.getElementById("login-screen"); const app = document.getElementById("admin-app");
  const password = document.getElementById("password-input"); const button = document.getElementById("login-button");
  const open = () => { login.classList.add("hidden"); app.classList.remove("hidden"); renderAdminForms(); };
  button?.addEventListener("click", () => { if (password.value === "svajonuburbulai2025") open(); else alert("Neteisingas slaptažodis."); });
  password?.addEventListener("keydown", (event) => { if (event.key === "Enter") button.click(); });
}
function renderAdminForms() {
  const content = getStoredContent(); const panel = document.getElementById("admin-panel"); if (!panel) return;
  panel.innerHTML = `<section class="admin-section"><h2>Svetainės tekstai ir kontaktai</h2><div class="form-grid">${Object.entries({ brand_name:"Prekės ženklas",hero_kicker:"Hero etiketė",hero_title:"Pagrindinė antraštė",hero_subtitle:"Aprašymas",hero_cta:"Mygtuko tekstas",phone:"Telefonas",email:"El. paštas",instagram_url:"Instagram URL",facebook_url:"Facebook URL",location:"Atvykimo zona",footer_note:"Tekstas poraštėje"}).map(([key,label])=>`<div class="form-field"><label>${label}</label><input data-site-key="${key}" value="${escapeHtml(content.site[key])}" /></div>`).join("")}</div></section>
  <section class="admin-section"><h2>Kainų paketai</h2><div class="list-editor">${content.pricing.map((x,i)=>`<article class="editor-item"><div class="editor-item-header"><strong>${escapeHtml(x.title)}</strong></div><div class="form-grid"><label class="form-field">Pavadinimas<input data-price="${i}" data-key="title" value="${escapeHtml(x.title)}"></label><label class="form-field">Kaina<input data-price="${i}" data-key="price" value="${escapeHtml(x.price)}"></label><label class="form-field">Trukmė / dalyviai<input data-price="${i}" data-key="meta" value="${escapeHtml(x.meta)}"></label><label class="form-field">Aprašymas<textarea data-price="${i}" data-key="description">${escapeHtml(x.description)}</textarea></label><label class="form-field">Kas įeina (po vieną eilutėje)<textarea data-price="${i}" data-key="features">${escapeHtml(x.features.join("\n"))}</textarea></label><label><input type="checkbox" data-price="${i}" data-key="is_popular" ${x.is_popular ? "checked" : ""}> Rekomenduojama</label></div></article>`).join("")}</div></section><p class="admin-warning">Tai tik šios naršyklės demonstracinis redagavimas. Viešai paskelbtos svetainės turiniui ir saugiam administravimui reikia prijungti serverinę duomenų bazę bei prisijungimą.</p><button class="save-btn" id="save-content" type="button">Išsaugoti šiame įrenginyje</button>`;
  panel.querySelectorAll("[data-site-key]").forEach((input) => input.addEventListener("input", () => { const c=getStoredContent(); c.site[input.dataset.siteKey]=input.value; localStorage.setItem(STORAGE_KEY,JSON.stringify(c)); }));
  panel.querySelectorAll("[data-price]").forEach((input) => input.addEventListener("input", () => { const c=getStoredContent(); const item=c.pricing[Number(input.dataset.price)]; item[input.dataset.key]=input.dataset.key === "features" ? input.value.split("\n").map((v)=>v.trim()).filter(Boolean) : input.type === "checkbox" ? input.checked : input.value; localStorage.setItem(STORAGE_KEY,JSON.stringify(c)); }));
  document.getElementById("save-content")?.addEventListener("click", () => { renderHomePage(); alert("Pakeitimai išsaugoti tik šiame įrenginyje."); });
}
function init() {
  if (document.body.dataset.page === "home") {
    renderHomePage();
    document.getElementById("contact-form")?.addEventListener("submit", async (event) => {
      event.preventDefault(); const form=event.currentTarget; const status=document.getElementById("booking-status");
      const payload=Object.fromEntries(new FormData(form).entries());
      const button=form.querySelector('button[type="submit"]'); button.disabled=true; status.textContent="Siunčiama…";
      try {
        const response=await fetch("/api/booking-requests", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload) });
        if (!response.ok) throw new Error("Request failed");
        status.textContent="Ačiū! Jūsų rezervacijos užklausa išsiųsta."; form.reset();
      } catch {
        status.textContent="Užklausa dar neišsiųsta: rezervacijų serveris dar neprijungtas. Susisiekite telefonu arba el. paštu.";
      } finally { button.disabled=false; }
    });
  }
  if (document.body.dataset.page === "admin") renderAdmin();
}
document.addEventListener("DOMContentLoaded", init);
window.addEventListener("storage", () => { if (document.body.dataset.page === "home") renderHomePage(); });
