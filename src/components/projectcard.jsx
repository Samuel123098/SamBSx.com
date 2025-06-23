import { color, transform } from "framer-motion";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{width:'90%',height:'90%',backgroundColor:"#465773", borderRadius:'20px', margin:'auto', marginTop:'1vw'}}>
        <div className = "bottom-square" style={{position:'relative', width:'auto',height:'6.5vw',backgroundColor:"grey", borderRadius:'0 0 20px 20px', bottom:'-70%'}}>
            <h className= 'project-card-header' style={{position:'relative',color:'white', fontFamily: 'Awaken', fontSize: '1.3vw', paddingLeft:'10px', top: '2.5vw' }}>Your Paragraph Text</h>
        </div>
        
      </div>

  );
}