function shoppingCartTotalPrice ( array  ) {

    var totalPrice = 0;

for ( let index = 0; index < array.length; index++ ) {

     totalPrice = totalPrice + array [  index  ].price * array[  index  ].quantity;

    

}
return totalPrice.toFixed(  2  );
}

console.log( " £ " shoppingCartTotalPrice ( shoppingCart) );

