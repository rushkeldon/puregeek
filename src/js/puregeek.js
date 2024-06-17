console.log( 'js/puregeek.js loaded' );

window.onload = () => {
  setTimeout( () => {
    console.log( 'first timeout' );
    window.scrollTo(0, 30);
    setTimeout( () => {
      console.log( 'second timeout' );
      window.scrollTo(0, 1);
    }, 1 );
  }, 250);
}
