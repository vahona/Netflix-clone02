import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
  apiKey: "AIzaSyDTWd-bK78ATHtquSnoIjvb2ep2_QmYZlk",
  authDomain: "netflix-onja-sugi.firebaseapp.com",
  projectId: "netflix-onja-sugi",
  storageBucket: "netflix-onja-sugi.appspot.com",
  messagingSenderId: "1022143905866",
  appId: "1:1022143905866:web:81a4a6878077f85ad466b3",
};



// maybe add databaseUrl inside

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
	<>
		<FirebaseContext.Provider value={{ firebase: window.firebase }}>
			<GlobalStyles />
			<App />
		</FirebaseContext.Provider>
	</>,
	document.getElementById('root')
);
