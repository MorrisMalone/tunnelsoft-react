import { useState, useEffect, useRef, useCallback } from 'react';
import { clamp, fetchImage } from './utils';

import Image from './components/Image/Image';

import './App.scss';

import imageUrls from './static/imageUrls.json';

function App() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [imageUrl, setImageUrl] = useState(imageUrls[selectedIndex]);
    const timerId = useRef(0);

    function handleSlide(step: number) {
        setSelectedIndex(clamp(selectedIndex + step, 0, imageUrls.length - 1));
    }

    const callback = useCallback(
        function setImage() {
            clearTimeout(timerId.current);
            fetchImage(imageUrls[selectedIndex])
                .then((objectUrl) => setImageUrl(objectUrl))
                .then(() => {
                    timerId.current = setTimeout(setImage, 10000);
                });
        },
        [selectedIndex]
    );

    useEffect(
        callback,
        [callback]
    );

    return (
        <>
            <div className="container">
                <button onClick={() => handleSlide(-1)}>previous</button>
                <Image imageUrl={imageUrl} />
                <button onClick={() => handleSlide(1)}>next</button>
            </div>
            <div>{selectedIndex + 1} / {imageUrls.length}</div>
        </>
    );
}

export default App;
