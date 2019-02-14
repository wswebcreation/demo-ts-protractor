import Base from './base';
import {$, ElementFinder} from 'protractor';

const SCREEN_SELECTOR = '#checkout_complete_container';

class CheckoutComplete extends Base{
  constructor(){
    super(SCREEN_SELECTOR);
  }

  get screen(): ElementFinder {
    return $(SCREEN_SELECTOR);
  }
}

export default new CheckoutComplete();
