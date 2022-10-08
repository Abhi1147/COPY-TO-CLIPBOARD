function myfunc() {
    var copy=$("#elem")[0];
    navigator.clipboard.writeText(copy.value);
    $("p").css("visibility","visible");
    setTimeout(() => {
        $("p").css("visibility","hidden");
    }, 500);
}