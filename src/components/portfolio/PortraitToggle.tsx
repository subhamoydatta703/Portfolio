"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import "./portrait-toggle.css";

export default function PortraitToggle() {
  const [showPhoto, setShowPhoto] = useState(false);

  return (
    <div className="portrait-group">
      <button
        type="button"
        className="hero-portrait portrait-toggle"
        data-photo={showPhoto}
        aria-label="Show my real photo"
        aria-pressed={showPhoto}
        aria-describedby="portrait-hint"
        onClick={() => setShowPhoto((current) => !current)}
      >
        <Image
          className="portrait-avatar"
          src="/profile.png"
          alt={showPhoto ? "" : "Subhamoy Datta's anime avatar"}
          aria-hidden={showPhoto}
          fill
          sizes="(max-width: 600px) 210px, 280px"
          priority
        />
        <Image
          className="portrait-photo"
          src="/myself.png"
          alt={showPhoto ? "Subhamoy Datta" : ""}
          aria-hidden={!showPhoto}
          fill
          sizes="(max-width: 600px) 210px, 280px"
          loading="eager"
        />
      </button>
      <div className="portrait-note" id="portrait-hint" data-photo={showPhoto}>
        <ArrowLeft className="portrait-note-arrow" aria-hidden="true" />
        <p className="portrait-instructions" aria-live="polite">
          <span className="portrait-reveal-hint" aria-hidden={showPhoto}>Click to view<br />my photo</span>
          <span className="portrait-return-hint" aria-hidden={!showPhoto}>Click to view<br />my avatar</span>
        </p>
      </div>
    </div>
  );
}
