import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About page",
    description: "Created with love by Franco",
};

const AboutPage = () => {
    return <div className="text-5xl p-24 text-center">About Page</div>;
};

export default AboutPage;
