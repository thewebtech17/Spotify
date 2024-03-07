async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let ah = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endswith(".mp3")){
            songs.push(element.href)
        }  
    } 
    return songs;
}
function main(){
    let songs = getsongs()
    console.log(songs)
}
main()