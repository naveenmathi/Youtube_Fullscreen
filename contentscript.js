
//alert("Extension successfully ran in page");

var videoElement = document.getElementsByTagName("video")[0];


$(document).on("mousedown", function(e) {
    if($(e.target).is("video") && e.button === 1) {
        document.getElementsByClassName("ytp-fullscreen-button ytp-button")[0].click();
        return false;
    }
});
