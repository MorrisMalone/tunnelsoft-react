import { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import AutoRefreshImage from './components/AutoRefreshImage/AutoRefreshImage';

import './App.scss';

import imageUrls from './static/imageUrls.json';

function App() {
    const [index, setIndex] = useState(0);
    const delay = 3000;

    function handleSelect(selectedIndex: number) {
        setIndex(selectedIndex);
    }

    return (
        <>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                interval={null}
                variant='dark'
            >
                {imageUrls.map((url, i) =>
                    <Carousel.Item key={url}>
                        <AutoRefreshImage url={url} active={i === index} delay={delay} />
                    </Carousel.Item>
                )}
            </Carousel>
        </>
    );
}

export default App;
