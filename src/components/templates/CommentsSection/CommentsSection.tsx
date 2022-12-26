import { Wrapper } from './CommentsSection.style';
import CommentFilters from '../../molecules/CommentFilters/CommentFilters';
import ProductSummary from 'components/organisms/ProductSummary/ProductSummary';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { BiCommentDetail } from 'react-icons/bi';
import CommentsImages from 'components/molecules/CommentsImages/CommentsImages';
import Comments from 'components/molecules/Comments/Comments';
import { getAllCommentsData, getCommentsStatus } from 'features/comments/commentsSlice';
import { useSelector } from 'react-redux';
import { CommentInterface, CommentsResponseInterface } from 'interfaces/Comments.interfaces';

const CommentsSection = () => {
    const commentsStatus = useSelector(getCommentsStatus);
    const comments = useSelector(getAllCommentsData) as CommentsResponseInterface;

    return (
        <Wrapper id="Opinions">
            <SectionDescription title={'Opinie'} icon={<BiCommentDetail />} />
            <ProductSummary />
            {commentsStatus === 'succeeded' && (comments.comments as CommentInterface[]).length > 0 && (
                <CommentsImages />
            )}
            <CommentFilters />
            <Comments />
        </Wrapper>
    );
};

export default CommentsSection;
