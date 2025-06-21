import React, { useState } from 'react';
import "./investmentConsultingContact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const InvestmentConsultingContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentType: '',
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
        investmentType: '',
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
      value: "invest@noiratelier.com",
      description: "Napisz do nas o swoich planach"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Biuro",
      value: "ul. Ekskluzywna 15, Warszawa",
      description: "Odwiedź nas na bezpłatną konsultację"
    },
    {
      icon: <FaClock />,
      title: "Godziny pracy",
      value: "Pon-Pt: 9:00-18:00",
      description: "Konsultacje również weekendami"
    }
  ];

  const investmentTypes = [
    "Mieszkania inwestycyjne",
    "Nieruchomości komercyjne",
    "Grunty pod zabudowę",
    "Obiekty hotelowe",
    "Centra handlowe",
    "Biurowce",
    "Magazyny i hale",
    "Portfolio nieruchomości"
  ];

  const budgetRanges = [
    "500k - 1M PLN",
    "1M - 5M PLN",
    "5M - 10M PLN",
    "10M - 50M PLN",
    "50M+ PLN"
  ];

  return (
    <div className='investmentConsultingContact'>
      <div className="investmentConsultingContactContainer">
        {/* Header */}
        <div className="investmentConsultingContactHeader">
          <div className="investmentConsultingContactHeaderContainer">
            <p className="investmentConsultingContactHeaderSubtitle">Skontaktuj się z nami</p>
            <h2 className="investmentConsultingContactHeaderTitle cormorant-garamond-regular">
              Rozpocznij Swoją Drogę do Sukcesu Inwestycyjnego
            </h2>
            <p className="investmentConsultingContactHeaderDescription">
              Umów się na bezpłatną konsultację z naszymi ekspertami inwestycyjnymi. Omówimy Twoje cele i znajdziemy najlepszą strategię dla Twojego portfela.
            </p>
          </div>
        </div>

        <div className="investmentConsultingContactContent">
          {/* Contact Info */}
          <div className="investmentConsultingContactInfo">
            <div className="investmentConsultingContactInfoHeader">
              <h3 className="investmentConsultingContactInfoTitle cormorant-garamond-regular">
                Informacje Kontaktowe
              </h3>
              <p className="investmentConsultingContactInfoDescription">
                Skontaktuj się z nami w dogodny dla Ciebie sposób
              </p>
            </div>

            <div className="investmentConsultingContactInfoGrid">
              {contactInfo.map((info, index) => (
                <div key={index} className="investmentConsultingContactInfoCard">
                  <div className="investmentConsultingContactInfoCardIcon">
                    {info.icon}
                  </div>
                  <div className="investmentConsultingContactInfoCardContent">
                    <h4 className="investmentConsultingContactInfoCardTitle">
                      {info.title}
                    </h4>
                    <p className="investmentConsultingContactInfoCardValue">
                      {info.value}
                    </p>
                    <p className="investmentConsultingContactInfoCardDescription">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="investmentConsultingContactInfoBenefits">
              <h4 className="investmentConsultingContactInfoBenefitsTitle cormorant-garamond-regular">
                Co oferuje pierwsza konsultacja?
              </h4>
              <ul className="investmentConsultingContactInfoBenefitsList">
                <li><FaCheckCircle /> Analiza obecnej sytuacji finansowej</li>
                <li><FaCheckCircle /> Określenie profilu inwestycyjnego</li>
                <li><FaCheckCircle /> Wstępne rekomendacje strategii</li>
                <li><FaCheckCircle /> Plan działania na kolejne kroki</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="investmentConsultingContactForm">
            <div className="investmentConsultingContactFormContainer">
              <div className="investmentConsultingContactFormHeader">
                <h3 className="investmentConsultingContactFormTitle cormorant-garamond-regular">
                  Formularz Kontaktowy
                </h3>
                <p className="investmentConsultingContactFormDescription">
                  Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
                </p>
              </div>

              {isSubmitted ? (
                <div className="investmentConsultingContactFormSuccess">
                  <FaCheckCircle className="investmentConsultingContactFormSuccessIcon" />
                  <h4 className="investmentConsultingContactFormSuccessTitle">
                    Dziękujemy za kontakt!
                  </h4>
                  <p className="investmentConsultingContactFormSuccessText">
                    Otrzymaliśmy Twoją wiadomość. Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="investmentConsultingContactFormFields">
                  <div className="investmentConsultingContactFormRow">
                    <div className="investmentConsultingContactFormField">
                      <label htmlFor="name" className="investmentConsultingContactFormLabel">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="investmentConsultingContactFormInput"
                        placeholder="Wprowadź swoje imię i nazwisko"
                      />
                    </div>
                    <div className="investmentConsultingContactFormField">
                      <label htmlFor="email" className="investmentConsultingContactFormLabel">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="investmentConsultingContactFormInput"
                        placeholder="Wprowadź swój email"
                      />
                    </div>
                  </div>

                  <div className="investmentConsultingContactFormRow">
                    <div className="investmentConsultingContactFormField">
                      <label htmlFor="phone" className="investmentConsultingContactFormLabel">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="investmentConsultingContactFormInput"
                        placeholder="Wprowadź swój numer telefonu"
                      />
                    </div>
                    <div className="investmentConsultingContactFormField">
                      <label htmlFor="budget" className="investmentConsultingContactFormLabel">
                        Budżet inwestycyjny
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="investmentConsultingContactFormSelect"
                      >
                        <option value="">Wybierz przedział</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="investmentConsultingContactFormField">
                    <label htmlFor="investmentType" className="investmentConsultingContactFormLabel">
                      Typ inwestycji
                    </label>
                    <select
                      id="investmentType"
                      name="investmentType"
                      value={formData.investmentType}
                      onChange={handleInputChange}
                      className="investmentConsultingContactFormSelect"
                    >
                      <option value="">Wybierz typ inwestycji</option>
                      {investmentTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className="investmentConsultingContactFormField">
                    <label htmlFor="message" className="investmentConsultingContactFormLabel">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="investmentConsultingContactFormTextarea"
                      placeholder="Opisz swoje cele inwestycyjne i oczekiwania..."
                    ></textarea>
                  </div>

                  <button type="submit" className="investmentConsultingContactFormButton">
                    Wyślij zapytanie
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestmentConsultingContact
