/*
    ########################################
    @ Dibuat oleh Muhammad Randika Rosyid
    @ Kelas XI RPL
    @ SilentX.
    ########################################
*/

$( function() {
    $(".loader").delay(900).slideUp(850)

    $(window).scroll( function() {
        if( $(this).scrollTop() >= 1019 ) {
            $(".scroll-to-top").fadeIn("slow")
        } else {
            $(".scroll-to-top").fadeOut("slow")   
        }
    })
})