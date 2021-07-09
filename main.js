jQuery(document).ready(function(){

  // Color Picker
  function randomColor(){
    let red   = jQuery('.red').slider('value'),
        green = jQuery('.green').slider('value'),
        blue  = jQuery('.blue').slider('value');
        hex   = 'rgb(' + red + ',' + green + ',' + blue + ')';

        jQuery('.colorBox').text(hex);
        jQuery('.colorBox').css({'background-color' : hex});
  }

  jQuery('.bar').slider({
     max    : 255,
     change : randomColor,
     slide  : randomColor
  });

  jQuery('.red').slider( 'value', 200 );
  jQuery('.green').slider( 'value', 100 );
  jQuery('.blue').slider( 'value', 150 );


  // Range
  jQuery( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 10000,
      values: [ 1000, 8000 ],
      slide: function( event, ui ) {
        jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    jQuery( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

  // spinner
  let spinner = jQuery('#spinner').spinner();

  jQuery( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });

  jQuery( "#destroy" ).on( "click", function() {
    if ( spinner.spinner( "instance" ) ) {
      spinner.spinner( "destroy" );
    } else {
      spinner.spinner();
    }
  });

  jQuery( "#getvalue" ).on( "click", function() {
    alert( spinner.spinner( "value" ) );
  });

  jQuery( "#setvalue" ).on( "click", function() {
    spinner.spinner( "value", 5 );
  });

  jQuery( "button" ).button();

  // Map
  jQuery('#latitude').spinner({
    step: .001
  });
  jQuery('#longitude').spinner({
    step: .001,
  });

  jQuery('#latitude, #longitude').keyup(function(){
    let latValue = jQuery('#latitude').val();
    let longValue = jQuery('#longitude').val();

    jQuery('.map').attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14573.00007368793!2d'+longValue+'!3d'+latValue+'!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1621921364011!5m2!1sen!2sbd')
  });



});
