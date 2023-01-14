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
import { BsTelephone, BsFacebook } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai';
import { FiYoutube, FiGithub, FiTwitter } from 'react-icons/fi';
import { ContactInfoInterface } from 'interfaces/GeneralData.interface';
import { useEffect, useState } from 'react';
import { getGeneralDatas } from 'api/generalData';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState<ContactInfoInterface | {}>({});
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);

    useEffect(() => {
        const fetchContactInfo = async () => {
            setWaitForFetch(true);
            const response = (await getGeneralDatas('ContactInfo')) as unknown as ContactInfoInterface;
            setContactInfo(response);
            setWaitForFetch(false);
        };

        fetchContactInfo();
    }, []);

    return (
        <Wrapper>
            {!waitForFetch && (
                <>
                    <Info1>
                        <Title>
                            <h2>Kontakt</h2>
                        </Title>
                        <Section>
                            <Icon>
                                <BsTelephone />
                            </Icon>
                            <Desc>{(contactInfo as ContactInfoInterface).telephone}</Desc>
                        </Section>
                        <Section>
                            <DayDesc>pon - pt: </DayDesc>
                            <HourDesc>{(contactInfo as ContactInfoInterface).openTime.normal}</HourDesc>
                        </Section>
                        <Section>
                            <DayDesc>sob - niedz: </DayDesc>
                            <HourDesc>{(contactInfo as ContactInfoInterface).openTime.weekend}</HourDesc>
                        </Section>
                    </Info1>
                    <Info2>
                        <Section>
                            <Icon>
                                <AiOutlineMail />
                            </Icon>
                            <Desc>{(contactInfo as ContactInfoInterface).email}</Desc>
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
                </>
            )}
        </Wrapper>
    );
};

export default Contact;
