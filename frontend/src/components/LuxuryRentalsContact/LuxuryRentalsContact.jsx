import React, { useState } from "react";
import "./luxuryRentalsContact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const LuxuryRentalsContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    rentalPeriod: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Telefon",
      info: "+48 123 456 789",
      description: "Zadzwoń w godzinach pracy",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "luxury@noiratelier.com",
      description: "Napisz do nas w każdej chwili",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Adres",
      info: "ul. Luksusowa 123, Warszawa",
      description: "Odwiedź nasze biuro",
    },
    {
      icon: <FaClock />,
      title: "Godziny Pracy",
      info: "Pon-Pt: 9:00-18:00",
      description: "Sb: 10:00-15:00",
    },
  ];

  return (
    <div className="luxuryRentalsContact">
      <div className="luxuryRentalsContactContainer">
        {/* Header */}
        <div className="luxuryRentalsContactHeader">
          <div className="luxuryRentalsContactHeaderContainer">
            <p className="luxuryRentalsContactHeaderSubtitle">
              Skontaktuj się z Nami
            </p>
            <h2 className="luxuryRentalsContactHeaderTitle cormorant-garamond-regular">
              Znajdź Swoją Wymarzoną Nieruchomość
            </h2>
            <p className="luxuryRentalsContactHeaderDescription">
              Porozmawiaj z naszymi ekspertami i znajdź idealną luksusową
              nieruchomość do wynajmu
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="luxuryRentalsContactContent">
          {/* Left Side - Contact Info */}
          <div className="luxuryRentalsContactLeft">
            <div className="luxuryRentalsContactInfo">
              <h3 className="luxuryRentalsContactInfoTitle cormorant-garamond-regular">
                Informacje Kontaktowe
              </h3>
              <p className="luxuryRentalsContactInfoDescription">
                Jesteśmy dostępni, aby odpowiedzieć na wszystkie Twoje pytania
                dotyczące luksusowych wynajmów.
              </p>

              <div className="luxuryRentalsContactInfoCards">
                {contactInfo.map((item, index) => (
                  <div key={index} className="luxuryRentalsContactInfoCard">
                    <div className="luxuryRentalsContactInfoCardIcon">
                      {item.icon}
                    </div>
                    <div className="luxuryRentalsContactInfoCardContent">
                      <h4 className="luxuryRentalsContactInfoCardTitle">
                        {item.title}
                      </h4>
                      <p className="luxuryRentalsContactInfoCardInfo">
                        {item.info}
                      </p>
                      <p className="luxuryRentalsContactInfoCardDescription">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="luxuryRentalsContactSocial">
                <h4 className="luxuryRentalsContactSocialTitle">
                  Napisz do nas również przez:
                </h4>
                <div className="luxuryRentalsContactSocialButtons">
                  <button className="luxuryRentalsContactSocialButton whatsapp">
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </button>
                  <button className="luxuryRentalsContactSocialButton telegram">
                    <FaTelegram />
                    <span>Telegram</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="luxuryRentalsContactRight">
            <div className="luxuryRentalsContactForm">
              <h3 className="luxuryRentalsContactFormTitle cormorant-garamond-regular">
                Wyślij Zapytanie
              </h3>
              <p className="luxuryRentalsContactFormDescription">
                Wypełnij formularz, a nasz ekspert skontaktuje się z Tobą w
                ciągu 24 godzin.
              </p>

              <form
                onSubmit={handleSubmit}
                className="luxuryRentalsContactFormContainer"
              >
                <div className="luxuryRentalsContactFormRow">
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Imię i Nazwisko *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Wpisz swoje imię i nazwisko"
                      required
                    />
                  </div>
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="twoj@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="luxuryRentalsContactFormRow">
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Typ Nieruchomości</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                    >
                      <option value="">Wybierz typ</option>
                      <option value="apartment">Apartament</option>
                      <option value="villa">Willa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="house">Dom</option>
                    </select>
                  </div>
                </div>

                <div className="luxuryRentalsContactFormRow">
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Okres Wynajmu</label>
                    <select
                      name="rentalPeriod"
                      value={formData.rentalPeriod}
                      onChange={handleInputChange}
                    >
                      <option value="">Wybierz okres</option>
                      <option value="short">
                        Krótkoterminowy (1-6 miesięcy)
                      </option>
                      <option value="medium">
                        Średnioterminowy (6-12 miesięcy)
                      </option>
                      <option value="long">
                        Długoterminowy (powyżej roku)
                      </option>
                    </select>
                  </div>
                  <div className="luxuryRentalsContactFormGroup">
                    <label>Budżet (PLN/miesiąc)</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                    >
                      <option value="">Wybierz budżet</option>
                      <option value="10000-15000">10,000 - 15,000 PLN</option>
                      <option value="15000-25000">15,000 - 25,000 PLN</option>
                      <option value="25000-50000">25,000 - 50,000 PLN</option>
                      <option value="50000+">Powyżej 50,000 PLN</option>
                    </select>
                  </div>
                </div>

                <div className="luxuryRentalsContactFormGroup full">
                  <label>Wiadomość</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Opisz swoje wymagania, preferowaną lokalizację, dodatkowe udogodnienia..."
                    rows="5"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="luxuryRentalsContactFormButton"
                >
                  <span>Wyślij Zapytanie</span>
                  <div className="luxuryRentalsContactFormButtonArrow">→</div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryRentalsContact;
