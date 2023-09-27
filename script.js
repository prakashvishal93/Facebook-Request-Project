let isStatus = document.querySelector("h5"); 

var btn = document.querySelector("#add");

var flag = 0;

// var removeFriend = document.querySelector("#remove");

btn.addEventListener("click", function(){
    if(flag == 0){
        isStatus.innerHTML = "Friends";
        isStatus.style.color = "green";
        btn.innerHTML = ("Remove Friend");
        console.log("Kya re");

        flag = 1 ;
    }
    else{
        isStatus.innerHTML = "Stranger";
        btn.innerHTML = ("Add Friend");
        isStatus.style.color = "red";
        console.log("Kya re Jhantu");

         flag = 0;
    }

    
})





// removeFriend.addEventListener("click",function(){
//     isStatus.innerHTML = ("Stranger");
//     isStatus.style.color = "red";
// })
