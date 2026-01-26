import backgroundPic from '../img/backgroundPic.jpg';

const Layout = ({ children }) => {
  return (
    <section
      className='py-8 mb-4 text-center min-h-screen bg-cover bg-no-repeat bg-center'
      style={{
        backgroundImage: `url(${backgroundPic})`,
      }}
    >
      {children}
    </section>
  );
};

export default Layout;
