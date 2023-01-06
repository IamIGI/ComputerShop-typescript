import { Bar, QuantityOfGivenScore, ScoreStar, Wrapper, Number, Icon } from './ProductEachScore.style';
import { MdStar } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { getAverageScore, getCommentsFiltersRating, handleFilters } from 'features/comments/commentsSlice';
import { AverageScoreData } from 'interfaces/Comments.interfaces';
import { useAppDispatch } from 'app/hooks';
import { ratingOptions } from '../CommentFilters/CommentFilters.logic';
import { ACTIONS as ACTIONS_COMMENT_FILTERS } from 'features/comments/commentFiltersActions';
import { FiltersDropDownListInterface } from 'interfaces/GLOBAL.interfaces';

interface ProductEachScoreProps {
    errorFix: number;
}

const ProductEachScore = ({ errorFix }: ProductEachScoreProps) => {
    const dispatch = useAppDispatch();
    const averageScore = useSelector(getAverageScore) as AverageScoreData;
    const commentsRating = useSelector(getCommentsFiltersRating);

    const handleRating = (index: number) => {
        // leave it as it is..
        let data: FiltersDropDownListInterface[] = [
            { label: 'Wszystkie oceny', value: 0, checked: false },
            { label: '1 gwiazdka', value: 1, checked: false },
            { label: '2 gwiazdka', value: 2, checked: false },
            { label: '3 gwiazdka', value: 3, checked: false },
            { label: '4 gwiazdka', value: 4, checked: false },
            { label: '5 gwiazdka', value: 5, checked: false },
            { label: '6 gwiazdka', value: 6, checked: false },
        ];

        data[6 - index].checked = true;

        dispatch(handleFilters({ name: ACTIONS_COMMENT_FILTERS.RATING, value: data }));
    };

    return (
        <Wrapper>
            {errorFix > 0 &&
                averageScore.eachScore
                    .slice(0)
                    .reverse()
                    .map((score, index) => (
                        <QuantityOfGivenScore
                            activeChoice={commentsRating[6 - index].checked}
                            onClick={() => handleRating(index)}
                            key={index}
                        >
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
