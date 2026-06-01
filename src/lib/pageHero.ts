import type { CSSProperties } from "react";

/** Outer section — matches home Hero spacing below navbar */
export const pageHeroSectionStyle: CSSProperties = {
  position: "relative",
  background: "#fff",
  padding: "clamp(80px, 11vw, 104px) clamp(12px, 3vw, 24px) clamp(12px, 3vw, 24px)",
};

/** Shared hero card + inner grid — same height/padding as home page */
export const pageHeroStyles = `
  .page-hero-card {
    position: relative;
    height: calc(100svh - 128px);
    min-height: 560px;
    border-radius: 32px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    .page-hero-card {
      min-height: min(520px, calc(100svh - 100px));
      height: auto;
      border-radius: 24px;
    }
    .page-hero-inner {
      gap: 28px;
    }
  }
  .page-hero-inner {
    position: relative;
    z-index: 1;
    max-width: 1360px;
    margin: 0 auto;
    width: 100%;
    padding: 0 clamp(20px, 5vw, 64px) clamp(28px, 6vw, 64px);
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: end;
  }
  @media (min-width: 1024px) {
    .page-hero-inner {
      grid-template-columns: 1.2fr 1fr;
      gap: 80px;
    }
  }
`;
