import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";

// pages

// documentation pages

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import SignIn from "./account/SignIn";
import SignUp from "./account/SignUp";
import {Routes} from "../routes";
import ForgotPassword from "./account/ForgotPassword";
import ResetPassword from "./account/ResetPassword";
import DashboardOverview from "./old_dashboard/DashboardOverview";
import DeviceType from "./dashboard/DeviceType/DeviceType";
import MyAccount from "./account/MyAccount/MyAccount";
import {API} from "../api/API";
import CreateDeviceType from "./dashboard/CreateDeviceType/CreateDeviceType";
import {setDevicesTypesAction} from "../store/actions/devicesTypesActions";
import {useDispatch} from "react-redux";

const RouteWithLoader = ({component: Component, ...rest}) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Route {...rest} render={props => (<> <Preloader show={!loaded}/> <Component {...props} /> </>)}/>
    );
};

const RouteWithSidebar = ({component: Component, ...rest}) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    const loadDevicesTypesCallback = (response) => {
        console.log(response);
        if (response.status === 200) {
            dispatch(setDevicesTypesAction(response.devicesTypes));
        }
    }

    const loadDevicesTypes = () => {
        API.getDevicesTypes({}).then(
            loadDevicesTypesCallback
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        loadDevicesTypes();
        const timer = setTimeout(() => setLoaded(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const localStorageIsSettingsVisible = () => {
        return localStorage.getItem('settingsVisible') !== 'false'
    }

    const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

    const toggleSettings = () => {
        setShowSettings(!showSettings);
        localStorage.setItem('settingsVisible', !showSettings);
    }

    return (
        <Route {...rest} render={props => (
            <>
                <Preloader show={!loaded}/>
                <Sidebar/>

                <main className="content">
                    <Navbar/>
                    <Component {...props} />
                    <Footer toggleSettings={toggleSettings} showSettings={showSettings}/>
                </main>
            </>
        )}
        />
    );
};

export default () => (
    <Switch>
        {/* Account */}
        <RouteWithLoader exact path={Routes.SignIn.path} component={SignIn}/>
        <RouteWithLoader exact path={Routes.SignUp.path} component={SignUp}/>
        <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword}/>
        <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword}/>
        <RouteWithSidebar exact path={Routes.MyAccount.path} component={MyAccount}/>

        {/* Dashboard */}
        <RouteWithSidebar exact path={Routes.Dashboard.path} component={DashboardOverview}/>
        <RouteWithSidebar exact path={Routes.DeviceType.path} component={DeviceType}/>
        <RouteWithSidebar exact path={Routes.CreateDeviceType.path} component={CreateDeviceType}/>
    </Switch>
);
