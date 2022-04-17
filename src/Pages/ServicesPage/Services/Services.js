import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="service-area">
      <h1 className="service-text">Our Services</h1>
      <div className="services-container">
        <div className="services-details-container">
          {services.map(service => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
