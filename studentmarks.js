function createInputs() {
    var numSubjects = document.getElementById("numSubjects").value;
    var marksSection = document.getElementById("marksSection");

    // Clear any old input fields or results
    marksSection.innerHTML = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("resultsDiv").innerHTML = "";

    if (numSubjects <= 0 || isNaN(numSubjects)) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    // Create inputs for the marks
    for (var i = 0; i < numSubjects; i++) {
        var label = document.createElement("label");
        label.textContent = "Enter marks for Subject " + (i + 1) + ": ";
        marksSection.appendChild(label);

        var input = document.createElement("input");
        input.type = "number";
        input.id = "marks" + i;
        marksSection.appendChild(input);

        var lineBreak = document.createElement("br");
        marksSection.appendChild(lineBreak);
    }

    document.getElementById("calculateButton").style.display = "block";
}

function calculateMarks() {
    var numSubjects = document.getElementById("numSubjects").value;
    var totalMarks = 0;
    var resultsDiv = document.getElementById("resultsDiv");

    // Go through each subject and get the marks
    for (var i = 0; i < numSubjects; i++) {
        var marks = document.getElementById("marks" + i).value;
        marks = parseInt(marks);

        if (isNaN(marks)) {
            alert("Please enter valid marks for Subject " + (i + 1));
            return;
        }

        totalMarks += marks;
        
        // Display the marks for each subject
        var p = document.createElement("p");
        p.textContent = "Subject " + (i + 1) + ": " + marks;
        resultsDiv.appendChild(p);
    }

    var average = totalMarks / numSubjects;
    
    // Display total and average marks
    var totalPara = document.createElement("p");
    totalPara.textContent = "Total Marks: " + totalMarks;
    resultsDiv.appendChild(totalPara);

    var averagePara = document.createElement("p");
    averagePara.textContent = "Average Marks: " + average.toFixed(2);
    resultsDiv.appendChild(averagePara);

    // Show the results section
    document.getElementById("results").style.display = "block";
}
