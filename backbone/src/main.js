var Pizza = Backbone.Model.extend({
   defaults: {
     size: 'medium',
     crust: 'hand-tossed',
     toppings: {
       cheese: 'normal',
       sauce: 'tomato',
     }
   }
});