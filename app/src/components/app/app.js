import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../Store/Auth/authActions';
import { Routes, Route,useLocation } from 'react-router-dom';
import './app.css'
import NewAnnouncement from "../../pages/NewAnnouncement";
import Register from "../../pages/Auth/register";
import Login from "../../pages/Auth/login";
import NotFound from "../../pages/errors/NotFound";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import VerifyEmail from "../../pages/Auth/verifyEmail";
import ForgotPassword from "../../pages/Auth/forgotPassword";
import ResetPassword from "../../pages/Auth/resetPassword";
import Home from "../../pages/home";
import LoadingPage from "../ui/LoadingPage";
import ComingSoon  from '../../pages/StaticPages/ComingSoon'
import PrivacyPolicy from "../../pages/StaticPages/PrivacyPolicy";
import TermsOfUse from "../../pages/StaticPages/TermsOfUse";
import Profile from "../../pages/Profile";
import ChangePassword from "../../pages/Auth/ChangePassword"
import UpdateAccount from "../../pages/UpdateAccount";
import AnnouncementDetailsUserProfile from "../../pages/announcementDetailsUserProfile";
import AnnouncementDetails from "../../pages/announcementDetails";
function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const logoutAfterTimeout = () => {
            dispatch(logoutUser());
        };
        const timeoutId = setTimeout(logoutAfterTimeout, 14 * 60 * 60 * 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch]);


    const location = useLocation();

    const excludeHeaderFooterPaths = [
        "/login",
        "/register",
        "/verifyEmail",
        "/reset-password",
        "/forgot-password",
        "/changePassword"

    ];

    const shouldDisplayHeaderFooter = !excludeHeaderFooterPaths.includes(location.pathname);


        return (
            <div className="app-container">
                {shouldDisplayHeaderFooter && <Header />}
                <Routes>
                    <Route path="/new-announcement" element={<NewAnnouncement />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse  />} />
                    <Route path="/profile" element={<Profile  />} />
                    <Route path="/coming-soon" element={<ComingSoon  />} />
                    <Route path="/verifyEmail" element={<VerifyEmail />} />
                    <Route path="/AnnouncementDetails/:id" element={<AnnouncementDetails/>}/>
                    <Route path="/AnnouncementDetailsUserProfile/:id" element={<AnnouncementDetailsUserProfile/>}/>
                    <Route path="/loading" element={<LoadingPage />} />
                    <Route path="/changePassword" element={<ChangePassword />} />
                    <Route path="/updateAccount" element={<UpdateAccount />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                {shouldDisplayHeaderFooter && <Footer />}
            </div>
        );

}

export default App;
