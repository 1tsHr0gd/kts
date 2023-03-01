import React, {useEffect, useState, useRef} from 'react'
import { Button, Card, Container } from 'reactstrap'
import "assets/css/horizontal.css"

const tours = [
    {
        id:'1',
        src:require("assets/img/bg1.jpg"),
        caption:"Tour 1",
        url:'/tour1'
    },
    {
        id:'2',
        src:require("assets/img/bg3.jpg"),
        caption:"Tour 2",
        url:'/tour2'
    },
    {
        id:'3',
        src:require("assets/img/bg5.jpg"),
        caption:"Tour 3",
        url:'/tour3'
    },
    {
        id:'4',
        src:require("assets/img/bg4.jpg"),
        caption:"Tour 4",
        url:'/tour4'
    },
    {
        id:'5',
        src:require("assets/img/bg7.jpg"),
        caption:"Tour 5",
        url:'/tour5'
    },
    {
        id:'6',
        src:require("assets/img/bg8.jpg"),
        caption:"Tour 6",
        url:'/tour6'
    }
]

function HorizontalScroll() {

    let scrl = useRef(null)
    const [scrollX,setScrollX] = useState(0);
    const [scrollEnd, setScrollEnd] = useState(false);

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
        <Container style={{marginTop:'2%'}}>
            <h2 className='title text-center'>Our Top Tours</h2>
            <div className='scrollContainer'>
                {scrollX !== -1 && (
                    <div className='arrow-left' style={{marginTop:'-5%'}}>
                        <Button type='button' onClick={()=>slide(-300)} color='neutral'>
                            <i className='now-ui-icons arrows-1_minimal-left'/>
                        </Button>
                    </div>
                )}

                <div className='horizontalscroll' ref={scrl}>
                    <div className='ul-parent'>
                        <ul ref={scrl} onScroll={scrollCheck} className='ul-list'>
                            {tours.map((d)=>{
                                return(
                                    <div className='li-list' style={{height:'auto'}}>
                                        <Card className='shadow-sm rounded'>
                                            <li key={d.id} >
                                                <a href={d.url} className='stretched-link position-relative' style={{textDecoration:'none'}}>
                                                    <img src={d.src}/>
                                                    <h5 className='text-center align'>{d.caption}</h5>
                                                </a>
                                                
                                            </li>
                                        </Card>
                                    </div>
                                )            
                            })}
                        </ul>
                    </div>   
                </div>

                {scrollX !== -1 && (
                <div className='arrow-right' style={{marginTop:'-5%'}}>
                    <Button onClick={()=>slide(+300)} color='neutral'>
                        <i className='now-ui-icons arrows-1_minimal-right'/>
                    </Button>
                </div>
                )}
            </div>
        </Container>
        
        </>
    )
}

export default HorizontalScroll