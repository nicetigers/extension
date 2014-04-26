/*
$($('#iframe')[0].contentDocument).on('ready', function(ev){
    $('#loading').remove();
   });
*/
 
 /* $("#iframe").on('onload', function (ev) {
   //alert('iFrame loaded!');
   $('#loading').remove();
}); */

$(function() {
      $('<iframe />',{ id: 'frame1',
                 class:'myframe',
                 height: "100%",
                 width: "100%",
                 src: 'http://newice.herokuapp.com',
                 frameborder: "0"
  }).load(function(e){  
    $('#loading').remove();
  }).appendTo($('#container_body'));
});

