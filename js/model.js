var QuestionList = function(){
	this.questions ={'strong':'Do you like your drinks strong?',
					  'salty':'Do you like it with a salty tang?',
					  'bitter':'Are you a lubber who likes it bitter?',
					  'sweetness':'Would you like a bit of sweetness with your poison?',
					  'fruity':'Are you one for a fruity finish?'};
	};

var Pantry = function(){
	this.ingredients = {'strong':['Glug of rum','slug of whisky','splash of gin'],
				   'salty':['Olive on a stick','salt-dusted rim','rasher of bacon'],
				   'bitter':['Shake of bitters','splash of tonic','twist of lemon peel'],
				   'sweeet':['Sugar cube','spoonful of honey','splash of cola'],
				   'fruity':['Slice of orange','dash of cassis','cherry on top']
				   };
				   
	this.drink = [];	
	pantryObj = this;		   
	this.makeDrink = function(prefList){
		$.each(prefList,function(index,value){
			var prefOptions = pantryObj.ingredients[value];
			pantryObj.drink.push(prefOptions[Math.floor((Math.random() * 3))]);
		});
		return pantryObj.drink;
	};
};				   
