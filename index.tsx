import 'arrive';

import './styles.less';
import {renderPriceCalculator} from './priceCalc';

function handleFormVisible(formEl: Element) {
  renderPriceCalculator(formEl);

  // Convert labels into selectable items
  const fieldsets = Array.from(formEl.querySelectorAll('fieldset'));

  fieldsets.forEach(fieldset => {
    const description = fieldset.querySelector<HTMLDivElement>('.description');

    if (description === null) {
      return;
    }

    description.style.display = 'none';

    const options = Array.from(fieldset.querySelectorAll<HTMLDivElement>('.option'));

    options.forEach(option => {
      option.querySelector('input')!.style.display = 'none';
      const optionName = option.innerText.trim();
      const optionLabel = option.querySelector('label')!;
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

    const legends = Array.from(
      fieldset.querySelectorAll<HTMLLegendElement>('fieldset legend')
    );

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
