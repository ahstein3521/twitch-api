class UserList {

	constructor() {
        this.selected = [];
        this.total = [];      
	}

	init(arr){
		this.selected = arr;
		this.total = arr;
	}

	filterByCategory(category) {
		if (category == "All") {
			this.selected = this.total.slice();
		} else {
			this.selected = this.total.filter(user => user.statusCode == category);
		}
	}
}





