import React from "react";
import kisses from "../kisses.gif";
import Hug from "../hug.gif";
import Love2 from "../love2.gif";
import MeAndLily from "../lilyAndMe.png";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={Hug} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      "You're my favorite person, my princess, and the one I enjoy every moment
      with."
    </p>
    <p className="App-text-success">
      "With you, I find peace and happiness in every little thing. You are my
      joy, my hope, and my endless dream."
    </p>
    <p className="App-text-success">
      "My heart finds its rhythm in your smile. Being by your side is all
      I ever want."
    </p>
    <p className="App-text-success">
      "You’re my heart’s favorite melody, and I want to dance to it every
      single day."
    </p>
    <p className="App-text-success">
      "Looking forward to spending all of my day with you, Layal."
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">30/8/2024</p>
    <img src={MeAndLily} className="my-pic" alt="my & lily" />
    <img className="App-gif" src={kisses} alt="Kisses" />
    <img className="App-gif" src={Love2} alt="Kisses" />
  </div>
);

export default Success;
