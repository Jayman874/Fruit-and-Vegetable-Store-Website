/* Register function which detects if an email has been given then displays text*/
function register() {
	let x = document.forms["confirm"]["email"].value; // gets the forms value
	if (x != ""){
		alert("Thank you for your email");
		alert("You will recieve regular updates about our products and services");
	} else {
		alert("No email given");
	}
}
/* Unregister function which detect if an email has been given then displays text*/
function unregister() {
	let x = document.forms["confirm"]["email"].value; // gets the forms value
	if (x != ""){
		alert("You will no longer recieve regular updates about our products and services");
	} else {
		alert("No email given");
	}
}

/* This function calculates thetotal cost of items and the amount of items in the cart*/
function costOfCart() {
	let total = 0;
	let items = 0;
	// gets number of each item selected for all fruits and vegetables from html form 
	let bananas = document.forms["order"]["bananas"].value;
	let apples = document.forms["order"]["apples"].value;
	let mangoes = document.forms["order"]["mangoes"].value;
	let oranges = document.forms["order"]["oranges"].value;
	let carrots = document.forms["order"]["carrots"].value;
	let potatoes = document.forms["order"]["potatoes"].value;
	let lettuce = document.forms["order"]["lettuce"].value;
	let pumpkins = document.forms["order"]["pumpkins"].value;
	total = (bananas*0.80)+(apples*0.50)+(mangoes*2.00)+(oranges*1.00)+(carrots*1.10)+(potatoes*0.90)+(lettuce*1.20)+(pumpkins*3.00)+10; // total cost of cart
	items += Number(bananas)+Number(apples)+Number(mangoes)+Number(oranges)+Number(carrots)+Number(potatoes)+Number(lettuce)+Number(pumpkins); // total items
	if (bananas == ""){bananas = 0;}
	if (apples == ""){apples = 0;}
	if (mangoes == ""){mangoes = 0;}
	if (oranges == ""){oranges = 0;}
	if (carrots == ""){carrots = 0;}
	if (potatoes == ""){potatoes = 0;}
	if (lettuce == ""){lettuce = 0;}
	if (pumpkins == ""){pumpkins = 0;}
	//displays items and cost directly to html
	document.getElementById("totalbananas").innerHTML = (bananas + " - Bananas").bold();
	document.getElementById("totalapples").innerHTML = (apples + " - Apples").bold();
	document.getElementById("totalmangoes").innerHTML = (mangoes + " - Mangoes").bold();
	document.getElementById("totaloranges").innerHTML = (oranges + " - Oranges").bold();
	document.getElementById("totalcarrots").innerHTML = (carrots + " - Carrots").bold();
	document.getElementById("totalpotatoes").innerHTML = (potatoes + " - Potatoes").bold();
	document.getElementById("totallettuce").innerHTML = (lettuce + " - Lettuces").bold();
	document.getElementById("totalpumpkins").innerHTML = (pumpkins + " - Pumpkins").bold();
	document.getElementById("items").innerHTML = ("Number of items in cart: " + items).bold();
	document.getElementById("shipping").innerHTML = ("Shipping: $10").bold();
	document.getElementById("value").innerHTML = ("Total cost of cart: $" + total.toFixed(2)).bold();
	if (!validate()){event.preventDefault();} // stops input fields from clearing after submit push if user has not payed now
	return;
}

/* Validate function detects whether all input fields have been entered */
function validate() {
	let email = document.forms["pay"]["emailpayment"].value;
	let cardNumber = document.forms["pay"]["cardnumber"].value;
	let nameOnCard = document.forms["pay"]["nameoncard"].value;
	let cvc = document.forms["pay"]["cvc"].value;
	if (email == ""){return false;} 
	if (cardNumber == ""){return false;} 
	if (nameOnCard == ""){return false;} 
	if (cvc == ""){return false;} 
	if (email != "" && cardNumber != "" && nameOnCard != "" && cvc != ""){return true;}
	return false;
}

/* Pay now function alerts the user if required input fields are empty*/
function payNow() {
	let num = 0;
	let email = document.forms["pay"]["emailpayment"].value;
	let cardNumber = document.forms["pay"]["cardnumber"].value;
	let nameOnCard = document.forms["pay"]["nameoncard"].value;
	let cvc = document.forms["pay"]["cvc"].value;
	if (email == ""){
		alert("No email given");
	} 
	if (cardNumber == ""){
		alert("No card number given");
	} 
	if (nameOnCard == ""){
		alert("No name on card given");
	} 
	if (cvc == ""){
		alert("No security code given");
	} 
	if (email != "" && cardNumber != "" && nameOnCard != "" && cvc != ""){
		num = 1;
		alert("Payment recieved order of will arrive in the next 10 working days");
	}
	if (num == 0){
		alert("Payment Unsuccessful");
	}
}

/* displays all fruits availiable for sale*/
function displayFruit(){
	document.getElementById("img1").src = "bananas.jpg";
	document.getElementById("img2").src = "apples.jpg"
	document.getElementById("img3").src = "mangoes.jpg";
	document.getElementById("img4").src = "oranges.jpg";
	document.getElementById("produce1").innerHTML = "Bananas - $0.80 each";
	document.getElementById("produce2").innerHTML = "Apples - $0.50 each";
	document.getElementById("produce3").innerHTML = "Mangoes - $2.00 each";
	document.getElementById("produce4").innerHTML = "Oranges - $1.00 each";
}

/* displays all vegetables availiable for sale */
function displayVegetables(){
	document.getElementById("img1").src = "carrots.jpg";
	document.getElementById("img2").src = "potatoes.jpg"
	document.getElementById("img3").src = "lettuces.jpg";
	document.getElementById("img4").src = "pumpkins.jpg";
	document.getElementById("produce1").innerHTML = "Carrots - $1.10 each";
	document.getElementById("produce2").innerHTML = "Potatoes - $0.90 each";
	document.getElementById("produce3").innerHTML = "Lettuce - $1.20 each";
	document.getElementById("produce4").innerHTML = "Pumpkins - $3.00 each";
}

/* displays and undisplays answers to faq questions */
function displayAnswer(clicked){
	// checks if id passed through function matches any of the id's specified then displays the right text
	if (clicked == "b1"){
		document.getElementById("answer1").innerHTML = "Answer: All of our produce is obtained in a responsible and sustainable way to ensure that it is ethically sourced. This means that the workers invloved in picking all of our products are treated fairly and we do not harm the enviroment during the collection process";
	} else if (clicked == "b2"){
		document.getElementById("answer2").innerHTML = "Answer: All of the produce that we sell is 100% organic. This means that all of our produce is produced by methods which comply to the standards of organic farming which meaning we cycle resources, promote ecological balance and conserve biodiversity";
	} else if (clicked == "b3"){
		document.getElementById("answer3").innerHTML = "Answer: Your order should arrive within 10 working days of purchase between the times specified on the Products and Services Page";
	} else if (clicked == "b4"){
		document.getElementById("answer4").innerHTML = "Answer: If you do not receive your order in the appropriate amount of working days our contact information is located at the bottom of our Homepage";
	} else if (clicked == "b5"){
		document.getElementById("answer5").innerHTML = "Answer: We accept returns for any produce which has been damaged. If you think you fall under this category email us a picture of the unsatisfactory goods and we will send back a full refund";
	} else if (clicked == "b6"){
		document.getElementById("answer6").innerHTML = "Answer: Located on our Register and Buy page is an unregister button where you can put in your email and press the unregister button to no longer recieve emails from us";
	} else if (clicked == "b7"){
		document.getElementById("answer7").innerHTML = "Answer: Shipping cost is a standard is $10 for all of the wellington region";
	} else if (clicked == "-b1"){
		document.getElementById("answer1").innerHTML = "";
	} else if (clicked == "-b2"){
		document.getElementById("answer2").innerHTML = "";
	} else if (clicked == "-b3"){
		document.getElementById("answer3").innerHTML = "";
	} else if (clicked == "-b4"){
		document.getElementById("answer4").innerHTML = "";
	} else if (clicked == "-b5"){
		document.getElementById("answer5").innerHTML = "";
	} else if (clicked == "-b6"){
		document.getElementById("answer6").innerHTML = "";
	} else if (clicked == "-b7"){
		document.getElementById("answer7").innerHTML = "";
	}
}