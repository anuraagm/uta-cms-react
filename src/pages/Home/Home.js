import ButtonPrimary from '../../atoms/buttons/ButtonPrimary/ButtonPrimary';
import stock from './students-stock.png';

function Home() {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url(${stock})`,
      }}
    >
      <div className="absolute bottom-0 right-0 bg-blue bg-opacity-80 p-4 md:w-1/3 md:p-16">
        <h1 className='text-white text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold pb-4 md:pb-4 md:text-left'>
            Welcome to UTA CMS!
        </h1>
        <h1 className="text-white md:text-xl lg:text-xl xl:text-xl md:text-left pb-6 md:pb-4">
            UTA CMS is your one stop destination to 
            manage all your classes and stay
            up to date with all things Master’s Related 
            in the Computer Science Department.
        </h1>
        <ButtonPrimary buttonText={"Login"} alignment={"md:float-left"}></ButtonPrimary>
      </div>
    </div>
  );
}

export default Home;
