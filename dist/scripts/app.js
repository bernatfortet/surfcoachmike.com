(function() {
  this.App = (function() {
    function App() {
      App.__super__.constructor.apply(this, arguments);
      console.log('Hello World');
    }

    return App;

  })();

}).call(this);
