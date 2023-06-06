

$(document).ready(function() {
    //  modal 4

    
    // .js-modal-close класс для крестиков хакрыть в нутри окон
    $('.js-modal-close').click(function(event) {
        event.preventDefault();
        closePopup();

    });

    // .js-open-modal класс для всех кнопок "ПОЛУЧИТЬ ПОМОЩЬ"
    $('.modal-open').click(function(event) {
        event.preventDefault();
        openForm();
    });

    function closePopup() {
        $('.modal').css("display", "none");
        $("body").css("overflow", "inherit");


    }

    function openForm() {
        $('.modal').css("display", "flex");

    }

    function closeModalGlobal() {
        $('.modal').css("display", "none");

    }

    $('.modal__close').click(function(event) {
        event.preventDefault();
        closeModalGlobal();
    });

   


    // modal 5

 
    function closeThanks() {
        $('.modal-thanks').css("display", "none");

    }

    $('.modal-thanks__close').click(function(event) {
        event.preventDefault();
        closeThanks();
    });






    // открытие модального окна после нажатия готовая продукция 


    $(".open-block").on('click', function() {
        $(".header__block").toggleClass("header__block--open");
        
        
    });


    $(".header__block-mob-c-close").on('click', function() {
        $(".header__block").removeClass("header__block--open");
        
        
    });




    // select catalog


    $('.catalog__select').on('click', '.catalog__select-head', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.catalog__select-head').removeClass('open');
            $('.catalog__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.catalog__select').on('click', '.catalog__select-item', function() {
        $('.catalog__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.catalog__select').length) {
            $('.catalog__select-head').removeClass('open');
            $('.catalog__select-list').fadeOut();
        }
    });



    // card select


    $('.card-main__select').on('click', '.card-main__select-head', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.card-main__select-head').removeClass('open');
            $('.card-main__select-list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.card-main__select').on('click', '.card-main__select-item', function() {
        $('.card-main__select-head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.card-main__select').length) {
            $('.card-main__select-head').removeClass('open');
            $('.card-main__select-list').fadeOut();
        }
    });




    // фильтр


    $('#slider').slider({
		range: true,
		min: 0,
		max: 397000,
		values: ['0', '397000'],
		slide: function(event, ui) {
			$('#min').val(ui.values[0]);
			$('#max').val(ui.values[1]);
		}
	});


    // фильтр выпадашка 

    $(".burger > input").on('click', function() {
        $(".header__nav").toggleClass("header__nav--open")
      
    });
    
    
    
    $(".catalog__open-filter").on('click', function() {
        $(".catalog__left").addClass("catalog__left--active");
        
        
    });
    
    
    $(".catalog__left-buttons-close").on('click', function() {
        $(".catalog__left--active").removeClass("catalog__left--active");
        
        
    });

    


    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
  
});




