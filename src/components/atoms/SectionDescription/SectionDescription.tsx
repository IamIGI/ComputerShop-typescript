import { checkBreakLine } from 'components/molecules/Comments/Comments.logic';
import { ReactNode } from 'react';
import { ContentDescription, ContentTitle, IconTitle, Line, Wrapper } from './SectionDescription.styles';

interface SectionDescriptionProps {
    title: string;
    icon: ReactNode;
    description: string;
    showTitle: boolean;
}

const SectionDescription = ({ title, icon, description, showTitle = true }: SectionDescriptionProps) => {
    return (
        <Wrapper>
            <IconTitle>{icon}</IconTitle>
            {showTitle && <ContentTitle>{title} </ContentTitle>}
            <ContentDescription>{description && checkBreakLine(description)}</ContentDescription>
            {description ? <></> : <Line />}
        </Wrapper>
    );
};

export default SectionDescription;
