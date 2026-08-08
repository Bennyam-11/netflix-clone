import "./hero.css";
import banner from "../images/banner.jpg";

function Hero() {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay">
        <h1>Avengers: Endgame</h1>

        <p>
          After the devastating events of Infinity War, the Avengers unite for
          one final battle to restore the universe and defeat Thanos.
        </p>

        <div className="hero-buttons">
          <button className="play-btn">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;