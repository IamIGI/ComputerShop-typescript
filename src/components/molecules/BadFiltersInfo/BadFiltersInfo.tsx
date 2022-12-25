import { Wrapper, Icon } from './BadFiltersInfo.style';
import { TbDeviceLaptopOff } from 'react-icons/tb';

const BadFiltersInfo = () => {
    return (
        <Wrapper>
            <Icon>
                <TbDeviceLaptopOff />
            </Icon>
            <p>Brak produktów spełniających dane kryteria</p>
        </Wrapper>
    );
};

export default BadFiltersInfo;
