(function() {
  var app = angular.module('store', []);
  app.controller('StoreController', function(){
    this.products = watches;
  });
  var watches =[
    {
  	  brand: 'Omega',
  	  modle: 'Speedmaster professional',
  	  price: 6000,
  	  description: 'A true classic, the first ever watch went to the space!',
  	  canPurchase: true,
  	  soldOut: false,
      images: [
        {
          full:'../images/Speedmaster.jpg'
        }
      ],
    },
    {
      brand: 'Rolex',
  	  modle: 'Submariner',
  	  price: 8000,
  	  description: "The first Bond's watch, a classic explorer's watch.",
  	  canPurchase: true,
  	  soldOut: false,
      images: [
        {
          full:'../images/Rolex-Submariner.jpg'
        }
      ]
    },
    {
      brand: 'Zenith',
  	  modle: 'El Primero',
  	  price: 7600,
  	  description: "The finest of the chronograph watches.",
  	  canPurchase: true,
  	  soldOut: false,
      images: [
        {
          full:'../images/Zenith El Primero.jpg'
        }
      ]      
    }
  ];

}) ();