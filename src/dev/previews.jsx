import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import Subscribe from "../components/Subscribe";
import FormSidebar from "../components/FormSidebar";
import Card from "../components/Card";
import ContactList from "../components/ContactList";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Subscribe">
                <Subscribe/>
            </ComponentPreview>
            <ComponentPreview path="/FormSidebar">
                <FormSidebar/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/Grid">
                <ContactList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;