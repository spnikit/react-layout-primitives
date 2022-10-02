import React from 'react';
import Card from "./Card";
import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
`;

function ContactList(props) {
    return (
        <Grid>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </Grid>
    );
}

export default ContactList;