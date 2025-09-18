import { Typewriter } from "react-simple-typewriter";

export default function TitleRotator() {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-secondary">
      <Typewriter
        words={["Mobile Developer", "Full Stack Developer", "Designer"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </h2>
  );
}

