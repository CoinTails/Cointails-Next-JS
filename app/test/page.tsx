"use client"
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
import { useRef } from "react";
import Slider from "@/components/cards/sliders";
import MainCard from "@/components/cards/MainCard";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function App() {
    const [open, setOpen] = React.useState(false);
    const slideshowRef = React.useRef(null);
    return (
        <>
        {/* <MainCard/>
            <Slider/>
            <Lightbox
                open={true}
                // open={open}
                close={() => setOpen(false)}
                slides={[{ src: "/image1.jpg" }, { src: "/image2.jpg" }, { src: "/image3.jpg" }]}
            /> */}

            <Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
 
            
        </>
    );
}