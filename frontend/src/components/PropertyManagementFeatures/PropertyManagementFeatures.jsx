import React from "react";
import "./propertyManagementFeatures.css";
import {
  FaArrowRight,
  FaShieldAlt,
  FaClock,
  FaChartBar,
  FaDollarSign,
} from "react-icons/fa";

const PropertyManagementFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Technology and Innovation",
      description:
        "We use the latest technologies for property management, including mobile apps, monitoring systems, and process automation.",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { number: "24/7", label: "Online Monitoring" },
        { number: "100%", label: "Report Automation" },
      ],
    },
    {
      id: 2,
      title: "Experienced Team",
      description:
        "Our team consists of qualified specialists with years of experience in real estate and property management.",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { number: "15+", label: "Years of Experience" },
        { number: "50+", label: "Certified Specialists" },
      ],
    },
  ];
  const benefits = [
    {
      icon: <FaDollarSign />,
      title: "Profit Maximization",
      description: "We optimize rental prices and minimize vacancy periods",
    },
    {
      icon: <FaShieldAlt />,
      title: "Investment Protection",
      description:
        "Regular inspections and maintenance maintain property value",
    },
    {
      icon: <FaClock />,
      title: "Time Savings",
      description: "We take full responsibility for managing your property",
    },
    {
      icon: <FaChartBar />,
      title: "Full Transparency",
      description: "Regular reports and 24/7 access to online system",
    },
  ];

  return (
    <div className="propertyManagementFeatures">
      <div className="propertyManagementFeaturesContainer">
        {/* Header */}{" "}
        <div className="propertyManagementFeaturesHeader">
          <p className="propertyManagementFeaturesHeaderSubtitle cormorant-garamond-regular">
            Why Us?
          </p>
          <h2 className="propertyManagementFeaturesHeaderTitle cormorant-garamond-regular">
            What Sets Us Apart
          </h2>
        </div>
        {/* Main Features */}
        <div className="propertyManagementFeaturesMain">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`propertyManagementFeaturesMainItem ${index % 2 === 1 ? "reverse" : ""}`}
            >
              <div className="propertyManagementFeaturesMainItemImage">
                <img src={feature.image} alt={feature.title} />
                <div className="propertyManagementFeaturesMainItemImageOverlay">
                  <div className="propertyManagementFeaturesMainItemImageStats">
                    {feature.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="propertyManagementFeaturesMainItemImageStat"
                      >
                        <span className="propertyManagementFeaturesMainItemImageStatNumber cormorant-garamond-regular">
                          {stat.number}
                        </span>
                        <span className="propertyManagementFeaturesMainItemImageStatLabel">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="propertyManagementFeaturesMainItemContent">
                <h3 className="propertyManagementFeaturesMainItemTitle cormorant-garamond-regular">
                  {feature.title}
                </h3>
                <p className="propertyManagementFeaturesMainItemDescription">
                  {feature.description}
                </p>{" "}
                <div className="propertyManagementFeaturesMainItemButton">
                  <span>Learn more</span>
                  <div className="propertyManagementFeaturesMainItemButtonArrow">
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyManagementFeatures;
