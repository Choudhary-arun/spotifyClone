// console.log("Welcome");
// initialize the variables
let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
console.log(audioElement);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from (document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementById("songItemPlay");
// audioElement.play();

let songs = [
    {songName:"Letivating",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Let me down",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Hips don't lie",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Love me like you do",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"On my way",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Despacito",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Let me love you",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"}
]


songItem.forEach((element,i)=>{
    console.log(element,i);
element.getElementsByTagName('img')[0].src = songs[i].coverPath;
element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})
// Handle play/pause seek
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
         masterSongName.innerText = songs[songIndex-1].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity="1";
        // songs.classList.style.hover="active";
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity="0";
    }
    
}) 

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    // update seekBar
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    console.log( element.target);
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
        })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
       
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity="1";
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})
 const makeAllPause = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    console.log( element.target);
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
        })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPause();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
       
        audioElement.currentTime != 0;
        audioElement.pause();
        gif.style.opacity="1";
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    
    songIndex+=1;
    songIndex%=8;
    songIndex+=(songIndex==0);
    
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex==1){
        songIndex=7; 
    }
    else{
        songIndex-=1;
    }
    console.log(songIndex)
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})