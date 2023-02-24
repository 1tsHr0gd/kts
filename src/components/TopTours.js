import React, { useEffect, useState, useRef } from 'react'
import { CarouselIndicators, CarouselItem, Container, Carousel, Button } from 'reactstrap'

const tours = [
    {
        src:require("assets/img/bg1.jpg"),
        caption:"Tour 1"
    },
    {
        src:require("assets/img/bg3.jpg"),
        caption:"Tour 2"
    },
    {
        src:require("assets/img/bg5.jpg"),
        caption:"Tour 3"
    },
    {
        src:require("assets/img/bg4.jpg"),
        caption:"Tour 4"
    },
    {
        src:require("assets/img/bg7.jpg"),
        caption:"Tour 5"
    },
    {
        src:require("assets/img/bg8.jpg"),
        caption:"Tour 6"
    }
]

export default function TopTours() {

    const Tag = ({data}) => {
        return(
            <li>{data}</li>
        )
    }

    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setScrollX(scrollX + shift);

        if(
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ){
            setScrollEnd(true)
        }
        else{
            setScrollEnd(false)
        }
    }

    let scrl = useRef(null)
    const [scrollX,setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

    const scrollCheck = () => {
        setScrollX(scrl.current.scrollLeft);
        if (
          Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
          scrl.current.offsetWidth
        ) {
          setScrollEnd(true);
        } else {
          setScrollEnd(false);
        }
    };

    useEffect(()=>{
        if(scrl.current && scrl?.current?.scrollWidth === scrl?.current?.offsetWidth){
            setScrollEnd(true);
        }
        else{
            setScrollEnd(false);
        }
        return()=>{};
    }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth])

  return (
    <>
    <div>
        <h2 className='title text-center'>Our Top Tours</h2>
        <Container style={{overflowY:'hidden',overflowX:'hidden'}}>
            
            {tours.map((item)=>{
                return(
                    <div style={{display:'inline-block', width:"30%", margin:'10px'}}>
                        <img src={item.src}/>
                        <h5>{item.caption}</h5>
                    </div>
                )
            })}
        
        
        </Container>
        
        <div>
            {scrollX !== 0 && (
                <Button type='button' outline onClick={()=>slide(-50)}>
                    <i className='now-ui-icons arrows-1_minimal-left'/>
                </Button>
            )}
            
            <ul ref={scrl} onScroll={scrollCheck}>
                {tours.map((d,i)=>{
                    <Tag data={d.src}/>
                })}
            </ul>

            {!scrollEnd && (
                <Button type='button' outline onClick={()=>slide(50)}>
                    <i className='now-ui-icons arrows-1_minimal-right'/>
                </Button>
            )}
            
        </div>
        
        
    </div>
    </>
  )
}
