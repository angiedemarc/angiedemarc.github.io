var numGroups = 0;
var currentGroup = 1;
var grade = 0.0;
var totalPct = 0;

function submitClicked(){
  if (numGroups == 0){
    numGroups = document.getElementById("numGroups").value;
    document.getElementById("numGroupsP").style.visibility = "hidden";
    document.getElementById("numGroups").style.visibility = "hidden";
  }
  if (currentGroup <=numGroups){
	addToGrade();
  }
  
  if (currentGroup < numGroups){
	  updateCount();
  }
  else if (numGroups == currentGroup){
	  displayGrade();
	  updatePage();
  }
  else{
	  findScore();
  }
}

function findScore(){
	var pts = document.getElementById("ptsEarned").value;
	var ptsPos = document.getElementById("ptsPossible").value;
	var aPts = document.getElementById("ptsPossibleA").value;
	var gradeDesired = document.getElementById("gradeDesired").value;
	var score = 0;
	var cont = true;
	var newGrade;
	var pct;
	pct=parseFloat(document.getElementById("otherImpact").value);
	
	if (ptsPos != 0){
		grade -= pts/ptsPos * (pct/totalPct);
	}
	else {
		grade = (grade/100) * totalPct;
		totalPct += pct;
	}
	grade = (grade/totalPct) * 100;
	
	ptsPos += aPts;
	
	while (cont == true){
		newGrade = grade + (((pts+score)/ptsPos) * (pct/totalPct)) * 100;
		
		if (newGrade < gradeDesired){
			score++;
		}
		else{
			cont = false;
		}
	}
	document.getElementById("assignment").innerHTML = "You need to get a " + score + " out of " + aPts + " to get a " + gradeDesired;
	
}

function updatePage(){
	currentGroup++;
	document.getElementById('ptsEarnedP').innerHTML = "Points earned for the group the assignment is in: ";
	document.getElementById('ptsPossibleP').innerHTML = "Total possible points for the group the assignment is in (before assignment):";
	document.getElementById("ptsPossibleA").style.visibility = "visible";
    document.getElementById("ptsPossibleAP").style.visibility = "visible";
	document.getElementById("gradeDesired").style.visibility = "visible";
	document.getElementById("gradeDesiredP").style.visibility = "visible";
}

function updateCount(){
	currentGroup++;
	document.getElementById('ptsEarned').value = "";
	document.getElementById('ptsPossible').value = "";
	document.getElementById('ptsEarnedP').innerHTML = "Points earned for group " + currentGroup + ":";
	document.getElementById('ptsPossibleP').innerHTML = "Total possible points for group " + currentGroup + ":";
}

function addToGrade(){
	var pts = document.getElementById("ptsEarned").value;
	var ptsPos = document.getElementById("ptsPossible").value;
	var pct;
	pct=parseFloat(document.getElementById("otherImpact").value);
	
	if (ptsPos != 0){
		totalPct += pct;
		grade += (pts/ptsPos) *pct;
	}
	displayGrade();
}

function displayGrade(){
	tempGrade = (grade/totalPct) * 100;
	alert("grade: " + grade + "totalPCT" + totalPct);
	document.getElementById("grade").innerHTML = "Your grade is: " + tempGrade + "%";
}

function percent(){
	document.getElementById("impactP").innerHTML = document.getElementById("otherImpact").value + "%";
}