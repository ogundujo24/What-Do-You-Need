
var submitBtn = document.getElementById("submitBtn");

	function submitClick() {
		var firebaseRef = firebase.database().ref();
		var messageText = $(mainText).val()
var mainText = document.getElementById("mainText").value;
		firebaseRef.push().set(mainText);
		location.reload()
	}
