var articles = [];
var activeArticle = null;
var articleNav = null;

function SelectArticle(index) {
	if(index < 0 || index >= articles.length) {
		return;
	}
		
	if(activeArticle != null) {
		activeArticle.Deactivate();
	}
	
	activeArticle = articles[index];
	activeArticle.SetActive();
	articleNav.SetActive(index);
}

function NextArticle() {
	if(activeArticle == null) {
		activeArticle = articles[0];
		activeArticle.SetActive();
		return;
	}
	
	SelectArticle(activeArticle.index + 1);
}

function PrevArticle() {
	if(activeArticle == null) {
		activeArticle = articles[0];
		activeArticle.SetActive();
		return;
	}
	
	SelectArticle(activeArticle.index - 1);
}


function Setup() {
	var articleElements = document.getElementsByClassName("article");
	let index = 0;
	for(let el of articleElements) {
		articles.push(new Article(index, el));
		index++;
	}
	activeArticle = articles[0];
	
	var articleNavElement = document.getElementById('article-nav');
	articleNav = new ArticleNav(articleNavElement);
}

Setup();