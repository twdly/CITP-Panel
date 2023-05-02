function search() {
    // Declare variables
    var input, filter, articles, articleList, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    articles = document.getElementById("articles");
    articleList = articles.getElementsByTagName("div");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < articleList.length; i++) {
        a = articleList[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            articleList[i].style.display = "";
        } else {
            articleList[i].style.display = "none";
        }
    }
}