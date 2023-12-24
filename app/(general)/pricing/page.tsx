import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Pricing page",
    description: "Created with love by Franco",
    keywords: ["Pricing Page", "Franco", "First Project"],
};

const PricingPage = () => {
    return <div className="text-5xl p-24 text-center">Pricing Page</div>;
};

export default PricingPage;
