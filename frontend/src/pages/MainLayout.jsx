import {Hero, Navbar, Footer, Stats, Company} from '../components/index'

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Company />
      <Footer />
    </div>
  );
}

export default MainLayout;