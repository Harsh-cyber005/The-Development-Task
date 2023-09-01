let searchBarOpen = false;
let lmao = false;
let searchElongated = false;

document.getElementById("search").addEventListener("click",function(){
    if(!searchElongated){
        document.getElementById("middle-nav").style.width = "50%";
        document.getElementById("middle-nav").style.marginRight = "0%";
        document.getElementById("search-go").style.display = "flex";
        searchElongated = true;
    }
})
document.querySelector("*").addEventListener("click",function(e){
    if(searchElongated && e.target.id != "search" && e.target.id != "search-icon" && e.target.id != "search-go" && e.target.id != "middle-nav"){
        document.getElementById("middle-nav").style.width = "20%";
        document.getElementById("middle-nav").style.marginRight = "30%";
        document.getElementById("search").value = "";
        document.getElementById("search-go").style.display = "none";
        searchElongated = false;
    }
})
document.getElementById("middle-nav").addEventListener("mouseover",function(e){
    document.getElementById("middle-nav").style.width = "50%";
    document.getElementById("middle-nav").style.marginRight = "0%";
})
document.getElementById("middle-nav").addEventListener("mouseout",function(e){
    if(!searchElongated){
        document.getElementById("middle-nav").style.width = "20%";
        document.getElementById("middle-nav").style.marginRight = "30%";
    }
})

function reWrite(){
    document.getElementById("search-bar").value = "Search";
    document.getElementById("search-bar").style.color = "gray";
}

document.getElementById("search-bar").addEventListener("click",function(){
    if(!lmao){
        document.getElementById("search-bar").value = "";
        document.getElementById("search-bar").style.color = "#012345"
        lmao = true;
    }
})
document.getElementById("search-button").addEventListener("click",function(){
    if(!searchBarOpen){
        document.getElementById("search-bar-div").style.transform = "translateY(56px)";
        // document.getElementById("search-bar-div").style.transform = "translateY(-0.2%)";
        searchBarOpen = true;
        reWrite();
        lmao = false;
    }
    else{
        document.getElementById("search-bar-div").style.transform = "translateY(-56px)";
        searchBarOpen = false;
        lmao = false;
    }
})

let sideMenuOpen = false;

document.getElementById("drop-down").addEventListener("click",function(){
    if(!sideMenuOpen){
        sideMenuOpen = true;
        document.getElementById("side-menu").style.display = "block";
        document.getElementById("side-menu").style.transform = "translateX(0%)";
        document.getElementById("list-item1").style.transform = "translateX(0%)";
        document.getElementById("list-item2").style.transform = "translateX(0%)";
        document.getElementById("list-item3").style.transform = "translateX(0%)";
        document.getElementById("side-menu").style.animationName = "side-menu-come-in";
        document.getElementById("side-menu").style.animationDuration = "0.4s";
        document.getElementById("side-menu").style.transition = "0.4s";

        document.getElementById("list-item1").style.animationName = "list-come-in";
        document.getElementById("list-item1").style.animationDuration = "0.4s";
        document.getElementById("list-item1").style.transition = "0.4s";

        document.getElementById("list-item2").style.animationName = "list-come-in";
        document.getElementById("list-item2").style.animationDuration = "0.6s";
        document.getElementById("list-item2").style.transition = "0.6s";

        document.getElementById("list-item3").style.animationName = "list-come-in";
        document.getElementById("list-item3").style.animationDuration = "0.8s";
        document.getElementById("list-item3").style.transition = "0.8s";

        document.getElementById("drop-side").style.animationName = "list-come-in";
        document.getElementById("drop-side").style.animationDuration = "1s";
        document.getElementById("drop-side").style.transition = "1s";

        document.querySelector("body").overflow = "hidden"; //here is a bug, unable to fix
    }
    else{
        setTimeout(function(){
            document.getElementById("side-menu").style.display = "none";
        },400);
        document.getElementById("side-menu").style.transform = "translateX(-100%)";
        document.getElementById("side-menu").style.animationName = "side-menu-go-out";
        document.getElementById("side-menu").style.animationDuration = "0.4s";
        document.getElementById("side-menu").style.transition = "0.4s";
        sideMenuOpen = false;
        document.querySelector("body").overflow = "visible";
    }
})

document.getElementById("nav-item1").addEventListener("click",function(){
    location.assign("index.html");
})
document.getElementById("nav-item2").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/harsh-gupta-0957a4260","__blank");
})
document.getElementById("nav-item3").addEventListener("click",function(){
    window.open("https://codeforces.com/","__blank");
})

document.getElementById("go").addEventListener("click",function(){
    document.getElementById("go").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
    setTimeout(function(){
        document.getElementById("go").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)"
    },100);
})

document.getElementById("nav-item1").addEventListener("click",function(){
    document.getElementById("nav-item1").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
    setTimeout(function(){
        document.getElementById("nav-item1").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)"
    },100);
})

document.getElementById("nav-item2").addEventListener("click",function(){
    document.getElementById("nav-item2").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
    setTimeout(function(){
        document.getElementById("nav-item2").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)"
    },100);
})

document.getElementById("nav-item3").addEventListener("click",function(){
    document.getElementById("nav-item3").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
    setTimeout(function(){
        document.getElementById("nav-item3").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)"
    },100);
})

document.getElementById("list-item1").addEventListener("click",function(){
    location.assign("index.html");
})
document.getElementById("list-item2").addEventListener("click",function(){
    window.open("https://www.linkedin.com/in/harsh-gupta-0957a4260","__blank");
})
document.getElementById("list-item3").addEventListener("click",function(){
    window.open("https://codeforces.com/","__blank");
})

let asked = false;

let dropMenu = false;
document.getElementById("drop-button").addEventListener("click",function(){
    if(dropMenu){
        document.getElementById("drop-menu").style.display = "none";
        document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)";
        document.getElementById("arrow-img").style.transform = "rotate(0deg)";
        dropMenu = false;
    }
    else{
        document.getElementById("drop-menu").style.display = "flex";
        document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
        document.getElementById("arrow-img").style.transform = "rotate(180deg)";
        dropMenu = true;
    }
})

document.getElementById("item-1").style.backgroundColor = "#6053FE";
document.getElementById("item-1").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("item-2").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("item-3").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("item-4").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})

document.getElementById("item-1").addEventListener("mouseout",function(e){
    if(selectedItem != 1){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("item-2").addEventListener("mouseout",function(e){
    if(selectedItem != 2){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("item-3").addEventListener("mouseout",function(e){
    if(selectedItem != 3){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("item-4").addEventListener("mouseout",function(e){
    if(selectedItem != 4){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})

function deselect(id){
    document.getElementById(id).style.backgroundColor = "#393A71";
}
let selectedItem = 1; 
document.getElementById("item-1").addEventListener("click",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 10";
    document.getElementById("arrow-img").style.display = "flex";
    deselect("item-2");
    deselect("item-3");
    deselect("item-4");
    document.getElementById("drop-menu").style.display = "none";dropMenu = false;
    document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)";
    document.getElementById("drop-button").style.width = "15vh";
    document.getElementById("drop-button").style.justifyContent = "space-evenly";
    document.getElementById("arrow-img").style.transform = "rotate(0deg)";
    selectedItem = 1;
    let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("item-2").addEventListener("click",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 100";
    document.getElementById("arrow-img").style.display = "flex";
    deselect("item-1");
    deselect("item-3");
    deselect("item-4");
    document.getElementById("drop-menu").style.display = "none";dropMenu = false;
    document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)";
    document.getElementById("drop-button").style.width = "8vw";
    document.getElementById("drop-button").style.justifyContent = "space-evenly";
    document.getElementById("arrow-img").style.transform = "rotate(0deg)";
    selectedItem = 2;
    let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("item-3").addEventListener("click",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 1000";
    document.getElementById("arrow-img").style.display = "flex";
    deselect("item-2");
    deselect("item-1");
    deselect("item-4");
    document.getElementById("drop-menu").style.display = "none";dropMenu = false;
    document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)";
    document.getElementById("drop-button").style.width = "18vh";
    document.getElementById("drop-button").style.justifyContent = "space-evenly";
    document.getElementById("arrow-img").style.transform = "rotate(0deg)";
    selectedItem = 3;
    let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("item-4").addEventListener("click",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "IIT KGP";
    document.getElementById("arrow-img").style.display = "flex";
    deselect("item-2");
    deselect("item-1");
    deselect("item-3");
    document.getElementById("drop-menu").style.display = "none";dropMenu = false;
    document.getElementById("drop-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)";
    document.getElementById("drop-button").style.width = "16vh";
    document.getElementById("drop-button").style.justifyContent = "space-evenly";
    document.getElementById("arrow-img").style.transform = "rotate(0deg)";
    selectedItem = 4;
    let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})

document.getElementById("side-menu-item-1").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("side-menu-item-2").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("side-menu-item-3").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})
document.getElementById("side-menu-item-4").addEventListener("mouseover",function(e){
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
})

document.getElementById("side-menu-item-1").addEventListener("mouseout",function(e){
    if(selectedItem != 1){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("side-menu-item-2").addEventListener("mouseout",function(e){
    if(selectedItem != 2){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("side-menu-item-3").addEventListener("mouseout",function(e){
    if(selectedItem != 3){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})
document.getElementById("side-menu-item-4").addEventListener("mouseout",function(e){
    if(selectedItem != 4){
        document.getElementById(e.target.id).style.backgroundColor = "#393A71";
    }
})

document.getElementById("side-menu-item-1").addEventListener("click",function(e){
    setTimeout(function(){
        document.getElementById("side-menu").style.display = "none";
    },400);
    document.getElementById("side-menu").style.transform = "translateX(-100%)";
    document.getElementById("side-menu").style.animationName = "side-menu-go-out";
    document.getElementById("side-menu").style.animationDuration = "0.4s";
    document.getElementById("side-menu").style.transition = "0.4s";
    sideMenuOpen = false;
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 10";
    deselect("side-menu-item-2");
    deselect("side-menu-item-3");
    deselect("side-menu-item-4");
    selectedItem = 1;
    let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("side-menu-item-2").addEventListener("click",function(e){
    setTimeout(function(){
        document.getElementById("side-menu").style.display = "none";
    },400);
    document.getElementById("side-menu").style.transform = "translateX(-100%)";
    document.getElementById("side-menu").style.animationName = "side-menu-go-out";
    document.getElementById("side-menu").style.animationDuration = "0.4s";
    document.getElementById("side-menu").style.transition = "0.4s";
    sideMenuOpen = false;
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 100";
    deselect("side-menu-item-1");
    deselect("side-menu-item-3");
    deselect("side-menu-item-4");
    selectedItem = 2;
    // let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("side-menu-item-3").addEventListener("click",function(e){
    setTimeout(function(){
        document.getElementById("side-menu").style.display = "none";
    },400);
    document.getElementById("side-menu").style.transform = "translateX(-100%)";
    document.getElementById("side-menu").style.animationName = "side-menu-go-out";
    document.getElementById("side-menu").style.animationDuration = "0.4s";
    document.getElementById("side-menu").style.transition = "0.4s";
    sideMenuOpen = false;
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "TOP 1000";
    deselect("side-menu-item-2");
    deselect("side-menu-item-1");
    deselect("side-menu-item-4");
    selectedItem = 3;
    // let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})
document.getElementById("side-menu-item-4").addEventListener("click",function(e){
    setTimeout(function(){
        document.getElementById("side-menu").style.display = "none";
    },400);
    document.getElementById("side-menu").style.transform = "translateX(-100%)";
    document.getElementById("side-menu").style.animationName = "side-menu-go-out";
    document.getElementById("side-menu").style.animationDuration = "0.4s";
    document.getElementById("side-menu").style.transition = "0.4s";
    sideMenuOpen = false;
    document.getElementById(e.target.id).style.backgroundColor = "#6053FE";
    document.getElementById("inner-span").innerHTML = "IIT KGP";
    deselect("side-menu-item-2");
    deselect("side-menu-item-1");
    deselect("side-menu-item-3");
    selectedItem = 4;
    // let noOfRows = Math.pow(10,selectedItem);
    document.getElementById("actual-table").remove();
    document.getElementById("second").style.marginTop = "calc((var(--no-of-rows) + 2) * (var(--row-height)*2) + 1430px + 2.4%);";
    if(!asked){
        getData();
        asked = false;
    }
})

let data = null;
let count = 0;
let url = "https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false";

async function getData(){
    asked = true;
    count = 0;
    document.getElementById("loader-body").style.display = "flex";
    const response = await fetch(url);
    // console.log(response);
    let data_in = await response.json();
    recieved = true;
    document.getElementById("loader-body").style.display = "none";
    // data = (data_in.result.slice(0,1000));
    data = data_in.result;
    let actual_table = document.createElement("div");
    actual_table.id = "actual-table";
    document.getElementById("main-table").appendChild(actual_table);

    if(selectedItem == 1){
        document.documentElement.style.cssText = "--no-of-rows : 7";
    }
    else if(selectedItem == 2){
        document.documentElement.style.cssText = "--no-of-rows : 52";
    }
    else if(selectedItem == 3){
        document.documentElement.style.cssText = "--no-of-rows : 502";
    }
    else if(selectedItem == 4){
        document.documentElement.style.cssText = "--no-of-rows : 132.5";
        selectedItem = 5;
    }

    for(let i = 0;i<(Math.pow(10,selectedItem));i++){
        let test = data[i];
        // console.log(typeof test.organization);
        if(selectedItem == 5){
            if(test.organization == undefined){
                continue;
            }
            if(test.organization.toLowerCase() != "iit kgp" && test.organization.toLowerCase() != "iit kharagpur" && test.organization.toLowerCase() != "iit-kgp" && test.organization.toLowerCase() != "iit-kharagpur"){
                continue;
            }
        }
        let elemInnerSno = document.createElement("div");
        elemInnerSno.classList.add("sno");
        let elemInnerPhoto = document.createElement("div");
        elemInnerPhoto.classList.add("photo");
        let elemInnerHandle = document.createElement("div");
        elemInnerHandle.classList.add("name");
        let elemInnerRating = document.createElement("div");
        elemInnerRating.classList.add("rating");
        let elemInnerRank = document.createElement("div");
        elemInnerRank.classList.add("rank");
    
        let photo = document.createElement("img");
        photo.src = test.avatar;
    
        let handle = document.createElement("p");
        handle.innerHTML = test.handle;
    
        let rating = document.createElement("p");
        rating.innerHTML = test.rating;
    
        let rank = document.createElement("p");
        rank.innerHTML = test.rank;
    
        elemInnerSno.appendChild(document.createTextNode(String(++count)+"."));
        elemInnerPhoto.appendChild(photo);
        elemInnerHandle.appendChild(handle);
        elemInnerRating.appendChild(rating);
        elemInnerRank.appendChild(rank);
    
        let table_row = document.createElement("div");
        table_row.appendChild(elemInnerSno);
        table_row.appendChild(elemInnerHandle);
        table_row.appendChild(elemInnerPhoto);
        table_row.appendChild(elemInnerRating);
        table_row.appendChild(elemInnerRank);
        
        document.getElementById("actual-table").appendChild(table_row);
        table_row.id = "row"+String(count);
        if(count%2 != 0){
            table_row.classList.add("row-odd");
        }
        else{
            table_row.classList.add("row-even");
        }
        table_row.classList.add("row");
    }
}
getData();
selectedItem = 1;
asked = false;
let profile_handle = "";
let profile_data = null;

function error_func(){
    setTimeout(function(){
        document.getElementById("loader-body-page2").style.display = "none";
        document.getElementById("card").style.display = "flex";
        document.getElementById("card").innerHTML = "Could not find User";
    },5000);
}

document.getElementById("search-go").addEventListener("click",function(){
    profile_handle = document.getElementById("search").value;
    // console.log(profile_handle);
    if(profile_handle != ""){
        document.querySelector("page-2").style.display = "flex";
        let url = "https://codeforces.com/api/user.info?handles="+profile_handle;
        // console.log(url);
        async function afterSearch(){
            document.getElementById("loader-body-page2").style.display = "flex";
            try{
                const response = await fetch(url);
                profile_data = await response.json();
                profile_data = profile_data.result[0];
                document.getElementById("loader-body-page2").style.display = "none";
                // console.log(profile_data);
                let firstName = profile_data.firstName;
                firstName = (firstName == undefined)?"":firstName;
                let lastName = profile_data.lastName;
                lastName = (lastName == undefined)?"":lastName;
                let country = profile_data.country;
                country = (country == undefined)?"":country;
                let city = profile_data.city;
                city = (city == undefined)?"":city;
                let photo = profile_data.titlePhoto;
                let username = profile_data.handle;
                username = (username == undefined)?"":username;
                let rating = profile_data.rating;
                rating = (rating == undefined)?"":rating;
                let maxRating = profile_data.maxRating;
                maxRating = (maxRating == undefined)?"":maxRating;
                let rank = profile_data.rank;
                rank = (rank == undefined)?"":rank;
                let maxRank = profile_data.maxRank;
                maxRank = (maxRank == undefined)?"":maxRank;
                let friends = profile_data.friendOfCount;
                friends = (friends == undefined)?"":friends;
                
                document.querySelector("body").style.overflow = "hidden";
                
                document.getElementById("profile-pic-img").src = photo;
                document.getElementById("profile-firstName").innerHTML = " "+firstName;
                document.getElementById("profile-lastName").innerHTML = " "+lastName;
                document.getElementById("profile-username").innerHTML = " "+username;
                document.getElementById("profile-country").innerHTML = " "+country;
                document.getElementById("profile-city").innerHTML = " "+city;
                document.getElementById("profile-friends").innerHTML = " "+friends;
                document.getElementById("profile-rating").innerHTML = " "+rating;
                document.getElementById("profile-max-rating").innerHTML = " "+maxRating;
                document.getElementById("profile-rank").innerHTML = rank;
                document.getElementById("profile-max-rank").innerHTML = " "+maxRank;
                document.getElementById("card").style.display = "flex";
            }catch{
                error_func();
            }
        }
        afterSearch();
    }
})

document.getElementById("go").addEventListener("click",function(){
    profile_handle = document.getElementById("search-bar").value;
    if(profile_handle != "" && profile_handle != "Search"){ //here is a bug
        document.querySelector("page-2").style.display = "flex";
    }
    if(profile_handle != ""){
        document.querySelector("page-2").style.display = "flex";
        let url = "https://codeforces.com/api/user.info?handles="+profile_handle;
        async function afterSearch(){
            document.getElementById("loader-body-page2").style.display = "flex";
            try{
                const response = await fetch(url);
                profile_data = await response.json();
                profile_data = profile_data.result[0];
                document.getElementById("loader-body-page2").style.display = "none";
                let firstName = profile_data.firstName;
                firstName = (firstName == undefined)?"":firstName;
                let lastName = profile_data.lastName;
                lastName = (lastName == undefined)?"":lastName;
                let country = profile_data.country;
                country = (country == undefined)?"":country;
                let city = profile_data.city;
                city = (city == undefined)?"":city;
                let photo = profile_data.titlePhoto;
                let username = profile_data.handle;
                username = (username == undefined)?"":username;
                let rating = profile_data.rating;
                rating = (rating == undefined)?"":rating;
                let maxRating = profile_data.maxRating;
                maxRating = (maxRating == undefined)?"":maxRating;
                let rank = profile_data.rank;
                rank = (rank == undefined)?"":rank;
                let maxRank = profile_data.maxRank;
                maxRank = (maxRank == undefined)?"":maxRank;
                let friends = profile_data.friendOfCount;
                friends = (friends == undefined)?"":friends;
                
                document.querySelector("body").style.overflow = "hidden";
                
                document.getElementById("profile-pic-img").src = photo;
                document.getElementById("profile-firstName").innerHTML = " "+firstName;
                document.getElementById("profile-lastName").innerHTML = " "+lastName;
                document.getElementById("profile-username").innerHTML = " "+username;
                document.getElementById("profile-country").innerHTML = " "+country;
                document.getElementById("profile-city").innerHTML = " "+city;
                document.getElementById("profile-friends").innerHTML = " "+friends;
                document.getElementById("profile-rating").innerHTML = " "+rating;
                document.getElementById("profile-max-rating").innerHTML = " "+maxRating;
                document.getElementById("profile-rank").innerHTML = " "+rank;
                document.getElementById("profile-max-rank").innerHTML = " "+maxRank;
                document.getElementById("card").style.display = "flex";
            }catch{
                error_func();
            }
        }
        afterSearch();
    }
})

document.getElementById("go").addEventListener("click",function(){
    
})

document.getElementById("back-button").addEventListener("click",function(){
    document.querySelector("body").style.overflow = "visible";
    document.getElementById("card").style.display = "none";
    document.getElementById("back-button").style.backgroundImage = "linear-gradient(to top left, #3d34a6 ,#45407e,#45407e, #3d3d49)";
    setTimeout(function(){
        document.getElementById("back-button").style.backgroundImage = "linear-gradient(to top left, #6053FE ,#8176FF,#8176FF, #b9bae0)"
    },100);
    setTimeout(function(){
        document.querySelector("page-2").style.display = "none";
    },300);
})
