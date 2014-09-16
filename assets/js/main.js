$(document).ready(function(){
    var classes = ['jerry','george','elaine','cosmo'];
    var randomnumber = Math.floor(Math.random()*classes.length);

    $('body').addClass(classes[randomnumber]);
});
