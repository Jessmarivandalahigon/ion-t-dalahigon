import React from 'react';
import {
    IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton,
    IonIcon
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { alarmOutline, calculatorOutline, clipboardOutline } from 'ionicons/icons';

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
                    
                    <IonCardContent>
                        <IonButton expand="block" routerLink='/calculator'>
                            <IonIcon icon={calculatorOutline} slot="start" />
                            Calculator
                        </IonButton>
                    </IonCardContent>

                    <IonCardContent>
                        <IonButton expand="block" routerLink='/Clickcounter'>
                            <IonIcon icon={alarmOutline} slot="start" />
                            Clickcounter
                        </IonButton>
                    </IonCardContent>
                    

                    
                    <IonCardContent>
                        <IonButton expand="block" routerLink='/todolist'>
                            <IonIcon icon={clipboardOutline} slot="start" />
                            todolist
                        </IonButton>
                    </IonCardContent>
                    


                </IonCard>

            </IonContent>
        </IonPage>
    );
};

export default Home;
