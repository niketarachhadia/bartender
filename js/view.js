var View = function(questionList,pantry){
	this.questionList = questionList;
	this.pantry = pantry;
	this.questionsContainer = $('ul');
	viewObj = this;
	this.prefList=[];
	this.displayQuestion = function(){
		this.questionsContainer.empty();
		$.each(questionList.questions,function(index,question){
			var li = $('<li>'+question+'</li>'+
				'<input type="radio" id="'+index+'yes" name="'+index+'" value="no" checked>No</input>'+
				'<input type="radio" id="'+index+'no" name="'+index+'" value="yes"/>Yes</input>');
			viewObj.questionsContainer.append(li);
			$("input[name="+index+"]").click(function(event){
				var userAnswer = $('input:checked').val();
				if(userAnswer === 'yes'){					
					viewObj.prefList.push(index);
				}
			});
		});	
	};
	this.displayQuestion();

	$('#make-drink').click(function(){
			
			var drinkList = viewObj.pantry.makeDrink(viewObj.prefList);
			var drink = drinkList.join();

			$('#drink').text(drink);
		
	});
};


