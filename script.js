document.addEventListener("DOMContentLoaded", () => {
    const billInput = document.getElementById("bill");
    const peopleInput = document.getElementById("people");
    const taxInput = document.getElementById("tax");
    const customTipInput = document.getElementById("customTip");

    const peopleValue = document.getElementById("peopleValue");
    const tipValue = document.getElementById("tipValue");
    const perPerson = document.getElementById("perPerson");
    const billOut = document.getElementById("billOut");
    const taxOut = document.getElementById("taxOut");
    const tipOut = document.getElementById("tipOut");
    const totalOut = document.getElementById("totalOut");
    const summaryText = document.getElementById("summaryText");

    const calculateBtn = document.getElementById("calculateBtn");
    const resetBtn = document.getElementById("resetTop");
    const tipButtons = document.querySelectorAll(".tip-btn");

    let tipPercent = 10;

    function money(value) {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 2
        }).format(value);
    }

    function numberValue(input) {
        const value = Number(input.value);
        return Number.isFinite(value) && value >= 0 ? value : 0;
    }

    function updateTipButtons() {
        tipButtons.forEach(button => {
            const active = Number(button.dataset.tip) === tipPercent;

            button.classList.toggle("bg-orange-500", active);
            button.classList.toggle("text-white", active);
            button.classList.toggle("border-orange-500", active);
        });
    }

    function setTip(value) {
        tipPercent = Math.max(0, Math.min(100, Number(value) || 0));
        customTipInput.value = tipPercent;
        tipValue.textContent = `${tipPercent}%`;
        updateTipButtons();
    }

    function calculate() {
        const bill = numberValue(billInput);
        const people = Math.max(1, parseInt(peopleInput.value, 10) || 1);
        const taxPercent = Math.max(0, Math.min(100, numberValue(taxInput)));

        const tipAmount = bill * tipPercent / 100;
        const taxAmount = bill * taxPercent / 100;
        const total = bill + tipAmount + taxAmount;
        const eachPerson = total / people;

        peopleValue.textContent = people;
        billOut.textContent = money(bill);
        tipOut.textContent = money(tipAmount);
        taxOut.textContent = money(taxAmount);
        totalOut.textContent = money(total);
        perPerson.textContent = money(eachPerson);

        summaryText.textContent =
            `${people} ${people === 1 ? "person" : "people"} • ` +
            `${tipPercent}% tip • ` +
            `${taxPercent ? taxPercent + "% tax / service" : "no tax"}`;
    }

    tipButtons.forEach(button => {
        button.addEventListener("click", () => {
            setTip(button.dataset.tip);
        });
    });

    customTipInput.addEventListener("input", () => {
        setTip(customTipInput.value);
    });

    peopleInput.addEventListener("input", () => {
        peopleValue.textContent = peopleInput.value;
    });

    calculateBtn.addEventListener("click", calculate);

    resetBtn.addEventListener("click", () => {
        billInput.value = 1200;
        peopleInput.value = 4;
        taxInput.value = 0;
        setTip(10);
        calculate();
    });

    setTip(10);
    calculate();
});
