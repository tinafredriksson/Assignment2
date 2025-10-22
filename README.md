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


