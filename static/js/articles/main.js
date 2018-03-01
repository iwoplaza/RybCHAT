var articles = [];
var activeArticle = null;
var articleNav = null;
var animationInTimeout = null;
var animationOutTimeout = null;

function SelectArticle(index) {
	if(index == activeArticle.index)
		return;
	
	if(index < 0 || index >= articles.length) {
		return;
	}
	
	let direction = index < activeArticle.index;
	
	if(animationOutTimeout != null)
		clearTimeout(animationOutTimeout);
	if(animationInTimeout != null)
		clearTimeout(animationInTimeout);
	
	if(activeArticle != null) {
		if(direction)
			AnimateToRight(activeArticle, 0);
		else
			AnimateToLeft(activeArticle, 0);
	}
	
	activeArticle = articles[index];
	activeArticle.SetActive();
	articleNav.SetActive(index);
	if(direction)
		AnimateFromLeft(activeArticle, 0);
	else
		AnimateFromRight(activeArticle, 0);
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

function AnimateFromLeft(article, progress)
{
	const animationDelta = 0.02;
	
	if(progress >= 1)
		progress = 1;
	
	let t = 1-Math.pow(1-progress, 3);
	article.element.style.opacity = '' + (t);
	article.element.style.left = '' + (t-1)*200 + 'px';
	
	if(progress < 1)
		animationInTimeout = setTimeout(() => {
			AnimateFromLeft(article, progress + animationDelta);
		},15);
}

function AnimateToRight(article, progress)
{
	const animationDelta = 0.1;
	
	if(progress >= 1)
		progress = 1;
	
	let t = 1-Math.pow(1-progress, 3);
	article.element.style.opacity = '' + (1 - t);
	article.element.style.left = '' + (t)*100 + 'px';
	
	if(progress < 1)
		animationOutTimeout = setTimeout(() => {
			AnimateToRight(article, progress + animationDelta);
		},15);
	else
		article.Deactivate();
}

function AnimateFromRight(article, progress)
{
	const animationDelta = 0.02;
	
	if(progress >= 1)
		progress = 1;
	
	let t = 1-Math.pow(1-progress, 3);
	article.element.style.opacity = '' + (t);
	article.element.style.left = '' + (-t+1)*200 + 'px';
	
	if(progress < 1)
		animationInTimeout = setTimeout(() => {
			AnimateFromRight(article, progress + animationDelta);
		},15);
}

function AnimateToLeft(article, progress)
{
	const animationDelta = 0.1;
	
	if(progress >= 1)
		progress = 1;
	
	let t = 1-Math.pow(1-progress, 3);
	article.element.style.opacity = '' + (1 - t);
	article.element.style.left = '' + (-t)*100 + 'px';
	
	if(progress < 1)
		animationOutTimeout = setTimeout(() => {
			AnimateToLeft(article, progress + animationDelta);
		},15);
	else
		article.Deactivate();
}

Setup();