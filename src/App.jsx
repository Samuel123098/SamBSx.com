import './App.css'

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
      <div className='ImageZoomLength'> 
          <div className='ImageZoomHolder'>
                <img src="./beautiful-shot-snowy-mountain-sunset.jpg" className="ImageZoomReal"></img>
          </div>
      </div>
      <div className='AfterWards'>

      </div>
    </>
  )
}

export default App
