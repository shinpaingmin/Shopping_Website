$(document).ready(function(){
    $bars = $('.fa-bars');
    $times = $('.fa-times');
    $sidebar = $('#sidebar-slider .col-md-2');
    
    $bars.click(function() {
        $times.show();
        $sidebar.hide();
        $bars.hide();
    });

    $times.click(function() {
        $times.hide();
        $sidebar.show();
        $bars.show();
    })
})