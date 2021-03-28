import 'arrive';
import './styles.less';

import {applyFormDescriptions} from './form';
import {renderPriceCalculator} from './priceCalc';

function handleFormVisible(formEl: Element) {
  renderPriceCalculator(formEl);

  applyFormDescriptions(formEl);
}

document.arrive('[data-form-id="600bcf825b984430bfeca409"]', handleFormVisible);
document.arrive('[data-form-id="605ecb6f4c51e55e32aab96c"]', handleFormVisible);
