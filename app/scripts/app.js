'use strict';

(function() {
  var app = angular.module('store', ['components']);

  app.controller('MainController', function() {
    this.section = 1;

    this.selectSection = function(setSection) {
      this.section = setSection;
    };
    this.sectionSelected = function(checkSection) {
      return this.section === checkSection;
    };
  });

  app.controller('StoreController', function(){
    this.products = watches;
  });
  var watches =[
    {
  	  brand: 'Omega',
  	  modle: 'Speedmaster professional',
  	  price: 6000,
  	  description: 'A true classic, the first ever watch went to the space!',
  	  features: ['Chronograph', 'Tachymeter'],
      size: '42mm',
      movement: 'Omega 1861',
      powerReserve: '48 hours',
      material: 'steel',
      canPurchase: true,
  	  soldOut: false,
      indicator: true,
      status: 'NEW',
      images: [
        {
          full:'../images/Speedmaster.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: 'A must have watch for every watch lover out there.',
          author:'nathan@booth.com',
        },
        {
          stars: 4,
          body: 'Classic, but not an in-house movement.',
          author:'ian@dalsin.com',
        },
        {
          stars: 1,
          body: 'My Apple Watch is way much better.',
          author:'steve@jobs.com',
        },
      ],
    },
    {
      brand: 'Rolex',
  	  modle: 'Submariner',
  	  price: 8000,
  	  description: "The first Bond's watch, a classic explorer's watch.",
      features: ['Diver watch', 'date'],
      size: '40mm',
      movement: 'Rolex 3135',
      powerReserve: '48 hours',
      material: 'Yellow gold',	  
      canPurchase: true,
  	  soldOut: false,
      indicator: true,
      status: 'HOT',
      images: [
        {
          full:'../images/Rolex-Submariner.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: 'Every doctor in my hospital has one, so I have to get one too.',
          author:'surgeon@doctor.com',
        },
        {
          stars: 4,
          body: "Bond's watch!",
          author:'james.bond@fan.com',
        },
        {
          stars: 3,
          body: 'Too old fashion.',
          author:'young@kids.com',
        },
      ],      
    },
    {
      brand: 'Zenith',
  	  modle: 'El Primero Chronomaster Grande Date',
  	  price: 7600,
  	  description: 'The finest of the chronograph watches.',
      features: ['Chronograph', 'date', 'moon & sunphase indication'],
      size: '45 mm',
      movement: 'El Primero 4047',
      powerReserve: '90 hours',
      material: 'Rose gold', 	  
      canPurchase: true,
  	  soldOut: false,
      indicator: false,
      status: null,
      images: [
        {
          full:'../images/Zenith El Primero.jpg'
        }
      ],
      reviews: [
        {
          stars: 2,
          body: 'Nice watch, but overpriced.',
          author:'snob@lovewatches.com',
        },
        {
          stars: 5,
          body: 'Zenith is the best.',
          author:'morgan@captain.com',
        },
        {
          stars: 3,
          body: 'Why buy a Zenith when you can have a Rolex?',
          author:'oldman@oldmoney.com',
        },
      ],       
    },
    {
      brand: 'Jaeger-LeCoultre',
      modle: 'Master Tourbillon',
      price: 20300,
      description: 'Master work from Jaeger-LeCoulter, totally commited to accuracy and reliability.',
      features: ['tourbillon', 'date'],
      size: '42mm',
      movement: 'Jaeger-LeCoultre Calibre 978',
      powerReserve: '45 hours',
      material: 'Pink Gold',      
      canPurchase: true,
      soldOut: false,
      indicator: false,
      status: null,
      images: [
        {
          full:'../images/Jaeger-LeCoultre Tourbillon.jpg'
        }
      ],
      reviews: [
        {
          stars: 1,
          body: 'High way rubbery! Way too expensive.',
          author:'salaryman@middleclass.com',
        },
        {
          stars: 5,
          body: 'A watch that makes me stand out!',
          author:'harvey@specter.com',
        },
        {
          stars: 3,
          body: 'Good loving watch, but not my style. Are you guys planning bring in Hublot Big Bang?',
          author:'dan@bilzerian.com',
        },
      ],         
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };    
  });
}) ();