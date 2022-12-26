import { Wrapper } from './About.styles';

import { getAboutPage } from 'api/contente';
import { useEffect, useState } from 'react';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

import Onas from 'components/molecules/AboutComponents/ONas/Onas';
import DlaczegoMy from 'components/molecules/AboutComponents/DlaczegoMy/DlaczegoMy';
import OAutorzeStrony from 'components/molecules/AboutComponents/OAutorzeStrony/OAutorzeStrony';
import GdzieMnieZnajdziesz from 'components/molecules/AboutComponents/GdzieMnieZnajdziesz/GdzieMnieZnajdziesz';
import MojaUczelnia from 'components/molecules/AboutComponents/MojaUczelnia/MojaUczelnia';
import { AboutUsDataInterface } from 'interfaces/AboutUs.interfaces';
import axios from 'axios';

const About = () => {
    const [content, setContent] = useState<AboutUsDataInterface | {}>({});
    const [waitForFetch, setWaitForFetch] = useState(true);

    const { description } = content as AboutUsDataInterface;

    useEffect(() => {
        const fetchContent = async () => {
            try {
                setWaitForFetch(true);
                const response = await getAboutPage();
                setContent(response);

                setWaitForFetch(false);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    if (err.response) {
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    } else {
                        console.log(`Error: ${err.message}`);
                    }
                }
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchContent();
    }, []);

    return (
        <>
            {waitForFetch ? (
                <LoadingAnimation loadingSize={15} />
            ) : Object.keys(content).length === 0 ? (
                <p>Błąd serwera</p>
            ) : (
                <Wrapper>
                    <Onas description={description[0]} />
                    <DlaczegoMy description={description[1]} />
                    <OAutorzeStrony description={description[2]} />
                    <GdzieMnieZnajdziesz description={description[3]} />
                    <MojaUczelnia description={description[4]} />
                </Wrapper>
            )}
        </>
    );
};

export default About;
