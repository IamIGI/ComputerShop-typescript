import { ReactNode, useState } from 'react';
import {
    Wrapper,
    Icon,
    BigIcon,
    LinkDescription,
    ActiveDropDown,
    ProperMenu,
    DivRelative,
} from './DropDownMenuSection.style';

interface DropDownMenuSectionProps {
    icon: ReactNode;
    description: string;
    smallScreen: boolean;
    children: ReactNode;
}

const DropDownMenuSection = ({ icon, description, smallScreen, children }: DropDownMenuSectionProps) => {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <Wrapper onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)}>
            <DivRelative>
                {/** $ - prevent the prop being passed to the DOM element */}
                <ActiveDropDown display={toggle ? 'true' : undefined}>
                    <span>{smallScreen ? <BigIcon>{icon}</BigIcon> : <Icon>{icon}</Icon>}</span>
                    {description !== '' && <LinkDescription>{description}</LinkDescription>}
                </ActiveDropDown>
                <ProperMenu display={toggle ? 'true' : undefined}>{children}</ProperMenu>
            </DivRelative>
        </Wrapper>
    );
};

export default DropDownMenuSection;
