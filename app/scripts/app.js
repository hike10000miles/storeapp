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
      indicator: true,
      status: "NEW",
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
      indicator: true,
      status: "HOT",
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
      indicator: false,
      status: null,
      images: [
        {
          full:'../images/Zenith El Primero.jpg'
        }
      ]      
    },
    {
      brand: 'Jaeger-LeCoulter',
      modle: 'Master Tourbillon',
      price: 20300,
      description: "Master work from Jaeger-LeCoulter, totally commited to accuracy and reliability.",
      canPurchase: true,
      soldOut: false,
      indicator: false,
      status: null,
      images: [
        {
          full:'../images/Jaeger-LeCoultre Tourbillon.jpg'
        }
      ]        
    }
  ];
  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

}) ();