import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const userFirstName = localStorage.getItem("firstName");
  return (
    <>
      <div className={styles.main_container}>
        <nav className={styles.navbar}>
          <h1>{userFirstName ? `Welcome, ${userFirstName}` : "NAME"}</h1>
          <button className={styles.white_btn}>
            <a href="#home" className={styles.nav_link}>
              Home
            </a>
          </button>
          <button className={styles.white_btn}>
            <a href="#launchh" className={styles.nav_link}>
              Launch
            </a>
          </button>
          <button className={styles.white_btn}>
            <a href="#FIRST SNAP TAKEN BY CHANDRAYAAN" className={styles.nav_link}>
              PICS
            </a>
          </button>
          <button className={styles.white_btn} onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div id="home">
          <h1 align="center">INTRO</h1>
          <div className={styles.content_container}>
            <div className={styles.text_content}>
              <p>
                <font size="5">
                  Chandrayaan-3 (Devanagari: चंद्रयान-३, transl. Moon-spaceship)[7] is the third and most recent lunar Indian Space Research exploration mission under the Chandrayaan programme of ISRO.[7] It consists of a lander named Vikram and a rover named Pragyan similar to Chandrayaan-2, but does not have an orbiter. Its propulsion module behaves like a communication relay satellite. The propulsion module carries the lander and rover configuration until the spacecraft is in a 100 km lunar orbit.[8][9]
                  Following Chandrayaan-2, where a last-minute glitch in the landing guidance software led to the lander crashing after entering lunar orbit, another lunar mission was proposed.[10]
                  The launch of Chandrayaan-3 took place on 14 July 2023, at 2:35 pm IST[11] and lunar injection of 100 km circular polar orbit was completed successfully as part of phase one.[2][12] The lander and rover are expected to land near the lunar south pole region on 23 August 2023.[13]
                  The Chandrayaan-3 mission is a stepping stone towards ISRO’s future interplanetary missions. The key idea is technology demonstration of crucial capability to soft land on lunar surface safely that the earlier mission could not achieve.[14]
                </font>
              </p>
            </div>
            <div className={styles.image_content}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Chandrayaan-3_Integrated_Module_in_clean-room_03.webp/390px-Chandrayaan-3_Integrated_Module_in_clean-room_03.webp.png"
                alt="chandrayaan3"
              />
            </div>
          </div>
        </div>

        <div id="launchh">
          <h1 align="center">LAUNCH</h1>
          <div className={styles.launch}>
            <div className={styles.text}>
              <p>
                <font size="5">
                  Chandrayaan-3 was launched on 14 July 2023, at 2:35 pm IST as scheduled, from Satish Dhawan Space Centre Second Launch Pad in Sriharikota, Andhra Pradesh, India. The spacecraft entered lunar orbit on 5 August 2023.[24] It is anticipated that the Chandrayaan-3 mission will achieve a soft landing on the lunar South Pole region on 23 August.[25]
                  Choosing the month of July for the launch of Chandrayaan 3 was a special move because of a calculation made by ISRO regarding the closeness of Earth and Moon.[26]
                  On August 5, the Indian Space Research Organisation achieved a Lunar-Orbit Insertion (LOI), successfully placing the Chandrayaan-3 spacecraft into orbit around the Moon. The LOI operation was carried out from the ISRO Telemetry, Tracking, and Command Network (ISTRAC) located in Bengaluru.[27][28]
                </font>
              </p>
            </div>
            <div className={styles.image}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp/330px-LVM3_M4%2C_Chandrayaan-3_-_Launch_vehicle_lifting_off_from_the_Second_Launch_Pad_%28SLP%29_of_SDSC-SHAR%2C_Sriharikota_03.webp.png"
                alt="Chandrayaan-3"
              />
            </div>
          </div>
        </div>
        <h1 align="center">MISSION PROFILE</h1>
        <div className={styles.launch}>
          <div className={styles.text}>
            <p>
              <font size="5">
                Chandrayaan-3 Lift off mass is nearly 3896 kg and the mission life of Lander and Rover is approximately one Lunar Day which is equivalent to 14 earth days. The planned landing site for lander is ~ 690S, South Pole.
              </font>
            </p>
          </div>
          <div className={styles.image}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Animation_of_Chandrayaan-3_around_Earth.gif/360px-Animation_of_Chandrayaan-3_around_Earth.gif"
              alt="Chandrayaan-3"
            />
            <li>BLUE-EARTH</li>
            <li>PURPLE-CH3</li>
            <li>GREEN-MOON</li>
          </div>
        </div>
        <div id="FIRST SNAP TAKEN BY CHANDRAYAAN">
           <h1 align="center">FIRST SNAP TAKEN BY CHANDRAYAAN</h1>
           <div className={styles.launch}>
            <div className={styles.text}>
              <p>
                <font size="5">
                  The second image is of the Moon captured by the Lander Horizontal Velocity Camera (LHVC) on board the spacecraft on August 6.
                  ISRO posted on its X social media platform: “Chandrayaan-3 Mission: Earth viewed by Lander Imager (LI) Camera on the day of the launch, Moon imaged by Lander Horizontal Velocity Camera (LHVC) a day after the Lunar Orbit Insertion.”
                </font>
              </p>
            </div>
            <div className={styles.image}>
              <img 
               src="https://i.gadgets360cdn.com/large/moon_chandrayaan_ani_isro_1691409167328.jpg"
               alt="chandrayaan3"/>
            </div>
            </div>
           <center>
            <h3>Chandrayaan-3 is scheduled to make a soft landing on the south-polar region of the Moon on August 23.</h3>
            <h2> for more updates</h2>
            <button className={styles.white_btn}><a href="https://rajneetug2021.com/isro-moon-mission-chandrayaan-3-status/#:~:text=Chandrayaan%2D3%20Orbit%20Raising,maneuver%20on%2025%20July%202023."> click here</a>
        </button>
           </center>
        </div>
      </div>
    </>
  );
};

export default Main;

