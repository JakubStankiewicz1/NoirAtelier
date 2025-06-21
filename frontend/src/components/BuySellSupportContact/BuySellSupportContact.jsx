import React, { useState } from "react";
import "./buySellSupportContact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaHome,
  FaHandshake,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const BuySellSupportContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    propertyType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      propertyType: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Telefon",
      info: "+48 123 456 789",
      subtitle: "Zadzwoń do nas",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "kontakt@noiratelier.pl",
      subtitle: "Napisz do nas",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adres",
      info: "ul. Krakowska 25, 00-001 Warszawa",
      subtitle: "Odwiedź nas",
    },
    {
      icon: <FaClock />,
      title: "Godziny pracy",
      info: "Pon-Pt: 9:00-18:00",
      subtitle: "Jesteśmy dostępni",
    },
  ];

  return (
    <div className="buySellSupportContact">
      <div className="buySellSupportContactContainer">
        {/* Header */}
        <div className="buySellSupportContactHeader">
          <p className="buySellSupportContactHeaderSubtitle cormorant-garamond-regular">
            Skontaktuj się z Nami
          </p>
          <h2 className="buySellSupportContactHeaderTitle cormorant-garamond-regular">
            Rozpocznij Swoją{" "}
            <span className="highlight">Przygodę z Nieruchomościami</span>
          </h2>
          <p className="buySellSupportContactHeaderDescription">
            Gotowy na kupno lub sprzedaż nieruchomości? Nasz zespół ekspertów
            jest tu, aby Ci pomóc. Skontaktuj się z nami już dziś i otrzymaj
            bezpłatną konsultację.
          </p>
        </div>

        <div className="buySellSupportContactContent">
          {/* Contact Form */}
          <div className="buySellSupportContactForm">
            <div className="buySellSupportContactFormHeader">
              <FaHandshake className="buySellSupportContactFormIcon" />
              <h3 className="buySellSupportContactFormTitle cormorant-garamond-regular">
                Bezpłatna Konsultacja
              </h3>
              <p className="buySellSupportContactFormDescription">
                Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w
                ciągu 24 godzin
              </p>
            </div>

            <form
              className="buySellSupportContactFormContainer"
              onSubmit={handleSubmit}
            >
              <div className="buySellSupportContactFormRow">
                <div className="buySellSupportContactFormGroup">
                  <label className="buySellSupportContactFormLabel">
                    <FaUser className="buySellSupportContactFormLabelIcon" />
                    Imię i Nazwisko *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="buySellSupportContactFormInput"
                    placeholder="Wpisz swoje imię i nazwisko"
                    required
                  />
                </div>
                <div className="buySellSupportContactFormGroup">
                  <label className="buySellSupportContactFormLabel">
                    <FaEnvelope className="buySellSupportContactFormLabelIcon" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="buySellSupportContactFormInput"
                    placeholder="twoj@email.com"
                    required
                  />
                </div>
              </div>

              <div className="buySellSupportContactFormRow">
                <div className="buySellSupportContactFormGroup">
                  <label className="buySellSupportContactFormLabel">
                    <FaPhone className="buySellSupportContactFormLabelIcon" />
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="buySellSupportContactFormInput"
                    placeholder="+48 123 456 789"
                  />
                </div>
                <div className="buySellSupportContactFormGroup">
                  <label className="buySellSupportContactFormLabel">
                    <FaHandshake className="buySellSupportContactFormLabelIcon" />
                    Typ Usługi *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="buySellSupportContactFormSelect"
                    required
                  >
                    <option value="">Wybierz usługę</option>
                    <option value="buy">Chcę kupić nieruchomość</option>
                    <option value="sell">Chcę sprzedać nieruchomość</option>
                    <option value="both">Kupno i sprzedaż</option>
                    <option value="consultation">Konsultacja</option>
                  </select>
                </div>
              </div>

              <div className="buySellSupportContactFormGroup">
                <label className="buySellSupportContactFormLabel">
                  <FaHome className="buySellSupportContactFormLabelIcon" />
                  Typ Nieruchomości
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="buySellSupportContactFormSelect"
                >
                  <option value="">Wybierz typ nieruchomości</option>
                  <option value="apartment">Mieszkanie</option>
                  <option value="house">Dom</option>
                  <option value="commercial">Komercyjna</option>
                  <option value="investment">Inwestycyjna</option>
                  <option value="luxury">Luksusowa</option>
                </select>
              </div>

              <div className="buySellSupportContactFormGroup">
                <label className="buySellSupportContactFormLabel">
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="buySellSupportContactFormTextarea"
                  placeholder="Opisz swoje potrzeby, oczekiwania lub zadaj pytanie..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="buySellSupportContactFormButton"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <FaCheckCircle />
                    <span>Wysłano!</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Wyślij Zapytanie</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="buySellSupportContactInfo">
            <div className="buySellSupportContactInfoHeader">
              <h3 className="buySellSupportContactInfoTitle cormorant-garamond-regular">
                Dane Kontaktowe
              </h3>
              <p className="buySellSupportContactInfoDescription">
                Możesz też skontaktować się z nami bezpośrednio
              </p>
            </div>

            <div className="buySellSupportContactInfoList">
              {contactInfo.map((item, index) => (
                <div key={index} className="buySellSupportContactInfoItem">
                  <div className="buySellSupportContactInfoItemIcon">
                    {item.icon}
                  </div>
                  <div className="buySellSupportContactInfoItemContent">
                    <h4 className="buySellSupportContactInfoItemTitle">
                      {item.title}
                    </h4>
                    <p className="buySellSupportContactInfoItemInfo">
                      {item.info}
                    </p>
                    <p className="buySellSupportContactInfoItemSubtitle">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="buySellSupportContactInfoCTA">
              <div className="buySellSupportContactInfoCTAContent">
                <h4 className="buySellSupportContactInfoCTATitle cormorant-garamond-regular">
                  Pilna Sprawa?
                </h4>
                <p className="buySellSupportContactInfoCTADescription">
                  Zadzwoń na naszą gorącą linię dostępną 24/7
                </p>
                <a
                  href="tel:+48123456789"
                  className="buySellSupportContactInfoCTAButton"
                >
                  <FaPhone />
                  <span>+48 123 456 789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuySellSupportContact;
