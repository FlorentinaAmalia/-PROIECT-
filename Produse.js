function search_product() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('grid-item');
      
    let stop = 0;
    let cat = document.getElementById("err") || document.getElementById("err_show");
    cat.id = "err";

    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="block";
            stop++;
        }

        
    }
    if(stop == 0){
        cat.id = "err_show";
        cat.style.width = "100vw";
        cat.style.height = "100vh";
    }
    stop = 0;
}




function color(){
    const c = localStorage.getItem('culoare') || "url('poze/background_site1.jpg')";
console.log(c);
document.body.style.backgroundImage = c;
    }

function callRandom() {
var colors = ["url('poze/background_site1.jpg')", "url('poze/background_site2.jpg')", "url('poze/background_site3.jpg')", "url('poze/background_site4.jpg')", "url('poze/background_site5.jpg')"];

var randomNumber=Math.floor(Math.random()*5);

localStorage.setItem('culoare', colors[randomNumber]);

document.body.style.backgroundImage = colors[randomNumber];
}


setTimeout(window.onload,1000);
setInterval(callRandom,5000);