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

const rehab = document.getElementById("rehab");
const meds = document.getElementById("meds");
const btnReset = document.getElementById("btn1");
const btnSubmit = document.getElementById("btn2");


function addCheckedValues(elements) {
    return [...elements].filter(el => el.checked)
        .map(el => parseFloat(el.value))
        .reduce((acc,curr) => acc + curr,0)
}

function formatDisplayCost(element,cost){
    element.innerText = `$${cost.toFixed(2)}`
}

function calculateHealthCareCharges() {
    const diagnostics = document.getElementsByName("diagnostics")
    const care_level = document.getElementsByName("care_level")
    const lab_tests = document.getElementsByName("lab_tests");
    const [levelOfCarEl, diagEl, labTestsEl, medRehabEl] = document.getElementsByClassName("costs")
    const totalCostsEl = document.getElementById("cost5");

    try {
        const medAndRehabCost =  validateAndMedRehabCosts(rehab, meds)
        const careLevelCost = addCheckedValues(care_level)
        const diagnosticsCost = addCheckedValues(diagnostics)
        const labTestsCost = addCheckedValues(lab_tests)
        const totalCost = careLevelCost + diagnosticsCost + labTestsCost + medAndRehabCost
        formatDisplayCost(levelOfCarEl,careLevelCost)
        formatDisplayCost(medRehabEl,medAndRehabCost)
        formatDisplayCost(diagEl,diagnosticsCost)
        formatDisplayCost(labTestsEl,labTestsCost)
        formatDisplayCost(totalCostsEl,totalCost)
        rehab.innerText = " ";
        meds.innerText = " ";
    } catch (error) {
        alert(error)
    }
}


function validateAndMedRehabCosts(rehab, meds) {
    if (meds.value === "") {
        throw "Cost of meds textbox is empty. please enter a numeric value or 0 if there is no med charges";
    }
    if (isNaN(meds.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }
    if (rehab.value === "") {
        throw "Cost of rehab textbox is empty. please enter a numeric value or 0 if there is no med charges";

    }
    if (isNaN(rehab.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }
    return parseFloat(rehab.value) + parseFloat(meds.value)
}

function clearInputsOutputs() {
    rehab.innerHTML = " ";
    meds.innerHTML = " ";
}

function displayHealthAdvice() {
    const health_tips = document.getElementById("health_tips");
    const shuffledHealthTips = [...HealthTips].sort(()=> 0.5 - Math.random()).slice(0,5)
    shuffledHealthTips.forEach(tip => {
        health_tips.innerHTML += `<div>${tip}</div>`
    })
}

displayHealthAdvice()
btnReset.addEventListener("click", clearInputsOutputs);
btnSubmit.addEventListener("click", calculateHealthCareCharges);
