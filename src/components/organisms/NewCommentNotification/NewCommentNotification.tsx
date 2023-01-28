import Modal from 'components/atoms/Modal/Modal';
import PopUpAddComment from 'components/molecules/PopUpAddComment/PopUpAddComment';
import { newCommentsInterface } from 'interfaces/Account.interfaces';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Section, PrevImg, Description, SetOpinion } from './NewCommentNotification.style';

interface NewCommentNotificationProps {
    newCommentProducts: newCommentsInterface[];

    refreshAccountOpinions?: boolean;
}

const NewCommentNotification = ({
    newCommentProducts,

    refreshAccountOpinions,
}: NewCommentNotificationProps) => {
    const [isOpen, setIsOpen] = useState<[boolean]>([false]);
    const [productData, setProductData] = useState<{ _id: string; name: string; prevImg: string }>({
        _id: '',
        name: '',
        prevImg: '',
    });

    const handleOpen = (index: number) => {
        const object = {
            _id: newCommentProducts[index].product._id,
            name: newCommentProducts[index].product.name,
            prevImg: newCommentProducts[index].product.prevImg,
        };
        setProductData(object);
        setIsOpen([true]);
    };

    return (
        <Wrapper>
            {newCommentProducts.map((comment, index) => (
                <Section>
                    <PrevImg to={`/product/${comment.product._id}`}>
                        <img src={comment.product.prevImg} alt="product image" />
                    </PrevImg>
                    <Description to={`/product/${comment.product._id}`}>
                        <h2>{comment.product.name}</h2>
                        <p>{comment.orderDate}</p>
                    </Description>
                    <SetOpinion onClick={() => handleOpen(index)}>Wystaw Opinię</SetOpinion>
                </Section>
            ))}
            <Modal open={isOpen} onClose={() => setIsOpen([false])}>
                <PopUpAddComment
                    refreshAccountOpinions={refreshAccountOpinions}
                    onClose={() => setIsOpen([false])}
                    productData={productData}
                />
            </Modal>
        </Wrapper>
    );
};

export default NewCommentNotification;
