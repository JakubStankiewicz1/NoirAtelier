import React, { useState } from "react";
import "./interiorDesignContact.css";
import { FiSend, FiBox, FiZap, FiHome } from "react-icons/fi";

const InteriorDesignContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.");
  };

  return (
    <div className="interiorDesignContact">
      <div className="interiorDesignContactContainer">
        <div className="interiorDesignContactContent">
          <div className="interiorDesignContactInfo">
            <h2 className="interiorDesignContactTitle cormorant-garamond-regular">
              Stwórzmy Razem Twoje Wymarzone Wnętrze
            </h2>
            <p className="interiorDesignContactDescription">
              {" "}
              Skontaktuj się z nami, aby omówić Twój projekt. Oferujemy
              bezpłatną konsultację i wycenę dla wszystkich projektów.
            </p>{" "}
            <div className="interiorDesignContactFeatures">
              <div className="interiorDesignContactFeature">
                <span className="interiorDesignContactFeatureIcon">
                  <FiHome />
                </span>
                <span>Bezpłatna konsultacja</span>
              </div>
              <div className="interiorDesignContactFeature">
                <span className="interiorDesignContactFeatureIcon">
                  <FiBox />
                </span>
                <span>Wizualizacje 3D</span>
              </div>
              <div className="interiorDesignContactFeature">
                <span className="interiorDesignContactFeatureIcon">
                  <FiZap />
                </span>
                <span>Szybka realizacja</span>
              </div>
            </div>
          </div>

          <div className="interiorDesignContactForm">
            <form onSubmit={handleSubmit}>
              <div className="interiorDesignContactFormRow">
                <input
                  type="text"
                  name="name"
                  placeholder="Imię i nazwisko"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="interiorDesignContactFormRow">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Typ projektu</option>
                  <option value="apartment">Apartament</option>
                  <option value="house">Dom</option>
                  <option value="office">Biuro</option>
                  <option value="commercial">Komercyjne</option>
                </select>
              </div>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
              >
                <option value="">Budżet projektu</option>
                <option value="50k">Do 50 000 zł</option>
                <option value="100k">50 000 - 100 000 zł</option>
                <option value="200k">100 000 - 200 000 zł</option>
                <option value="200k+">Powyżej 200 000 zł</option>
              </select>
              <textarea
                name="message"
                placeholder="Opowiedz nam o swoim projekcie..."
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>{" "}
              <button type="submit" className="interiorDesignContactFormSubmit">
                <span>Wyślij Zapytanie</span>
                <FiSend className="interiorDesignContactFormSubmitIcon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignContact;
