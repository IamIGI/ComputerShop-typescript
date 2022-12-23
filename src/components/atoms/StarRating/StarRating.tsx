import { useState } from 'react';
import { On, Off, Wrapper, StarWrapper } from './StarRating.style';
import { MdStar } from 'react-icons/md';

interface StarRatingProps {
    rating: number;
    handleRating: (arg0: number) => void;
}

const StarRating = ({ rating, handleRating }: StarRatingProps) => {
    const [hover, setHover] = useState<number>(0);
    return (
        <Wrapper>
            {[...Array(6)].map((star, index) => {
                index += 1;
                return (
                    <StarWrapper key={index}>
                        {index <= (hover || rating) ? (
                            <On>
                                <MdStar
                                    key={index}
                                    onClick={() => handleRating(index)}
                                    onMouseOver={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                ></MdStar>
                            </On>
                        ) : (
                            <Off>
                                <MdStar
                                    key={index}
                                    onClick={() => handleRating(index)}
                                    onMouseOver={() => setHover(index)}
                                    onMouseLeave={() => setHover(rating)}
                                ></MdStar>
                            </Off>
                        )}
                    </StarWrapper>
                );
            })}
        </Wrapper>
    );
};

export default StarRating;
