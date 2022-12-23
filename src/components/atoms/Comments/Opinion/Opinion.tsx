import { Wrapper, UnWrap } from './Opinion.style';
import { readMoreSplit, checkBreakLine } from 'components/molecules/Comments/Comments.logic';
import { useState } from 'react';
import { Comment } from 'interfaces/comments.interfaces';

interface OpinionProps {
    comment: Comment;
}

const Opinion = ({ comment }: OpinionProps) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <Wrapper>
            {readMoreSplit(comment.content.description).length === 1 ? (
                <>{checkBreakLine(readMoreSplit(comment.content.description)[0])}</>
            ) : (
                <>
                    {checkBreakLine(readMoreSplit(comment.content.description)[0])}
                    <UnWrap onClick={() => setReadMore(!readMore)}>{!readMore && '...Rozwiń dalej'}</UnWrap>
                    {readMore && (
                        <>
                            {checkBreakLine(readMoreSplit(comment.content.description)[1])}
                            <UnWrap onClick={() => setReadMore(!readMore)}>Zwiń</UnWrap>
                        </>
                    )}
                </>
            )}
        </Wrapper>
    );
};

export default Opinion;
