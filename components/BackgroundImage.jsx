'use client';

import { useEffect } from 'react';
import { getAssetPath } from '@/utils/paths';

export default function BackgroundImage() {
    useEffect(() => {
        // Set the background image dynamically based on environment
        const backgroundImageUrl = getAssetPath('/assets/images/2454628.png');
        document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`;
    }, []);

    return null; // This component doesn't render anything
}
