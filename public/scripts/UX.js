const DefaultUserList = [
	'medrybw', "realmaddox", "freecodecamp", "nightblue3", "syndicate", 
   	"riotgames", "RobotCaleb", "imaqtpie", "esl_csgo", "sodapoppin",
   	"Edward Sn0wden"];


$(document).ready(() => {
	
	const userlist = new UserList();

	const render = () => {		
		const html = userlist.selected.reduce((a,b) => a + ListItem(b) , "")
		$(".list-group").html(html)
	};
    
    (function(){
    	Promise.all( DefaultUserList.map(v => fetchUser(v)))
    		.then(data => userlist.init(data))
    		.then(() => render())
    })()
	
	
	$("ul.nav-tabs li").on("click", function(){
		
		const category = $(this).data("select");

		if(!$(this).hasClass("active")){
			$(".active").removeClass("active");
			$(this).addClass("active");

		userlist.filterByCategory(category)

		render();
		
		}

	})//Tab selected
	
	
	$("form.form-inline").on("input", function(e){
		var query = new RegExp(e.target.value.trim(), "gi");

		$(".list-group-item").each( function(){
			if(query.test($(this).data("user"))) $(this).show();
			else $(this).hide();
		})
	})//Filter user by name
})


