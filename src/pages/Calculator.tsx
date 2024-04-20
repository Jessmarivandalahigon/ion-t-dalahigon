import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';


const calculator: React.FC = () => {
  const [input, setInput] = useState(''); // State to store user input
  const [result, setResult] = useState(''); // State to store calculation result

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    if (value === '=') {
      // Evaluate the input expression and update the result state
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      // Clear the input and result
      setInput('');
      setResult('');
    } else {
      // Append the clicked button value to the input
      setInput(input + value);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="calc-container">
          <div className="calc-input">{input}</div>
          <div className="calc-result">{result}</div>
          <IonGrid>
            <IonRow>
              <IonCol><IonButton onClick={() => handleButtonClick('7')}>7</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('8')}>8</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('9')}>9</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('/')}>/</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleButtonClick('4')}>4</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('5')}>5</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('6')}>6</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('*')}>*</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleButtonClick('1')}>1</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('2')}>2</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('3')}>3</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('-')}>-</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol><IonButton onClick={() => handleButtonClick('0')}>0</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('.')}>.</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('=')}>=</IonButton></IonCol>
              <IonCol><IonButton onClick={() => handleButtonClick('+')}>+</IonButton></IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6"><IonButton onClick={() => handleButtonClick('C')}>C</IonButton></IonCol>
            </IonRow>
          </IonGrid>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default calculator;
