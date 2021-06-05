window.addEventListener("load", ()=>{
    const walkContainer = document.getElementById("walk-container");
    if(walkContainer!=null){
    walkContainer.addEventListener("scroll",()=>{
    var page1 = document.getElementById("page1")
    var page2 = document.getElementById("page2")
    var page3 = document.getElementById("page3")
    var index1 = document.getElementById("index1")
    var index2 = document.getElementById("index2")
    var index3 = document.getElementById("index3")
    if(walkContainer.scrollLeft>=0&&walkContainer.scrollLeft<=20){
        index1.classList.add('active')
        index2.classList.remove("active")
        index3.classList.remove("active")
    }
    else if(walkContainer.scrollLeft>=340&&walkContainer.scrollLeft<=360){
        index2.classList.add('active')
        index1.classList.remove("active")
        index3.classList.remove("active")
    }
    else if(walkContainer.scrollLeft>=700){
        index3.classList.add('active')
        index1.classList.remove("active")
        index2.classList.remove("active")
    }
})
    }
})