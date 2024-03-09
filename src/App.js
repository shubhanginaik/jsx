import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Asistannts</div>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                imageSrc={AlexaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                imageSrc={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri01" imageSrc={SiriImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
