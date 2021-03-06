import {
  clickable,
  collection,
  isVisible,
  text
} from 'ember-cli-page-object';

import cardItem from './card-item';
import creditCard from './credit-card';

export default {
  scope: '.donation-container',

  creditCard,

  cardFormIsVisible: isVisible('.credit-card-form'),
  donationButtonIsVisible: isVisible('button.donate'),

  clickSubmit: clickable('button.donate'),

  donationAmountText: text('.donation-container__amount'),
  paymentInformationText: text('.donation-container__information'),

  cards: collection({
    itemScope: '.card-item',
    item: cardItem
  })
};
