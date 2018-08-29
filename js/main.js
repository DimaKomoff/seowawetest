$(function() {
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    });
    var buttonMenu = document.getElementById('menuButton');
    var menu = document.getElementById('menuList');

    buttonMenu.onclick = function() {
        menu.classList.toggle('showMenu');
        this.classList.toggle('closeMenu');
    };
    $('#open').click(function() {
        $('.overlay').fadeIn(200, function() {
            $('#myForm').fadeIn(200);
        });
    });
    $('#close').click(function() {
        $('#myForm').fadeOut(200, function() {
            $('.overlay').fadeOut(200);
        });
    });
    $(document).click(function(event) {
        if ($(event.target).closest('#myForm').length || $(event.target).closest('#open').length) return;
        else {
            $('#myForm').fadeOut(200, function() {
                $('.overlay').fadeOut(200);
            });
        }
    });
    var form = document.getElementById('myForm');
    $('#myForm').submit(function() {
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].name == '') continue;
            else alert(form.elements[i].value);
        }
    });
});
