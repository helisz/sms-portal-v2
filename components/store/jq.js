

$('.tree-toggle').click(function () {
    $(this).parent().children('ul.tree').toggle(200);
});


$(function(){
    $('.tree-toggle').parent().children('ul.tree').last().toggle(200);
})

