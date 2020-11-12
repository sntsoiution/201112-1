var h;
$(window).resize(function () {
    h = $(window).height();
    //현재의 브라우저 높이를 구한다.
    $("section").height(h);
    //구한 높이값(h) 가져와서 컨텐츠영역(section)의 높이에 대입
});
//브라우저의 리사이즈 발생시 화면이 뒤틀리는 문제점해결
$(window).trigger('resize');
//맨처음 강제로 리사이즈를 해줘서 처음한번실행
$('section').each(function (i) {
    $(this).mousewheel(function (e) {
        console.log(i);
        if (i !== $('section').length - 1) {
            if (e.deltaY < 0) {
                $(this).removeClass('on').addClass('topped');
                $(this).next().removeClass('bottomed').addClass('on');
            }
        }
        ;
        if (i !== 0) {
            if (e.deltaY > 0) {
                $(this).removeClass('on').addClass('bottomed');
                $(this).prev().removeClass('topped').addClass('on');
            }
        }
    });
});
