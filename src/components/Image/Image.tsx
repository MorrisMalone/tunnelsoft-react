import './Image.scss';

type Props = {
    imageUrl: string
};

export default function Image({imageUrl}: Props) {
    return (<div className="image-container">
        <img className='image' src={imageUrl} />
    </div>);
}