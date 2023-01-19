$("#orderTotal").click(function () {
    calculatePrice();
});

function calculatePrice()
{
    //select data
    var adults = 800;
    var kids = 400;

    var quantityAdults = $("#quantityAdults").val();
    var quantityKids =  $("#quantityKids").val();


    //calculate final cost
    
    var total = (quantityAdults * adults) + (quantityKids * kids);

    console.log(total);
    //print value to orderTotal
    $("#orderTotal").val(total);
}