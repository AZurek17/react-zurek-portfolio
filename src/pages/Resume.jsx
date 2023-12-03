import "../styles/Hero/style.css";

function Resume() {
  return (
    <div id="resumeBg">
    <div className="container" >
      <div className="row">
      {/* <div className="col-6">
      <div className="rCard1">
                </div>
      <div className="rCard2">
      </div>
    
      </div> */}
      <div className="col-5">
      <div className="hero text-center" >
      
     <div className="hero text-left mx-5" id="resume">
     <h2><span id="zurek">Brief Resume:</span></h2>
     <br></br>  
            <h4>Front-end Proficiencies:</h4>    
                <li>HTML,</li>
                <li>CSS,</li>
                <li>JaveScript,</li>
                <li>jQuery,</li>
                <li>Responsive design,</li>
                <li>React,</li>
                <li>BootStrap,</li>

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
                <button className="btn" id='btnResume'><a href='https://www.dropbox.com/scl/fi/ecr3mqrtkki7439qhu8t4/zurek-resume.pdf?rlkey=0ezj6b2h34iesd3xcwl48vlev&dl=0'>Download Full Resume Here!</a></button>
     </div>
     
     </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Resume;
