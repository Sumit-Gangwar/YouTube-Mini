console.log("YouTube MIni");
let search = document.querySelector(".search-btn");
// search.addEventListener("click", Search);
let container = document.querySelector("#container");
let player = document.querySelector("#player");
const key = "AIzaSyCyIbXaBvL_D_wsgH4NoSTJaZ9cZNTnuz8";

function Search() {
  let query = document.querySelector(".search").value;
  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=${key}`;

  fetchData(url);
}

function fetchData(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      showData(res.items);
      console.log(res)
    });
}

let showData = (data) => {
    player.innerHTML=null;
  data.forEach(({ id: { videoId }, snippet: { title,thumbnails } }) => {
      let box=document.createElement("div");
      let video=document.createElement("video");
    let img = document.createElement("img");
    img.src=thumbnails.default.url;
    box.setAttribute("class","box");
    
    let heading = document.createElement("p");
    heading.innerText = title;
    box.append(img,heading);
    container.append(box);
    box.addEventListener("click",()=>{
      playVideo(title,videoId);
    })
  });
};

function playVideo(title,videoId){
  container.innerHTML=null;
  let playBox=document.createElement("div");
  playBox.setAttribute("class","playBox");
  let heading=document.createElement("h4");
  let iframe=document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  heading.innerText=title;
  iframe.allow="fullscreen";
  playBox.append(iframe,heading);
  player.append(playBox);
}

Search();
/*<iframe width="560" height="315" src="https://www.youtube.com/embed/6KXqdIA9hWs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */

