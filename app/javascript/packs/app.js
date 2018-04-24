import '../css/app.css';
import 'normalize.css/normalize';

var componentRequireContext = require.context('components', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
ReactRailsUJS.mountComponents();

import Rails from 'rails-ujs';
Rails.start();

import flatpickr from 'flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru.js';
import 'flatpickr/dist/flatpickr.css';

flatpickr.localize(Russian);

flatpickr('#member_date_arrival, #member_date_departure', {
  // dateFormat: 'd/m/Y',
});
