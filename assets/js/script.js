$(document).ready(function(){

    $('#search').keyup( function() {
        let search_val = $(this).val();
        
        let data = {
            text: search_val,
            category: "200003482",
            priceRange: {
                from: 12.50,
                to: 30.00
            },
            attributes: [
                {
                    id: "16",
                    value: "256"
                }
            ],
            shipToCountry: "US",
            shipFromCountry: "CN",
            sort: "BEST_MATCH",
            skip: 20
        };
        //alert(data);
        let search_result = search(data);
        //alert(search_result);

    });

    let search = async (data) => {
        $.ajax({
            url: 'https://api.aliseeks.com/v1/search/realtime',
            type: 'post',
            data: data,
            headers: {
                'X-Api-Client-Id': storedJWT
            },
            dataType: 'json',
            success: function (data){
                alert(data);
            },
            error: function (data){
                alert(data);      
            }
        });
    }

    $('.product-detail-details nav ul li').click( () => {
        let $this = $(this);
        let elem = $this.data('for');
        alert($this.html());
        $this.parent().children().removeClass('active');
        $this.addClass('active');
        $('.content').children().hide();
        $('#' + elem).show();
    });

    $('.view-product-details').click(function() {
        $('.products, .product-cart-details').hide();
        $('.product-detail').show();
    });

    $('#cart').click(function() {
        $('.products, .product-detail').hide();
        $('.product-cart-details').show();
    });

    $('.home').click(function() {
        $('.product-cart-details, .product-detail').hide();
        $('.products').show();
    });
});