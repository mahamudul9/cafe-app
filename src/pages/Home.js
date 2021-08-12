import React, { useEffect, useState } from 'react';
import {  IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonFooter, IonPage, IonIcon, IonRow } from '@ionic/react';
import HomeDatas from '../components/HomeDatas';
import {arrowForwardOutline, arrowBackOutline} from 'ionicons/icons'

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 5;

  const [cafeData, setCafeData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/search/code?q=addClass+user:mozilla&page=32&per_page=25')
      .then(res => res.json())
      .then(data => setCafeData(data.items))
  }, [])


  // Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = cafeData.slice(indexOfFirstPost, indexOfLastPost);
  console.log('first:',indexOfFirstPost + 'last:',indexOfLastPost)
  const pageLimit = Math.ceil(cafeData.length / postPerPage);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="ion-text-center"><h2>Café App</h2></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {currentPosts.map(data => <HomeDatas data={data} key={data.repository.id} ></HomeDatas>)}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonRow class="ion-justify-content-between">
          <IonButton onClick={() => setCurrentPage(currentPage > 1 ?  currentPage - 1 : currentPage)}><IonIcon icon={arrowBackOutline}/> Previous</IonButton>
          <IonButton>{currentPage}</IonButton>
          <IonButton onClick={() => setCurrentPage(pageLimit > currentPage ?  currentPage + 1 : currentPage)}>Next <IonIcon icon={arrowForwardOutline}/></IonButton>
          </IonRow>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;