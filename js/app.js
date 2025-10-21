
//Print the first 5 names of the meals in alphabetical order
/*

// Skapa en lista med bokstäver (a–ö)
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','å','ä','ö'];

async function getMeals() {
  let allMeals = [];

  // Hämta måltider för varje bokstav
  for (let letter of letters) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await res.json();

    //Lägg till måltider i listan
    if (data.meals) {
      allMeals = allMeals.concat(data.meals);
    }
  }
  // Ta bort null/undefined-objekt/ misstänkt å,ä,ö
  allMeals = allMeals.filter(meal => meal && meal.strMeal);

  //  Sortera med list metod
  const sortedMeals = allMeals.sort((a, b) =>
    a.strMeal.localeCompare(b.strMeal)
  );

  // Ta de 5 första
  const firstFive = sortedMeals.slice(0, 5);

  //  console logga namnen
  firstFive.forEach(meal => console.log(meal.strMeal));
}
// Kör funktionen
getMeals();
*/



