# Architectuur

## Overzicht
![Overzichtplaat](https://raw.githubusercontent.com/OpenWebconcept/.github/main/docs/architectuur.svg "UML Diagram of Open Webconcept")

## Overwegingen over wordpress en 5 algen architectuur
We maken architectureel onderscheid tussen een framework/applicatie die functionaliteit levert een plugin hierbinnen en de kleinst mogenlijke samenhange functionaliteit/code (component). 

Hiermee volgen we feitenlijk dezelfde lijn als bijvoorbeeld open zaak, de applicatie bied een samenhangende functionaliteit die is onderverdeel is samenhangende blokken (ZTR, ZRC etc). Verschil ten op opzichte van wordpress is echter dat een wordpress plugin doorgaans laag vier 4(BL) en 5 (UI) levert. We zien binnen de plugin echter de voorkant code (NL Design react) en achterkant code (Wordpress PHP) als losse componenten binnen één plugin ofwel repository. Hiermee volgen we ook de "loosly coupled components" lijn van de software improvement group. 

## Laag 5
Hier treffen we zowel de  

## Laag 4


## Architectuur per applicatie
De volgende applicaties en plugins beschicken over hun eigen architectuur uitwerking 