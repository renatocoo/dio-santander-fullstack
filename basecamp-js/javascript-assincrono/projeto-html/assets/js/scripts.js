const BASE_URL = 'https://api.thecatapi.com/v1/images/search'
const catBtn = document.getElementById('change-cat')

const getCats = async () => {

    const data = await fetch(BASE_URL,{
     mode:'cors'
   })

    .then(res => res.json())
    .then(json=> json[0].url)
    .catch(error=> console.log(error))
    return data;
 };

 const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
 };

catBtn.addEventListener('click', loadImg);
loadImg()