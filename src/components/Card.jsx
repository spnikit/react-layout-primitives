import React from 'react';
import {Stack} from "./Subscribe";
import {Split} from "./FormSidebar";

function Card(props) {
    return (
        <div style={{padding: '1rem', border: '1px solid black', borderRadius: '5px'}}>
            <Stack gutter={'0.25'}>
                <h2>Jane Doe</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa quia quo ullam unde! Accusantium
                    consequuntur cupiditate eos ipsum mollitia pariatur quod reiciendis, repellendus! A corporis ipsum
                    reiciendis rem sequi.</p>
            </Stack>

            <Split>
                <div>Email</div>
                <div>Call</div>
            </Split>
        </div>
    );
}

export default Card;