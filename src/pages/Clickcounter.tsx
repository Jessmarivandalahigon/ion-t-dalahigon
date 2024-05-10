import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';


const Clickcounter: React.FC = () => {
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
          
          <IonButtons slot='start'>
              <IonBackButton defaultHref='/app/home'/>
           </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <p>Click count: {clickCount}</p>
        
        <IonButton onClick={handleClick} expand="block">Click me</IonButton>
        <IonButton onClick={handleReset} expand="block">Reset</IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Clickcounter;
