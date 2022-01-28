import React from 'react';
import {InfoBox, InfoText} from "../PersonalInfo";
import {List} from "@mui/material";

const MainPersonalInfoItems = ({lookingForAJobDescription, lookingForAJob, aboutMe}) => {
    return (
        <List>
            <InfoBox>
                <InfoText>
                    About Me:
                </InfoText>
                <InfoText>
                    {aboutMe || 'Not filed yet'}
                </InfoText>
            </InfoBox>
            <InfoBox>
                <InfoText>
                    Looking for a job:
                </InfoText>
                <InfoText>
                    {lookingForAJob ? 'Yes' : 'No'}
                </InfoText>
            </InfoBox>
            {
                lookingForAJob && <InfoBox>
                    <InfoText>
                        Looking for a job description:
                    </InfoText>
                    <InfoText>
                        {lookingForAJobDescription}
                    </InfoText>
                </InfoBox>
            }
        </List>
    );
};

export default MainPersonalInfoItems;