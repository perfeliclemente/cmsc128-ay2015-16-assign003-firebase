var myDataRef = new Firebase('https://recipe-chef-asia.firebaseio.com');
      
$('#addButton').on('click', function(){
  var recipe_name = $('#recipeName').val();
  var recipe_class = $('#recipeClass').val();
  var recipe_desc = $('#recipeText').val();
  


  myDataRef.push({name: recipe_name, r_class: recipe_class, desc: recipe_desc});
    $('#recipeName').val('');
    $('#recipeClass').val('');
    $('#recipeText').val('');

});

myDataRef.on('child_added', function(snapshot) {
  var recipe = snapshot.val();
   displayRecipe(recipe.name, recipe.r_class, recipe.desc);
});

function displayRecipe(name, r_class, desc) {
  var html = '';
  
  html += '<li>';
    html += '<div class="collapsible-header active"><i class="material-icons">view_list</i><b> Recipe Name: </b>'+name+'</div>';
    html +=  '<div class="collapsible-body"><p> <b>Classification: </b>'+ r_class +'</p><p> <b>Description: </b>'+ desc +'</p></div>';
    html += '</li>';

  $('#dRecipe').append(html);
  };
