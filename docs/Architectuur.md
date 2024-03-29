# Architectuur

## Overzicht

![Overzichtplaat](https://raw.githubusercontent.com/OpenWebconcept/.github/main/docs/architectuur.svg "UML Diagram of Open Webconcept")

## Overwegingen over WordPress en 5 lagen architectuur

We maken architecturaal onderscheid tussen een framework/applicatie die functionaliteit levert een plugin hierbinnen en de kleinst mogelijke samenhang functionaliteit/code (component). Dit lijnt ook uit met het principe dat je bij een laag 2 (API) component in de praktijk altijd een database (laag 1) meegeleverd krijgt in de installatie.

Hiermee volgen we feitelijk dezelfde lijn als bijvoorbeeld Open Zaak, de applicatie bied een samenhangende functionaliteit die is onderverdeelt is samenhangende blokken (ZTR, ZRC etc.). Verschil ten op opzichte van WordPress is echter dat een WordPress plugin doorgaans laag vier 4(BL) en 5 (UI) levert. We zien binnen de plugin echter de voorkant code (NL Design React) en achterkant code (WordPress PHP) als losse componenten binnen één plugin ofwel repository. Hiermee volgen we ook de "loosely coupled components" lijn van de software improvement group.

## Laag 5

Hier treffen we zowel de NL Design React componenten zo als geleverd door de wordpres pluggins (o.a. mijn zaken, mijn berichten etc.) maar ook de losse (headless) react frontends zo als Open WOO app.

### NL Design

* We kiezen voor aansluiting op WordPress standaarden (Gutenberg blokken) boven NL Design (React)
* We volgen [Storybook]() [TODO] link toevoegen en OWC Storybook maken
* We houden een lijst bij welke NL Design variant we gebruiken per component
* Daar waar we extra componenten ontwikkelen geven we die terug aan NL Design
* We voegen extra tokens altijd toe aan de Open Webconcept token set voor testdoeleinden

## Laag 4

Hier treffen we enerzijds de WordPress PHP business logic vanuit de WordPress plugins, maar ook de waardepapieren microservice en andere logica componenten zo als ZGW notificaties.

## Laag 3

Binnen ?

## Architectuur per applicatie

De volgende applicaties en plugins beschikken over hun eigen architectuur uitwerking.
