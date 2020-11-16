function pSelect(projects) {

    if(projects == "web") {
        // Qeury for tags with text
        var dataviz = document.querySelectorAll("[type='dataviz']");
        var web = document.querySelectorAll("[type='web']")
        var others = document.querySelectorAll("[type='others']");
        // change the selector
        var datavizselector = document.querySelector("#datavizSelector").innerHTML = "dataviz";
        var webselector = document.querySelector("#webSelector").innerHTML = "<u>web</u>";
        var otherselector = document.querySelector("#otherSelector").innerHTML = "outros";


        // hide en and show pt
        others.forEach(el=>{
            el.style.display = "none";
        })
        web.forEach(el=>{
            el.style.display = "";
        })
        dataviz.forEach(el=>{
            el.style.display = "none";
        })

    }
    if(projects == "other") {
        // Qeury for tags with text
        var dataviz = document.querySelectorAll("[type='dataviz']");
        var web = document.querySelectorAll("[type='web']")
        var others = document.querySelectorAll("[type='others']");
        // change the selector
        var datavizselector = document.querySelector("#datavizSelector").innerHTML = "dataviz";
        var webselector = document.querySelector("#webSelector").innerHTML = "web";
        var otherselector = document.querySelector("#otherSelector").innerHTML = "<u>outros</u>";


        // hide en and show pt
        others.forEach(el=>{
            el.style.display = "";
        })
        web.forEach(el=>{
            el.style.display = "none";
        })
        dataviz.forEach(el=>{
            el.style.display = "none";
        })

    }

}

function pSelectEn(projects) {

    if(projects == "web") {
        // Qeury for tags with text
        var dataviz = document.querySelectorAll("[type='dataviz']");
        var web = document.querySelectorAll("[type='web']")
        var others = document.querySelectorAll("[type='others']");
        // change the selector
        var datavizselector = document.querySelector("#datavizSelectorEn").innerHTML = "dataviz";
        var webselector = document.querySelector("#webSelectorEn").innerHTML = "<u>web</u>";
        var otherselector = document.querySelector("#otherSelectorEn").innerHTML = "others";


        // hide en and show pt
        others.forEach(el=>{
            el.style.display = "none";
        })
        web.forEach(el=>{
            el.style.display = "";
        })
        dataviz.forEach(el=>{
            el.style.display = "none";
        })

    }
    if(projects == "other") {
        // Qeury for tags with text
        var dataviz = document.querySelectorAll("[type='dataviz']");
        var web = document.querySelectorAll("[type='web']")
        var others = document.querySelectorAll("[type='others']");
        // change the selector
        var datavizselector = document.querySelector("#datavizSelectorEn").innerHTML = "dataviz";
        var webselector = document.querySelector("#webSelectorEn").innerHTML = "web";
        var otherselector = document.querySelector("#otherSelectorEn").innerHTML = "<u>others</u>";


        // hide en and show pt
        others.forEach(el=>{
            el.style.display = "";
        })
        web.forEach(el=>{
            el.style.display = "none";
        })
        dataviz.forEach(el=>{
            el.style.display = "none";
        })

    }

}
