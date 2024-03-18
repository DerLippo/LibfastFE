import React from 'react';
//Styles
import { Image } from './UserImage.styles';

const UserImage = ({ src, alt, className }) => (
    <Image src={src} alt={alt} className={className} />
);

export default UserImage;