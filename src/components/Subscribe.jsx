import React from 'react';
import styled from 'styled-components';

export const Stack = styled.div`
  display: grid;
  justify-items: start;
  gap: ${(props) => props.gutter ?? "1rem"}
`;

function Subscribe(props) {
    return (
        <Stack>
            <Stack gutter={'0.3rem'}>
                <h1>Subscribe to our newsletter</h1>
                <p>Subscribe to our newsletter to keep up to date on all our amazing projects.</p>
            </Stack>

            <Stack>
                <Stack gutter={'0.25rem'}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </Stack>

                <Stack gutter={'0.25rem'}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>
                </Stack>

                <button>Subscribe</button>
            </Stack>
        </Stack>
    );
}

export default Subscribe;