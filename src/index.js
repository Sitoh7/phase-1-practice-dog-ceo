console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded",()=>{
  fetch(`https://dog.ceo/api/breeds/image/random/4`)
  .then(resp=>resp.json())
  .then(data=>{
   for(i=0;i<data.message.length;i++){
    let div = document.getElementById("dog-image-container")
   let img = document.createElement("img")
    img.src = data.message[i]
    div.appendChild(img)

   }
    
  })
  fetchBreed()
})

function fetchBreed(){
  fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(resp=>resp.json())
  .then(data=>{
    
    let breedList = document.getElementById("dog-breeds")
    const breeds = data.message
    for(const key in breeds){
      let li = document.createElement('li')
      let ul = document.getElementById("dog-breeds")
      li.textContent = key
      ul.appendChild(li)
      li.addEventListener("click",(e)=>{
        li.style.color = "blue"
      })

    }
     
  })
}
const filter = document.getElementById("breed-dropdown")
filter.addEventListener("change",(e)=>{
  e.preventDefault()
  let breedList = document.getElementById("dog-breeds")
  fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(resp=>resp.json())
  .then(data=>{
    breedList.innerHTML = ' '
    const breeds = data.message
    for(const key in breeds){
      let li = document.createElement('li')
      if(key.charAt(0) == filter.value){
        li.textContent = key
        breedList.appendChild(li)
      }
  }})


})