# Beheer

Ten behoeve van het beheer van de code is het noodzakelijk om afspraken te maken, zodat iedereen weet waar men aan toe is.

## Gedachte Open Webconcept

Binnen het Open Webconcept hanteren we de volgende uitgangspunten:

* WordPress
* Open architectuur:
* Vrije marktwerking
* Open samenwerking
* Pragmatisch

Intentieverklaring op: https://openwebconcept.nl/intentieverklaring/

## Open Webconcept bouwblokken

Binnen het Open Webconcept delen we functionaliteiten door middel van bouwblokken. Hiervoor gelden de volgende uitgangspunten:

* Te gebruiken in WordPress
* [Common Ground](https://commonground.nl/) gedachte
* Delen met anderen
* Helpen met fouten
* Het is een Datadienst of een Toepassing

## Behoefte bouwblokken

Voor deze bouwblokkken kunnen we dan ook bepaalde eisen ophalen:

* WordPress: Open Source
* Toegankelijk voor nieuwe nieuwe partijen die willen participeren
* Pragmatische insteek, alleen formeel wanneer het nodig is
* Ook een reeële manier om weer te verlaten
* Garanties ten opzichte van elkaar
* Bouwblokken hebben altijd een [publiccode.yaml](https://yml.publiccode.tools/)
* Bouwblokken staan bij voorkeur op [github.com/openwebconcept](https://github.com/openwebconcept)
* Losse componenten:
  * Code deelbaar
  * Zelfde licentie
  * 2e-lijns support op de code (bugs/changes)
  * Eén jaar aangeven dat support vervalt
  * Eén plek waar alle bouwblokken te vinden zijn
  * Signaal wanneer er een nieuwe versie is

## Invulling bouwblokken

Per bouwblok:

* Is deze te vinden op https://github.com/OpenWebconcept/
* De licentie is EUPL
* Er is één repository met die bloknaam
* De gemeente is de beheerder van het bouwblok
* De leverancier plaatst de code en maakt de aanpassingen. Een gemeente kan ook een leverancier zijn.
* De beheerder kan een leverancier zijn of gemeenten maar MOET zijn opgenomen in de publicode.yaml
* De eigenaar kan een gemeente zijn of leverancier maar MOET zijn opgenomen in de publicode.yaml
* Issues en changes worden actief opgepakt
* De beheerder van een bouwblok is verantwoordelijk voor de ondersteuning van andere partijen, ook als dit directe concurrenten zijn
* Aanpassingen worden aangeleverd op basis van Pull Requests en bij voorkeur door een andere leverancier of gemeente goedgekeurd
* Een bouwblok mag geen afhankelijkheden hebben op closed source software, tenzij expliciet vermeld in de readme

### Techniek

* Versiebeheer conform [semver](https://semver.org/)
* Bij iedere nieuwe versie wordt er ook een GitHub release aangemaakt
* Bij iedere nieuwe GitHub release wordt ook een package aangemaakt (zodat oudere versies later nog te downloaden en gebruiken zijn)
* Het is installeerbaar via de WordPress plugin structuur (dus [WordPress update checker](https://github.com/YahnisElsts/plugin-update-checker) implementeren)
* Naast plugin structuur moet ook installatie via [Composer](https://getcomposer.org/) worden ondersteund
* Een bouwblok moet standaard [vertalingsopties](https://codex.wordpress.org/I18n_for_WordPress_Developers) ondersteunen
* De blokken kunnen met elkaar draaien op dezelfde server, maar mogen ook los geïnstalleerd worden
* Een bouwblok is voorzien van correcte en passende linters
* Er is een workflow die bij PR's controleert of branches voldoen aan linters en andere voorwaarden
* De algemene codestijl is de [WordPress coding standaard](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/). Een repository mag hiervan afwijken, maar moet dit dan documenteren
* Een plugin zou alle tests van de [Plugin Check](https://wordpress.org/plugins/plugin-check/) moeten doorstaan

### Documentatie

* Documentatie over bouwblokken moet zijn opgenomen bij de code (repository) van het bouwblok
* De readme moet aangeven waar je terecht kunt met issues / vragen
* Documentatie over de code en technische documentatie is in het Engels
* Gebruiksdocumentatie is in het Nederlands
* De voorkant van een bouwblok is in ieder geval beschikbaar in het Nederlands

## NL Design

* We kiezen voor aansluiting op WordPress standaarden (Gutenberg blokken) boven NL Design (React)
* We volgen Storybook #TODO link toevoegen
* We houden een lijst bij welke NL Design variant we gebruiken per component
* Daar waar we extra componenten ontwikkelen geven we die terug aan NL Design
* We voegen extra tokens altijd toe aan de Open Webconcept token set voor test doeleinden

## Beheer organisatie

### Open Webconcept Foundation

* Beheert https://github.com/OpenWebconcept
* Beheert afspraken (https://github.com/OpenWebconcept/Afspraken/)
* Aanmaken repositories
* Rechten aan gemeenten geven op repository
* Rechten aan leveranciers geven op repository
* Voor iedere organisatie (gemeente of leverancier) wordt een GitHub team aangemaakt

### Gemeente

* Rechten aan leverancier geven op repository
* Garant staan voor de repository

### Leverancier

* Plaatst de code in de betreffende repository
* Zorgt dat de bugs worden opgelost
* Handelt de issues / changes af
