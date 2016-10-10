<div align="center"><img src="icon_small.png"/></div>

# Alkalmazások fejlesztése beadandó (PhotoSpace){

*Nagy Gergely -- JJSR78*
[//]: # (https://help.github.com/articles/creating-and-highlighting-code-blocks/)
## Tartalomjegyzék

  1. [Az értékelés összetevői](#az-értékelés-összetevői)
  1. [Feladat vállalása](#feladat-vállalása)
  1. [Alkalmazás elkészítése szerveroldali technológiával](#alkalmazás-elkészítése-szerveroldali-technológiával)
  1. [A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével](#a-szerveroldali-alkalmazás-progresszív-fejlesztése-kliensoldali-javascript-segítségével)

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
<b>Könnyű áttekinthetőség: </b>Az alkalmazás a <a href="https://material.google.com/">Google Material Design</a> irányvonalait követi. Az anyagszerű megjelenésnek köszönhetően gyors és egyszerű használatot biztosít a felhasználóknak. Az implementáláshoz a <a href="http://materializecss.com/">Materialize</a> keretrendszert használtam.<br>

## Alkalmazás elkészítése szerveroldali technológiával

## A szerveroldali alkalmazás progresszív fejlesztése kliensoldali JavaScript segítségével

# };
