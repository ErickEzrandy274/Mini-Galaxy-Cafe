import type { NextPage } from "next";
import LandingPage from "../components/modules/Landing Page/LandingPage";
import MainLayout from "../components/modules/MainLayout/MainLayout";

const Home: NextPage = () => {
    return (
        <MainLayout>
            <LandingPage />
        </MainLayout>
    )
};

export default Home;
