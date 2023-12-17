import {
    sendAnnouncementStart,
    sendAnnouncementSuccess,
    sendAnnouncementFailure,
    getAnnouncementsStart,
    getAnnouncementsFailure,
    getAnnouncementsSuccess,
    setPageNumber,
    setAnnouncements,
    setAnnouncementSuccess,
    setAnnouncementFailure,
    setAnnouncementStart
} from "./AnnouncementSlice"

import annonucementService from "../../api-services/AnnouncementService"

const AnnouncementService=new annonucementService();

export const SendAnnouncement = (requestBody,token) => async (dispatch) => {
    dispatch(sendAnnouncementStart());
    try {

        const response = await AnnouncementService.SendNewAnnouncement(requestBody,token);

        if (response.status===200) {
            console.log("SUCCESFULL SEND ANNOUNCEMENT");
            dispatch(sendAnnouncementSuccess(response.data));
            return response;
        } else {
            dispatch(sendAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(sendAnnouncementFailure('An error occurred while processing your request'));
    }
};

export const GetAnnouncements = (pageNumber,PageSize) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAnnouncements(pageNumber,PageSize);
        console.log(response);
        if (response.status===200) {
            console.log("SUCCESFULL FETCH ANNOUNCEMENTS");
            const data=await response.json();
            console.log("data");
            console.log(data);
            console.log(data.length);
            if(data.length===0){
                return {
                    response,
                    hasMore:false
                }
            }
            dispatch(getAnnouncementsSuccess(data.reverse()));
            return {
                response,
                hasMore:true
            }
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetUserLimits = (token) => async (dispatch) => {
    try {
        // dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetUserLimits(token);
        console.log(response);
        if (response.status===200) {
            console.log("SUCCESFULL GET USER LIMITS");
            const data=await response.json();
            console.log (data);
            // dispatch(getAnnouncementsSuccess(data.reverse()));
            return data;
        } else {
            // dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        console.log(error);
        // dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};


export const SetPageNumber = (pageNumber) => async (dispatch) => {
    try {
        const response = await dispatch(setPageNumber(pageNumber));
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const SetAnnouncement = (id) => async (dispatch) => {
    try {
        dispatch(setAnnouncementStart());

        const response = await AnnouncementService.GetAnnouncementByID(id);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(setAnnouncementSuccess(data));
            return data;
        } else {
            dispatch(setAnnouncementFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(setAnnouncementFailure('An error occurred while processing your request'));
    }
};


export const GetAllAnnouncementsByUserId = (token) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAllAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllWaitingAnnouncementsByUserId = (token) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAllWaitingAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL SET ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllActiveAnnouncementsByUserId = (token) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAllActiveAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL GET ALL ACTIVE ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};

export const GetAllInactiveAnnouncementsByUserId = (token) => async (dispatch) => {
    try {
        dispatch(getAnnouncementsStart());

        const response = await AnnouncementService.GetAllInactiveAnnouncementsByUserId(token);

        if (response.status===200) {
            console.log("SUCCESFULL GET ALL Inactive ANNOUNCEMENT");
            const data=await response.json();
            dispatch(getAnnouncementsSuccess(data));
            return data;
        } else {
            dispatch(getAnnouncementsFailure('Email or password is invalid'));
        }
    } catch (error) {
        dispatch(getAnnouncementsFailure('An error occurred while processing your request'));
    }
};