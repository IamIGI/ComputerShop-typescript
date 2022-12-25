import { Wrapper, UnWrap } from './Opinion.style';
import { readMoreSplit, checkBreakLine } from 'components/molecules/Comments/Comments.logic';
import { useState } from 'react';
import { CommentInterface } from 'interfaces/Comments.interfaces';

interface OpinionProps {
    comment: CommentInterface;
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
