import React from "react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative h-full w-full overflow-hidden">
      {/* Overlay for darkening the video */}
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-20 container flex h-full flex-col items-center justify-center py-48 text-center text-white">
        <h1 className="max-w-[900px] text-6xl leading-18 font-bold">
          Book appointments with top professionals in your area
        </h1>
        <p className="text-muted mt-6 max-w-[700px] text-lg leading-relaxed">
          Discover the easiest way to connect with trusted professionals near
          you. Schedule your appointments seamlessly and save time for what
          matters most.
        </p>
        <div className="mt-6 flex items-center gap-2">
          <Button>Find a Service</Button>
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
