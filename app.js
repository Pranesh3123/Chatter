function talk(){
    var know = {
    "Who are you" : "Hello, I am CHATTER ",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Follow & Like.",
    "Your followers" : "I have my family of 5000 members, i don't have follower ,have supportive Famiy ",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon..",
    "FormValidation" : "Loading..."
   };
    var user = document.getElementById('userBox').value;
    if(user == "FormValidation")
    {
        window.location.href='vali.html';
    }
    if(user == "open chrome")
    {
        window.open('http://www.google.com/',"_blank");
    }
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) 
    {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }
    else
    {
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }