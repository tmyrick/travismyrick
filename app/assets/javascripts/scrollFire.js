var options = [
    {selector: '.scrollfire', offset: 10, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
  ];
  Materialize.scrollFire(options);