(function($) {
  $.fn.select2PlaceholderTransition = function(options) {
    return this.each(function() {
      var $elem = $(this);
      var placeholder = options.placeholder;
      $elem.
        wrap('<div class="select2-wrapper" />').
        after('<label>' + placeholder + '</label>');
      delete options.placeholder;
      var s2 = $elem.select2(options).data('select2');

      var addSelectedClass = function(a) {
        var val = $elem.val();
        s2.$container.toggleClass('select2-container--with-selected', val != '' && !!val.length);
      }

      s2.listeners['*'].push(addSelectedClass);
      addSelectedClass();
    });
  }
})(jQuery);