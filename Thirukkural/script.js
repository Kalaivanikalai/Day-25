
let title = document.createElement("h1")
title.setAttribute('class', 'settitle')
title.innerHTML = '1330 Thirukkural poems and explanation in Tamil and English'
title.classList.add('text-center', 'mt-2')
document.body.appendChild(title)

let container_div = document.createElement("div")
container_div.setAttribute('class', 'container')
container_div.setAttribute('id', 'container')
document.body.appendChild(container_div)

let row_div = document.createElement("div")
row_div.setAttribute('class', 'row')
row_div.setAttribute('id', 'row_div')
document.getElementById('container').appendChild(row_div)

let cols_div = document.createElement("div")
cols_div.setAttribute('class', 'col-lg-4')
cols_div.setAttribute('id', 'cols')
document.getElementById('row_div').appendChild(cols_div)

let cols2_div = document.createElement("div")
cols2_div.setAttribute('class', 'col-lg-4')
cols2_div.setAttribute('id', 'colsinput')
document.getElementById('row_div').appendChild(cols2_div)

let cols3_div = document.createElement("div")
cols3_div.setAttribute('class', 'col-lg-4')
cols3_div.setAttribute('id', 'cols')
document.getElementById('row_div').appendChild(cols3_div)

let input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "input");
input1.setAttribute("placeholder", "Search Thirukkular Explanation here..");
input1.setAttribute("class", "form-control", "mt-5");
document.getElementById('colsinput').appendChild(input1)

let btn = document.createElement("button");
btn.setAttribute("type", "submit");
btn.setAttribute("class", "btn btn-primary")
btn.innerText = "Search";
btn.setAttribute("onclick", "thirukkural(input1.value)");
document.getElementById('colsinput').appendChild(btn)

let contdiv = document.createElement("div");
contdiv.setAttribute("class", "container");
contdiv.setAttribute("id", "containercont");
document.body.appendChild(contdiv);

let content_div = document.createElement("div");
content_div.setAttribute("class", "content");
content_div.setAttribute("id", "content");
document.getElementById('containercont').appendChild(content_div)
// ---------------------------------------------------//
let number = document.createElement("p")
number.setAttribute("class", "para")
number.innerText = ""
document.getElementById('content').appendChild(number)

let sect_tam = document.createElement("p")
sect_tam.setAttribute("class", "para")
sect_tam.innerText = ""
document.getElementById('content').appendChild(sect_tam)

let chapgrp_tam = document.createElement("p")
chapgrp_tam.setAttribute("class", "para")
chapgrp_tam.innerText = ""
document.getElementById('content').appendChild(chapgrp_tam)

let chap_tam = document.createElement("p")
chap_tam.setAttribute("class", "para")
chap_tam.innerText = ""
document.getElementById('content').appendChild(chap_tam)

let line1 = document.createElement("p")
line1.setAttribute("class", "para")
line1.innerText = ""
document.getElementById('content').appendChild(line1)

let line2 = document.createElement("p")
line2.setAttribute("class", "para")
line2.innerText = ""
document.getElementById('content').appendChild(line2)

let tam_exp = document.createElement("p")
tam_exp.setAttribute("class", "para")
tam_exp.innerText = ""
document.getElementById('content').appendChild(tam_exp)


let sect_eng = document.createElement("p")
sect_eng.setAttribute("class", "para")
sect_eng.innerText = ""
document.getElementById('content').appendChild(sect_eng)

let chapgrp_eng = document.createElement("p")
chapgrp_eng.setAttribute("class", "para")
chapgrp_eng.innerText = ""
document.getElementById('content').appendChild(chapgrp_eng)

let chap_eng = document.createElement("p")
chap_eng.setAttribute("class", "para")
chap_eng.innerText = ""
document.getElementById('content').appendChild(chap_eng)

let eng = document.createElement("p")
eng.setAttribute("class", "para")
eng.innerText = ""
document.getElementById('content').appendChild(eng)

let eng_exp = document.createElement("p")
eng_exp.setAttribute("class", "para")
eng_exp.innerText = ""
document.getElementById('content').appendChild(eng_exp)

function thirukkural(getdata) {

    if (getdata > 0 && getdata < 1331) {
        let datas = parseInt(getdata)

        fetch(`https://api-thirukkural.vercel.app/api?num=${datas}`)
            .then((data) => data.json())
            .then((result) => {
                number.innerHTML = `<span id="conts"> Kural No :</span> <span class="answer">${result.number}</span> <br>`
                content_div.appendChild(number)

                line1.innerHTML = `<span id="conts"> Kural line 1 :</span> <span class="answer">${result.line1}</span> `
                content_div.appendChild(line1)

                line2.innerHTML = `<span id="conts"> Kural line 2 :</span> <span class="answer">${result.line2}</span> <br>`
                content_div.appendChild(line2)

                sect_tam.innerHTML = `<span id="conts">Section Tamil:</span> <span class="answer">${result.sect_tam}</span> <br>`
                content_div.appendChild(sect_tam)

                chapgrp_tam.innerHTML = `<span id="conts">Chapter Group Tamil:</span> <span class="answer">${result.chapgrp_tam}</span> <br>`
                content_div.appendChild(chapgrp_tam)

                chap_tam.innerHTML = `<span id="conts">Chapter Tamil:</span> <span class="answer">${result.chap_tam}</span> <br>`
                content_div.appendChild(chap_tam)

                tam_exp.innerHTML = `<span id="conts">Tamil Explanation :</span> <span class="answer">${result.tam_exp}</span> <br>`
                content_div.appendChild(tam_exp)

                sect_eng.innerHTML = `<span id="conts">Section English :</span> <span class="answer">${result.sect_eng}</span> <br>`
                content_div.appendChild(sect_eng)

                chapgrp_eng.innerHTML = `<span id="conts">Chapter Group English :</span> <span class="answer">${result.chapgrp_eng}</span> <br>`
                content_div.appendChild(chapgrp_eng)

                chap_eng.innerHTML = `<span id="conts">Chapter English :</span> <span class="answer">${result.chap_eng}</span> <br>`
                content_div.appendChild(chap_eng)

                eng.innerHTML = `<span id="conts">English :</span> <span class="answer">${result.eng}</span> <br>`
                content_div.appendChild(eng)

                eng_exp.innerHTML = `<span id="conts">English Explanation :</span> <span class="answer">${result.eng_exp}</span> <br>`
                content_div.appendChild(eng_exp)

            })
    }
    else alert("Enter number between 1 to 1330")

}
