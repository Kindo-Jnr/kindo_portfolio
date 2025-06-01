import React, { useRef, useEffect } from "react";
import { SpotLight } from "@react-three/drei";
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';

const HeroLights = () => {
    const rectLightRef = useRef();

    useEffect(() => {
        RectAreaLightUniformsLib.init();
    }, []);

    return (
        <>
            <SpotLight
                position={[2, 5, 6]}
                intensity={100}
                angle={0.25}
                penumbra={0.2}
                color="white"
            />
            <SpotLight
                position={[4, 5, 4]}
                intensity={40}
                angle={0.3}
                penumbra={0.5}
                color="#4cc9f0"
            />
            <SpotLight
                position={[-3, 5, 5]}
                intensity={60}
                angle={0.4}
                penumbra={1}
                color="#9d4edd"
            />

            {/* RectAreaLight setup */}
            <primitive
                ref={rectLightRef}
                object={new THREE.RectAreaLight('#a259ff', 12, 3, 2)} // color, intensity, width, height
                position={[1, 3, 4]}
                rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            />

            <pointLight 
            position={[0,1,0]}
            intensity={10}
            color="#7209b7"
            />

            <pointLight 
            position={[1,2,-2]}
            intensity={10}
            color="#0d00a4"
            />
        </>
    );
};

export default HeroLights;
