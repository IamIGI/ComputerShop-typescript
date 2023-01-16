import { AiOutlineLike } from 'react-icons/ai';
import { Wrapper, Icon, Description } from './SumOfLikes.style';

interface SumOfLikesProps {
    number: number;
}

const SumOfLikes = ({ number }: SumOfLikesProps) => {
    return (
        <Wrapper>
            <Description>
                <p>Suma polubień: {number}</p>
            </Description>
            <Icon>
                <AiOutlineLike />
            </Icon>
        </Wrapper>
    );
};

export default SumOfLikes;
