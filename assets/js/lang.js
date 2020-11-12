function Lang(language) {

    if(language == "en") {
        // Qeury for tags with text
        var en = document.querySelectorAll("[lang='en']")
        var pt = document.querySelectorAll("[lang='pt']");
        // change the selector
        var enselector = document.querySelector("#enSelector").innerHTML = "<u>English</u>";
        var ptselector = document.querySelector("#ptSelector").innerHTML = "Português";
        // change title
        document.title = 'My portfolio';

        // hide en and show pt
        pt.forEach(el=>{
            el.style.display = "none";
        })
        en.forEach(el=>{
            el.style.display = "block";
        })

    }
    if(language == "pt") {
        // Qeury for tags with text
        var en = document.querySelectorAll("[lang='en']");
        var pt = document.querySelectorAll("[lang='pt']");
        // change the selector
        var selector = document.querySelector("#ptSelector").innerHTML = "<u>Português</u>"
        var enselector = document.querySelector("#enSelector").innerHTML = "English"

        // change title
        document.title = 'Meu portfólio';

        // hide en and show pt
        en.forEach(el=>{
            el.style.display = "none";
        })
        pt.forEach(el=>{
            el.style.display = "block";
        })

    }

}
