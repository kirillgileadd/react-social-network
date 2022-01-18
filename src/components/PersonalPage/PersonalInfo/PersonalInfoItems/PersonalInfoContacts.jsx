import React from 'react';
import {Link, List} from "@mui/material";
import {InfoBox, InfoText} from "../PersonalInfo";

const PersonalInfoContacts = ({contactsItems}) => {
    return (
        <List>
            {
                contactsItems.map(item => <>
                        <InfoBox>
                            <InfoText>
                                {item.title}:
                            </InfoText>
                            <InfoText sx={{color: "text.secondary", ml: 4}}>
                                <Link href={`https://${item.content}`}>
                                    {item.content}
                                </Link>
                            </InfoText>
                        </InfoBox>
                    </>
                )
            }
        </List>
    )
};

export default PersonalInfoContacts;