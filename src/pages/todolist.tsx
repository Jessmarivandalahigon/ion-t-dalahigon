// TodoList.tsx
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/react';

const TodoList: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>To-Do List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {tasks.map((t, index) => (
            <IonItem key={index}>
              <IonLabel>{t}</IonLabel>
              <IonButton fill="clear" onClick={() => removeTask(index)}>Remove</IonButton>
            </IonItem>
          ))}
        </IonList>
        <IonItem>
          <IonInput
            placeholder="Enter task"
            value={task}
            onIonChange={(e) => setTask(e.detail.value!)}
          ></IonInput>
          <IonButton onClick={addTask}>Add</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default TodoList;
