class Article {
	constructor(index, element) {
		this.index = index;
		this.element = element;
	}
	
	SetActive() {
		this.element.classList.add("active");
	}
	
	Deactivate() {
		this.element.classList.remove("active");
	}
}