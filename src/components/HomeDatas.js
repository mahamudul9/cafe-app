import React from 'react';
import { IonGrid, IonButton, IonCard } from '@ionic/react';

const HomeDatas = (props) => {
    const { data } = props;
    return (
        <IonGrid>
            <IonCard class="ion-padding">
                <h4>ID : {data.repository.id}</h4>
                <h4>Name : {data.repository.name}</h4>
                <h4>Description : {data.repository.description}</h4>
                <IonButton routerLink={'/release/' + data.repository.name}>Release</IonButton>
            </IonCard>
        </IonGrid>
    );
};

export default HomeDatas;