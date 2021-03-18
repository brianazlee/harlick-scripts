import {h, render} from 'preact';

export const PRICE_REGEX = /\(\+\$?([0-9.]+)\)/;

export function renderPriceCalculator(formEl: Element) {
  const labels = Array.from(formEl.querySelectorAll('label'));
  const selects = Array.from(formEl.querySelectorAll('select'));
  const options = Array.from(formEl.querySelectorAll('option'));

  const breakdownContainer = document.createElement('div');
  breakdownContainer.classList.add('cost-breakdown');

  const costEl = document.createElement('h4');
  costEl.classList.add('cost');

  breakdownContainer.append(costEl);

  const buttons = formEl.querySelector('.form-button-wrapper');

  const productCost = document
    .querySelector('meta[property="product:price:amount"]')
    ?.getAttribute('content');

  if (buttons !== null) {
    buttons.insertAdjacentElement('beforebegin', breakdownContainer);
  }

  // Get all labels + prices associated to the label being selected
  const extraCostLabels = [...labels, ...options]
    .map(label => {
      const costMatch = label.innerText.match(PRICE_REGEX);
      return costMatch === null ? null : {el: label, cost: costMatch[1]};
    })
    .filter(value => value !== null);

  const computeTotalPrice = () => {
    const price = extraCostLabels
      .map(obj => {
        if (obj === null) {
          return 0;
        }

        if (obj.el instanceof HTMLLabelElement) {
          return obj.el.querySelector('input')?.checked ? parseInt(obj.cost, 10) : 0;
        }

        const parent = obj.el.parentElement;

        if (obj.el instanceof HTMLOptionElement && parent instanceof HTMLSelectElement) {
          return parent.value === obj.el.value ? parseInt(obj.cost, 10) : 0;
        }

        return 0;
      })
      .reduce((acc, value) => acc + value, 0);

    if (productCost !== null) {
      render(
        <div className="price-breakdown">
          <dl>
            <dt>Deposit price</dt>
            <dd>${Number(productCost).toFixed(2)}</dd>
            <dt>Customizations</dt>
            <dd>${price.toFixed(2)}</dd>
          </dl>
          <dl className="total">
            <dt>Estimated total</dt>
            <dd>${(price + Number(productCost)).toFixed(2)}</dd>
          </dl>
        </div>,
        costEl
      );
    }
  };

  // Assign handlers to compute the updated price each time the labels change
  labels.forEach(label =>
    label.querySelector('input')?.addEventListener('change', computeTotalPrice)
  );
  selects.forEach(select => select.addEventListener('change', computeTotalPrice));

  computeTotalPrice();
}
