import React, { useState } from "react";
import NewBanner from "@/components/NewBanner/newbanner"; // Import the NewBanner component
import YouthGroup from "./servicesInfo/youth-group"; // Import the YouthGroup component

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Define styles
  const styles = {
    centerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      height: "90%",
      backgroundColor: "var(--background-color)",
      padding: "20px",
      overflow: "visible",
      maxWidth: "100vw",
      border: '1px solid red',
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    serviceRectangle: {
      width: "100%",
      height: "200px",
      borderRadius: "10px",
      overflow: "hidden",
      position: "relative",
      cursor: "pointer",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      ":hover": {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
      },
    },
    serviceImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(0.9)",
    },
    serviceOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(137, 115, 73, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
     
      
    },
    glareEffect: {
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background: "linear-gradient(45deg, rgba(255, 255, 255, 0.1) 10%, rgba(255, 255, 255, 0) 50%)",
      transform: "rotate(30deg)",
      pointerEvents: "none",
    },
    popupOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(137, 115, 73, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      
    },
    popupContent: {
      backgroundColor: "var(--foreground-color)",
      color: "var(--primary-color)",
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "90%",
      width: "500px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
      maxHeight: "80vh",
      overflowY: "auto",
      height: "90vh",
    },
    closeButton: {
      position: "absolute",
      top: "-50px",
      right: "0px",
      background: "none",
      border: "none",
      fontSize: "6rem",
      cursor: "pointer",
      color: "var(--primary-color)",
    },
    // bottomCloseButton: {
    //   position: "fixed",
    //   bottom: "10vh",
    //   left: "50%",
    //   transform: "translateX(-50%)",
    //   padding: "10px 20px",
    //   fontSize: "1rem",
    //   color: "white",
    //   backgroundColor: "var(--primary-color)",
    //   border: "none",
    //   borderRadius: "5px",
    //   cursor: "pointer",
    //   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    //   zIndex: 1001,
    //   border: "1px solid blue",
    // },
  };

  const services = [
    { id: 1, title: "Sunday Worship", image: "/images/services-churchservice.png", description: "Join us every Sunday for a time of worship, prayer, and teaching.", isNew: false },
    { id: 2, title: "Bible Study", image: "/images/services-bibleStudy.png", description: "Dive deeper into God's Word with our weekly Bible Study sessions.", isNew: false },
    { id: 3, title: "Youth Group", image: "/images/youth-group-1.jpg", description: "Our Youth Group is a vibrant community where teens can grow in their faith.", isNew: true },
    { id: 4, title: "Community Outreach", image: "/images/services-communityOutreach.png", description: "Our Community Outreach programs are designed to make a positive impact.", isNew: false },
    { id: 5, title: "Child Care", image: "/images/services-childcare.png", description: "Our Child Care services provide a safe, nurturing, and fun environment.", isNew: false },
    { id: 6, title: "Music Ministry", image: "/images/services-musicMinistery.png", description: "Our Music Ministry is dedicated to leading the congregation in worship.", isNew: false },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  return (
    <div style={styles.centerContainer}>
      <div>
        <h1 style={styles.title}>
          <i className="fa-solid fa-church" aria-hidden="true"></i> Services
        </h1>

        <div className="services-container">
          {services.map((service) => (
            <div
              key={service.id}
              style={styles.serviceRectangle}
              onClick={() => handleServiceClick(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                style={styles.serviceImage}
              />
              {/* Glare Effect */}
              <div style={styles.glareEffect}></div>
              {/* Overlay with Title */}
              <div style={styles.serviceOverlay}>{service.title}</div>
              {/* Add NewBanner if the service is new */}
              {service.isNew && <NewBanner />}
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && selectedService && (
        <div style={styles.popupOverlay}>
          <div style={styles.popupContent}>
            <button style={styles.closeButton} onClick={closePopup}>
              &times;
            </button>
            {/* Render YouthGroup component if the selected service is "Youth Group" */}
            {selectedService.title === "Youth Group" ? (
              <YouthGroup />
            ) : (
              <>
                <h2>{selectedService.title}</h2>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px", marginBottom: "20px" }}
                />
                <p>{selectedService.description}</p>
              </>
            )}
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Services;
