import React from 'react'
import './App.css';
import '@ionic/react/css/ionic.bundle.css'
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router'
import { IonApp, IonRouterOutlet } from '@ionic/react';
import Home from './pages/Home';
import Release from './pages/Release';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Redirect exact from="/" to="/home" />
          <Route path='/release/:name' component={Release} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
