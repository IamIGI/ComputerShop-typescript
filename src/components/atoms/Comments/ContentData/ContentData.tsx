import { Wrapper, StarsWrapper, Date, Dot } from './ContentData.style';
import Star from 'components/atoms/Star/Star';
import { Comment } from 'interfaces/comments.interfaces';

interface ContentDataProps {
    comment: Comment;
}

const ContentData = ({ comment }: ContentDataProps) => {
    const handleDate = (date: string) => {
        return date.substr(0, 10);
    };
    return (
        <Wrapper>
            <StarsWrapper>
                {[...Array(6)].map((star, index) => {
                    index += 1;
                    return <Star opinionRating={comment.content.rating} rate={index} key={index} />;
                })}
            </StarsWrapper>
            <Dot>&#x2022;</Dot>

            <Date> {handleDate(comment.date)}</Date>
        </Wrapper>
    );
};

export default ContentData;
