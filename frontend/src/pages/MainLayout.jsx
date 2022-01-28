import {Hero, Navbar, Footer, Stats} from '../components/index'

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}

export default MainLayout;