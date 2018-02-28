class ArticleNav {
	constructor(element) {
		this.element = element;
		this.items = element.getElementsByTagName("li");
		
		this.activeIndex = 0;
	}
	
	SetActive(index) {
		this.items[this.activeIndex].classList.remove('active');
		this.activeIndex = index;
		this.items[this.activeIndex].classList.add('active');
	}
}