
document.addEventListener("DOMContentLoaded", function () {
    var selectedOptions = [];

    function updatePercentageChart() {
        var percentual = selectedOptions.length * 25;

        var percentualChart = document.getElementById("percentual-chart");
        percentualChart.style.width = percentual + "%";
        percentualChart.textContent = percentual + "%";
    }

    var formacaoCheckboxes = document.getElementsByName("formacao");
    var formacaoForm = document.getElementById("formacao-form");

    formacaoForm.addEventListener("change", function (event) {
        if (event.target.type === "checkbox") {
            var checkboxValue = event.target.value;

            if (event.target.checked) {
                event.target.parentElement.classList.add("selected");
                selectedOptions.push(checkboxValue);
            } else {
                
                event.target.parentElement.classList.remove("selected");
                
                selectedOptions = selectedOptions.filter(option => option !== checkboxValue);
            }

            updatePercentageChart();
        }
    });

    var resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener("click", function () {
        
        selectedOptions.forEach(option => {
            var checkbox = document.querySelector(`input[value="${option}"]`);
            checkbox.checked = false;
            checkbox.parentElement.classList.remove("selected");
        });
        
        selectedOptions = [];

        updatePercentageChart();
    });
});
