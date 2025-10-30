# Assignment2

API www.themealdb.com/api/json/v1/1/search.php?f=a hämtar maträtter som börjar på bokstaven a
eftersom vi vill kunna få en lista på maträtter från hela alfabetet gör vi en variabel som är konstant
const döper den till letters och sen skriver vi in samtliga bokstäver i alfabetet så den vet vilka som ska ingå.
I vår fetch som vi använder för att inhämta apin hämtar vi värdet från vår variabel (letters)
sen lägger vi till samtliga måltider i en lista och sorterar dessa enligt alfabetisk ordning a-ö
för att ta fram de 5 första i en lista använder vi sortedMeals.slice som vi använder i en Array vi anger
värdet 0 för att vi vill att listan ska börja från början och värdet 5 som ger oss upp till men inte inklusive värdet 5.
det räknas 0,1,2,3,4,.
sen console loggar vi med hjälp av meal (som hämtar ett objekt i listan) & (strMeal) som hämtar namnet på måltiden
Genom getMeals(); Så kör vi funktionen och får fram 5 måltider i alfabetisk ordning.

I nästa steg lägger vi till en filtrering för att kunna kategorisera måltiderna(recepten)
för att jämförelsen inte ska krocka om ett ord börjar med stor respektiver liten bokstav lägger vi till tolowercase
för att strängarna ska jämföra samma ord.
Vi filtrerar i en array med hjälp av if och else satsen. Om längden på listan =0 , att det inte finns några måltider som matchar
kategorin, (kommer consolen logga (Inga måltider hittades i kategorin:)
om ja kommer koden inne i if-blocket att köras men om nej- kommer den köra else satsen.
Sen kör vi funktionen med vald kategori (ex Dessert) då får vi en lista på alla desserter.
Här kan vi byta ut ordet Dessert till ex andra kategorier som breakfast, pasta,etc.

I sista steget ska vi hitta hur många maträtter som finns i respektive kategori. För detta gör vi en loop som
går igenom hela alfabetet och hämtar data från theMealDB, den hämtar ex f=a alla måltider på a sen f=b alla måltider på b osv..
Dessa lägg sedan till i listan Allmeals.
.reduce() används för att bygga upp ett nytt objekt (acc) steg för steg. För varje meal i listan: inhämtas kategorinamnet(dessert)
och för varje gång den hittas i kategorin lägg det till 1 till den kategorin den tillhör. Om en kategori inte finns - startar den på 0.
Till sist console.loggar vi ut texten och kör vår funktion countMealsByCategory.


Kodbeskrivning Stretch Goals (VG))

Steg 1 i koden skapar en array med bokstäverna a-z (promise.all) hämtar alla rätter
vars namn börja på varje bokstav.Resultatet konverteras till JSON som sedan returnerar en
array (data.meals). flat() gör den till en enda stor lista, sedan filtreras trasiga/null poster.
return result, returnerar alla måltider (array) av meal-objekt.

steg 2 grupperingsfunktion som hämtar (key) från kategorin ex dessert/chicken,
vilket sen resulterar i ett objekt.

steg3 TheMealDB lagrar sedan ingredienser (strIngredient)
TheMealDB lagrar ingredienser som strIngredient1..20.
Det körs i en loop 1→20 och plockar ut icke tomma värden. Anledningen att den loopas upp till
ingrediens 20 är för att API-strukturen i theMealDb kan varje recept ha upptill 20 ingredienser
därav  att den loopas upp till 20. Sedan returneras en array av ingrediensnamn för respektive måltid
med upptill max 20 ingredienser.

Steg 4 mapMealSummary, gör om “stora” meal-objekt till kompakta sammanfattningar,
GetMealSummarys() hämtar alla måltider och mappar igenom funktionen mapMealSummary.

Steg 5 buildIngredientFrequency är en funktion som räknar hur många gånger varje
ingrediens förekommer i alla måltider.normalize:true, räknar Onion” och “onion” som samma (gemener).
Sedan returneras ett objekt där varje ingrediens
Returnerar ett objekt som: "onion:45"

Sista steget kör funktionen genom att först hämta data fetchAllmeals, sedan skapar
sammanfattningar som id, namn, kategori och ingredienserna. Grupperar per kategori samt
antal per kategori loggas samt antal per ursprungsområde loggas.
5 sammanfattningar skrivs ut med id,namn,kategori samt upptill 20 ingredienser.
Ingrediensfrekvens loggas med top 10 i antal 1.a Butter 2.a garlic osv...








