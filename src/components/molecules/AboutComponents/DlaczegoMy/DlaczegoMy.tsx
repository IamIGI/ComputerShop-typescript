import { Title, Description } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { InfoSection, Info, IconInfo, ContentInfo, TitleInfo, DescInfo } from './DlaczegoMy.style';
import { GrHelp } from 'react-icons/gr';
import { FiThumbsUp } from 'react-icons/fi';
import { TbShoppingCartDiscount } from 'react-icons/tb';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { DlaczegoMyInterface } from 'interfaces/AboutUs.interfaces';

interface DlaczegoMyProps {
    description: DlaczegoMyInterface;
}

const DlaczegoMy = ({ description }: DlaczegoMyProps) => {
    const InfoIcons = [<FiThumbsUp />, <HiOutlineLightBulb />, <TbShoppingCartDiscount />];
    return (
        <>
            <Title>
                <SectionDescription title={description.title} icon={<GrHelp />} />
            </Title>
            <Description>
                {description.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Description>
            <InfoSection>
                {description.extras.map((extra, index) => (
                    <Info key={index}>
                        <IconInfo>{InfoIcons[index]}</IconInfo>
                        <ContentInfo>
                            <TitleInfo>{extra.title}</TitleInfo>
                            <DescInfo>{extra.description}</DescInfo>
                        </ContentInfo>
                    </Info>
                ))}
            </InfoSection>
        </>
    );
};

export default DlaczegoMy;
