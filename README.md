# PartyHIT

Spalvinga, mobiliems įrenginiams pritaikyta vaikų švenčių svetainė. Prekės ženklo pavadinimas ir trys kainų paketai pakeisti pagal pateiktus duomenis.

## Peržiūra

Paleisti vietinį statinį puslapį galima su `python -m http.server 8000`, tada atidaryti `http://localhost:8000`.

## Rezervacijos ir duomenų saugumas – svarbu

- Rezervacijos forma paruošta siųsti `POST /api/booking-requests` JSON užklausą, atitinkančią `BookingRequest` modelį.
- Šiame repozitoriume nėra serverio/API, duomenų bazės, el. pašto siuntimo ar autentifikacijos. Kol jie neprijungti, užklausa nėra išsaugoma ir svetainė aiškiai parodo, kad siuntimas nepavyko. Negalima laikyti užklausų gavimo funkcijos veikiančia vien pagal formos išvaizdą.
- Neriboto skaičiaus užklausų garantuoti neįmanoma: paslaugų teikėjai taiko saugyklos, siuntimo dažnio ir plano kvotas. Galima projektuoti dideliam kiekiui ir stebėti kvotas, bet tai priklausys nuo pasirinkto hostingo / duomenų bazės / el. pašto paslaugos.
- `schemas/` saugo pateiktas duomenų modelių ir RLS taisyklių apibrėžtis. Jos nėra automatiškai įdiegtos kaip serverio apsauga, kol neįkeltos į suderinamą platformą. `BookingRequest` skaitymą ir pakeitimus turi vykdyti autentifikuotas administratorius, o viešai formai leisti tik ribotą sukūrimo operaciją su anti-spam apsauga.
- Dabartinis `admin.html` yra demonstracinis, naršyklės `localStorage` redaktorius. Jame nėra tikro, tik tau prieinamo prisijungimo, o pakeitimai nepersikelia lankytojams. Ankstesnėse versijose naudotas slaptažodis nebuvo saugus; nenaudok jo tikro prisijungimo slaptažodžiu.

## Modeliai

`schemas/` aprašo `BookingRequest`, `Character`, `GalleryItem`, `PricePlan`, `Program`, `SiteContent`, `Testimonial` ir `User` pagal pateiktas schemas. Serverinė integracija turi juos susieti su duomenų baze, autentifikacija ir email pranešimais.
