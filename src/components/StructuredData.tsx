"use client";

import React from 'react';

export function StructuredData() {
    const organizationData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Tecobit Marketing",
        "url": "https://tecobit.com",
        "logo": "https://tecobit.com/logo.png",
        "sameAs": [
            "https://facebook.com/tecobit",
            "https://twitter.com/tecobit",
            "https://instagram.com/tecobit",
            "https://linkedin.com/company/tecobit"
        ],
        "description": "Leading digital marketing agency in Nepal specializing in SEO, SMM, and Web Development.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressCountry": "NP"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+977-9863992047",
            "contactType": "customer service"
        }
    };

    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Tecobit Marketing",
        "image": "https://tecobit.com/logo.png",
        "@id": "https://tecobit.com",
        "url": "https://tecobit.com",
        "telephone": "+9779863992047",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kathmandu",
            "addressLocality": "Kathmandu",
            "postalCode": "44600",
            "addressCountry": "NP"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 27.7172,
            "longitude": 85.324
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "18:00"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
            />
        </>
    );
}
