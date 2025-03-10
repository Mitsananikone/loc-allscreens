import React, { useState, useRef } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles

function YouthGroup() {
  const router = useRouter(); // Initialize the router
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
  const sliderRef = useRef(null); // Ref to access the Slider instance

  // Carousel settings
  const carouselSettings = {
    dots: false, // Hide default dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 3000, // Auto-play speed in milliseconds
    arrows: true, // Show navigation arrows
    beforeChange: (current, next) => setCurrentSlide(next), // Update current slide
  };

  // Array of image URLs for the carousel
  const carouselImages = [
    "/images/youth-group-1.jpg",
    "/images/youth-group-2.jpg",
    "/images/youth-group-3.jpg",
    "/images/youth-group-4.jpg",
    "/images/youth-group-5.jpg",
    "/images/youth-group-6.jpg",
    "/images/youth-group-7.jpg",
  ];

  // Custom arrow components
  const CustomPrevArrow = (props) => (
    <div
      {...props}
      style={{
        ...props.style,
        position: "absolute",
        left: "10px",
        zIndex: 1,
        cursor: "pointer",
        fontSize: "2rem",
        color: "white",
      }}
    >
      &#10094; {/* Left arrow symbol */}
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      {...props}
      style={{
        ...props.style,
        position: "absolute",
        right: "10px",
        zIndex: 1,
        cursor: "pointer",
        fontSize: "2rem",
        color: "white",
      }}
    >
      &#10095; {/* Right arrow symbol */}
    </div>
  );

  // Update carousel settings to use custom arrows
  carouselSettings.prevArrow = <CustomPrevArrow />;
  carouselSettings.nextArrow = <CustomNextArrow />;

  const styles = {
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "var(--foreground-color)",
      padding: "20px",
      overflow: "hidden", // Prevent horizontal scrolling
      maxWidth: "100vw",
      marginTop: "2vh", // Reduced from 8vh to 2vh
    },
    title: {
      fontSize: "1.5rem",
      color: "var(--primary-color)",
      textAlign: "center",
      marginBottom: "20px",
    },
    carouselContainer: {
      width: "100%",
      maxWidth: "800px", // Adjust the max width as needed
      marginBottom: "20px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      position: "relative",
    },
    carouselImage: {
      width: "100%",
      height: "300px", // Adjust the height as needed
      objectFit: "cover",
    },
    thumbnailContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap", // Allow thumbnails to wrap to the next line
      gap: "10px",
      marginTop: "10px",
      maxWidth: "100%", // Ensure thumbnails don't overflow
      padding: "0 10px", // Add padding to prevent overflow
    },
    thumbnail: {
      width: "60px", // Default size
      height: "60px", // Default size
      borderRadius: "5px",
      cursor: "pointer",
      border: "2px solid transparent",
      objectFit: "cover",
      opacity: 0.7,
      transition: "opacity 0.3s ease, border-color 0.3s ease",
      "@media (max-width: 768px)": {
        width: "50px", // Smaller size for medium screens
        height: "50px",
      },
      "@media (max-width: 480px)": {
        width: "40px", // Even smaller size for small screens
        height: "40px",
      },
    },
    activeThumbnail: {
      opacity: 1,
      borderColor: "var(--primary-color)",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "var(--primary-color)",
      textAlign: "left",
      padding: "0 20px",
    },
    backButton: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1rem",
      color: "white",
      backgroundColor: "var(--primary-color)",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      ":hover": {
        backgroundColor: "var(--secondary-color)",
      },
    },
  };

  // Function to handle the back button click
  const handleBackClick = () => {
    // Navigate to the root with a query parameter
    router.push("/?scrollTo=services");
  };

  // Function to handle thumbnail click
  const handleThumbnailClick = (index) => {
    setCurrentSlide(index); // Update the current slide state
    sliderRef.current.slickGoTo(index); // Programmatically go to the selected slide
  };

  return (
    <div style={styles.centerContainer}>
      {/* Header */}
      <h1 style={styles.title}>
        <i className="fa-solid fa-users" aria-hidden="true"></i> Youth Group
      </h1>

      {/* Carousel */}
      <div style={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Youth Group Image ${index + 1}`}
                style={styles.carouselImage}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnails */}
      <div style={styles.thumbnailContainer}>
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{
              ...styles.thumbnail,
              ...(index === currentSlide && styles.activeThumbnail),
            }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      {/* Description */}
      <div style={styles.description}>
        <p><br/>
          Our Youth Group is a fun, vibrant community where teens from around Alvin ISD can grow in their
          faith, build lasting friendships, and have fun! The first half is social time - everyone catches up with one another, dinner is provided, and our young people love to play organized games.
        </p>
        <p>
          The second half is Bible study, which concentrates on issues important to Christian teens, and there is lots of open discussion.
        </p>
      </div>
    </div>
  );
}

export default YouthGroup;