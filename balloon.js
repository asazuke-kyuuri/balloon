'use strict';
//定数代入祭
const howManyInput=document.getElementById('howMany')
const breakingButton=document.getElementById('breaking');
const resultDivided=document.getElementById('result-area')

//割る個数の入力
breakingButton.onclick = function() {
    const howMany = howManyInput.value;
    if (howMany.length === 0){
        return;
    }
    console.log(howMany);
    const paragraph = document.createElement('p');
    const result = breaking(howMany);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
}

//風船を割る関数
function breaking (howMany){
    let result=`${howMany}個の風船を割るよ`;
    return result;
}