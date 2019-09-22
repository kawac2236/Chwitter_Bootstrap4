$(function(){
    // ログインを押したとき
    $('.login').click(function(){
        $('.login-modal-wrapper').show();
    });
    // アカウント作成を押したとき
    $('.signup').click(function(){
        $('.signup-modal-wrapper').show();
    });
    // モーダルの閉じるを押したとき
    $('.close-modal').click(function(){
        $('.login-modal-wrapper').hide();
        $('.signup-modal-wrapper').hide();
    })

    // アコーディオン開閉
    $('.faq-list-item').click(function(){
        var $answer = $(this).find('.answer');
//        console.log('push number :' + questionIndex);
        console.log($answer);
        if ($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.slideUp("slow");
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown("slow");
            $(this).find('span').text('-');
            console.log($answer);
        }
    })
})