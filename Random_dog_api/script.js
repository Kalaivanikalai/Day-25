let title = document.createElement('em')
title.setAttribute('id','title')
title.innerHTML = 'Random pictures of dogs &#x1F436;'
title.classList.add('text-center')
document.body.appendChild(title)

let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

let create_div = document.createElement('div')
create_div.classList.add('show_results')
create_div.setAttribute('id','div')
document.getElementById('cont').appendChild(create_div)

let placeholder_box = document.createElement('div')
placeholder_box.setAttribute('id','placeholder')
placeholder_box.classList.add('imgs_part')
document.getElementById('div').appendChild(placeholder_box)

let imgs = document.createElement('img')
imgs.setAttribute('id','images')
imgs.src = 'https://random.dog/2664e66d-eb92-434f-aab0-2e8a267032bf.jpg'
document.getElementById('placeholder').appendChild(imgs)

let btn = document.createElement('button')
btn.setAttribute('id','dog_btn')
btn.setAttribute('class','btn btn-success btn-lg')
btn.innerHTML = "Click here.."
btn.addEventListener('click',getRandomDog)
document.body.appendChild(btn)


function getRandomDog(){
fetch(`https://random.dog/woof.json`)
.then((data)=>data.json())
.then((result)=>{
	placeholder_box.innerHTML = `<img class="imgsize" src="${result.url}"/>`
})
}