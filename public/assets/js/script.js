jQuery(function($){
    $('#three').payment('formatCardCVC');
    $('#two').payment('formatCardExpiry');
    $('#one').payment('formatCardNumber');

    $('.inputs input').focus(function(){
        $('.inputs .text').addClass('active');
        $('.numbers').show();
    });

    $(document).mouseup(function(e) 
    {
        var container = $(".numbers");
        var container2 = $(".inputs");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0) 
        {
            container.hide();
        }
    });

    $(".inputs input").focusout(function(e){
        if ($('.inputs #p1').val() == '' && $('.inputs #p2').val() == '' && $('.inputs #p3').val() == '' && $('.inputs #p4').val() == '') {
            $('.inputs .text').removeClass('active');
        };
    });

    $('.input').focus(function(){
        $(this).parent().find(".label-txt").addClass('label-active');
    });

    $('.input').each(function(){
        if($(this).val().length > 0) {
            $(this).parent().find(".label-txt").addClass('label-active');
        }
    });

    $(".input").focusout(function(){
        if ($(this).val() == '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
        };
    });
})