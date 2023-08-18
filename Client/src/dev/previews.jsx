import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {FindJobs} from "../pages/LandingPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/FindJobs">
                <FindJobs/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews