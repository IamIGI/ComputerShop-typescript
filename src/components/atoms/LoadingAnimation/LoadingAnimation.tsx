import React from 'react';
import { Spinner, Wrapper } from './LoadingAnimation.style';

interface LoadingAnimationProps {
    loadingSize: number;
}

const LoadingAnimation = ({ loadingSize }: LoadingAnimationProps) => {
    return (
        <Wrapper size={`${loadingSize}px`}>
            <Spinner>Ładowanie</Spinner>
        </Wrapper>
    );
};

export default LoadingAnimation;
