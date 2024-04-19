import React from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
    const history = useHistory();

    const goToCalculator = () => {
        history.push('/calculator');
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Add IonCard */}
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Welcome to Home</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        This is the home page content.
                        <IonButton expand="block" onClick={goToCalculator}>Go to Calculator</IonButton>
                    </IonCardContent>
                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Home;
