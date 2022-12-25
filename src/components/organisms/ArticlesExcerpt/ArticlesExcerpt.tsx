import ArticlesUtils from 'components/templates/Articles/Articles.utils';
import useWindowSize from 'hooks/useWindowSize';
import { ArticleApiResponse } from 'interfaces/Articles.interfaces';
import { useEffect, useState } from 'react';
import { Author, InfoWrapper, Date } from 'components/templates/Article/Article.style';
import { ArticleContainer, DescriptionContainer, PrevImage } from './ArticlesExcerpt.style';

interface ArticlesExcerptProps {
    article: ArticleApiResponse;
}

const ArticlesExcerpt = ({ article }: ArticlesExcerptProps) => {
    const windowSize = useWindowSize();
    const [descriptionSize, setDescriptionSize] = useState<number>(300);

    useEffect(() => {
        if (windowSize.width > 700) {
            setDescriptionSize(300);
        } else if (windowSize.width <= 700) {
            setDescriptionSize(200);
        }
    }, [windowSize]);

    return (
        <ArticleContainer to={`/articles/${article._id}`} key={article._id}>
            <DescriptionContainer>
                <div>
                    <h2>{article.title}</h2>
                    <p>{ArticlesUtils.trimText(article.prevDescription, descriptionSize)}</p>
                </div>
                <InfoWrapper>
                    <Date>{article.updatedAt.split('-')[0]}</Date>
                    <Author>{article.author}</Author>
                </InfoWrapper>
            </DescriptionContainer>
            <PrevImage>
                <img src={article.prevImage} alt="article" />
            </PrevImage>
        </ArticleContainer>
    );
};

export default ArticlesExcerpt;
