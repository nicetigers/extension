$(function() {
      $('<iframe />',
      {
         id: 'frame1',
         class:'myframe',
         height: "100%",
         width: "100%",
         src: 'http://recal.io/chromeframe/',
         frameborder: "0",
         scrolling: "no"
  }).load(function(e){  
    $('#loading').remove();
  }).appendTo($('#frame_holder'));
});

