jQuery(document).ready(function(){

    $('#faceButton').click(function(){

        $('.Products').hide();
        $('#eyes1').hide();
        $('#lips1').hide();
        $('#skin1').hide();

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

    



})