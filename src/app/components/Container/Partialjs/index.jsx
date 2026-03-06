"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("@tsparticles/react"), {
  ssr: false,
});

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 50 },
          move: { enable: true, speed: 2 },
          links: { enable: true },
        },
      }}
    />
  );
}