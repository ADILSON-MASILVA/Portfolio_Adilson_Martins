
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
                // Adiciona a classe 'selected' ao label
                event.target.parentElement.classList.add("selected");
                // Adiciona a opção selecionada ao array
                selectedOptions.push(checkboxValue);
            } else {
                // Remove a classe 'selected' do label
                event.target.parentElement.classList.remove("selected");
                // Remove a opção desmarcada do array
                selectedOptions = selectedOptions.filter(option => option !== checkboxValue);
            }

            updatePercentageChart();
        }
    });

    // Adicione este bloco de código para lidar com o botão de reset
    var resetBtn = document.getElementById("reset-btn");
    resetBtn.addEventListener("click", function () {
        // Desmarca todos os checkboxes
        selectedOptions.forEach(option => {
            var checkbox = document.querySelector(`input[value="${option}"]`);
            checkbox.checked = false;
            checkbox.parentElement.classList.remove("selected");
        });
        // Limpa o array de opções selecionadas
        selectedOptions = [];

        updatePercentageChart();
    });
});
