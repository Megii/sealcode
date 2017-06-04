    
		var date = document.getElementById('date');
		var daysOfWeek = ['niedziela','poniedziałek', 'wtorek', 'środa', 'czwartek',
		'piątek', 'sobota'];
		var months = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja',
		'czerwca', 'lipca', 'sierpnia', 'wrzesienia', 'października',
		'listopada', 'grudnia'];

		var d = new Date();
		var days = daysOfWeek[d.getDay()];
		var month = months[d.getMonth()];
		var day = d.getDate();
		var year = d.getFullYear();
		date.innerHTML = days + " " + day +" " + month +" "+ year;

	
		var tabList = [];
		var tabLength = 0;
		var list = document.getElementById('list');
		
		function reload(){
			
			document.getElementById("text").value = '';	

			while(list.firstChild){				
				list.removeChild(list.firstChild);}
			
			if(tabLength != 0){							
													
			for (var i=0; i<tabLength; i++){
					var newElement = document.createElement('li');			
					var newText = document.createTextNode(tabList[i].tekst);	

					var position = list;										
					
					var	newButton = document.createElement('button');			
					newButton.setAttribute('class', 'delete'); 
					newButton.textContent = 'Zrobione';
					newButton.setAttribute('id', i);
					newButton.onclick = del;
					
					
					newElement.appendChild(newButton);			
					newElement.appendChild(newText);							
					position.appendChild(newElement);							
				}
			}
		}

		function add(){
			var input = document.getElementById("text").value;
				tabList[tabLength] = {tekst: input};
				tabLength++;
			reload();
		}

		function del(){
			tabList.splice(this.id,1);
			tabLength--;
			reload();
		}

		
		document.onload = reload();