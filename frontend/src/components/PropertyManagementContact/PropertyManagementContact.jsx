import React, { useState } from "react";
import "./propertyManagementContact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaChartBar,
  FaLightbulb,
  FaSearch,
} from "react-icons/fa";

const PropertyManagementContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
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
    alert("Thank you for your message! We will contact you within 24 hours.");
  };
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+48 123 456 789",
      subtitle: "Monday - Friday 8:00-18:00",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "propertymanagement@noiratelier.pl",
      subtitle: "We respond within 2 hours",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: "ul. Złota 44, 00-120 Warsaw",
      subtitle: "Business center",
    },
    {
      icon: <FaClock />,
      title: "Working hours",
      content: "Mon-Fri: 8:00-18:00",
      subtitle: "Sat: 9:00-14:00",
    },
  ];
  const propertyTypes = [
    "Apartment",
    "Single-family house",
    "Tenement house",
    "Office building",
    "Commercial space",
    "Warehouse",
    "Other",
  ];

  return (
    <div className="propertyManagementContact">
      <div className="propertyManagementContactContainer">
        {/* Header */}{" "}
        <div className="propertyManagementContactHeader">
          <p className="propertyManagementContactHeaderSubtitle cormorant-garamond-regular">
            Get in Touch
          </p>
          <h2 className="propertyManagementContactHeaderTitle cormorant-garamond-regular">
            Start Cooperation Today
          </h2>
          <p className="propertyManagementContactHeaderDescription">
            Contact us to learn more about our property management services. We
            offer free consultation and valuation for all new clients.
          </p>
        </div>
        <div className="propertyManagementContactContent">
          {/* Contact Form */}
          <div className="propertyManagementContactForm">
            <div className="propertyManagementContactFormContainer">
              {" "}
              <h3 className="propertyManagementContactFormTitle cormorant-garamond-regular">
                Free Consultation
              </h3>
              <p className="propertyManagementContactFormSubtitle">
                Fill out the form and our expert will contact you within 24
                hours
              </p>
              <form
                onSubmit={handleSubmit}
                className="propertyManagementContactFormFields"
              >
                <div className="propertyManagementContactFormRow">
                  {" "}
                  <div className="propertyManagementContactFormField">
                    <label>Full name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>
                  <div className="propertyManagementContactFormField">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="propertyManagementContactFormRow">
                  {" "}
                  <div className="propertyManagementContactFormField">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+48 123 456 789"
                    />
                  </div>
                  <div className="propertyManagementContactFormField">
                    <label>Property type</label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>{" "}
                <div className="propertyManagementContactFormField">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell us about your property and expectations..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="propertyManagementContactFormSubmit"
                >
                  <span>Send Inquiry</span>
                  <div className="propertyManagementContactFormSubmitArrow">
                    <FaArrowRight />
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="propertyManagementContactInfo">
            <div className="propertyManagementContactInfoContainer">
              {" "}
              <h3 className="propertyManagementContactInfoTitle cormorant-garamond-regular">
                Contact Information
              </h3>
              <div className="propertyManagementContactInfoItems">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="propertyManagementContactInfoItem"
                  >
                    <div className="propertyManagementContactInfoItemIcon">
                      {item.icon}
                    </div>
                    <div className="propertyManagementContactInfoItemContent">
                      <h4 className="propertyManagementContactInfoItemTitle">
                        {item.title}
                      </h4>
                      <p className="propertyManagementContactInfoItemText">
                        {item.content}
                      </p>
                      <p className="propertyManagementContactInfoItemSubtitle">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>{" "}
              <div className="propertyManagementContactInfoCTA">
                <h4 className="propertyManagementContactInfoCTATitle cormorant-garamond-regular">
                  Need immediate help?
                </h4>
                <p className="propertyManagementContactInfoCTAText">
                  Our team is available 24/7 for emergency cases
                </p>
                <button className="propertyManagementContactInfoCTAButton">
                  <FaPhone />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Benefits */}{" "}
        <div className="propertyManagementContactBenefits">
          <h3 className="propertyManagementContactBenefitsTitle cormorant-garamond-regular">
            What Will You Get During Consultation?
          </h3>
          <div className="propertyManagementContactBenefitsGrid">
            <div className="propertyManagementContactBenefitsItem">
              <div className="propertyManagementContactBenefitsItemIcon">
                <FaChartBar />
              </div>
              <h4>Profitability Analysis</h4>
              <p>Detailed analysis of potential profits from your property</p>
            </div>
            <div className="propertyManagementContactBenefitsItem">
              <div className="propertyManagementContactBenefitsItemIcon">
                <FaLightbulb />
              </div>
              <h4>Investment Strategy</h4>
              <p>Personal consulting and development plan for your portfolio</p>
            </div>
            <div className="propertyManagementContactBenefitsItem">
              <div className="propertyManagementContactBenefitsItemIcon">
                <FaSearch />
              </div>
              <h4>Service Valuation</h4>
              <p>
                Transparent presentation of costs and benefits of cooperation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementContact;
