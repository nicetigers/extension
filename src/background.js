$(function() {
      $('<iframe />',
      {
         id: 'frame1',
         class:'myframe',
         height: "100%",
         width: "100%",
         src: 'http://recal.io/chromeframe/',
         frameborder: "0"
  }).load(function(e){  
    $('#loading').remove();
    $('#frame1').show();
  }).appendTo($('#container_body'));
});

