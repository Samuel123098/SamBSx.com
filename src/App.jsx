
import './App.css';
import ScrollZoomImage from './components/zoomimg';
import AnimateOnView from './components/reveal';
import ProjectCard from './components/projectcard';

function App() {
  const zoomamount = 0

  const elements = document.querySelectorAll('.AfterWards');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        console.log('Element is visible:', entry.target);

      } else {

        console.log('Element is NOT visible:', entry.target);
        
      }
    });
  });

  elements.forEach(el => observer.observe(el));

  return (
    <>

      <div className='ImageZoomLength' style={{ position: 'relative', height: '300vh' }}>
        <ScrollZoomImage />

        <div className='OverlayText' style={{
          position: 'absolute', 
          top: 'calc(2vw + 1vh)',
          left: 0,
          width: '100%',
          zIndex: 2, 
          color: 'white', 
          padding: '20px',
          boxSizing: 'border-box', 
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',


         
        }}>
          <h2 style={{
             fontSize: '9vw',
             fontFamily: 'Awaken',
             textAlign: 'center'

          }}>Samuel Bradley-Smith</h2>

          <div style={{
            alignItems: 'left',
          }}>
          <p style={{
             fontSize: '2vh',
             fontFamily: 'Awaken',
             transform: 'translateY(155vh)',
             width: 'calc(100% - 40vw)',
             alignSelf: 'left',
             paddingLeft: '5px'


          }}
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec turpis erat. In hac habitasse platea dictumst. Mauris vel massa nec est ultrices volutpat. Vivamus aliquam neque libero, a congue ligula interdum maximus. Sed blandit pharetra neque, ac luctus lorem aliquam id. Aliquam mollis felis id ligula interdum, et suscipit nibh vulputate. Maecenas sagittis massa elit, vitae facilisis ante imperdiet quis. Donec tincidunt</p>
         </div>
        </div>
      </div>

      <div className='ProjectsPage'>
        <div >
            <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }} >
                <p className= "ProjectHeader">My Projects</p>
      </AnimateOnView>
                  <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }} >

                <p className= "ProjectDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar risus efficitur, pellentesque mi et, euismod dui. Quisque iaculis tortor vel est suscipit, vitae lacinia neque tincidunt. Suspendisse nec dolor vitae urna dapibus finibus ut at mauris. Nunc ut malesuada felis. Fusce convallis, lacus sit amet pellentesque malesuada, urna lacus auctor neque, sit amet faucibus elit nunc sed neque</p>
      </AnimateOnView>
        </div>
        <div className='OutSideContainer'>
   
          <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }} >

                <ProjectCard></ProjectCard>
      </AnimateOnView>
          
          <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }} >
                <ProjectCard></ProjectCard>
      </AnimateOnView>
          <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }} >
                <ProjectCard></ProjectCard>
      </AnimateOnView>
          <AnimateOnView variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },}}
                  transition={{ duration: 1.6, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }} >
                <ProjectCard></ProjectCard>
      </AnimateOnView>
        </div>
      </div>
      <div className='AfterWards'>

      </div>
    </>
  );
}

export default App;