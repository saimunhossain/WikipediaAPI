// select elements

const loading = document.querySelector(".loading");
const searchForm = document.getElementById("searchForm");
const output = document.querySelector(".output");
const search = document.getElementById("search");
const feedback = document.querySelector(".feedback");

const base = 'http://en.wikipedia.org/w/api.php';
const url = '?action=query&format=json&origin=*&list=search&srsearch=apple';

searchForm.addEventListener("submit", function(event){
    event.preventDefault();

    const value = search.value;

    if(value === ""){
        showFeedback('please enter a valid search value')
    }else{
        search.value = "";
        ajaxWiki(value);
    }
});

// Show feedback

function showFeedback(text){
    feedback.classList.add("showItem");
    feedback.innerHTML = `<p>${text}</p>`;

    setTimeout(()=>feedback.classList.remove("showItem"), 3000);
}

// ajax wiki

function ajaxWiki(search){
    output.innerHTML = "";
    loading.classList.add('showItem');
    
const wikiURL = `${base}${url}${search}`;

fetch(wikiURL)
    .then(data => data.json())
    .then(data => console.log(data));
    
}