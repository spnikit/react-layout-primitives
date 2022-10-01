import React from 'react';
import {Stack} from "./Subscribe";
import styled from "styled-components";


export const Split = styled.div`
  display: grid;
  gap: ${(props) => props.gutter ?? "1rem"};
  grid-template-columns: 1fr 1fr;
`;

function FormSidebar(props) {
    return (
        <Split>
            <section>
                <h1>Personal information</h1>
                <p>The information you provide will be
                    displayed publicly</p>
            </section>

            <Stack gutter={'1rem'}>
                <Stack gutter={'0.25rem'}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </Stack>

                <Stack gutter={'0.25rem'}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </Stack>
                <Stack gutter={'0.25rem'}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </Stack>

                <Stack gutter={'0.25rem'}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </Stack>
            </Stack>
        </Split>
    );
}

export default FormSidebar;