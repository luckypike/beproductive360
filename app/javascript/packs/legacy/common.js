import $ from 'jquery'

$(function(){
  $(".app").on("click", ".party_show", function(){
    $(this).toggleClass('active');
    $(this).next().slideToggle('fast').css('display', 'flex')
  });
});
