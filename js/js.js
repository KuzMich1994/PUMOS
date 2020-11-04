$(document).ready(function () {
    var hotelSlider = new Swiper(".hotel-slider", {
        direction: "horizontal",
        loop: true,
        navigation: { nextEl: ".hotel-slider__button_next", prevEl: ".hotel-slider__button_prev" },
        keyboard: { enabled: true, onlyInVievport: false, pageUpDown: true },
        effect: "cube",
    });
    var reviewsSlider = new Swiper(".reviews-slider", {
        direction: "horizontal",
        loop: true,
        navigation: { nextEl: ".reviews-slider__button_next", prevEl: ".reviews-slider__button_prev" },
        keyboard: { enabled: true, onlyInVievport: false, pageUpDown: true },
        autoHeight: true,
    });
    let menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function () {
        document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
        document.querySelector("body").classList.toggle("scroll-hidden");
    });
    function send(event, php) {
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : (event.returnValue = false);
        var req = new XMLHttpRequest();
        req.open("POST", php, true);
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                json = JSON.parse(this.response);
                console.log(json);
                if (json.result == "success") {
                    alert("Сообщение отправлено");
                } else {
                    alert("Ошибка. Сообщение не отправлено");
                }
            } else {
                alert("Ошибка сервера. Номер: " + req.status);
            }
        };
        req.onerror = function () {
            alert("Ошибка отправки запроса");
        };
        req.send(new FormData(event.target));
    }
    let modalButton = $('[data-toggle="modal"]');
    let closeModalButton = $(".modal__close");
    modalButton.on("click", openModal);
    closeModalButton.on("click", closeModal);
    $(document).on("keydown", function (event) {
        if (event.code == "Escape") {
            let modalOverlay = $(".modal__overlay");
            let modalDialog = $(".modal__dialog");
            modalOverlay.removeClass("modal__overlay_visible");
            modalDialog.removeClass("modal__dialog_visible");
            $("body").removeClass("scroll-hidden");
        }
    });
    function openModal() {
        let modalOverlay = $(".modal__overlay");
        let modalDialog = $(".modal__dialog");
        modalOverlay.addClass("modal__overlay_visible");
        modalDialog.addClass("modal__dialog_visible");
        $("body").addClass("scroll-hidden");
    }
    function closeModal(event) {
        event.preventDefault();
        let modalOverlay = $(".modal__overlay");
        let modalDialog = $(".modal__dialog");
        modalOverlay.removeClass("modal__overlay_visible");
        modalDialog.removeClass("modal__dialog_visible");
        $("body").removeClass("scroll-hidden");
    }
    $(".form").each(function () {
        $(this).validate({
            errorClass: "invalid",
            messages: {
                name: { required: "Please specify your name", minlength: "At least 2 characters" },
                email: { required: "We need your email address to contact you", email: "Your email address must be in the format of name@domain.com" },
                phone: { required: "We need your phone number", minlength: "8-999-999-99-99" },
            },
        });
    });
    $(".subscribe").validate({
        errorClass: "invalid__subscribe",
        rules: { email: { required: true } },
        messages: { email: { required: "We need your email address to contact you", email: "Your email address must be in the format of name@domain.com" } },
    });
    $(".modal__form").validate({
        errorClass: "invalid__modal",
        messages: {
            name: { required: "Please specify your name", minlength: "At least 2 characters" },
            email: { required: "We need your email address", email: "name@domain.com" },
            phone: { required: "We need your phone number", minlength: "8-999-999-99-99" },
        },
    });
    $(document).ready(function () {
        $(".phone").mask("0-(000)-000-00-00");
    });
    AOS.init();
    $(".map").click(function () {
        var map = $(this).attr("data-map");
        var map_width = $(window).width();
        var map_height = $(this).attr("data-map-height");
        $(this).css("height", map_height);
        if (map_width > 640) {
            map_width = 640;
        }
        $(this).html(
            '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.985308353734!2d27.138586467443883!3d38.42761666885461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8f7133f502d%3A0xa7fbb63df26fc9b0!2sDoubleTree%20by%20Hilton%20Hotel%20Izmir%20-%20Alsancak!5e0!3m2!1sru!2sru!4v1600795476286!5m2!1sru!2sru" width="100%" height="213" frameborder="0" style="border:0" allowfullscreen></iframe>'
        );
    });
});
