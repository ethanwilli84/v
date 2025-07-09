import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

const scriptLines = [
  "As a 3PL, your job isn’t just to ship your clients’ orders —",
  "it’s to protect their brand integrity.",
  "When packages are delayed or go missing,",
  "you’re stuck chasing down a carrier rep who doesn’t really care —",
  "and isn’t getting back to you fast enough.",
  "And let’s be real — your client doesn’t blame UPS or FedEx.",
  "They blame you.",
  "That’s where Sire changes everything.",
  "With Sire, you get:",
  "A designated account rep who escalates issues quickly and keeps you in the loop",
  "Live updates and transparency, so your clients never feel like they’re in the dark",
  "And access to discounted rates —",
  "because we combine the shipping volume of 3PLs across the country into one master account",
  "That means stronger leverage, faster resolutions, and more margin on every label —",
  "without sacrificing your clients' trust.",
  "If you want your 3PL to run smoother and feel more supported,",
  "Sire is built for you.",
];

export const HelloWorld = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const durationPerLine = 90; // ~3 seconds
  const currentLine = Math.floor(frame / durationPerLine);

  return (
    <AbsoluteFill style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        width: '80%',
        lineHeight: 1.3,
      }}>
        {scriptLines[currentLine] ?? ""}
      </div>
    </AbsoluteFill>
  );
};

