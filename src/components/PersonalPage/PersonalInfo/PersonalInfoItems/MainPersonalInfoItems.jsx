import React from 'react';
import {InfoBox, InfoText} from "../PersonalInfo";
import {List} from "@mui/material";

const MainPersonalInfoItems = ({descriptionItems}) => {
    return (
        <List>
        {
            descriptionItems.map(item => <>
                <InfoBox>
                    <InfoText>
                        {item.title}:
                    </InfoText>
                    <InfoText sx={{color: "text.secondary", ml: 4}}>
                        {typeof item.content === 'boolean' ? item.content ? 'Yes' : 'No' : item.content ? item.content : 'Not filled in yet'}
                    </InfoText>
                </InfoBox>
            </>)
        }
        </List>
    );
};

export default MainPersonalInfoItems;