# Beheer 
Ten behoeve van het beheer van de code is het noodzakelijk om afspraken te maken, zodat iedereen weet waar men aan toe is.

## Gedachte Open Webconcept
Binnen het Open Webconcept hanteren we de volgende uitgangspunten:
* WordPress
* Open samenwerking
* Pragmatisch

Intentieverklaring op: [https://OpenWebconcept.nl/intentieverklaring/](https://OpenWebconcept.nl/intentieverklaring/)

## Open Webconcept Bouwblokken
Binnen het Open Webconcept delen we functionaliteiten door middel van bouwblokken, hiervoor gelden de volgende uitgangspunten:
* Te gebruiken in WordPress
* Commonground gedachte
* Delen met anderen
* Helpen met fouten
* Het is een Datadienst of een Toepassing

## Behoefte Bouwblokken
Voor deze bouwblokkken kunnen we dan ook bepaalde eisen ophalen:
* Wordpress: opensource
* Toegankelijk voor nieuwe partijen die willen participeren
* Pragmatische insteek, alleen formeel wanneer het nodig is
* Ook een reeële manier om weer te verlaten
* Garanties ten opzichte van elkaar
* Bouwblokken hebben altijd een [publiccode.yaml](https://yml.publiccode.tools/)
* Bouwblokken staan bij voorkeur op [github.com/openwebconcept](https://github.com/openwebconcept)
* Losse componenent:
    * Code deelbaar
    * Zelfde licentie
    * 2e lijns support op de code (bugs/changes)
    * Eén jaar aangeven dat support vervalt
    * 
    * Eén plek waar alle bouwblokken te vinden zijn
    * Signaal wanneer er een nieuwe versie is

## Invulling Bouwblokken
Per bouwblok:
* Te vinden op https://github.com/OpenWebconcept/
* Licentie is EUPL
* Eén repository met die bloknaam
* Wordpress notificatie wanneer er een update is
* Versie beheer conform [semver](https://semver.org/)
* Bij iedere nieuwe versie ook een github release
* Bij iedere nieuwe github release ook een packadge (zodat oudere versies later nog te downloanden en gebruiken zijn)
* Gemeente is beheerder bouwblok
* Leverancier plaats de code en maakt doet de aanpassingen (kan natuurlijk een gemeente zijn)
* Aanpassingen worden aangeleverd op basis van Pull Requests en bij voorkeur door een andere leverancier/gemeente goedgekeurd
* Dat de issues/changes worden opgepakt
* Installeerbaar via de WordPress plugin structuur (dus wordpress installer ondersteunen)
* Naast plugin structuur moet ook installatie via composer worden ondersteund
* Wordpress update checker moet zijn geintegreerd in wordpress plugins
* De blokken kunnen met elkaar draaien op dezelfde server maar mogen ook los geinstalleerd worden
* Een bouwblok is voorzien van corecte en passende linters
* Er is een workflow die bij PR's controleerd of branches voldoen aan linters en andere voorwaarden
* De algemene codestijl is de wordpress coding standaard
* Een repository mag hiervan afwijken maar moet dit dan documenteren
* De beheerder kan een leverancier zijn of gemeenten maar MOET zijn opgenomen in de publicode.yaml
* De eigenaar kan een gemeente zijn of leverancier maar MOET zijn opgenomen in de publicode.yaml
* De beheerder van een bouwblok is verantwoordenlijk voor de ondersteuning van andere partijen, ook als dit directe concurenten zijn
* Documentatie over bouwblokken moet zijn opgenomen bij de code (repository) van het bouwblok
* Een bouwblok moet standaar vertalings opties ondersteunen
* Een bouwblok mag geen afhankenlijkheden hebben op clossed source software, tenzij expliciet vermeld in de readme
* De readme moet een verwijzing naar issues inschieten formulier bevatten als communicatie kanaal
* Documentatie over de code en technische documentatie is in het engels
* Gebruiks documentatie is in het Nederlands
* De voorkant van een bouwblok is in ieder geval beschickbaar in het Nederlands

## Beheer organisatie

### Open Webconcept Foundation
* Beheert https://github.com/OpenWebconcept
* Beheert afspraken (https://github.com/OpenWebconcept/Afspraken/)
* Aanmaken repositories
* Rechten aan gemeenten geven op repository
* Rechten aan leveranciers geven op repository
* Voor iedere organisatie (gemeente of leverancier) word een github team aangemaakt

### Gemeente
* Rechten aan leverancier geven op repository
* Garant staan voor de repository

### Leverancier
* Plaatst de code in de betreffende  repository
* Zorgt dat de bugs worden opgelost
* Handelt de issues / changes af

## Architectuur

Alle bijdragen moeten voldoen aan de [architectuur principes](Architectuur.md) 