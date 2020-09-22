import { registerRootComponent } from 'expo';
import App from './App';
import { setGlobal } from 'reactn';

import { fireapp } from './src/components/config';

import firebase from 'firebase';

setGlobal({
	submitOrder: false,
	cart: [],
	cartTotal: 0,
	stockList: {}
});

registerRootComponent(App);
