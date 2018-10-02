function cur_page(path){
    if (!path) {
        var path = window.location.pathname
    }
    var hash = window.location.hash
    $('.menu a.nav-link').removeClass('active')
    $('.menu a.nav-link').each(function() {
        if ($(this).attr('href') === path+hash) {
            $(this).addClass('active')
            return false
        }
        else if ($(this).attr('href') == path) {
            $(this).addClass('active')
            return false
        }
    })
}

$(() => {
    cur_page()
})