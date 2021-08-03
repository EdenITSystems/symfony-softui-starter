/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// you can specify whith plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

import './js/soft-ui-dashboard'
import './js/soft-ui-dashboard?v=1.0.3'

// start the Stimulus application
import './bootstrap';
