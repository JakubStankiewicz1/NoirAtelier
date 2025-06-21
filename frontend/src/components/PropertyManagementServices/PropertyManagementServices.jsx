import React from "react";
import "./propertyManagementServices.css";
import {
  FaHome,
  FaUsers,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";

const PropertyManagementServices = () => {
  const services = [
    {
      id: 1,
      icon: <FaHome />,
      title: "Property Administration",
      description:
        "Comprehensive care for your property, including maintenance, repairs, and regular technical inspections.",
      features: [
        "Tenant management",
        "Lease agreement handling",
        "Regular technical condition checks",
      ],
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Tenant Management",
      description:
        "Professional tenant selection and management, ensuring stable income from your investment.",
      features: [
        "Tenant verification",
        "Documentation handling",
        "Conflict resolution",
      ],
    },
    {
      id: 3,
      icon: <FaTools />,
      title: "Maintenance & Repairs",
      description:
        "Quick response to maintenance needs and planned repairs maintaining high property value.",
      features: [
        "24/7 emergency service",
        "Scheduled maintenance",
        "Service quality control",
      ],
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: "Profitability Analysis",
      description:
        "Regular financial reports and investment profitability analyses, helping in decision-making.",
      features: [
        "Monthly reports",
        "Rental market analysis",
        "Cost optimization",
      ],
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      title: "Legal Protection",
      description:
        "Comprehensive legal and insurance handling for your property and rental processes.",
      features: [
        "Legal support",
        "Insurance management",
        "Debt collection procedures",
      ],
    },
    {
      id: 6,
      icon: <FaHandshake />,
      title: "Strategic Consulting",
      description:
        "Professional consulting in property portfolio development and investment strategies.",
      features: ["Investment planning", "Market analysis", "Decision support"],
    },
  ];

  return (
    <div className="propertyManagementServices">
      <div className="propertyManagementServicesContainer">
        {/* Header Section */}{" "}
        <div className="propertyManagementServicesHeader">
          <div className="propertyManagementServicesHeaderContainer">
            <p className="propertyManagementServicesHeaderSubtitle cormorant-garamond-regular">
              Our Services
            </p>
            <h2 className="propertyManagementServicesHeaderTitle cormorant-garamond-regular">
              Comprehensive Property Management
            </h2>
            <p className="propertyManagementServicesHeaderDescription">
              We offer a wide range of professional property management services
              that ensure maximum return on your investment with minimal
              involvement on your part.
            </p>
          </div>
        </div>
        {/* Services Grid */}
        <div className="propertyManagementServicesGrid">
          {services.map((service) => (
            <div key={service.id} className="propertyManagementServicesCard">
              <div className="propertyManagementServicesCardHeader">
                <div className="propertyManagementServicesCardIcon">
                  {service.icon}
                </div>
                <h3 className="propertyManagementServicesCardTitle cormorant-garamond-regular">
                  {service.title}
                </h3>
              </div>
              <div className="propertyManagementServicesCardContent">
                <p className="propertyManagementServicesCardDescription">
                  {service.description}
                </p>
                <ul className="propertyManagementServicesCardFeatures">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="propertyManagementServicesCardFeature"
                    >
                      <span className="propertyManagementServicesCardFeatureIcon">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>{" "}
              <div className="propertyManagementServicesCardButton">
                <span>Learn more</span>
                <div className="propertyManagementServicesCardButtonArrow">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementServices;
