import 'animate.css'
import './about.css'
import picture from '../images/profile-pic.jpg'

const About = () => {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center about-div animate__animated animate__fadeIn'>
      <div className='row d-flex justify-content-center about-content p-3'>
        <p className='col-sm-6 about-text bg-dark m-2 text-sm'>
          <h2 className='d-flex justify-content-center intro'>Hey, I'm Jacob Willis</h2> I'm an aspiring full stack developer! As a nerd, gamer, coach, and fitness enthusiast, I bring a unique perspective to my work.
          With a strong foundation in programming languages and frameworks, I'm continuously expanding my skills in the ever-evolving tech landscape. From front-end design to back-end development, 
          I'm eager to tackle new challenges and make meaningful contributions to innovative projects.
        </p>
        <img className='col-sm-6 profile-pic' alt="Its Me!" src={picture}></img>
      </div>
    </div>
  );
};

export default About;
