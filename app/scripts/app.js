(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = watches;
  });
  var watches =[
    {
  	  brand: 'Omega',
  	  modle: 'Speedmaster',
  	  price: 6000,
  	  description: 'A true classic, the first ever watch went to the space!',
  	  canPurchase: false,
  	  soldOut: false,
    },
    {
      brand: 'Rolex',
  	  modle: 'Submariner',
  	  price: 8000,
  	  description: "The first Bond's watch, a classic explorer's watch.",
  	  canPurchase: false,
  	  soldOut: false,
    },
    {
      brand: 'Rolex',
  	  modle: 'Submariner',
  	  price: 8000,
  	  description: "The first Bond's watch, a classic explorer's watch.",
  	  canPurchase: false,
  	  soldOut: false,
    }
  ];

}) ();