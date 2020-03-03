import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

import 'sweetalert2/src/sweetalert2.scss'

import Router from './Router'

ReactDOM.render(<Router />, document.getElementById('root'));

