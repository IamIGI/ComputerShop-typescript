import { Wrapper } from './Articles.style';
import ArticlesList from 'components/organisms/ArticlesList/ArticlesList';
import ArticlesMenu from 'components/organisms/ArticlesMenu/ArticlesMenu';

const Articles = () => {
    return (
        <Wrapper>
            <ArticlesMenu />
            <ArticlesList />
        </Wrapper>
    );
};

export default Articles;
