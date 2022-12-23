import { ReactNode } from 'react';
import { Wrapper, Icon, BigIcon, LinkDescription } from './StyledLink.style';

interface StyledLinkProps {
    target: string;
    icon: ReactNode;
    description: string;
    smallScreen: boolean;
}

const StyledLink = ({ target, icon, description = '', smallScreen }: StyledLinkProps) => {
    return (
        <Wrapper to={target}>
            <span>{smallScreen ? <BigIcon>{icon}</BigIcon> : <Icon>{icon}</Icon>}</span>
            {description !== '' && <LinkDescription>{description}</LinkDescription>}
        </Wrapper>
    );
};

export default StyledLink;
