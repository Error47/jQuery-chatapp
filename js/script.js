		var usrname="";
		function sendmsg(message){

			var prevstate=$("#container").html();
				// console.log(prevstate.length);
				if(prevstate.length>3)
				{
					prevstate=prevstate+"<br>";
				}
			$("#container").html(prevstate+"<span class='current-class'>"+"<span class='bot'>Chatbot:</span>"+"</span>"+message);
			$(".current-class").hide();
			$(".current-class").delay('fast').fadeIn();//fadein by half second time delay
		}
		function username()
		{
			sendmsg("Hello what is your name?");
		}
		function ai(message){
			if(usrname.length<3)
			{
				usrname=message;
				sendmsg("Nice to meet you "+usrname+" ,how are you?");
			}
		}
		$(function(){
			username();
			$("#tbox").keypress(function(event){
				if(event.which == 13)//13 here is for "enter" key code
				{
					if($("#enter").prop("checked"))
					{
						// console.log("Enter pressed checkbox is checked");
						$("#send").click();
						event.preventDefault();//by pressing enter will not create new line when text is already there
					}
				}
			});

			$("#send").click(function(){
				var usrname="<span class='uname'>You: </span>";
				var newmsg=$("#tbox").val();
				$("#tbox").val("");
				var prevstate=$("#container").html();
				if(prevstate.length>3)
				{
					prevstate=prevstate+"<br>";
				}
				$("#container").html(prevstate+usrname+newmsg);
				
				$("#container").scrollTop($("#container").prop("scrollHeight"));
				ai(newmsg);
			});
		});
