import React from 'react'
import './Expreince.css'
import Card from '../Card/Card';
import Crown from '../../img/crown.png'
import Certificate from '../Certificate/Certificate';
function Expreince() {
    return (
        <>
         <h1 className='e-text'>Experince & Training</h1>
        <div className="experience" id='experience'>
               <div className="left-ex">
                  <Card emoji={Crown} className='card'
                     heading={'Teaching Assistance In MERN STACK DEVELOPMENT'}
                     detail={"Tech-Stalks :Node Js , React js, GIT/GitHub "}
                     lable={'Certificate Link'}
                     Link={'https://ninjasfiles.s3.amazonaws.com/certificate979850bb343db134540a46cb6c1e4dc5ff3c.pdf'}
                  />
               </div>
               <div className="right-ex">
                       <div>
                           <Certificate heading={'Certificate Of Excellence Front End Full Stack Web Development'}
                           lable={'LInk'}
                           Link={'https://ninjasfiles.s3.amazonaws.com/certificate31862756a4acf0a7bbf7569325578686307ab99.pdf'}/> 
                       </div>
                       <div>
                           <Certificate heading={'Certificate Of Excellence Back End Full Stack Web Development in Node.js'}
                           lable={'LInk'}
                           Link={'https://certificate.codingninjas.com/view/ad728fc704c8723b'}/> 
                       </div>
                       <div>
                           <Certificate heading={'Certificate Of Excellence Advance Front-End Web Development with React'}
                           lable={'LInk'}
                           Link={'https://certificate.codingninjas.com/view/a49bc4d1ae83a5dd'}/> 
                       </div>
               </div>
        </div>
        </>
       
      );
}



export default Expreince