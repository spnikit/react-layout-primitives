import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Subscribe from "../components/Subscribe";
import FormSidebar from "../components/FormSidebar";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Subscribe">
                <Subscribe/>
            </ComponentPreview>
            <ComponentPreview path="/FormSidebar">
                <FormSidebar/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;