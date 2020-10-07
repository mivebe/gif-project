import $ from "jquery"

const handleScroll = () => {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        console.log("you are at the bottom of the page");
    };
}

export { handleScroll }