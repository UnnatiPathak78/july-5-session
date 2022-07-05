//let s = document.getElementsByTagName("span");
//console.log(s);

// let p = document.getElementsByClassName("something");
// // console.log(p);

// document.getElementsByName();
// document.querySelector();
// document.querySelectorAll();

// let s = document.querySelectorAll("[required]");
// console.log(s);


// let i = document.getElementById("some_input");
// i.value; 

// function check_password(){
//     let ip = document.getElementById("pass");
//     let pass = ip.value;
//     if(pass.length > 5){
//         alert("you can proceed");
//     }
//     else{
//         alert("use better password");
//     }
// }

// function show_password(){
//     let ip = document.getElementById("pass");
//     ip.type = "text";
// }
// function hide_password(){
//     let ip = document.getElementById("pass");
//     ip.type = "password";
// }

// function same_password(){
//     let pass1= document.getElementById("password1");
//     let password1 = pass1.value;
//     let pass2 = document.getElementById("password2");
//     let password2 = pass2.value;
//     let p = document.getElementById("paragraph");
//     p.type = "text";
//     if(password1 == password2){
//         p.innerText= "password match";
//     }
//     else{
//         p.innerText= "don't match";
//     }
// }



function add_new_list_item(){
    let l = document.createElement("li");
    let c = document.getElementById("container");
    l.innerText = "created using JS Function";
    c.appendChild(l);
}


function table_container(){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    td1.innerText = "col1";
    td2.innerText = "col2";
    tr.appendChild(td1);
    tr.appendChild(td2);
    let t_container = document.getElementById("table_container");
    t_container.appendChild(tr);
}