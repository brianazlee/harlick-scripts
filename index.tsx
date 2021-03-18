import "arrive";

const PRICE_REGEX = /\+\$?([0-9.]+)/;

function handleFormVisible(formEl: HTMLFormElement) {
  console.log(formEl);

  const labels = [...formEl.querySelectorAll("label")];

  const breakdownContainer = document.createElement("div");
  breakdownContainer.classList.add("cost-breakdown");

  const cost = document.createElement("h4");
  cost.classList.add("cost");

  breakdownContainer.append(cost);

  const buttons = formEl.querySelector(".form-button-wrapper");
  buttons.insertAdjacentElement("beforebegin", breakdownContainer);

  // Get all labels + prices associated to the label being selected
  const extraCostLabels = labels
    .map((label) => {
      const costMatch = label.innerText.match(PRICE_REGEX);

      if (costMatch === null) {
        return null;
      }

      return { label: label, cost: costMatch[1] };
    })
    .filter((value) => value !== null);

  const computeTotalPrice = () => {
    const price = extraCostLabels
      .map((obj) =>
        obj.label.querySelector("input").checked ? parseInt(obj.cost, 10) : 0
      )
      .reduce((acc, value) => acc + value, 0);

    cost.innerText = "Estimated Additional Cost: $" + price.toFixed(2);
  };

  // Assign handlers to compute the updated price each time the labels change
  labels.forEach((label) => {
    const input = label.querySelector("input");

    if (input) {
      input.addEventListener("change", computeTotalPrice);
    }
  });

  computeTotalPrice();

  // Convert labels into selectable items
  const fieldsets = [...formEl.querySelectorAll("fieldset")];

  fieldsets.forEach((fieldset) => {
    const description = fieldset.querySelector<HTMLDivElement>(".description");

    if (description === null) {
      return;
    }

    description.style.display = "none";

    const options = [...fieldset.querySelectorAll<HTMLDivElement>(".option")];

    options.forEach((option) => {
      option.querySelector("input").style.display = "none";
      const optionName = option.innerText.trim();
      const optionLabel = option.querySelector("label");
      const optionDesc = fieldset.querySelector(
        '.description [data-option-for="' + optionName + '"]'
      );

      if (optionDesc === null) {
        return;
      }

      // Remove the text node and append the description
      optionLabel.childNodes[1].remove();
      optionLabel.append(optionDesc);
    });

    const legends = [
      ...fieldset.querySelectorAll<HTMLLegendElement>("fieldset legend"),
    ];

    legends.forEach(function (legend) {
      const name = legend.innerText.trim();

      const desc = fieldset.querySelector(
        '.description [data-description-for="' + name + '"]'
      );

      if (desc === null) {
        return;
      }

      legend.after(desc);
    });
  });
}

document.arrive('[data-form-id="600bcf825b984430bfeca409"]', handleFormVisible);
