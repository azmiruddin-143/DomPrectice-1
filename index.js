// item er bitor li ke ber kora//

 let list =  document.getElementsByTagName("li");
 for(let lis of list){
    console.log(lis);
 }


// h1 heading er html ber kora//

let heading = document.getElementsByTagName("h1");
 for(let hed of heading) {
    hed.innerHTML;
    console.log(hed);
 }


// heding title color and size change kora//
  let heading2  = document.getElementsByTagName("h3");
  for(let hed of heading2) {
    hed.innerText;
    hed.style.color= "orange";
    hed.style.fontSize = "25px"
  }


// ............................................................//

        //  getElementsByClassName

  let lis = document.getElementsByClassName("col");
  for(let man of lis) {
    man.style.color= "blue"
    man.style.fontSize = "18px"
  }

            // getElementById//
            // jast 1 ta id style kora holo              
                    
let manc = document.getElementById("item2");
manc.style.color = "white";
manc.style.backgroundColor = "red";
manc.style.width ="50%";
manc.style.border="1px solid black"

 
    //    querySelectorAll//

 let manb = document.querySelector("#item3")
  manb.classList.add("kire");
  manb.classList.add("fontsixe");
  manb.classList.remove("fontsixe");

let it  = document.querySelectorAll("#item3 li");

  for(let man of it) {
    man.style.color= "red"
  }



 //    querySelector//

 let man = document.querySelectorAll("#item3 li");
 console.log(man);
  document.querySelectorAll("#item3 li")[3].innerHTML= "<h1> gdfg </h1>";
  document.querySelectorAll("#item3 li")[0].innenText= "change";


// child select//
let mani = document.getElementById("item3")
console.log(mani.childNodes[3].childNodes[5].innerText);


let manu = document.getElementById("item2");
console.log(manu.childNodes[3].childNodes[6].nextSibling.innerText);

    //    li add korlam appendChild diye

let country = document.getElementById("item2");
let li = document.createElement("li")
li.innerText="korlam";
console.log(li);
country.appendChild(li)

// section add korlam appendChild diye//

 let section = document.querySelector(".header");
 console.log(section);

 let newsection = document.createElement("newitem");

 let h2 = document.createElement("h2");
 h2.innerText = "I'm Front End Developer Developer";
 newsection.appendChild(h2);

 let p = document.createElement("p");
 p.innerText = "My Country is Bangladesh and city Dhaka jistric Narayangong";
 newsection.appendChild(p);
    // unorder list
 let ul = document.createElement("ul");
    //list item//
let li1 = document.createElement("li")
li1.innerText = "first product";
ul.appendChild(li1)

let li2 = document.createElement("li")
li2.innerText = "second product";
ul.appendChild(li2)

let li3 = document.createElement("li")
li3.innerText = "Therd product";
ul.appendChild(li3)
newsection.appendChild(ul);
//  un order list end//

//    button//
let btn = document.createElement("button");
btn.innerText = "See more";
btn.style.padding = "10px";
btn.style.backgroundColor = "purple";
btn.style.color = "white";
btn.style.border= "none";

newsection.appendChild(btn);
section.appendChild(newsection);


//   second idya section ad korar

 let add = document.createElement("add");
 add.innerHTML = `
   <h1> How Are you </h1>
   <p> Ami Akjon Developer bujla </p>
   <button> hire me </button>
 `
    section.appendChild(add)