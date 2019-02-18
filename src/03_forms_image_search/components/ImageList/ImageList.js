import React  from 'react';
import styles from './ImageList.module.css';
import ImageCard from "../ImageCard/ImageCard";

const ImageList = ({images}) => {
    const item = images.map(image => (
        <ImageCard key={image.id} image={image}/>
    ));
    return (
        <div className={styles['image-list']}>
            { item }
        </div>
    );
};

export default ImageList;