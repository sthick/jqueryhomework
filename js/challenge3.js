// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

//     // Advanced Answer
//     // if(document.querySelector('input[name="fruit"]:checked'))
//     //     return true;
    
//     // alert("You must pick a fruit!")
//     // return false;
//   }


$("#ch3form").submit(function(){ 
    var fruit = $('input[name="fruit"]')
    var standing = $('input[name="standing"]')
    var boxchecked = 0;
    for (let i = 0; i < fruit.length;i++){
        if (fruit[i].checked)
            boxchecked = boxchecked + 1;
            if (boxchecked == 2)   
                return true;
    for (let j = 0; j < standing.length;j++){
        if (standing[i].checked)
            boxchecked = boxchecked + 1;
            if (boxchecked == 2)   
                return true;
            }
    }
    alert("You must pick both a class standing and a fruit!")
    return false;
    

  });