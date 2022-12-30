import {
    Wrapper,
    ArticleWrapper,
    ContentsWrapper,
    TitlesWrapper,
    TitleContainer,
    Number,
    TitleContents,
    Legend,
    InfoWrapper,
    Date,
    Author,
    DescriptionWrapper,
    DescriptionImg,
    BigScreen,
    SmallScreen,
} from './Article.style';
import { useParams } from 'react-router-dom';
import articlesUtils from '../Articles/Articles.utils';
import {
    fetchArticleById,
    getArticleById,
    getArticlesByIdStatus,
    getArticlesErrors,
} from 'features/articles/articlesSlice';
import { useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { store } from 'app/store';
import { LoadingWrapper } from 'components/organisms/ArticlesList/ArticlesList.style';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const Article = () => {
    const articleId = useParams().id;

    useEffect(() => {
        if (articleId !== undefined) store.dispatch(fetchArticleById(articleId));
    }, [articleId]);

    let article = undefined;
    if (articleId !== undefined) article = useAppSelector((state) => getArticleById(state, articleId));
    const articleStatus = useAppSelector(getArticlesByIdStatus);
    const articleErrors = useAppSelector(getArticlesErrors);

    return (
        <>
            {articleStatus === 'loading' ? (
                <LoadingWrapper>
                    <LoadingAnimation loadingSize={15} />
                </LoadingWrapper>
            ) : articleStatus === 'succeeded' && article !== undefined ? (
                <Wrapper>
                    <ArticleWrapper id="top">
                        <BigScreen>
                            <Legend>
                                {`HotShoot > ${articlesUtils.getCategoryName(article.type)} > ${articlesUtils.trimText(
                                    article.title,
                                    50
                                )} `}
                            </Legend>
                            <h1>{article.title}</h1>
                            <InfoWrapper>
                                <Date>{article.updatedAt.split('-')[0]}</Date>
                                <Author>{article.author}</Author>
                            </InfoWrapper>
                            <p>{article.prevDescription}</p>
                        </BigScreen>
                        {article.description.map((desc, index) => (
                            <DescriptionWrapper id={`desc_${index}`} key={index}>
                                <h2>{desc.title}</h2>
                                {desc.image && (
                                    <DescriptionImg>
                                        <img src={desc.image} alt="description" />
                                    </DescriptionImg>
                                )}
                                {desc.content.map((item, index) => (
                                    <p key={index}>{item.p}</p>
                                ))}
                            </DescriptionWrapper>
                        ))}
                    </ArticleWrapper>
                    <ContentsWrapper>
                        <h3>Spis treści</h3>
                        <TitlesWrapper>
                            <a href={`#top`}>
                                <TitleContainer>
                                    <Number>0</Number>
                                    <TitleContents>{article.title}</TitleContents>
                                </TitleContainer>
                            </a>
                            {article.description.map((desc, index) => (
                                <a href={`#desc_${index}`} key={index}>
                                    <TitleContainer>
                                        <Number>{index + 1}</Number>
                                        <TitleContents>{desc.title}</TitleContents>
                                    </TitleContainer>
                                </a>
                            ))}
                        </TitlesWrapper>
                    </ContentsWrapper>

                    <SmallScreen>
                        <Legend>
                            {`HotShoot > ${articlesUtils.getCategoryName(article.type)} > ${articlesUtils.trimText(
                                article.title,
                                50
                            )} `}
                        </Legend>
                        <h1>{article.title}</h1>
                        <InfoWrapper>
                            <Date>{article.updatedAt.split('-')[0]}</Date>
                            <Author>{article.author}</Author>
                        </InfoWrapper>
                        <p>{article.prevDescription}</p>
                    </SmallScreen>
                </Wrapper>
            ) : (
                <>
                    {articleStatus === 'failed'} <p>{articleErrors}</p>
                </>
            )}
        </>
    );
};

export default Article;
