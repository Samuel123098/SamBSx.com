import { color, transform } from "framer-motion";


export default function ProjectCard({ project }) {
  return (
    <div className="project-card" style={{width:'23vw',height:'23vw',backgroundColor:"#465773", borderRadius:'20px', margin:'auto'}}>
        <div className = "bottom-square" style={{position:'relative', width:'23vw',height:'6.5vw',backgroundColor:"grey", borderRadius:'0 0 20px 20px', bottom:'-17vw'}}>
            <h className= 'project-card-header' style={{position:'relative',color:'white', fontFamily: 'Awaken', fontSize: '1.5vw', paddingLeft:'10px', top: '2.5vw' }}>Your Paragraph Text</h>
        </div>
        
      </div>

  );
}