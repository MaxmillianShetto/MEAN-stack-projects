function displayArticles() {
    var existingArticles = "";
    if (localStorage.getItem("articles") != null) {
        let myArticles = JSON.parse(localStorage.getItem("articles"));
        for(let i = 0; i < myArticles.length; i++) {
            existingArticles += `<div class="card col-md-4">
                <img class="card-img-top" src=${myArticles[i].image_src.replace('C:\\fakepath\\','')} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${myArticles[i].title}</h5>
                    <p class="card-text">${myArticles[i].post}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>`;
        }
    }

    return existingArticles;
}

document.getElementById("articles-posted").innerHTML = displayArticles();

function addArticleData() {
    let articleTitle = document.getElementById("article-title").value;
    let articleContent = document.getElementById("article-content").value;
    let articleImage = document.getElementById("article-image").value;
    console.log(articleTitle + "<br>" + articleContent + "<br>" + articleImage);
    let myArticles = new Array();
    if(localStorage.getItem("articles") != null){
        myArticles = JSON.parse(localStorage.getItem("articles"));
        myArticles.push({"title":articleTitle,"post":articleContent,"image_src":articleImage});        
    } else {
        myArticles.push({"title":articleTitle,"post":articleContent,"image_src":articleImage});
    }
    let articleObj = JSON.stringify(myArticles);
    localStorage.setItem("articles",articleObj);
    console.log(displayArticles());
    document.getElementById("articles-posted").innerHTML = displayArticles();
}