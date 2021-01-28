var faveRecipe = {
    recipeTitle: 'Paella',
    servings: 2,
    ingredients: ['chicken', 'prawns', 'chorizo', 'peas', 'rice'], 
    directions: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
}

var ingredients = faveRecipe.ingredients;

    for (var index = 0; index < ingredients.length; index ++) {
        console.log( ingredients[index]);
    }