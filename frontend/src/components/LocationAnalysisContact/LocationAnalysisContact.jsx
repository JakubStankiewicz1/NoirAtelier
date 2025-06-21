import React, { useState } from 'react';
import "./locationAnalysisContact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const LocationAnalysisContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    locationType: '',
    budget: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę wysyłania formularza
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset formularza po 3 sekundach
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        locationType: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Telefon",
      value: "+48 123 456 789",
      description: "Zadzwoń, aby umówić konsultację"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "analiza@noiratelier.pl",
      description: "Napisz do nas o swoich potrzebach"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Lokalizacja",
      value: "Warszawa, Kraków, Gdańsk",
      description: "Działamy w największych miastach Polski"
    },
    {
      icon: <FaClock />,
      title: "Godziny pracy",
      value: "Pon-Pt: 9:00-18:00",
      description: "Weekendy: na umówione spotkania"
    }
  ];

  const packages = [
    {
      name: "Podstawowa",
      price: "1,500 PLN",
      features: [
        "Analiza demograficzna",
        "Ocena infrastruktury",
        "Podstawowe prognozy cenowe",
        "Raport PDF (15 stron)",
        "Konsultacja telefoniczna"
      ],
      recommended: false
    },
    {
      name: "Profesjonalna",
      price: "2,500 PLN",
      features: [
        "Wszystko z pakietu podstawowego",
        "Szczegółowa analiza rynkowa",
        "Prognozy 5-letnie",
        "Mapa heat map",
        "Raport PDF (25 stron)",
        "Spotkanie osobiste",
        "30 dni wsparcia"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "4,000 PLN",
      features: [
        "Wszystko z pakietu profesjonalnego",
        "Analiza konkurencji",
        "Scenariusze inwestycyjne",
        "Wizualizacje 3D",
        "Raport PDF (40+ stron)",
        "Prezentacja dla inwestorów",
        "90 dni wsparcia",
        "Aktualizacje kwartalnych"
      ],
      recommended: false
    }
  ];

  return (
    <div className='locationAnalysisContact'>
      <div className="locationAnalysisContactContainer">
        {/* Header */}
        <div className="locationAnalysisContactHeader">
          <div className="locationAnalysisContactHeaderContainer">
            <p className="locationAnalysisContactHeaderSubtitle">Skontaktuj się z Nami</p>
            <h2 className="locationAnalysisContactHeaderTitle cormorant-garamond-regular">
              Zamów Profesjonalną Analizę Lokalizacji
            </h2>
            <p className="locationAnalysisContactHeaderDescription">
              Wybierz odpowiedni pakiet analizy i rozpocznij swoją inwestycyjną podróż z pewnością, że podejmujesz najlepsze decyzje.
            </p>
          </div>
        </div>

        {/* Packages Section */}
        <div className="locationAnalysisContactPackages">
          <div className="locationAnalysisContactPackagesContainer">
            <h3 className="locationAnalysisContactPackagesTitle cormorant-garamond-regular">
              Wybierz Pakiet Analizy
            </h3>
            
            <div className="locationAnalysisContactPackagesGrid">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`locationAnalysisContactPackagesCard ${pkg.recommended ? 'recommended' : ''}`}
                >
                  {pkg.recommended && (
                    <div className="locationAnalysisContactPackagesCardBadge">
                      Polecane
                    </div>
                  )}
                  
                  <div className="locationAnalysisContactPackagesCardHeader">
                    <h4 className="locationAnalysisContactPackagesCardName cormorant-garamond-regular">
                      {pkg.name}
                    </h4>
                    <div className="locationAnalysisContactPackagesCardPrice">
                      <span className="locationAnalysisContactPackagesCardPriceAmount">
                        {pkg.price}
                      </span>
                      <span className="locationAnalysisContactPackagesCardPriceUnit">
                        za analizę
                      </span>
                    </div>
                  </div>
                  
                  <div className="locationAnalysisContactPackagesCardFeatures">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="locationAnalysisContactPackagesCardFeature">
                        <FaCheckCircle className="locationAnalysisContactPackagesCardFeatureIcon" />
                        <span className="locationAnalysisContactPackagesCardFeatureText">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="locationAnalysisContactPackagesCardButton">
                    <button className="locationAnalysisContactPackagesCardButtonElement">
                      Zamów Teraz
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="locationAnalysisContactMain">
          {/* Contact Form */}
          <div className="locationAnalysisContactForm">
            <div className="locationAnalysisContactFormContainer">
              <h3 className="locationAnalysisContactFormTitle cormorant-garamond-regular">
                Formularz Kontaktowy
              </h3>
              <p className="locationAnalysisContactFormDescription">
                Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin.
              </p>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="locationAnalysisContactFormElement">
                  <div className="locationAnalysisContactFormRow">
                    <div className="locationAnalysisContactFormGroup">
                      <label className="locationAnalysisContactFormLabel">Imię i nazwisko *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="locationAnalysisContactFormInput"
                        required
                      />
                    </div>
                    <div className="locationAnalysisContactFormGroup">
                      <label className="locationAnalysisContactFormLabel">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="locationAnalysisContactFormInput"
                        required
                      />
                    </div>
                  </div>

                  <div className="locationAnalysisContactFormRow">
                    <div className="locationAnalysisContactFormGroup">
                      <label className="locationAnalysisContactFormLabel">Telefon</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="locationAnalysisContactFormInput"
                      />
                    </div>
                    <div className="locationAnalysisContactFormGroup">
                      <label className="locationAnalysisContactFormLabel">Typ nieruchomości</label>
                      <select
                        name="locationType"
                        value={formData.locationType}
                        onChange={handleInputChange}
                        className="locationAnalysisContactFormSelect"
                      >
                        <option value="">Wybierz typ</option>
                        <option value="mieszkanie">Mieszkanie</option>
                        <option value="dom">Dom</option>
                        <option value="lokal-komercyjny">Lokal komercyjny</option>
                        <option value="teren-inwestycyjny">Teren inwestycyjny</option>
                        <option value="inne">Inne</option>
                      </select>
                    </div>
                  </div>

                  <div className="locationAnalysisContactFormGroup">
                    <label className="locationAnalysisContactFormLabel">Budżet inwestycyjny</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="locationAnalysisContactFormSelect"
                    >
                      <option value="">Wybierz zakres</option>
                      <option value="do-500k">Do 500 000 PLN</option>
                      <option value="500k-1m">500 000 - 1 000 000 PLN</option>
                      <option value="1m-2m">1 000 000 - 2 000 000 PLN</option>
                      <option value="2m-5m">2 000 000 - 5 000 000 PLN</option>
                      <option value="powyzej-5m">Powyżej 5 000 000 PLN</option>
                    </select>
                  </div>

                  <div className="locationAnalysisContactFormGroup">
                    <label className="locationAnalysisContactFormLabel">Wiadomość</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="locationAnalysisContactFormTextarea"
                      placeholder="Opisz swoje potrzeby, preferencje lokalizacyjne lub zadaj pytania..."
                    ></textarea>
                  </div>

                  <button type="submit" className="locationAnalysisContactFormSubmit">
                    <span>Wyślij Zgłoszenie</span>
                  </button>
                </form>
              ) : (
                <div className="locationAnalysisContactFormSuccess">
                  <div className="locationAnalysisContactFormSuccessIcon">
                    <FaCheckCircle />
                  </div>
                  <h4 className="locationAnalysisContactFormSuccessTitle">
                    Dziękujemy za zgłoszenie!
                  </h4>
                  <p className="locationAnalysisContactFormSuccessMessage">
                    Otrzymaliśmy Twoje zgłoszenie i skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="locationAnalysisContactInfo">
            <div className="locationAnalysisContactInfoContainer">
              <h3 className="locationAnalysisContactInfoTitle cormorant-garamond-regular">
                Informacje Kontaktowe
              </h3>
              
              <div className="locationAnalysisContactInfoItems">
                {contactInfo.map((info, index) => (
                  <div key={index} className="locationAnalysisContactInfoItem">
                    <div className="locationAnalysisContactInfoItemIcon">
                      {info.icon}
                    </div>
                    <div className="locationAnalysisContactInfoItemContent">
                      <h4 className="locationAnalysisContactInfoItemTitle">
                        {info.title}
                      </h4>
                      <p className="locationAnalysisContactInfoItemValue">
                        {info.value}
                      </p>
                      <p className="locationAnalysisContactInfoItemDescription">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="locationAnalysisContactInfoCTA">
                <h4 className="locationAnalysisContactInfoCTATitle cormorant-garamond-regular">
                  Potrzebujesz szybkiej odpowiedzi?
                </h4>
                <p className="locationAnalysisContactInfoCTADescription">
                  Zadzwoń do nas bezpośrednio lub umów się na spotkanie online.
                </p>
                <div className="locationAnalysisContactInfoCTAButtons">
                  <button className="locationAnalysisContactInfoCTAButton primary">
                    <FaPhone />
                    <span>Zadzwoń Teraz</span>
                  </button>
                  <button className="locationAnalysisContactInfoCTAButton secondary">
                    <span>Umów Spotkanie</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationAnalysisContact
