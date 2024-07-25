alert("Click any button and play your fav song\n\nex:Dandelions")
 alert("Upvote")
function getRand(){
    return
    Math.floor(Math.random()*255);
}
    function getRan(){
        return
        Math.floor(Math.random()*255);
    }
    function getRa(){
        return
        Math.floor(Math.random()*255);
    }
    function change(){
        var page=document.getElementById
        ("body");
        var a= getRand();
        var b= getRan();
        var c= getRa();
        var bgcolor="rgb("+a+","+b+","+c+")";
        page.style.backgroundColor=bgcolor;
    }
    function playVideo1(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video1`);
        video.style.display='block';
        video.play();
    }
    function playVideo2(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video2`);
        video.style.display='block';
        video.play();
    }
    function playVideo3(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video3`);
        video.style.display='block';
        video.play();
    }    
    function playVideo4(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video4`);
        video.style.display='block';
        video.play();
        
    }
    function playVideo5(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video5`);
        video.style.display='block';
        video.play();
    }
    function playVideo6(){
        const allVideos=document.querySelectorAll('video');
        allVideos.forEach(video=>{
            video.pause();
            video.style.display='none';
        });
        const video=document.querySelector(`.video6`);
        video.style.display='block';
        video.play();
    } 
