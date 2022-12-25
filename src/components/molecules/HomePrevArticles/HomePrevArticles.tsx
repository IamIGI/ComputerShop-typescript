import { useEffect, useState } from 'react';
import { Wrapper, ArticleWrapper, Description, Image, ContentWrapper } from './HomePrevArticles.style';
import { LoadingWrapper } from 'components/organisms/ArticlesList/ArticlesList.style';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import ArticlesUtils from 'components/templates/Articles/Articles.utils';
import useWindowSize from 'hooks/useWindowSize';
import { Author, Date, InfoWrapper } from 'components/templates/Article/Article.style';
import { store } from 'app/store';
import {
    fetchArticlesForHomePage,
    getArticlesErrors,
    getArticlesStatus,
    selectAllArticles,
} from 'features/articles/articlesSlice';
import { useSelector } from 'react-redux';
import homePrevArticlesLogic from './homePrevArticles.logic';
import type {} from 'redux-thunk/extend-redux'; // fix for  store.dispatch(fetchArticlesForHomePage()); https://github.com/reduxjs/redux-thunk/issues/333

const initDescriptionSize = 70;

const HomePrevArticles = () => {
    useEffect(() => {
        store.dispatch(fetchArticlesForHomePage());
    }, []);

    const articles = useSelector(selectAllArticles);
    const articlesStatus = useSelector(getArticlesStatus);
    const error = useSelector(getArticlesErrors);

    const windowSize = useWindowSize();
    const [numberOfArticles, setNumberOfArticles] = useState<number>(10); // changes from object
    const [sizeOfPrevDescription, setSizeOfPrevDescription] = useState<number>(initDescriptionSize);

    useEffect(() => {
        const { sizeOfPrevDescr, quantity } = homePrevArticlesLogic.handleNumberOfArticles(
            windowSize,
            initDescriptionSize
        );
        setSizeOfPrevDescription(sizeOfPrevDescr);
        setNumberOfArticles(quantity);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize, articles]);

    return (
        <>
            {articlesStatus === 'loading' ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : articlesStatus === 'succeeded' ? (
                <Wrapper>
                    {articles.slice(0, numberOfArticles).map((article) => (
                        <ArticleWrapper to={`/articles/${article._id}`} key={article._id}>
                            <ContentWrapper>
                                <Image>
                                    <img src={article.prevImage} alt="article" />
                                </Image>
                                <Description>
                                    <h1>{article.title}</h1>
                                    <p>{ArticlesUtils.trimText(article.prevDescription, sizeOfPrevDescription)}</p>
                                </Description>
                            </ContentWrapper>
                            <InfoWrapper>
                                <Date>{article.updatedAt.split('-')[0]}</Date>
                                <Author>{article.author}</Author>
                            </InfoWrapper>
                        </ArticleWrapper>
                    ))}
                </Wrapper>
            ) : (
                <p>{error}</p>
            )}
        </>
    );
};

export default HomePrevArticles;
