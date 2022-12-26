import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import ArticlesExcerpt from 'components/organisms/ArticlesExcerpt/ArticlesExcerpt';
import { ArticlesWrapper, Category, LoadingWrapper } from './ArticlesList.style';
import { useSelector } from 'react-redux';
import {
    selectAllArticles,
    getArticlesErrors,
    getArticlesStatus,
    fetchArticles,
} from '../../../features/articles/articlesSlice';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { store } from 'app/store';
import ArticlesUtils from 'components/templates/Articles/Articles.utils';

const ArticlesList = () => {
    const articleType = useParams().type as string;

    useEffect(() => {
        store.dispatch(fetchArticles(articleType));
    }, [articleType]);

    const articles = useSelector(selectAllArticles);
    const articleStatus = useSelector(getArticlesStatus);
    const error = useSelector(getArticlesErrors);

    let content;
    if (articleStatus === 'loading') {
        content = (
            <LoadingWrapper>
                <LoadingAnimation loadingSize={15} />
            </LoadingWrapper>
        );
    } else if (articleStatus === 'succeeded') {
        content = (
            <>
                <Category>
                    <h1>{ArticlesUtils.getCategoryName(articleType)}</h1>
                </Category>
                <ArticlesWrapper>
                    {articles.map((article) => (
                        <ArticlesExcerpt key={article._id} article={article} />
                    ))}
                </ArticlesWrapper>
            </>
        );
    } else if (articleStatus === 'failed') {
        content = (
            <>
                <p>{error}</p>
            </>
        );
    }

    return content as JSX.Element;
};
export default ArticlesList;
