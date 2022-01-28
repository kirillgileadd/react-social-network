import React from 'react';
import {Link, List} from "@mui/material";
import {InfoBox, InfoText} from "../PersonalInfo";

const PersonalInfoContacts = ({contacts}) => {
    console.log(contacts)
    return (
        <List>
            {
                Object.keys(contacts).map((id) =>
                    <InfoBox display={'flex'}>
                        <InfoText>{contacts[id] ? id : ''}</InfoText>
                        <InfoText><Link href={contacts[id]}>{contacts[id]}</Link></InfoText>
                    </InfoBox>)
            }
        </List>
    )
}

export default PersonalInfoContacts;