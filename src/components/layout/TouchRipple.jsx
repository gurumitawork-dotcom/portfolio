import { useEffect } from "react";

// Material-style ink ripple at every touch point (taps and the start of swipes).
// Touch/pen only — mouse users get the custom cursor instead. Elements are created
// and animated directly so ripples never trigger React re-renders mid-scroll.
export default function TouchRipple() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const layer = document.createElement("div");
    layer.setAttribute("aria-hidden", "true");
    layer.className = "touch-ripple-layer";
    document.body.appendChild(layer);

    const onDown = (e) => {
      if (e.pointerType === "mouse") return;
      const dot = document.createElement("span");
      dot.className = "touch-ripple";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      layer.appendChild(dot);
      const anim = dot.animate(
        [
          { transform: "translate(-50%, -50%) scale(0.2)", opacity: 0.45 },
          { transform: "translate(-50%, -50%) scale(1)", opacity: 0 },
        ],
        { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "forwards" }
      );
      anim.onfinish = () => dot.remove();
    };

    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", onDown);
      layer.remove();
    };
  }, []);

  return null;
}
