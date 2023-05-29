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

    // footer 

    function arrow1() {


        $('.arrow-down1').click(() => {
            $('.footer-col1').slideToggle()
            $('.arrow-down1').css("transition", "0.3s ease")


            if ($('.arrow-down1').css("transform") === "none") {

                $('.arrow-down1').css("transform", "rotateZ(-180deg)");
            } else {
                $('.arrow-down1').css("transform", "none");
            }


        })
    }

    function arrow2() {
        $('.footer-col2').hide()

        $('.arrow-down2').click(() => {
            $('.footer-col2').slideToggle()
            $('.arrow-down2').css("transition", "0.3s ease")

            if ($('.arrow-down2').css("transform") === "none") {

                $('.arrow-down2').css("transform", "rotateZ(-180deg)");


            } else {
                $('.arrow-down2').css("transform", "none");
            }


        })

    }

    arrow1()
    arrow2()

    function handleMediaQuery(event) {
        if (event.matches) {
            showSearch()
            $('.footer-col1').hide()
            $('.footer-col2').hide()
        } else {
            hideSearch()
            $('.footer-col1').show()
            $('.footer-col2').show()
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

});





















 // function hideArrow1() {
    //     $('.footer-col1').show()

    // }

    // function hideArrow2() {
    //     $('.footer-col2').show()
    // }