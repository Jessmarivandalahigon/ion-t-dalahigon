import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonActionSheet } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  const handleReset = () => {
    setClickCount(0); // Reset the click count to 0
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <p>Click count: {clickCount}</p> <b></b>
        
        <IonButton onClick={handleClick} expand="block">Click me</IonButton>
        <IonButton onClick={handleReset} expand="block">Reset</IonButton> {/* Add reset button */}

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
