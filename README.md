# select2-placeholder-transition
an extends to the popular jquery plugin - [select2](https://github.com/select2/select2) that animating the placeholder

# Usage

<!-- language: lang-js -->

    $(document).ready(function() {
      $(".select2-placeholder-transition").select2PlaceholderTransition({
        placeholder: 'Destination(s)'
        /*,... other options*/
      });
    });

**All the options will pass as is to the `select2` function, except `placeholder` which will be handle by this plugin**

# [Demo](demo.html)

<img src="https://media.giphy.com/media/f9RJ6KVcHDPhr9IUY8/200w_d.gif" />

This plugin wrote with love futher this question in Stackoverflow: [https://stackoverflow.com/q/49719506/863110](https://stackoverflow.com/q/49719506/863110)
