let isFirstPage = true;
page('/', function() {
  page.redirect('/what-is-vegemite');
});

page('/:slug', function(context) {
  // This will match any value after the first / in the url. For example, if
  // the url was /foo, the value of slug would be "foo".
  let slug = context.params.slug;

  // Remove is-active class from previous menu item and section
  let oldMenuItem = document.querySelector('#menu .is-active');
  let oldPage = document.querySelector('main .is-active');
  oldMenuItem.classList.remove('is-active');
  oldPage.classList.remove('is-active');

  // Add is-active class to new menu item and section using the URL slug
  let newMenuItem = document.querySelector('#menu [data-page='+slug+']');
  let newPage = document.querySelector('main [data-page='+slug+']');
  newMenuItem.classList.add('is-active');
  newPage.classList.add('is-active');

  // first time on the page leave focus on menu
  if (isFirstPage){
    isFirstPage = false;
    return;
  }

  // after selection move focus on h2 with 'tabindex= "-1" '
  newPage.querySelector('h2').focus();
});

page({
  hashbang: true
});
