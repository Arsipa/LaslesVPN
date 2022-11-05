$partner = $(".partners__img");

$partner.hover(
    function () {
        $(this)[0].src = $(this).attr("src").replace(/(\.\w+)/, "-c$1");
        $(this).css("transform", "scale(1.05)");
    },
    function () {
        $(this)[0].src = $(this).attr("src").replace(/-c(\.\w+)/, "$1");
        $(this).css("transform", "scale(1)");
    },
);

$(document).ready(function () {
    let position = 0;
    let activeDot = 0;
    let activeItem = 1;
    const slidesToShow = 3;
    const slidesToScroll = 1;
    const container = $(".slider");
    const track = $(".slider__track");
    const item = $(".slider__item");
    const btnPrev = $(".slider__arrow-prev");
    const btnNext = $(".slider__arrow-next");
    const itemWidth = container.width() / slidesToShow;
    const slidesGap = 50;
    const sliderDots = $(".slider__dot");
    const movePosition = slidesToScroll * itemWidth + slidesGap * slidesToScroll;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });

    btnPrev.click(function () {
        position += movePosition;
        setPosition();
        checkBtns();
        $(item[activeItem]).removeClass("slider__item_active");
        $(item[activeItem-1]).addClass("slider__item_active");
        activeItem--;
        $(sliderDots[activeDot]).removeClass("slider__dot_active");
        $(sliderDots[activeDot-1]).addClass("slider__dot_active");
        activeDot--;
    });
    btnNext.click(function () {
        position -= movePosition;
        setPosition();
        checkBtns();
        $(item[activeItem]).removeClass("slider__item_active");
        $(item[activeItem+1]).addClass("slider__item_active");
        activeItem++;
        $(sliderDots[activeDot]).removeClass("slider__dot_active");
        $(sliderDots[activeDot+1]).addClass("slider__dot_active");
        activeDot++;
    });

    const setPosition = () => {
        track[0].style.transform = 'translateX(' + position + 'px)';
    };

    const checkBtns = () => {
        btnNext.prop("disabled", position <= -1000);
        btnPrev.prop("disabled", position === 0);
    };
    checkBtns();
});




