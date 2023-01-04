//health tips Array
// alert("hey");
const HealthTips = ["Eat a healthy diet",
    "Consume less salt and sugar",
    "Reduce intake of harmful fats",
    "Avoid harmful use of alcohol",
    "Don't smoke or do drugs",
    "Be active",
    "Check your blood pressure regularly",
    "Have regular check-ups",
    "Prepare your food correctly",
    "Clean your hands properly",
    "Take antibiotics only as prescribed",
    "Talk to someone you trust if you're feeling down",
    "Practice safe sex",
    "Avoid processed junk food",
    "Don’t drink sugar calories",
    "Eat fatty fish",
    "Get enough sleep",
    "Take care of your gut health with probiotics and fiber",
    "Drink some water, especially before meals",
    "Don’t overcook or burn your meat",
    "Avoid bright lights before sleep",
    "Take vitamin D3 if you don’t get much sun exposure",
    "Eat vegetables and fruits",
    "Make sure to eat enough protein",
    "Do some cardio",
    "Use extra virgin olive oil",
    "Don’t eat a lot of refined carbs",
    "Lift heavy things",
    "Avoid artificial trans fats",
    "Use plenty of herbs and spices",
    "Take care of your relationships"];


let btnReset = document.getElementById("btn1");
let btnSubmit = document.getElementById("btn2");
let health_tips = document.getElementById("health_tips");



function getCareLevelCost(care_levels) {
    let cost = 0
    for (let level of care_levels) {
        if (level.checked) {
            cost = parseFloat(level.value)
        }
    }
    return cost
}

function addDiagnostics(diagnostics) {
    let cost = 0

        for (let i = 0; i < diagnostics.length; i++) {
            if (diagnostics[i].checked) {
                cost += parseFloat(diagnostics[i].value)

            }
        }
    return cost
}

function addLabTest(labTests){
    let cost = 0
    for (let i = 0; i < labTests.length; i++) {
        if (labTests[i].checked) {
            cost += parseFloat(labTests[i].value)
        }

    }
    return cost
}
function calculateHealthCareCharges() {
    let diagnostics = document.getElementsByName("diagnostics")
    let care_level = document.getElementsByName("care_level")
    let lab_tests = document.getElementsByName("lab_tests");
    let [levelOfCarEl,diagEl,LabTestEl,medRehabEl] = document.getElementsByClassName("costs")
    let rehab = document.getElementById("rehab");
    let meds = document.getElementById("meds");
    let tot = document.getElementById("cost5");

    try {

        validateInputs(rehab,meds)
        const careLevelCost = getCareLevelCost(care_level)
        const diagnosticsCost = addDiagnostics(diagnostics)
        const labTestsCost = addLabTest(lab_tests)
        const medAndRehabCost = parseFloat(rehab.value) + parseFloat(meds.value)
        const  totalCost = careLevelCost + diagnosticsCost + labTestsCost + medAndRehabCost

        tot.innerHTML = `$${totalCost.toFixed(2)}`;

        levelOfCarEl.innerHTML = `$}`


       // chargesSummary.innerHTML = "The total cost is: $" + totalCost.toFixed(2);

    } catch (error) {
        alert(error)
    }
}


function validateInputs(rehab,meds) {
    if (meds.value === "") {
        throw "Cost of meds textbox is empty. please enter a numeric value or 0 if there is no med charges";

    }
    if (isNaN(meds.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }
    if (rehab.value === "") {
        throw "Cost of meds textbox is empty. please enter a numeric value or 0 if there is no med charges";

    }
    if (isNaN(rehab.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }


}

function clearInputsOutputs() {
    rehab.innerHTML = " ";
    meds.innerHTML = " ";
    lab_tests = " ";

}

function displayHealthAdvice() {

}

btnReset.addEventListener("click", clearInputsOutputs);
btnSubmit.addEventListener("click", calculateHealthCareCharges);
