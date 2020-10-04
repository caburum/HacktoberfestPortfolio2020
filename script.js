$(function () {
  $("#shrekTrigger").mouseover(() => {
    $("#shrek").animate({
      opacity: 1,
    });
    $("#EasterEggs").animate({
      opacity: 1,
    });
  });

  $("#shrekTrigger").mouseout(() => {
    $("#shrek").animate({
      opacity: 0,
    });
    $("#EasterEggs").animate({
      opacity: 0,
    });
  });
});
