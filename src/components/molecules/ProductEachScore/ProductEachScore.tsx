import { Bar, QuantityOfGivenScore, ScoreStar, Wrapper, Number, Icon } from './ProductEachScore.style';
import { MdStar } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getAverageScore } from 'features/comments/commentsSlice';
import { AverageScoreData } from 'interfaces/Comments.interfaces';

interface ProductEachScoreProps {
    errorFix: number;
}

const ProductEachScore = ({ errorFix }: ProductEachScoreProps) => {
    const averageScore = useSelector(getAverageScore) as AverageScoreData;
    return (
        <Wrapper>
            {errorFix > 0 &&
                averageScore.eachScore
                    .slice(0)
                    .reverse()
                    .map((score, index) => (
                        <QuantityOfGivenScore key={index}>
                            <ScoreStar>
                                <Icon>
                                    <MdStar />
                                </Icon>
                                {index * -1 + 6}
                            </ScoreStar>
                            <Bar percentage={score.percentage}>
                                <div />
                            </Bar>
                            <Number>{score.number}</Number>
                        </QuantityOfGivenScore>
                    ))}
        </Wrapper>
    );
};

export default ProductEachScore;
