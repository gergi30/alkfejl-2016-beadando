<div align="center"><img src="[doc]images/icon_small.png"/></div>

# Alkalmazások fejlesztése beadandó (PhotoSpace){

*Nagy Gergely -- JJSR78*
[//]: # (https://help.github.com/articles/creating-and-highlighting-code-blocks/)
## Tartalomjegyzék

  1. [Az értékelés összetevői](#az-értékelés-összetevői)
  1. [Feladat vállalása](#feladat-vállalása)
  1. [Alkalmazás elkészítése szerveroldali technológiával](#alkalmazás-elkészítése-szerveroldali-technológiával)
  1. [A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével](#a-szerveroldali-alkalmazás-progresszív-fejlesztése-kliensoldali-javascript-segítségével)
  1. [Implementáció](#implementáció)
  1. [Felhasználói dokumentáció](#felhasználói-dokumentáció)

## Az értékelés összetevői

- [x] Feladat vállalása (2016. október 16. éjfél)
- [ ] Alkalmazás elkészítése szerveroldali technológiával (2016. november 13. éjfél)
- [ ] A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével (2016. december 18. éjfél)

## Feladat vállalása

<a name="cel"></a><a name="2.1"></a>
- [2.1](#cel) **Célkitűzés, projektindító dokumentum**: 

A projekt az ELTE Informatikai kar Alkalmazások fejlesztése tárgy első beadandója során készült. A projekt rövid leírása: a cél egy közösségi háló felépítése, ahol a felhasználók képeket oszthatnak meg regisztráció majd bejelentkezést követően. A képek egy úgynevezett kártyán helyezkednek el, ami a képeken kívül tartalmazza, hogy ki osztotta meg a képet, a kép címét, a megosztás dátumát, és a kép kategóriáját is. A felhasználónak lehetősége van a saját kártyái módósítására és törlésére, és a többi felhasználó kártyáit is megtekintheti. Ezenfelül kategóriák szerint szűrhetőek a kártyák.

<a name="fogalom"></a><a name="2.2"></a>
- [2.2](#fogalom) **Szakterületi fogalomjegyzék**: 

<b>Regisztráció: </b>Egy folyamat ami után a vendég, "felhasználó" rangot kap.<br>
<b>Felhasználó: </b>Egy személy aki regisztráció után belépett az alkalmazásba.<br>
<b>Kép: </b>A felhasználó által megosztani kivánt JPG vagy PNG formátumú fájl.<br>
<b>Kategória: </b>Képek csoportosítására használt címke, ami lehet:<br>
  [ Vicces | Játék | Zene | Sport | Állatok | Tánc | Ijesztő | Autók | Étel | Művészet ]</br>
<b>Kártya: </b>Egy komponens ami tartalmazza a felhasználó nevét, egy képet, a kép címét, kategóriáját és feltöltési dátumát.<br>

<a name="funkc"></a><a name="2.3"></a>
- [2.3](#funkc) **Funkcionális követelmények**: 

<b>Főoldal: </b>Elrejti az alkalmazást a vendégek elől. Felkelti a vendég érdeklődését a regisztrációra. <br>
<b>Regisztráció: </b>Lehetővé teszi egy vendégnek, hogy használhassa az alkalmazást. <br>
<b>Bejelentkezés: </b>Jelszóval védi a felhasználó adatait, és a jelszóval védett funkciókat megjeleníti. Ezzel védve a felhasználót illetve az alkalmazást is az illetéktelenektől. Bejelentkezés után elérhető funkciók: <br>
  - <b>Kép feltöltése: </b>Feltölthessünk saját képet. <br>
  - <b>Kép törlése: </b>Saját képeinket törölni tudjuk. <br>
  - <b>Hozzászólás írása: </b>Meglévő képekhez tudjunk hozzászólást írni. <br>
  - <b>Kategória alapján szűrés: </b>Képeket szűrhetjük kategóriák szerint. <br>
  - <b>Profiladatok szerkesztése: </b>Profilunk adatait lehetőség legyen megváltoztatni. <br>
  - <b>Profil törlése: </b>Nem használt profilunkat lehetőség legyen törölni az adatbázisból. <br>
  
<b>Kijelentkezés: </b>Felhasználó által használható funkció a bejelentkezett folyamat megszüntetésére. <br>
  
<a name="nemfunkc"></a><a name="2.4"></a>
- [2.4](#nemfunkc) **Nem funkcionális követelmények**: 

<b>Könnyű áttekinthetőség: </b>Az alkalmazás a <a href="https://material.google.com/">Google Material Design</a> irányvonalait kövesse.Gyors és egyszerű használatot biztosítson a felhasználóknak. Az implementáláshoz a <a href="http://materializecss.com/">Materialize</a> keretrendszert használom.<br>
<b>Megbízhatóság: </b>A jelszavakat ne plain-textbe tároljuk. Figyeljünk a jelszavak erősségére(legalább 6 karakter, szám + kis-,nagybetű). Jelszóval védett funkciók, ezzel védve a felhasználók érzékeny adatait. <br>
<b>Skálázhatóság: </b>Az alkalmazás legyen skálázható, több felhasználó is képes legyen szinkron használni. <br>
<b>Karbantarthatóság: </b>Különböző rétegekhez tartozó forrásfájlokat külön mappákba csoportosítsuk, figyeljünk a Clean Code elvekre. Írjunk teszteket az alkalmazás fejlesztése közben ( akár TDD ).

<a name="hasznal"></a><a name="2.5"></a>
- [2.5](#hasznal) **Használatieset-modell**: 

**Szerepkörök:**

 - Vendég ( csak regisztrációhoz és bejelentkezéshez van jogosultsága )
	 - Főoldal
	 - Bejelentkezés
	 - Regisztráció
 - Felhasználó ( alkalmazás funkciói elérhetőek számára)
	 - Képek listázása
	 - Képek hozzáadása
	 - Képek szerkesztése
	 - Képek törlése
	 - Felhasználói adatok szerkesztése
	 - Saját felhasználói fiók törlése
	 - Hozzászólások írása

<div align="center"><img src="[doc]images/hasznalatieset_diagram.png"/></div>

**Vegyünk példának egy egyszerű folyamatot:**

 - ***Felhasználó törlése:***
 
 1. Az oldalra lépett vendég bejelentkezik vagy regisztrál.
 2. Bejelentkezés után a felhasználó a navigációs sávon megnyithatja a profiladatokat tartalmazó oldalt.
 3. Megnyomja a "Szerkesztés" gombot.
 4. A profil szerkesztése oldalon megnyomja a "Felhasználó törlése" gombot.
 5. A felhasználó visszakerül az üdvözlő oldalra.

<div align="center"><img src="[doc]images/profil_torles_folyamat.png"/></div>

## Alkalmazás elkészítése szerveroldali technológiával

<a name="arch"></a><a name="3.1"></a>
- [3.1](#arch) **Architektúra terv**:

***Oldaltérkép:***

##### Publikus
- Belépés
- Regisztráció
- Üdvözlő oldal megtekintése

##### Bejelentkezett
- Képek listázása
	- *Hozzászólások írása* 
- Saját profil megtekintése
	- *Saját képek törlése*
	- *Saját képek hozzáadása*
	- *Saját képek szerkesztése*
	- *Saját profil szerkesztése*
	      - Felhasználói fiók törlése 
- Kijelentkezés

***Végpontok:***

| Metódus | Cím | Funkció|
|:-------:|:---:|--------|
|GET|/|Főoldal megjelenítése.
|GET|/login|Bejelentkező oldal megjelenítése.
|POST|/login|Bejelentkezés.
|GET|/logout|Kijelentkezés.
|GET|/register|Regisztrációs oldal megjelenítése.
|POST|/register|Regisztráció.
|GET|/cards/create|Új kép adatait módosító űrlap megjelenítése.
|GET|/user/:users/cards|Felhasználó képeinek megjelenítés.
|GET|/user/:users/cards/:id/edit|Kép módosító űrlap megjelenítése.
|POST|/cards/create|Új Kép feltöltése.
|POST|/user/:users/cards/:id/edit|Kép módosítása.
|POST|/user/:users/cards/:id/delete|Kép törlése.
|POST|/user/:user_id/cards/:card_id/sendComment|Új komment küldése.
|GET|/user/:users/edit|Felhasználói fiók módosító ürlap megjelenítése.
|POST|/user/:users/edit|Felhasználói fiók módosítása.
|POST|/user/:users/delete|Felhasználói fiók törlése.

## A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével

<a name="felulet"></a><a name="3.2"></a>
- [3.2](#felulet) **Felhasználóifelület-modell**:

***Oldalvázlatok:***

***Designterv:***

<a name="osztalymodell"></a><a name="3.3"></a>
- [3.3](#osztalymodell) **Osztálymodell**:

***Adatmodell:***

***Adatbázisterv:***

***Állapotdiagram:***

## Implementáció

<a name="fejlkorny"></a><a name="4.1"></a>
- [4.1](#fejlkorny) **Fejlesztői környezet bemutatása**:

<a name="mappa"></a><a name="4.2"></a>
- [4.2](#mappa) **Könyvtárstruktúrában lévő mappák funkciójának bemutatása**:

* **Photospace**
  * **app**: Alkalmazás fájlai.
    * **Commands**
          * _Greet.js_
     * **Http**
          * **Controllers** 
             * _CardController.js_
             * _HomePageController.js_
             * _ProfileController.js_
             * _RegisterController.js_
             * _AuthController.js_
          * _kernel.js_
          * _routes.js_
     * **Listeners**
          * _Http.js_
     * **Model**: Adatbázis kapcsolatokat leíró fájlok.
          * _Card.js_
          * _Category.js_
          * _Comment.js_
          * _Token.js_
          * _User.js_
  * **config**: Beállításokat tartalmazó mappa.
    * _app.js_
    * _auth.js_
    * _database.js_
    * _event.js_
    * _session.js_
    * _shield.js_
  * **database**: Adatbázishoz kapcsolódó fájlok.
    * **migrations**: Adatbázis táblák sémáját leíró fájlok.
      * _*users_table.js_
      * _*tokens_table.js_
      * _*categories.js_
      * _*cards.js_
      * _*Comment.js_
    * **seeds**
      * _Database.js_
    * _factory.js_
    * _PhotoSpace.sqlite_
  * **public**: 
    * **css**
    * **img**
  * **resources**
    * **views**: Nézeteke leíró nunjucks fájlok
      * _cardCreate.njk_
      * _cardEdit.njk_
      * _login.njk_
      * _master.njk_
      * _profileEdit.njk_
      * _profileShow.njk_
      * _register.njk_
      * _welcome.njk_
  * _.env_
  * _package.json_
  * _server.js_

## Felhasználói dokumentáció

<a name="futas"></a><a name="5.1"></a>
- [5.1](#futas) **A futtatáshoz ajánlott hardver-, szoftver konfiguráció**:

***Ajánlott rendszerkövetelmény:***

Hardver:
    Pentium 4 or newer processor that supports SSE2
    512MB of RAM
    200MB of hard drive space
    
Szoftver:


<a name="install"></a><a name="5.2"></a>
- [5.3](#install) **Telepítés lépései: hogyan kerül a Githubról a célgépre a program, hogyan kell elindítani**:

1. Kód letöltése

    a. ZIP letöltése

    b. gergi30/alkfejl-2016-beadando klónozása

    c. gergi30/alkfejl-2016-beadando forkolása és a saját repo klónozása

2. `npm install`
3. `.env.example` fájl átnevezése `.env`-re
4. `npm run dev` paranccsal futtatni
5. `localhost:3333` megnyitása

<a name="phasznalat"></a><a name="5.3"></a>
- [5.3](#phasznalat) **A program használata**:

# };
