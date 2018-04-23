import '../css/app.css';

var componentRequireContext = require.context('components', true)
var ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContext)
ReactRailsUJS.mountComponents();

import Rails from 'rails-ujs';
// const Rails = require('rails-ujs');
Rails.start();
