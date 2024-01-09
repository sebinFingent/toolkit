import React, { useEffect,useState,useRef } from 'react';
import './style.scss'; 
import { SlArrowLeft,SlArrowRight } from "react-icons/sl";

const ImageSlider = () => {

    const items=[
        {item:"1",color:"#e1b131"},
        {item:"2",color:"#63d13b"},
        {item:"3",color:"#3ecfe2"},
        {item:"4",color:"#ffd2fd"},
        {item:"5",color:"gray"},

    ];

   const [swipeDirection, setSwipeDirection] = useState(null);
   const touchStartX = useRef(null);
   const c_index = useRef(null);

   const[isHover,setHover]=useState(false)
   
   useEffect(()=>{ 
        start()
        const interval =setInterval(()=>{
            handleMove('next')
        },3000)

        return ()=> {clearInterval(interval);}
    },[])
 
   const handleTouchStart = (e) => {
     touchStartX.current = e.touches[0].clientX;
   };
 
   const handleTouchMove = (e) => {
     if (touchStartX.current !== null) {
       const currentX = e.touches[0].clientX;
       const deltaX = currentX - touchStartX.current;
 
       if (deltaX > 50) {
         setSwipeDirection('right');
       } else if (deltaX < -50) {
         setSwipeDirection('left');
       }
     }
   };
 
   const handleTouchEnd = () => {
    if(swipeDirection === "right"){
        handleBack();
    }
    if(swipeDirection === "left"){
        handleNext();
    }
     touchStartX.current = null;
     setSwipeDirection(null);
   };
  
    const start = () => {
        handleMove()
    }

    const handleNext = () => {
        handleMove('next')
    }

    const handleBack = () => {
        handleMove('back')
    }

    const handleMove = (action) => {
        const nextIndexValue = action==="next"?c_index.current+1:action==="back"?c_index.current-1:0;
        const elements = document.querySelectorAll('.carousel-item');
        const counterElements = document.querySelectorAll('.counter');
        elements.forEach((items)=>items.classList.remove('active'));
        counterElements.forEach((items)=>items.classList.remove('active'));
        c_index.current = ((nextIndexValue)%items.length+ items.length) % items.length;
        elements[c_index.current].classList.add('active');
        counterElements[c_index.current].classList.add('active');
    }
   

  return (
    <div className="carousel" onTouchStart={handleTouchStart}>
        <div className='carousel-inner'  onTouchStart={handleTouchStart}>
           {
               items.map(({item,color},i)=>{
                    return(
                        <div 
                            key={i} 
                            className={'carousel-item active'} 
                            style={{backgroundColor:color}} 
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            // mousehover handler
                            onMouseEnter={()=>{setHover(true)}}
                            onMouseLeave={()=>{setHover(false)}}>
                                <div className='banner'>
                                    {item}
                                </div>  
                                <div className={`desc ${isHover?'hover':null}`}>
                                    Desc for slider. Sample text for smaploingdsd sds dsdsdsd dsds d
                                </div>  
                        </div>
                    ) 
                }) 
           }
           
        </div>

       <div className='action-button prev' onClick={handleBack}>
            <SlArrowLeft />
        </div>
        <div className='action-button next' onClick={handleNext}>
            <SlArrowRight />
        </div>
        <div className='counter-block'>
           { [...new Array(items.length)].map((_,activeIndex)=><div className="counter" key={activeIndex}></div>)}
        </div>
     </div>
  );
};

export default ImageSlider;