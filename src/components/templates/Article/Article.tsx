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
import { getArticleById } from 'features/articles/articlesSlice';
import { useAppSelector } from 'app/hooks';

const Article = () => {
    const articleId = useParams().id;
    let article = undefined;
    if (articleId !== undefined) article = useAppSelector((state) => getArticleById(state, articleId));

    return (
        <Wrapper>
            {article !== undefined && (
                <>
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
                </>
            )}
        </Wrapper>
    );
};

export default Article;
