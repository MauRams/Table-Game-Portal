	var p1 = "Player 1";
	var p2 = "Player 2";
	
	var player = 1;//set player

	function clickBtn(btn){//action for when button is clicked

		if(player ==1){
		document.getElementById(btn).value = "X";
		document.getElementById(btn).style.color="blue";
		document.getElementById(btn).disabled = "disabled";
		
		player -=1;
		winner();
	}else{
		document.getElementById(btn).value = "O";
		document.getElementById(btn).style.color="orange";
		document.getElementById(btn).disabled = "disabled";
		player +=1;
		winner();
	}
};

function winner(winner){//determine the winning conditions 

	
	if(document.getElementById("btn1").value == "X" &&
		document.getElementById("btn2").value == "X" &&
		document.getElementById("btn3").value == "X" ||
		document.getElementById("btn4").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn6").value == "X" ||
		document.getElementById("btn7").value == "X" &&
		document.getElementById("btn8").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn1").value == "X" &&
		document.getElementById("btn4").value == "X" &&
		document.getElementById("btn7").value == "X" ||
		document.getElementById("btn2").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn8").value == "X" ||
		document.getElementById("btn3").value == "X" &&
		document.getElementById("btn6").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn1").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn9").value == "X" ||
		document.getElementById("btn3").value == "X" &&
		document.getElementById("btn5").value == "X" &&
		document.getElementById("btn7").value == "X"
		){
		alert(p1 + " WINS!!");
		reset();//manually refresh the page
		
		}else if(document.getElementById("btn1").value == "O" &&
		document.getElementById("btn2").value == "O" &&
		document.getElementById("btn3").value == "O" ||
		document.getElementById("btn4").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn6").value == "O" ||
		document.getElementById("btn7").value == "O" &&
		document.getElementById("btn8").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn1").value == "O" &&
		document.getElementById("btn4").value == "O" &&
		document.getElementById("btn7").value == "O" ||
		document.getElementById("btn2").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn8").value == "O" ||
		document.getElementById("btn3").value == "O" &&
		document.getElementById("btn6").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn1").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn9").value == "O" ||
		document.getElementById("btn3").value == "O" &&
		document.getElementById("btn5").value == "O" &&
		document.getElementById("btn7").value == "O"
		){	alert(p2 + " WINS!!");
			reset();//manually refresh the page
			
		}
		// if(winner()){
		// countScore();
		// }
		}
		
		//how to count the wins of each player? Set up logic for game is in conflict with this function
		
		// 	function countScore(win){
					
		// 		var wins = 0;
		// 		if(win === p1 ){
		// 		wins +=1;
		// 		document.getElementById('#p1').innerHTML = wins;
				
			
		// 	}else if(win === p2){
		// 		wins +=1;
		// 		document.getElementById('#p2').innerHTML = wins;
		// 	}
		// }
			
			


function reset(btn){
		
		window.location.href='javascript:layerChange("tictactoe")';
		// $('btn').reload();

	}
