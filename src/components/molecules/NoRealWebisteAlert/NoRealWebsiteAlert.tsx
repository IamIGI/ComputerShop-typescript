import { useEffect, useState } from 'react';
import { Wrapper, Icon, Alert, Link } from './NoRealWebsiteAlert.style';
import { FiAlertTriangle } from 'react-icons/fi';
import useWindowSize from 'hooks/useWindowSize';
import NoRealWebsiteContent from '../NoRealWebsiteContent/NoRealWebsiteContent';

const NoRealWebsiteAlert = () => {
    const [alert, setAlert] = useState<boolean>(false);
    const windowSize = useWindowSize();
    const [showPage, setShowPage] = useState<boolean>(false);

    //--------------------------------------------
    const handlePageToggle = () => {
        if (windowSize.width <= 650) {
            setShowPage(true);
        } else {
            setShowPage(false);
        }
    };

    useEffect(() => {
        handlePageToggle();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowSize]);

    return (
        <>
            <Wrapper>
                {showPage ? (
                    <Link to="/noRealWebsite">
                        <FiAlertTriangle />
                    </Link>
                ) : (
                    <Icon onClick={() => setAlert(true)}>
                        <FiAlertTriangle />
                    </Icon>
                )}

                {alert ? (
                    <Alert onMouseLeave={() => setAlert(false)}>
                        <NoRealWebsiteContent />
                    </Alert>
                ) : (
                    <></>
                )}
            </Wrapper>
        </>
    );
};

export default NoRealWebsiteAlert;
