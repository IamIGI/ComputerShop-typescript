import { ReactNode } from 'react';
import { Wrapper, Icon } from './DescriptionSection.style';

interface DescriptionSectionProps {
    icon: ReactNode;
    description: string;
}

const DescriptionSection = ({ icon, description }: DescriptionSectionProps) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <p>{description}</p>
        </Wrapper>
    );
};

export default DescriptionSection;
