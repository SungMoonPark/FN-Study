const logoBtn = document.querySelector("#logoBtn");
const searchForm = document.querySelector("#search-form");
const searchBar = document.querySelector("#search-bar")
const search = document.querySelector("#search")
const menuBtn = document.querySelector("#menuBtn")
const LinkModal = document.querySelector("#link-modal")

// searchForm.addEventListener("submit", function(){
//     var query = searchBar,value;
//     var url = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${query}`;

//     window.location.href = url;
// })

menuBtn.addEventListener("click", function() {

    LinkModal.showModal();
})

document.addEventListener('mouseup', function(e){
  
    LinkModal.close();
})