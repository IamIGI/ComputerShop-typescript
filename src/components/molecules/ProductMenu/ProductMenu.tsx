import { Wrapper } from './ProductMenu.style';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getNumberOfCommentsWithoutFilters } from 'features/comments/commentsSlice';

const ProductMenu = () => {
    const numberOfComments = useSelector(getNumberOfCommentsWithoutFilters);

    return (
        <Wrapper>
            <a href="#Top">
                <BsChevronDoubleUp />
            </a>
            <a href="#Description">Opis</a>
            <a href="#Specification">Specyfikacja</a>
            <a href="#Opinions">Opinie ({numberOfComments})</a>
        </Wrapper>
    );
};

export default ProductMenu;
