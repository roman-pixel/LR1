const recipes = document.querySelector('.recipes');

const renderRecipe = (data, id) => {
  const html = `
        <div class="card-panel recipe white row" data-id="${id}">
            <img src="/img/dish.png" alt="recipe thumb" />
            <div class="recipe-details">
                <div class="recipe-title">${data.title}</div>
                <div class="recipe-ingredients">${data.ingredients}</div>                              
            </div>
            <div class="recipe-price">
                <div class="recipe-price">${data.price} &#8381</div>
            </div>
            <div class="recipe-delete">
                <i class="material-icons" data-id="${id}">delete_outline</i>
            </div>
        </div>`;
  recipes.innerHTML += html;
};

document.addEventListener('DOMContentLoaded', function () {
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', () => {
    const message = input.nextSibling.nextElementSibling;
    message.style.display = input.value ? 'none' : 'block';
  });
});

const removeRecipe = (id) => {
  const recipe = document.querySelector(`.recipe[data-id=${id}]`);
  recipe.remove();
};

