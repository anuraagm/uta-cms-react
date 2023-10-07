import ButtonPrimary from '../../atoms/buttons/ButtonPrimary/ButtonPrimary';
import stock from './students-stock.png';
import image1 from './cs-stud.jpeg';
import image2 from './cs-expert.jpeg';
import image3 from './scores.jpeg';
import { useRef } from 'react';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';

function Home() {

  const landingRef = useRef();
  const aboutRef = useRef();
  const footerRef = useRef();

  const images = [image1, image2, image3];
  
  const texts = [
    {
      title: "What is this program about?",
      description:
        "Our Master’s Program in Computer Science is geared towards preparing the next generation of engineers to innovate and take on real-world problems. Through this rigorous course, students will be equipped to be employable in the industry and tackle technologies such as Web Development, Data Science and Artificial Intelligence with ease.",
    },
    {
      title: "What are our objectives?",
      description:
        "Our Program Objectives are: <ol><li>1. To provide excellent education in the latest cutting-edge technologies</li><li>2. To encourage a research mindset in the students</li><li>3. To make students industry-ready with required technical skills</li><li>4. To provide opportunities to collaborate and inculcate teamwork</li></ol>",
    },
    {
      title: "How do we measure and ensure success?",
      description:
        "To ensure the success of every student, we follow the best practices in measuring metrics :<ol><li>1. Individual student-specific guidance</li><li>2. Data-driven insights to track progress</li><li>3. Grade tracking and course insights</li><li>4. Trend prediction</li></ol>",
    },
  ];

  return (
    <div className='Home'>
      
      <Header landingRef={landingRef} aboutRef={aboutRef} footerRef={footerRef}></Header>

      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${stock})` }} id='landing' ref={landingRef}>
        <div className="absolute bottom-0 right-0 bg-blue bg-opacity-80 p-4 md:w-1/3 md:p-16">
          <h1 className='text-white text-lg md:text-2xl lg:text-2xl xl:text-2xl font-bold pb-4 md:pb-4 md:text-left'>
            Welcome to UTA CMS!
          </h1>
          <h1 className="text-white md:text-xl lg:text-xl xl:text-xl md:text-left pb-6 md:pb-4">
            UTA CMS is your one-stop destination to 
            manage all your classes and stay
            up to date with all things Master’s Related 
            in the Computer Science Department.
          </h1>
          <ButtonPrimary buttonText={"Login"} alignment={"md:float-left"}></ButtonPrimary>
        </div>
      </div>
      <div className="bg-white p-8 md:p-16" id='about' ref={aboutRef}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`text-center md:flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="max-w-full h-auto md:w-1/2 relative mx-auto md:mx-0 my-12">
                <img src={image} alt={`Image ${index + 1}`} className='justify-center w-4/5 ml-8 lg:ml-14'/>
                <div className="absolute w-4/5 inset-0 bg-blue bg-opacity-70 flex items-center justify-center ml-8 lg:ml-14">
                  <p className="text-white text-xl font-bold">{texts[index].title}</p>
                </div>
              </div>
              <div className="md:text-xl sm:text-md font-bold mt-2 md:w-1/2 lg:p-24">
                {/* Using dangerouslySetInnerHTML to render the HTML */}
                <div dangerouslySetInnerHTML={{ __html: texts[index].description }} />
              </div>
            </div>
          ))}
        </div>
      </div>    
      <Footer ref={footerRef}></Footer>
    </div>
  );
}

export default Home;
