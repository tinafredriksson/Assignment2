// Hämtar alla måltider med bokstav a-z
async function fetchAllMeals() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const results = await Promise.all(
    letters.map(async (l) => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`);
      const data = await res.json();
      return data.meals || [];
    })
  );

  // Plattar ut alla arrays till en enda lista
  return results.flat().filter(m => m && m.idMeal);
}
// Skapar en funktion key för objektet
function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const k = item?.[key];
    if (!k) return acc;
    (acc[k] ||= []).push(item);
    return acc;
  }, {});
}
// funktion som sorterar upp till 20 ingredienser
function extractIngredients(meal) {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const v = meal[`strIngredient${i}`];
    if (v && String(v).trim()) ingredients.push(String(v).trim());
  }
  return ingredients;
}
// funktion formar varje måltid (id,name,kategori,ingrediens
function mapMealSummary(meal) {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    category: meal.strCategory ?? 'Unknown',
    ingredients: extractIngredients(meal),
  };
}

async function getMealSummaries() {
  const allMeals = await fetchAllMeals();
  return allMeals.map(mapMealSummary);
}

// Räknar antalet ingedienser
function buildIngredientFrequency(summaries, { normalize = true } = {}) {
  return summaries.reduce((acc, s) => {
    s.ingredients.forEach((ing) => {
      const key = normalize ? ing.toLowerCase() : ing;
      acc[key] = (acc[key] || 0) + 1;
    });
    return acc;
  }, {});
}

// Demo: kör alla stegen
async function run() {
  // Hämta original-meals (fulla objekt) och summaries (kompakta)
  const allMeals = await fetchAllMeals();
  const summaries = allMeals.map(mapMealSummary);

  // ---- 1) Group by a key ----
  const byCategory = groupBy(allMeals, 'strCategory'); // grupp på original (valfritt)
  const byArea = groupBy(allMeals, 'strArea');

  console.log('Antal per kategori:');
  for (const [cat, list] of Object.entries(byCategory)) {
    console.log(`${cat}: ${list.length}`);
  }

  console.log('\nAntal per area:');
  for (const [area, list] of Object.entries(byArea)) {
    console.log(`${area}: ${list.length}`);
  }

  // ---- 2) Select & reshape ----
  console.log('\nExempel på 5 sammanfattningar:');
  console.log(summaries.slice(0, 5));

  // ---- 3) Frequency map ----
  const ingredientFreq = buildIngredientFrequency(summaries, { normalize: true });
  console.log('\nIngrediensfrekvens (topp 10):');
  printTopN(ingredientFreq, 10, '(ingrediens: antal)');
}
run().catch(console.error);

// Beskrivning av kodflödet finns i readme


