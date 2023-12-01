import "../styles/Hero/style.css";

function Resume() {
  return (
    <div>
      <div className="hero text-right">
        <a><h2>Download my resume here</h2></a>
        <div className={`row`}>
          <div className={"md-12"}>
      <div className="hero text-left" style={{ backgroundImagePath: "../images/" }}>


        <h5>Front-end Proficiencies:</h5>
              <ul>     
                <li>HTML,</li>
                <li>CSS,</li>
                <li>JaveScript,</li>
                <li>jQuery,</li>
                <li>responsive design,</li>
                <li>React,</li>
                <li>BootStrap,</li>
                <li>Bulma</li>
              </ul> 
              </div>
        </div>
        <div className={`row`}>
          <div className={"md-12"}>
        <h5>Back-end Proficiencies:</h5>
              <ul>     
                <li>APIs,</li>
                <li>Node,</li>
                <li>Express,</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>Rest</li>
                <li>GraphQL</li>
              </ul> 

        </div>
      </div>

      </div>
      </div>
    </div>
    
  );
}

export default Resume;
