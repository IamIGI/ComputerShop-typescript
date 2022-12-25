import {
    DayDesc,
    HourDesc,
    Desc,
    Icon,
    Section,
    Info1,
    Info2,
    Media,
    Title,
    Wrapper,
    MediaIcon,
} from './Contact.style';
import { ContactInfo } from 'data/ContactInfo';
import { BsTelephone, BsFacebook } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FiYoutube, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
    return (
        <Wrapper>
            <Info1>
                <Title>
                    <h2>Kontakt</h2>
                </Title>
                <Section>
                    <Icon>
                        <BsTelephone />
                    </Icon>
                    <Desc>{ContactInfo.telephone}</Desc>
                </Section>
                <Section>
                    <DayDesc>pon - pt: </DayDesc>
                    <HourDesc>{ContactInfo.openTime.normal}</HourDesc>
                </Section>
                <Section>
                    <DayDesc>sob - niedz: </DayDesc>
                    <HourDesc>{ContactInfo.openTime.weekend}</HourDesc>
                </Section>
            </Info1>
            <Info2>
                <Section>
                    <Icon>
                        <AiOutlineMail />
                    </Icon>
                    <Desc>{ContactInfo.email}</Desc>
                </Section>
                <Media>
                    <MediaIcon>
                        <BsFacebook />
                    </MediaIcon>
                    <MediaIcon>
                        <AiOutlineInstagram />
                    </MediaIcon>
                    <MediaIcon>
                        <FiYoutube />
                    </MediaIcon>
                    <MediaIcon>
                        <FiGithub />
                    </MediaIcon>
                    <MediaIcon>
                        <FiTwitter />
                    </MediaIcon>
                </Media>
            </Info2>
        </Wrapper>
    );
};

export default Contact;
