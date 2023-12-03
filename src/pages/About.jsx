import "../styles/Hero/style.css";

function About() {
  var today = dayjs().format("MMM D, YYYY");

  return (
    <div>
      <div className="hero text-center" id="aboutBg">
        <h2 id="welcome">
          ✌️Hello World!✌️ <br></br>Welcome to my page! 😎
        </h2>

        <img id="zphoto"></img>
        <h2>
          <span id="welcome"></span> I&apos;m Andy Zurek
        </h2>
        <br></br>
        <h5>
          A little about me:<br></br>
          For the past 23 years, I&apos;ve been a Structural
          Drafter/Designer/Special Inspector. I wanted a change and switching to
          a Full Stack Developer fits and feels right!
          <br></br>As a Full Stack Developer, I want to continue to build a
          better tomorrow. I also enjoy building custom PC&apos;s, Servers, and
          have a little networking knowledge too.
          <br></br>
          Head over to the Resume page for a summary of my Developer skills
          I&apos;ve recently learned
        </h5>
        <h3>
          This site was created on: <br></br>Dec 2, 2023 <br></br>Today is:<br></br>
          <span id="date">{today}</span>
        </h3>
      </div>
    </div>
  );
}

export default About;
