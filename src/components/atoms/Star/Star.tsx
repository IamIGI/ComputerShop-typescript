import { StarStyle } from './Star.style';

interface StarProps {
    opinionRating: number;
    rate: number;
}

const ActiveStar = {
    '--star-color': 'orange',
};

const Star = ({ opinionRating, rate }: StarProps) => {
    //
    return (
        <StarStyle
            style={
                opinionRating >= rate
                    ? ({ '--star-color': 'orange' } as React.CSSProperties)
                    : ({ '--star-color': 'lightGrey' } as React.CSSProperties)
            }
        />
    );
    {
        /** to fix */
    }
};

export default Star;
