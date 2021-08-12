import { IonBackButton, IonCard, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '@ionic/react/css/ionic.bundle.css';

const Release = () => {
    let { name } = useParams();
    const [releaseData, setReleaseData] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/repos/mozilla/${name}/releases`)
            .then(res => res.json())
            .then(data => setReleaseData(data))
    }, [])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle class="ion-text-center"><h2>Release</h2></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {releaseData.length === 0 ? <h3>Sorry, No data found.</h3> :
                    releaseData.map(release =>
                        <IonGrid >
                            <IonCard class='ion-padding'>
                                <h3>ID : {release.id}</h3>
                                <h3>Version : {release.tag_name}</h3>
                                <h3>Date : {release.created_at}</h3>
                            </IonCard>
                        </IonGrid>
                    )}
            </IonContent>
            <IonFooter>
                <IonToolbar>
                    <IonBackButton defaultHref="/home" text="Back" color='primary' />
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default Release;