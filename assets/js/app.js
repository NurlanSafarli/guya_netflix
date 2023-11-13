
const comeData= document.getElementById("come_data")
fetch("https://api.tvmaze.com/shows")
.then(resp=>resp.json())
.then((data)=>{
    data.map(
        (el)=>{
            console.log(el);
            comeData.innerHTML += `
            <div class="col-lg-3 col=md-4 col-sm-6 g-4">
            <a href="${el.url}" target="_blank">
            <div class="cards">
                <div class="card_img">
                    <img src="${el.image.medium}" alt="">
                </div>
                <div class="imdb">
                    <span>${el.rating.average}</span>
                </div>
                <div class="card_name">
                    <h4>${el.name}</h4>
                </div>
            </div>
            </a>
        </div>
            `
        }
    )
})
