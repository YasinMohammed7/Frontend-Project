// media query search bar

$(document).ready(function () {
    let media = window.matchMedia('(max-width: 991px)')
    let loupe = $('.loupe')
    let xMark = $('.x-mark')
    let containerSearch = $('.containerSearch')

    function showSearch() {
        loupe.click(() => {
            loupe.toggle()
            xMark.toggle()
            containerSearch.slideToggle('fast')
        })

        xMark.click(() => {
            loupe.toggle()
            xMark.toggle()
            containerSearch.slideToggle('fast')
        })


    }

    function hideSearch() {
        loupe.unbind()
        xMark.unbind()
        containerSearch.hide()
        loupe.show()
        xMark.hide()

    }

    function handleMediaQuery(event) {
        if (event.matches) {
            showSearch()
        } else {
            hideSearch()
        }
    }

    handleMediaQuery(media)

    media.addEventListener('change', handleMediaQuery)

    // burger menu appearance

    $('#burger').click(() => {
        $('.burger-menu').animate({ width: 'toggle' })

    })

    $('.hide-burger').click(() => {
        $('.burger-menu').animate({ width: 'toggle' })
    })

    // footer 

    $('.arrow-down1').click(() => {
        if ($('.arrow-down1').css("transform") === "none") {

            $('.arrow-down1').css("transform", "rotateZ(-180deg)");
        } else {
            $('.arrow-down1').css("transform", "none");
        }

        $('.arrow-down1').css("transition", "0.5s")
        $('.footer-col1').slideToggle()
    })

    $('.arrow-down2').click(() => {
        if ($('.arrow-down2').css("transform") === "none") {

            $('.arrow-down2').css("transform", "rotateZ(-180deg)");
        } else {
            $('.arrow-down2').css("transform", "none");
        }

        $('.arrow-down2').css("transition", "0.5s")
        $('.footer-col2').slideToggle()
    })


});