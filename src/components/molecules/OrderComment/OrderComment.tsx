import {
    CommentSection,
    Wrapper,
    Title,
    InfoSection,
    InfoIcon,
    InfoDesc,
    TextArea,
    NumOfChars,
} from './OrderComment.style';
import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

interface OrderCommentProps {
    comment: string;
    handleOrderComment: (arg0: string) => void;
}

const OrderComment = ({ handleOrderComment, comment }: OrderCommentProps) => {
    const [countChar, setCountChar] = useState<number>(0);

    return (
        <Wrapper>
            <Title>Komentarz do zamówienia</Title>
            <CommentSection>
                <TextArea
                    placeholder="Opinia"
                    value={comment}
                    onChange={(e) => handleOrderComment(e.target.value)}
                    maxLength={2000}
                    onChangeCapture={(e) => setCountChar((e.target as HTMLTextAreaElement).value.length)}
                />
                <NumOfChars>{countChar}/2000</NumOfChars>
            </CommentSection>
            <InfoSection>
                <InfoIcon>
                    <AiOutlineInfoCircle />
                </InfoIcon>
                <InfoDesc>
                    Czytamy wszystkie uwagi, więc jeśli je dodasz – może to mieć wpływ na czas realizacji zamówienia.
                </InfoDesc>
            </InfoSection>
        </Wrapper>
    );
};

export default OrderComment;
