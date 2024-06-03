import { useEffect, useRef, useState } from 'react';
import { fetchImage } from '../../utils';

import Image from 'react-bootstrap/Image';

type Props = {
    url: string,
    active: boolean,
    delay: number
};

export default function AutoRefreshImage({url, active, delay}: Props) {
    const intervalId = useRef(0);

    const [imageUrl, setImageUrl] = useState(url);

    useEffect(
        () => {
            if (!active) {
                clearInterval(intervalId.current);
                return;
            }

            function setImage() {
                fetchImage(url, {cache: 'reload'})
                    .then(objectUrl => setImageUrl(objectUrl));
            }

            setImage();
            intervalId.current = setInterval(setImage, delay);

            return () => {
                clearInterval(intervalId.current);
            };
        },
        [active, intervalId, url, delay]
    );

    return (
        <Image src={imageUrl} fluid />
    );
}