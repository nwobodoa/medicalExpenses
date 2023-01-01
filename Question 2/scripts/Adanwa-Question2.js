//health tips Array
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


let rehab = document.getElementById("rehab");
let meds = document.getElementById("meds");
let btnReset = document.getElementById("btn1");
let btnSubmit = document.getElementById("btn2");

let totalCost = 0;

const [levelOfCareCost,diagRadiology,labTests,medsAndRehab] = document.getElementsByClassName("costs")

function calculateHealthCareCharges() {
	let diagnostics = document.getElementsByClassName("diagnostics")
	let care_level = document.getElementsByName("care_level")
	let lab_tests = document.getElementsByName("lab_tests");
	let rehab = document.getElementById("rehab");
	let tot = document.getElementById("cost5");
	try {
        validateInputs()
        for (let i = 0; i < care_level.length; i++) {
            if (care_level[i].checked) {
                cost[0].innerHTML = parseFloat(care_level[i].value);
                totalCost += parseFloat(care_level[i].value);
            }
            for (let i = 0; i < diagnostics.length; i++) {
                if (diagnostics[i].checked) {
                    cost[1].innerHTML = parseFloat(diagnostics[i].value)
                    totalCost += parseFloat(diagnostics[i].value)

                }
            }
            for (let i = 0; i < lab_tests.length; i++) {
                if (lab_tests[i].checked) {
                    cost[2].innerHTML = parseFloat(lab_tests[i].value)
                    totalCost += parseFloat(lab_tests[i].value)
                }

            }
            cost[3].innerHTML = rehab.value;
            totalCost += rehab.value;
            tot.innerHTML = totalCost;


        }
        chargesSummary.innerHTML = "The total cost is: $" + totalCost.toFixed(2);

    } catch (error) {
        alert(error)
    }


}

if (meds.value == "") {
	throw "Cost of meds textbox is empty. please enter a numeric value or 0 if there is no med charges";

}
function validateInputs() {
    if (NaN(meds.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }
    if (rehab.value == "") {
        throw "Cost of meds textbox is empty. please enter a numeric value or 0 if there is no med charges";

    }
    if (NaN(rehab.value)) {
        throw "invalid input. please enter a numeric value or 0 if there is no med charges";
    }



}

function displayRandomHealthTip() {
	const health_tips = document.getElementById("health_tips");
	const shuffledHealthTips = [...HealthTips].sort(() => 0.5 - Math.random()).slice(0, 5)
	shuffledHealthTips.forEach(tip => {
		health_tips.innerHTML += `<div> ${tip}</div>`
	})

}

displayRandomHealthTip();

function clearInputsOutputs() {
	rehab.innerHTML = " ";
	meds.innerHTML = " ";
	lab_tests = " ";

}

btnReset.addEventListener("click", clearInputsOutputs);

btnSubmit.addEventListener("click", calculateHealthCareCharges);
