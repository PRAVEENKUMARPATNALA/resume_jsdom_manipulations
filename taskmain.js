function loadJson(file) {
    return new Promise((resolve,reject)=>{
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }else{
                reject(new Error('error'));
            }
        })
    })    
}

var newfile =loadJson("taskdata.json");
newfile.then(data=>{
    console.log(data);
    basic(data.details1);
})

var card1 = document.querySelector(".card1");

var card2 = document.querySelector(".card2");

function basic(det) {
    var img1 = document.createElement("img");
    img1.src = det.image1;
    card1.appendChild(img1);

    var name = document.createElement("h3");
    name.textContent = det.name1;
    card1.appendChild(name);

    var email = document.createElement("a");
    email.href = "mailto:patnalapraveenkumar@gmail.com";
    email.textContent = det.email1;
    card1.appendChild(email);

    card1.appendChild(document.createElement("br"));
    card1.appendChild(document.createElement("br"));

    var res = document.createElement("a");
    res.href = "taskresume.html"
    res.textContent = "Static Resume"
    card1.appendChild(res);

    var img1 = document.createElement("img");
    img1.src = det.image1;
    card2.appendChild(img1);

    var name = document.createElement("h3");
    name.textContent = det.name1;
    card2.appendChild(name);

    var email = document.createElement("a");
    email.href = "mailto:patnalapraveenkumar@gmail.com";
    email.textContent = det.email1;
    card2.appendChild(email);

    card2.appendChild(document.createElement("br"));
    card2.appendChild(document.createElement("br"));

    // var res = document.createElement("a");
    // res.href = "dynamicresume.html"
    // res.textContent = "Dynamic Resume"
    // card2.appendChild(res);

    var dres = document.createElement("button");
    dres.textContent = "Dynamic Resume";
    dres.setAttribute("class","btn");
    dres.classList.add("class","btn","btn-primary");
    dres.onclick = function goto(){
        location.href = "dynamicresume.html";
    }
    card2.appendChild(dres);

}