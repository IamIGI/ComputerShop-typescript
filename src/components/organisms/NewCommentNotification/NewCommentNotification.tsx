import { newCommentsInterface } from 'interfaces/Account.interfaces';
import { Wrapper, Section, PrevImg, Description, SetOpinion } from './NewCommentNotification.style';

interface NewCommentNotificationProps {
    newCommentProducts: newCommentsInterface[];
}

const NewCommentNotification = ({ newCommentProducts }: NewCommentNotificationProps) => {
    return (
        <Wrapper>
            {newCommentProducts.map((comment) => (
                <Section>
                    <PrevImg to={`/product/${comment.product._id}`}>
                        <img src={comment.product.prevImg} alt="product image" />
                    </PrevImg>
                    <Description to={`/product/${comment.product._id}`}>
                        <h2>{comment.product.name}</h2>
                        <p>{comment.orderDate}</p>
                    </Description>
                    <SetOpinion>Wystaw Opinię</SetOpinion>
                </Section>
            ))}
        </Wrapper>
    );
};

export default NewCommentNotification;
