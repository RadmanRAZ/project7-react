import React from 'react'

const ScrollBar = () => {
    const [scroll , setScroll] = React.useState(0);

    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const heigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll/heigth) * 100
        setScroll(scrolled)
    }

    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)
    },[])
  return (
    <div className='wrapper'>
        <div className='progressbar'>
            <div className='prog__main' style={{width : `${scroll}%`}}>
                
            </div>
        </div>
    </div>
  )
}

export default ScrollBar