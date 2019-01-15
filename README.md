# Blok-web-code

README FED 15-1-19.

Deze website is een responsive verhalenpagina voor WOWair. Het is de bedoeling dat reizigers van WOWair tijdens de reis verhalen kunnen lezen
op een device naar keuze. Aangezien er geen wifi is in het vliegtuig, is het belangrijk dat de verhalen gedownload kunnen worden.

Dit is wat je kan doen en wat er op de website staat.

Je kan je aanmelden zodat je verhalen kan beoordelen en downloaden. (niet volledig)
Je kan het filter in en uitklappen als je op mobiel naar de website kijkt.
Je kan krijgt een foutmelding als je naar niets filtert.
Je kan een verhaal downloaden.
Je kan sterren geven aan een van de beste verhalen. Als je een verhaal sterren wilt geven die er niet tussen staat, kan dit op de verhalenpagina.
Je kan een verhaal openen. Ook het verhaal is responsive.
Je kan  tijdens het verhaal door een interactie een muziekje aan zetten om een sfeer te krijgen tijdens het lezen.
Je kan op de overzichtspagina over de verhalen in 'alle verhalen' hoveren zodat je een preview te zien krijgt van het verhaal.

DE CODE:

de verhalen zijn articles in sections die gestyled zijn met css grid. Er word gebruik gemaakt van verschillende stylesheets. Een hoofdstylesheet,
en nog 2 stylesheets die ervoor zorgen dat de website responsive is. De verhaal pagina en de login pagina hebben aparte stylesheets.
Er is geen gebruik gemaatk van classes of id's in de code. De enige uitzonderingen zijn de Material design icons. deze icons kunnen alleen maar
weergegeven worden door middel van een class op een i element. Ook zijn er classes gebruikt om te gebruiken in javascript bij het geven van sterren en het
inklappen van het filter menu. Ook zijn alle units flexibel  omdat er alleen em wordt gebruikt. de interacties hebben verschillende states,
zo heeft de filter interactie een error state en hebben alle buttons een hoverstate.

