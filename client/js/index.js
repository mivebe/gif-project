$(() => {
    $(".dark-button").hide();

    $("#change-dark").on("click", () => {
        $(".light-button").toggle();
        $(".dark-button").toggle();
        $("*").addClass("dark")
    });
    $("#change-light").on("click", () => {
        $("light-button").toggle();
        $(".dark-button").toggle();
        $("*").removeClass("dark");
    });
});