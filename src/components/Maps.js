import React, {useState} from 'react'
import  {Marker, NavigationControl} from 'react-map-gl';
import "./MapStyles.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css"; 
import "./br.css"
import ReactMapGL from "react-map-gl"; 
// import mapboxgl from "mapbox-gl"; // This is a dependency of react-map-gl even if you didn't explicitly install it  

// // eslint-disable-next-line import/no-webpack-loader-syntax 6.1.9
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

 

const Maps = () => {


 let [viewport, setViewport] = useState({
    latitude: 6.6018,
    longitude: 3.3515,
    zoom: 12,
    height: window.innerHeight,
    width:  "80vw",    
    pitch: 50,
   
 });

const {REACT_APP_MAPBOX_TOKEN} = process.env  

  return ( 
    <>

       <div className='cool static'> 
       <ReactMapGL mapStyle="mapbox://styles/mapbox/streets-v8" mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN} 
       
      
         
       {...viewport}
       onViewportChange={(newView) => setViewport(newView)}   
      
       >
        


         <Marker latitude={6.5916} longitude={3.2911} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://images.all-free-download.com/images/graphiclarge/blue_shopping_cart_icon_vector_280786.jpg" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Egbeda</p> 
            </div> 
            </Marker>

            <Marker latitude={6.6180} longitude={3.3209} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://img.favpng.com/20/24/7/map-drawing-pin-clip-art-png-favpng-Kun5RxqQpnjJhamZ9aztsSGh2.jpg" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Agege</p> 
            </div>
            </Marker>

            <Marker latitude={6.5818} longitude={3.3211} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img className='hidden md:inline' src="https://icones.pro/wp-content/uploads/2021/08/symbole-d-avion-et-de-voyage-rouge.png" width="30" height="30" alt="maps" />
            <p className=" hidden md:inline md:text-black md:text-xs md:pt-3 md: ">Murtala Mohammed Airport</p> 
            </div> 
            </Marker>

           

            <Marker latitude={6.689584} longitude={3.260417} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img className='hidden md:inline' src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-bridge-icon-png-image_533047.jpg" width="30" height="30" alt="maps" />
            <p className="hidden md:inline md:text-black md:text-xs md:pt-3 md:">Lagos Abeokuta Express Way</p> 
            </div>
            </Marker>

            {/* <Marker latitude={6.605874} longitude={ 3.349149} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://img.favpng.com/20/24/7/map-drawing-pin-clip-art-png-favpng-Kun5RxqQpnjJhamZ9aztsSGh2.jpg" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Ikeja</p> 
            </div>
            </Marker> */}

          
            <Marker latitude={6.5665775} longitude={3.329665} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://png.pngtree.com/png-vector/20190215/ourlarge/pngtree-vector-bridge-icon-png-image_533047.jpg" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Oshodi bridge</p> 
            </div>
            </Marker>

            <Marker latitude={6.5878} longitude={3.357} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_f4QSnz4NgKhPQVFerqAd-jPJpyMmajeVg&usqp=CAU" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Lagos Country <br /> Club</p> 
            </div>
            </Marker>

            <Marker latitude={6.56628494836} longitude={3.29027776395} offsetTop={(-viewport.zoom * 5) / 2}>
             <div className='flex flex-row'>
            
            <img src="https://e7.pngegg.com/pngimages/560/551/png-clipart-groupwise-computer-icons-symbol-novell-symbol-miscellaneous-angle.png" width="30" height="30" alt="maps" />
            <p className="text-black text-xs pt-3 ">Chrisland College Idimu </p> 
            </div>
            </Marker>

          
            <NavigationControl position="bottom-right" />
 
       </ReactMapGL> 
       </div>

    </>
  )
}

export default Maps


















