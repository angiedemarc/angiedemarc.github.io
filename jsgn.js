
function getGrade (given1, given2, otherGiven, otherMax, otherP){
		var temp = otherGiven/otherMax;
		temp *= otherP;
		return given1 + given2 + temp;
	}

	function checkForm(form)
	{	
	//there are a few problems: it will never say you need a 0 to get an A/B/etc. and it will not tell you you're going to fail no matter what
		var finalForm = givenForm.value/maxForm.value;
		var finalHW = givenHW.value/maxHW.value;
		var finalSumm = givenSumm.value/maxSumm.value;
		var formP;
		var hwP;
		var summP;
		var addedPts = assignPoints.value;
		var webName = "https://angiedemarc.github.io/gradeNeededResults.html?";
		
		
		if (document.getElementById("form0").checked){
			finalForm = 0;
			formP = 0;
		}
		else if (document.getElementById("form10").checked){
			finalForm *= 10;
			formP = 10;
		}
		else if (document.getElementById("form40").checked){
			finalForm *= 40;
			formP = 40;
		}
		else if (document.getElementById("form50").checked){
			finalForm *= 50;
			formP = 50;
		}
		else if (document.getElementById("form100").checked){
			finalForm *= 100;
			formP = 100;
		}
		else if (document.getElementById("otherPerForm").checked){
			finalForm *= parseFloat(otherForm.value);
			formP = parseFloat(otherForm.value);
		}
		
		if (document.getElementById("hw0").checked){
			finalHW = 0;
			hwP = 0;
		}
		else if (document.getElementById("hw10").checked){
			finalHW *= 10;
			hwP = 10;
		}
		else if (document.getElementById("hw40").checked){
			finalHW *= 40;
			hwP = 40;
		}
		else if (document.getElementById("hw50").checked){
			finalHW *= 50;
			hwP = 50;
		}
		else if (document.getElementById("hw100").checked){
			finalHW *= 100;
			hwP = 100;
		}
		else if (document.getElementById("otherPerHW").checked){
			finalForm *= parseFloat(otherHW.value);
			formP = parseFloat(otherHW.value);
		}
		
		if (document.getElementById("summ0").checked){
			finalSumm = 0;
			summP = 0;
		}
		else if (document.getElementById("summ10").checked){
			finalSumm *= 10;
			summP = 10;
		}
		else if (document.getElementById("summ40").checked){
			finalSumm *= 40;
			summP = 40;
		}
		else if (document.getElementById("summ50").checked){
			finalSumm *= 50;
			summP = 50;
		}
		else if (document.getElementById("summ100").checked){
			finalSumm *= 100;
			summP = 100;
		}
		else if (document.getElementById("otherPerSumm").checked){
			finalForm *= parseFloat(otherSumm.value);
			formP = parseFloat(otherSumm.value);
		}
		
		var i;
		var grade;
		var lowA;
		var lowB;
		var lowC;
		var lowD;
		var maxPts;
		var plusI;

		if(document.getElementById("radioForm").checked) {
			maxPts = parseFloat(maxForm.value) + parseFloat(addedPts);
			for (i = addedPts; i>0; i--){
				plusI = parseFloat(givenForm.value) + parseInt(i);
				grade = getGrade(finalHW, finalSumm, plusI, maxPts, formP);
				if (grade >= 89.5){
					lowA = i;
					if (getGrade(finalHW, finalSumm, plusI - 1, maxPts, formP) < 89.5){
						webName += "lowA=" + lowA + "&";
					}
				}
				if (grade < 89.5 && grade>=79.5) {
                    lowB = i;
					if (getGrade(finalHW, finalSumm, plusI - 1, maxPts, formP) < 79.5){
						webName += "lowB=" + lowB + "&";
					}
				}
                if (grade < 79.5 && grade>=69.5) {
                    lowC = i;
					if (getGrade(finalHW, finalSumm, plusI - 1, maxPts, formP) < 69.5){
						webName += "lowC=" + lowC + "&";
					}
				}
                if (grade < 69.5 && grade>=59.5) {
                    lowD = i;
					if (getGrade(finalHW, finalSumm, plusI - 1, maxPts, formP) < 59.5){
						webName += "lowD=" + lowD + "&";
					}
				}
                if (grade < 59.5) {
                    i = 0;
                }
			}
		}
		else if(document.getElementById("radioHW").checked) {
			maxPts = parseFloat(maxHW.value) + parseFloat(addedPts);
			for (i = addedPts; i>0; i--){
				plusI = parseFloat(givenHW.value) + parseInt(i);
				grade = getGrade(finalForm, finalSumm, plusI, maxPts, hwP);
				if (grade >= 89.5){
					lowA = i;
					if (getGrade(finalForm, finalSumm, plusI - 1, maxPts, hwP) < 89.5){
						webName += "lowA=" + lowA + "&";
					}
				}
				else if (grade>=79.5) {
                    lowB = i;
					if (getGrade(finalForm, finalSumm, plusI - 1, maxPts, hwP) < 79.5){
						webName += "lowB=" + lowB + "&";
					}
				}
                else if (grade>=69.5) {
                    lowC = i;
					if (getGrade(finalForm, finalSumm, plusI - 1, maxPts, hwP) < 69.5){
						webName += "lowC=" + lowC + "&";
					}
				}
                else if (grade>=59.5) {
                    lowD = i;
					if (getGrade(finalForm, finalSumm, plusI - 1, maxPts, hwP) < 59.5){
						webName += "lowD=" + lowD + "&";
					}
				}
                else {
                    i = 0;
                }
			}
		}
		else if (document.getElementById("radioSumm").checked){
			maxPts = parseFloat(maxSumm.value) + parseFloat(addedPts);
			for (i = addedPts; i>0; i--){
				plusI = parseFloat(givenSumm.value) + parseInt(i);
				grade = getGrade(finalHW, finalForm, plusI, maxPts, summP);
				if (grade >= 89.5){
					lowA = i;
					if (getGrade(finalHW, finalForm, plusI - 1, maxPts, summP) < 89.5){
						webName += "lowA=" + lowA + "&";
					}
				}
				else if (grade>=79.5) {
                    lowB = i;
					if (getGrade(finalHW, finalForm, plusI - 1, maxPts, summP) < 79.5){
						webName += "lowB=" + lowB + "&";
					}
                }
                else if (grade>=69.5) {
                    lowC = i;
					if (getGrade(finalHW, finalForm, plusI - 1, maxPts, summP) < 69.5){
						webName += "lowC=" + lowC + "&";
					}
                }
                else if (grade>=59.5) {
                    lowD = i;
					if (getGrade(finalHW, finalForm, plusI - 1, maxPts, summP) < 59.5){
						webName += "lowD=" + lowD + "&";
					}
                }
                else {
                    i = 0;
                }
			}
		}
		var myWindow = window.open(webName);
		}
	
