import $ from 'jquery'

$(function(){
  $(".app").on("click", ".party_show", function(){
    $(this).toggleClass('party_show_active');
    $(this).prev().slideToggle('fast').css('display', 'flex')
    if($(this).hasClass('party_show_active')) {
      $(this).text('Скрыть');
    }
    else {
      $(this).text('Показать всех участников');
    }
  });
});
