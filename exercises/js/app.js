$(function(){
    alert("Everything is ready, let's do this.!");
});

$(() => {
    $('#addHome').removeClass('btn-danger').addClass('btn-success')
    $('h1').addClass('text-center');
    
    
    var newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    newLink.appendTo('body');


var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
]

    $('#zillowLink').attr( "target", "_blank")    
 
    const addHome = ($event) => {
        for (let i = 0; i < 4; i++) 
        $(event.currentTarget).fadeIn(1500, () => {
            $($event.currentTarget).appendTo('tbody') 
        });
    }
    const removeHome = ($event) => {
        $($event.currentTarget).fadeOut(1500, () => {
            $($event.currentTarget).remove();   
        });
    }
    $('#homes tbody').on('click', 'tr', removeHome);
    $('#addHome').on('click', 'tr', addHome);
    
});

var cells = $('#homes thead tr').children();
cells.eq(0).css('color', 'blue');
cells.eq(4).css('color', 'green');
