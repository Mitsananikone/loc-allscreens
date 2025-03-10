import React from "react";
import Parallelogram from "@/components/parallelogram/parallelogram";

// Styles consolidated at the top
const styles = {
  centerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    backgroundColor: "var(--background-color)",
    maxWidth: "100vw", // Ensure it doesn't exceed the viewport width
  },
  background: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  logoTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    width: "100%",
    marginBottom: "40px",
  },
  logoImage: {
    height: "100px", // Set height
    width: "100px", // Set width to match height
    borderRadius: "50%", // Ensure it's a circle
    objectFit: "cover", // Maintain aspect ratio
  },
  title: {
    fontSize: "1.6rem",
    color: "var(--primary-color)",
    margin: "0",
    textAlign: "center",
  },
  parallelogramWrapper: {
    position: "relative",
    zIndex: 1,
    width: "auto",
    marginBottom: "-5vh", // Space between the two parallelograms
    display: 'flex',
  justifyContent: 'center', /* Center horizontally */
  alignItems: 'center', /* Center vertically */
  height: '50vh'
  },
  parallelogramContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "left",
    transform: "skew(20deg)",
    padding: "0px",
    color: "var(--primary-color)",
    fontSize: "small",
  },
};

function About() {
  return (
    <div style={styles.centerContainer}>
      <div style={styles.background}>
        {/* Flex container for logo and title */}
        <div style={styles.logoTitleContainer}>
          <div>
            <img
              src="./images/LOClogoBlackCircle.png"
              alt="Logo"
              style={styles.logoImage}
            />
          </div>
          <h1 style={styles.title}>About the Name and Logo</h1>
        </div>

        {/* First Parallelogram */}
        <div style={styles.parallelogramWrapper}>
          <Parallelogram
            width="500px" // Width of the parallelogram
            height="300px" // Height of the parallelogram
            color="var(--secondary-color)"
            top="0"
            zIndex="-2"
          >
            <div style={styles.parallelogramContent}>
              <p>
                The city of Alvin is known for its Southern Oak Trees. The
                city's official logo once highlighted Alvin's first meeting
                center, the Oak Tree in National Oak Park.
              </p>
            </div>
          </Parallelogram>
        </div>

        {/* Second Parallelogram */}
        <div style={styles.parallelogramWrapper}>
          <Parallelogram
            width="500px" // Width of the parallelogram
            height="420px" // Height of the parallelogram
            top="-5vh"
            backImage="url('/images/Kintsugi.png')"
            zIndex="2"
          >
            <div style={{ ...styles.parallelogramContent }}>
              <h2>Kintsugi means golden repair</h2>
              <br />
              <p>
                It is a Japanese art form of decorating repair seams of broken
                pottery with a precious metal, making the repaired form more
                valuable than the unbroken form. <br />
                The Christ-follower knows this "golden repair," as well, that
                the Holy Spirit can give to a broken heart and soul.
              </p>
            </div>
          </Parallelogram>
        </div>
      </div>
    </div>
  );
}

export default About;
