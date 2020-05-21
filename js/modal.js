$(document).mouseleave(function(e) {
    if (e.clientY < 10) {
        $(".modal").fadeIn("fast");
    }
});
$(document).click(function(e) {
    if (($(".modal").is(':visible')) && (!$(e.target).closest(".modal modal_modaltext").length)) {
        $(".modal").remove();
    }
});