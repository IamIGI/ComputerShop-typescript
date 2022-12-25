import { useState, useEffect } from 'react';
import { getWebUpdates } from 'api/webUpdates';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';
import { BASE_URL } from 'data/URL';
import { Title, Subtitle, ListSection, BottomWrapper, GitLink, GetPDF } from './NoRealWebsiteContent.style';
import { InsideWrapper } from './NoRealWebsiteContent.style';
import { NoRealWebsiteInterface } from 'interfaces/NoRealWebsites.interfaces';

const NoRealWebsiteContent = () => {
    const [waitForFetch, setWaitForFetch] = useState<boolean>(true);
    const [updates, setUpdates] = useState<{} | NoRealWebsiteInterface[]>({});
    const lastUpdate = (updates as NoRealWebsiteInterface[])[(updates as NoRealWebsiteInterface[]).length - 1];

    useEffect(() => {
        const fetchWebUpdates = async () => {
            setWaitForFetch(true);
            const response = await getWebUpdates();
            setUpdates(response);
            setWaitForFetch(false);
        };

        fetchWebUpdates();
    }, []);

    return (
        <>
            {!waitForFetch ? (
                <>
                    <Title>This is website is not real e-commerce website !!</Title>
                    <Subtitle>Date: {lastUpdate.date}</Subtitle>
                    <Subtitle>Version: {lastUpdate.version}</Subtitle>
                    <Subtitle>Things implemented last patch:</Subtitle>
                    <br />
                    <Subtitle>Added:</Subtitle>
                    <ListSection>
                        <ul>
                            {lastUpdate.changes.added.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </ListSection>
                    <Subtitle>Fixed:</Subtitle>
                    <ListSection>
                        <ul>
                            {lastUpdate.changes.fixes.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </ListSection>
                    <BottomWrapper>
                        <GitLink>
                            <a
                                href="https://github.com/users/IamIGI/projects/1/views/1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Project table
                            </a>
                        </GitLink>
                        <GetPDF>
                            <a href={`${BASE_URL}/webUpdates/pdf`}>Pobierz pdf</a>
                        </GetPDF>
                    </BottomWrapper>
                </>
            ) : (
                <InsideWrapper>
                    <LoadingAnimation loadingSize={10} />
                </InsideWrapper>
            )}
        </>
    );
};

export default NoRealWebsiteContent;
