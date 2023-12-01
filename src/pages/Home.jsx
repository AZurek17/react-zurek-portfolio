import "../styles/Hero/style.css";

function Home() {
  return (
    <div>
      <div
        className="hero text-center"
        style={{
          backgroundImage: `url('../images/home.jpg' )`,
          backgroundSize: "cover",
        }}
      >
        <h1>
          ✌️ Hello World! ✌️ <br></br>I&apos;m Andy Zurek
        </h1>
        <br></br>
        <h2>Welcome to my page! 😎 </h2>
      </div>
    </div>
  );
}

export default Home;
