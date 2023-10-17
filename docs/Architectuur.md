# Architectuur

## Overzicht
![Overzichtplaat](https://raw.githubusercontent.com/OpenWebconcept/.github/main/docs/architectuur.svg "UML Diagram of Open Webconcept")

## Overwegingen over wordpress en 5 algen architectuur
We maken architectureel onderscheid tussen een framework/applicatie die functionaliteit levert een plugin hierbinnen en de kleinst mogenlijke samenhange functionaliteit/code (component). Dit lijnt ook uit met het princiepe dat je bij een laag 2 (api) component in de praktijk altijd een database (laag 1) meegeleverd krijgt in de installatie.

Hiermee volgen we feitenlijk dezelfde lijn als bijvoorbeeld open zaak, de applicatie bied een samenhangende functionaliteit die is onderverdeel is samenhangende blokken (ZTR, ZRC etc). Verschil ten op opzichte van wordpress is echter dat een wordpress plugin doorgaans laag vier 4(BL) en 5 (UI) levert. We zien binnen de plugin echter de voorkant code (NL Design react) en achterkant code (Wordpress PHP) als losse componenten binnen één plugin ofwel repository. Hiermee volgen we ook de "loosly coupled components" lijn van de software improvement group. 

## Laag 5
Hier treffen we zowel de NL Design React componenten zo als geleverd door de wordpres pluggins (o.a. mijn zaken, mijn berichten etc) maar ook de losse (headless) react frontends zo als Open WOO app 

## Laag 4
Hier treffen we enerzijds de Wordpress PHP bussen logic vanuit de wordpress plugins, maar ook De waarde papieren microservice en andere logica componenten zo als ZGW notificaties.

## Laag 3
Binnen 

## Architectuur per applicatie
De volgende applicaties en plugins beschicken over hun eigen architectuur uitwerking 