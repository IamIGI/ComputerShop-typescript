import { Title } from 'components/templates/About/About.styles';
import SectionDescription from 'components/atoms/SectionDescription/SectionDescription';
import { FaUniversity } from 'react-icons/fa';
import {
    UniversitySection,
    UniversityInfo,
    UniversityDescription,
    UniversityData,
    UniversityImage,
} from './MojaUczelnia.style';
import { MojaUczelniaInterface } from 'interfaces/AboutUs.interfaces';

interface MojaUczelniaProps {
    description: MojaUczelniaInterface;
}

const MojaUczelnia = ({ description }: MojaUczelniaProps) => {
    return (
        <>
            <Title>
                <SectionDescription title={description.title} icon={<FaUniversity />} />
            </Title>
            <UniversitySection>
                <UniversityInfo>
                    <UniversityDescription>{description.content[0]}</UniversityDescription>
                    <UniversityData>
                        <ul>
                            <li>{description.content[1]}</li>
                            <li>
                                <a href="https://www.agh.edu.pl" target="_blank" rel="noopener noreferrer">
                                    {description.content[2]}
                                </a>
                            </li>
                            <li>{description.content[3]}</li>
                            <li>{description.content}</li>
                        </ul>
                    </UniversityData>
                </UniversityInfo>
                <UniversityImage>
                    <img src={description.image} alt="StackImage" />
                </UniversityImage>
            </UniversitySection>
        </>
    );
};

export default MojaUczelnia;
