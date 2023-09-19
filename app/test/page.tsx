"use client"
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import { useRef } from "react";
import Slider from "@/components/cards/sliders";
import MainCard from "@/components/cards/MainCard";
export default function App() {
    const [open, setOpen] = React.useState(false);
    const slideshowRef = React.useRef(null);
    return (
        <>
        <MainCard/>
            {/* <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button> */}
            <Slider/>
            <Lightbox
                open={true}
                // open={open}
                close={() => setOpen(false)}
                slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }]}
            />
            
        </>
    );
}