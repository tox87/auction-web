
var ah = (function() {

    $('#product-price-slider').slider().on('slide', function(ev){
        $('#product-price-min-input').val(ev.value[0])
        $('#product-price-max-input').val(ev.value[1])
    });

    $('#product-search-btn').click(function() {
        $('#search-results-container').show();
        $('#featured-products-container').hide();
    });

})();
