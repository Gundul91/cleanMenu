$("li").hover(function (){
  $(this).css("color",$(this).css("border-left-color"));
}, function (){
  $(this).css("color","black");
});
