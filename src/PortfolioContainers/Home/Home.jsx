import Profile from "./Profile";

function Home() {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default Home;
