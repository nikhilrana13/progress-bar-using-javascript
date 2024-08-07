let inputgoal1 = document.getElementById("input1")
let inputgoal2 = document.getElementById("input2")
let inputgoal3 = document.getElementById("input3");
let checkgoalicon1 = document.getElementById("checkicon1")
let checkgoalicon2 = document.getElementById("checkicon2")
let checkgoalicon3 = document.getElementById("checkicon3")
let errorlabel = document.querySelector('.error-label')
let progressvalue = document.querySelector('.progress-value')



function showprogressbar1(){

    let inputvalue1 = inputgoal1.value;
    if(inputvalue1 === ''){
        errorlabel.style.display = 'block'
        checkgoalicon1.style.display = 'none'
        progressvalue.style.width = '0%'

    } else {
       progressvalue.style.width = '30%';
       errorlabel.style.display = 'none'
       checkgoalicon1.style.display = 'block' 
      

      
    } 
}

inputgoal1.addEventListener('input',showprogressbar1)


function showprogressbar2(){

    let inputvalue2 = inputgoal2.value;
    if(inputvalue2 === ''){
        errorlabel.style.display = 'block'
        checkgoalicon2.style.display = 'none'
         progressvalue.style.width = '30%'


    } else {
       progressvalue.style.width = '60%';
       errorlabel.style.display = 'none'
       checkgoalicon2.style.display = 'block' 
      

      
    } 
}

inputgoal2.addEventListener('input',showprogressbar2)



function showprogressbar3(){

    let inputvalue3 = inputgoal3.value;
    if(inputvalue3=== ''){
        errorlabel.style.display = 'block'
        checkgoalicon3.style.display = 'none'
         progressvalue.style.width ='60%'

    } else {
       progressvalue.style.width = '100%';
       errorlabel.style.display = 'none'
       checkgoalicon3.style.display = 'block' 
      

      
    } 
}

inputgoal3.addEventListener('input',showprogressbar3)