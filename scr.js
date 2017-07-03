class chars {
		constructor(id, letters, word) {
			this.id = id;
			this.letters = letters;
			this.word = word;
		}
		toBubble() {
			return '<figure><div  class="id ins">object ID: '+this.id +'</div><br/> chars:  ' + this.letters + '<br/>word: <b> ' + this.word  +'</b></figure>';
		}
	}
	function reset(){
		var reset = document.getElementById('odp');
		reset.innerHTML ="";
		document.getElementById('myText').value="";
		document.getElementById('topStripe').innerHTML = '';

	}
	function licz(){
		var text = document.getElementById('myText').value;
		document.getElementById('odp').innerHTML = '';
		var words = text.split(" ");
		var bubbles = new Array(words.length);
		for(var i = 0 ; i< words.length; i++){
			bubbles[i] = new chars(i, words[i].length, words[i]);
			document.getElementById('odp').innerHTML += bubbles[i].toBubble();
			document.getElementById('topStripe').innerHTML = words.length + ' words';

			}
	}
	document.addEventListener('DOMContentLoaded', function(){ 
		document.getElementById('ok').addEventListener('click' , licz);
		document.getElementById('reset').addEventListener('click' , reset);
	}, false);