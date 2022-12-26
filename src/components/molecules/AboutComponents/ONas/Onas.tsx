import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { Title, Description } from 'components/templates/About/About.styles';
import { DataShortSection, Data, Icon, Numbers, Desc } from './ONas.style';
import { FaPeopleCarry } from 'react-icons/fa';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { BsGear, BsLaptop, BsCart2 } from 'react-icons/bs';
import { MdTagFaces } from 'react-icons/md';
import { OnasInterface } from 'interfaces/AboutUs.interfaces';

interface OnasProps {
    description: OnasInterface;
}

const Onas = ({ description }: OnasProps) => {
    const dataShortIcons = [<HiOutlineOfficeBuilding />, <BsGear />, <MdTagFaces />, <BsLaptop />, <BsCart2 />];

    return (
        <>
            <Title>
                <SectionDescription title={description.title} icon={<FaPeopleCarry />} />
            </Title>
            <DataShortSection>
                {description.extras.map((extra, index) => (
                    <Data key={index}>
                        <Icon>{dataShortIcons[index]}</Icon>
                        <Numbers>{extra.numbers}</Numbers>
                        <Desc>{extra.description}</Desc>
                    </Data>
                ))}
            </DataShortSection>
            <Description>
                {description.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </Description>
        </>
    );
};

export default Onas;
