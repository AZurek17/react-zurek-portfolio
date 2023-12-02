import "../styles/Hero/style.css";

function Resume() {
  return (
    <div>
      <div className="hero text-center" id="resumeBg">
       
       
     <div className="hero text-right" id="resume">
            <h4>Front-end Proficiencies:</h4>    
                <li>HTML,</li>
                <li>CSS,</li>
                <li>JaveScript,</li>
                <li>jQuery,</li>
                <li>Responsive design,</li>
                <li>React,</li>
                <li>BootStrap,</li>
                <li>Bulma</li>
                <br></br>
           
          <h4>Back-end Proficiencies:</h4>
          
                <li>APIs,</li>
                <li>Node,</li>
                <li>Express,</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>Rest</li>
                <li>GraphQL</li>
       
  <br></br>
                <button className="btn" id='btnResume'>Download My Resume Here!</button>
     </div>
     
     
      </div>
    </div>
    
  );
}

export default Resume;
