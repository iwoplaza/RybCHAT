class ArticleNav {
	constructor(element) {
		this.element = element;
		this.items = element.getElementsByTagName("li");
		
		let i = 0;
		for(let el of this.items) {
			el.index = i;
			el.onclick = () => {
				SelectArticle(el.index);
			};
			i++;
		}
		
		this.activeIndex = 0;
	}
	
	SetActive(index) {
		this.items[this.activeIndex].classList.remove('active');
		this.activeIndex = index;
		this.items[this.activeIndex].classList.add('active');
	}
}