import React from 'react';
import './offert.css';
import { useParams } from 'react-router-dom';
import { getOfferById } from '../../data/offersData';
import OffertHeader from '../../components/OffertHeader/OffertHeader';
import OffertDesign from '../../components/OffertDesign/OffertDesign';
import Fotter from '../../components/Fotter/Fotter';
import OffertVisualization from '../../components/OffertVisualization/OffertVisualization';

const Offert = () => {
  const { id } = useParams();
  const offerData = getOfferById(id);

  // Jeśli nie znaleziono oferty, pokaż błąd lub przekieruj
  if (!offerData) {
    return (
      <div className='offert'>
        <div style={{ padding: '50px', textAlign: 'center' }}>
          <h2>Oferta nie została znaleziona</h2>
          <p>Przepraszamy, nie znaleźliśmy oferty o ID: {id}</p>
        </div>
        <Fotter />
      </div>
    );
  }  return (
    <div className='offert'>
        <OffertHeader offerData={offerData} />
        <OffertDesign offerData={offerData} />
        <OffertVisualization offerData={offerData} />
        <Fotter />
    </div>
  )
}

export default Offert