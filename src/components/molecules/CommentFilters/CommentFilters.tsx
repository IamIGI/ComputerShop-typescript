import {
    Wrapper,
    Filters,
    Confirmed,
    Sort,
    ConfirmedDesc,
    Checkbox,
    NumberOfComments,
    SmallScreen,
    BigScreen,
} from './CommentFilters.style';
import { ratingOptions, filterOptions } from './CommentFilters.logic';
import SetFilterItems from 'components/atoms/SetFilterItems/SetFilterItems';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCommentsData, getCommentsFiltersIsConfirmed, handleFilters } from 'features/comments/commentsSlice';
import { ACTIONS as ACTIONS_COMMENT_FILTERS } from 'features/comments/commentFiltersActions';
import { CommentsResponseInterface } from 'interfaces/Comments.interfaces';
import { filtersSchemaDropDownMenu } from 'interfaces/GLOBAL.interfaces';

const CommentFilters = () => {
    const dispatch = useDispatch();
    const comments = useSelector(getAllCommentsData) as CommentsResponseInterface;
    const isConfirmed = useSelector(getCommentsFiltersIsConfirmed);

    const { length: commentsSize, length_AllComments: totalNumberOfComments } = comments;

    const handleSortBy = (data: filtersSchemaDropDownMenu[]) => {
        dispatch(handleFilters({ name: ACTIONS_COMMENT_FILTERS.SORT_BY, value: data }));
    };

    const handleRating = (data: filtersSchemaDropDownMenu[]) => {
        dispatch(handleFilters({ name: ACTIONS_COMMENT_FILTERS.RATING, value: data }));
    };

    const handleConfirmed = () => {
        dispatch(handleFilters({ name: ACTIONS_COMMENT_FILTERS.CONFIRMED, value: !isConfirmed }));
    };

    return (
        <>
            {Boolean(comments) && comments?.length_AllComments === 0 ? (
                <></>
            ) : (
                <>
                    <Wrapper>
                        <NumberOfComments>
                            Wyniki: {commentsSize} z {totalNumberOfComments}
                        </NumberOfComments>
                        <Filters>
                            <SetFilterItems
                                OneTimeChoice={true}
                                width="230px"
                                description={'Oceny'}
                                filterData={ratingOptions}
                                handleItems={handleRating}
                            />
                        </Filters>
                        <BigScreen>
                            <Confirmed>
                                <Checkbox type="checkbox" onChange={() => handleConfirmed()} checked={isConfirmed} />
                                <ConfirmedDesc onClick={() => handleConfirmed()}>Potwierdzone zakupy</ConfirmedDesc>
                            </Confirmed>
                        </BigScreen>
                        <Sort>
                            <SetFilterItems
                                OneTimeChoice={true}
                                width="230px"
                                description={'Sortuj'}
                                filterData={filterOptions}
                                handleItems={handleSortBy}
                            />
                        </Sort>
                    </Wrapper>
                    <SmallScreen>
                        <Confirmed>
                            <Checkbox type="checkbox" onChange={() => handleConfirmed()} checked={isConfirmed} />
                            <ConfirmedDesc onClick={() => handleConfirmed()}>Potwierdzone zakupy</ConfirmedDesc>
                        </Confirmed>
                    </SmallScreen>
                </>
            )}
        </>
    );
};

export default CommentFilters;
