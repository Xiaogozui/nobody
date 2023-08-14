document.write('<script src="jquery-3.7.0.js"</script>');

$(function () {
    let wrap = $('.s-pic-group');
    let curIndex = 0;

    $('#btnLeft').click = function(){
        curIndex--;
        wrap.css({
            left: -20 * curIndex + "%" - ".2em",
        })
        if(curIndex === 0){
            $('#btnLeft').attr('disabled',true);
        }
        $('#btnRight').attr('disabled',false);
    }
    
    $('#btnRight').click = function(){
        curIndex++;
        wrap.css({
            left: -20 * curIndex + "%" - ".2em",
        })
        if(curIndex === 5){
            $('#btnRight').attr('disabled',true);
        }
        $('#btnLeft').attr('disabled',false);
    }
})


// function $id(id){  //$id("btnLeft")
//     return document.getElementById(id);  //document.getElementById("btnLeft")
// }

// // ---------------------------------------------------------------------------------

// window.addEventListener("load", function(){

//     let wrap = document.querySelector(".s-pic-group");
//     let curIndex = 0;
//     //-----------------------------------------btnLeft.onclick
//     $id("btnLeft").onclick = function(){
//         curIndex--;
//         wrap.style.left = -20 * curIndex + "%" - ".2em";
//         if(curIndex === 0){
//             $id("btnLeft").disabled = true;
//         }
//         $id("btnRight").disabled = false;
//     }
//     //-----------------------------------------btnRight.onclick
//     $id("btnRight").onclick = function(){
//         curIndex++;
//         wrap.style.left = -20 * curIndex + "%" - ".2em";
//         if(curIndex === 5){
//             $id("btnRight").disabled = true;
//         }
//         $id("btnLeft").disabled = false;
//     }
// })