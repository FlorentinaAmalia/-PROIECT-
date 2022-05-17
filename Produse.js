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
// console.log(c);
document.body.style.backgroundImage = c;
    }

function callRandom() {
var colors = ["url('poze/background_site1.jpg')", "url('poze/background_site3.jpg')", "url('poze/background_site4.jpg')", "url('poze/background_site5.jpg')"];

var randomNumber=Math.floor(Math.random()*5);

localStorage.setItem('culoare', colors[randomNumber]);

document.body.style.backgroundImage = colors[randomNumber];
}


// setTimeout(window.onload,1000);
setInterval(callRandom,5000);




// function adaugaInCos(element){
//     // console.log("AA");
//     const button = document.getElementById("addCos");

//     const div = document.getElementById("cos_comenzi");
//     element = button.parentElement;
//     // elem.innerHTML = button.parentElement;
//     // let e = elem.getElementsByClassName("pret");
    
//     alert(element.parentNode.parentNode.id)
//     // elem.innerHTML = button.parentElement();
//     console.log(element);
//     div.append(element);

//     let gridd = document.getElementsByClassName("grid-item");
//     // console.log(gridd[2]);
//     // if(div.append(element)){
//     // // div.append(gridd[2]);}
//     // console.log("BB");}
//     // else{
//     //     console.log("AA");
//     // }
// }

function adaugaInCos(elem, val){
    // console.log(elem.parentNode.children.item(1).innerHTML); // lista
    let lista = elem.parentNode.children.item(1).innerHTML;

    let cos = document.getElementById("lista_produse");
    let i = document.createElement("div");

    let pretTotal = parseFloat(localStorage.getItem('pretTotalCos')) || 0 ;
    // pretTotal = localStorage.getItem('pretTotalCos');
    let pret = parseFloat(lista.substring(
        lista.indexOf("Pret:") +6, 
        lista.lastIndexOf(" RON")
    ));

    let item = lista.substring(
        lista.indexOf("<li>") +4, 
        lista.indexOf("</li>")
    );

    pretTotal = (pretTotal + pret).toFixed(2);
    localStorage.setItem('pretTotalCos', pretTotal);

    var plata = document.getElementById('plata');
    plata.innerHTML = pretTotal;


    var entry = document.createElement('div');
    entry.id = "produsId";
    entry.append(document.createTextNode(item));

        var del = document.createElement("button");
        del.innerHTML = "X";
        del.id = "deleteItem";
        del.className = "deleteButton";
        del.style.backgroundColor = "cornflowerblue";
        del.style.marginLeft = '5px';
        // del.onclick = deleteButton();

    entry.append(del);

    cos.appendChild(entry);
    localStorage.setItem('produse', cos.innerHTML);
    // console.log(item.id);
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

function deleteButton(event){

    var dict = {2099.99 : "Notebook Laptop Acer Aspire 5 A515-45", 3499.99 : "Ultrabook IdeaPad 5 Pro 14ACN6", 3935.99 : "Ultrabook Yoga Slim 9 14ITL5", 719.99 : "Smartphone Samsung Galaxy A03", 5700.00 : "Smartphone Apple iPhone 13", 5539.00 : "Smartphone Samsung Galaxy S22", 829.99 : "Tableta Samsung Galaxy Tab A8", 729.99 : "Tableta Huawei MatePad T10s"};




    if(document.getElementById("produsId") != null){
        if(event.target.id = "deleteItem"){
        let elemente = document.getElementById("produsId").innerHTML;
        // console.log(elemente);

            let item = elemente.substring(0, elemente.indexOf("<"));    // nume item sters
            let pretItemDel = parseFloat(getKeyByValue(dict, item));    //pret item sters

            let pretTotal = localStorage.getItem("pretTotalCos");
            pretTotal = (pretTotal - pretItemDel).toFixed(2);
            localStorage.setItem("pretTotalCos", pretTotal);
            var plata = document.getElementById('plata');
            plata.innerHTML = localStorage.getItem("pretTotalCos");
            console.log(item, pretItemDel, "pretTotal: ", pretTotal);

            event.target.parentElement.remove();    //stergem itemul selectat
            let elementeDupaDel = document.getElementById("produsId");  //salvam noile date
            if(elementeDupaDel == null){
                elementeDupaDel = "";
                localStorage.setItem('pretTotalCos', 0)
                var plata = document.getElementById('plata');
                plata.innerHTML = localStorage.getItem("pretTotalCos");
            }
            localStorage.setItem("produse", elementeDupaDel);
        }
    }
}


function pret(){
    var plata = document.getElementById('plata');
    plata.innerHTML = localStorage.getItem("pretTotalCos");

    var produse = document.getElementById("lista_produse");
    produse.innerHTML = localStorage.getItem("produse");
    document.querySelector("#check").addEventListener("click", function(event) {
        // document.getElementById("output-box").innerHTML = "Scuze! In aceasta perioada nu putem face livrari rapide!";
        alert("Scuze! In aceasta perioada nu putem face livrari rapide!");
        event.preventDefault();
}, false);
}

function reset_cos(){
    localStorage.setItem('pretTotalCos', 0)
    var plata = document.getElementById('plata');
    plata.innerHTML = localStorage.getItem("pretTotalCos");

    localStorage.setItem('produse', "");
    var lista_produse = document.getElementById("lista_produse");
    lista_produse.innerHTML = localStorage.getItem("produse");
}


function outStock(){
    alert("Ne pare rau! Nu mai avem in stoc acest produs!");
}

function outStockItem(element, val){
    alert("Ne pare rau! Nu puteti adauga in cos acest produs deoarece nu mai este in stoc!");
    event.stopPropagation();
}


var addFunctionOnWindowLoad = function(callback){
    if(window.addEventListener){
        window.addEventListener('load',callback,false);
    }else{
        window.attachEvent('onload',callback);
    }
}

// document.getElementById("deleteButton").addEventListener('click', function(e){
//     if(e.target.className == "deleteButton"){
//         // e.target.parentElement.remove();
//         console.log(e.target.parentElement);
//     }
//     else{

//         console.log(e.target.parentElement, "AAAAAAAAA");
//     };
// })


addFunctionOnWindowLoad(color);
addFunctionOnWindowLoad(pret);
addFunctionOnWindowLoad(deleteButton());