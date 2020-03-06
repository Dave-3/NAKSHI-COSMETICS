
jQuery(document).ready(function(){

    $('#allButton').click(function(){
        console.log("detected")
        $(".Products").hide();
        $("#face1,#eyes1,#lips1,#skin1").show();
        $('h2').hide();
    })


    $('#faceButton').click(function(){

        $('.Products').hide();
        $('#eyes1').hide();
        $('#lips1').hide();
        $('#skin1').hide();

        $('h2').show();
        $('#face1').show();
    })

    $('#eyesButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#lips1').hide();
        $('#skin1').hide();

        $('#eyes1').show();

    })

    $('#lipsButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#eyes1').hide();
        $('#skin1').hide();

        $('#lips1').show();

    })

    $('#skinButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#eyes1').hide();
        $('#lips1').hide();

        $('#skin1').show();

    })

$('#checkout1').click(function showFace(){
    $("#face1,#eyes1,#lips1,#skin1,#checkout1,#ContactUs").hide();
    $("#checkout,#BuyerName,#BuyerEmail,#BuyerResidence").show();
})
      

}

/*
jQuery(document).ready(function(){

    $('#allButton').click(function(){
        console.log("detected")
        $(".Products").hide();
        $("#face1,#eyes1,#lips1,#skin1").show();
        $('h2').hide();
    })


    $('#faceButton').click(function(){

        $('.Products').hide();
        $('#eyes1').hide();
        $('#lips1').hide();
        $('#skin1').hide();

        $('h2').show();
        $('#face1').show();
    })

    $('#eyesButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#lips1').hide();
        $('#skin1').hide();

        $('#eyes1').show();

    })

    $('#lipsButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#eyes1').hide();
        $('#skin1').hide();

        $('#lips1').show();

    })

    $('#skinButton').click(function showFace(){
        
        $('.Products').hide();
        $('#face1').hide();
        $('#eyes1').hide();
        $('#lips1').hide();

        $('#skin1').show();

    })

$('#checkout1').click(function showFace(){
    $("#face1,#eyes1,#lips1,#skin1,#checkout1,#ContactUs").hide();
    $("#checkout,#BuyerName,#BuyerEmail,#BuyerResidence").show();
})
      




})
*/
