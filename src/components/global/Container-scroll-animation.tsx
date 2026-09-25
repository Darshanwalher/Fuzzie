"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const ContainerScroll = ({
  titleComponent,
}: {
  titleComponent: string | React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0.7, 0.9] : [1.05, 1]
  );

  const translate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  return (
    <div
      ref={containerRef}
      className="relative flex h-[80rem] w-full items-center justify-center p-5 md:p-20"
    >
      <div
        className="relative w-full py-20 md:py-40"
        style={{
          perspective: "1000px",
        }}
      >
        <Header
          translate={translate}
          titleComponent={titleComponent}
        />

        <Card
          rotate={rotate}
          scale={scale}
          translate={translate}
        />
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: any;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="relative z-10 mx-auto max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
}: {
  rotate: any;
  scale: any;
  translate: any;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="relative mx-auto -mt-12 h-[30rem] w-full max-w-5xl rounded-[30px] bg-[#222222] p-3 md:h-[40rem] md:p-6"
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
        <Image
          src="/temp-banner.png"
          fill
          priority
          alt="Fuzzie workflow dashboard"
          className="rounded-2xl border-4 border-neutral-700 object-cover md:border-8"
        />

        {/* Bottom fade */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-20
            h-[45%]
            w-full
            bg-gradient-to-t
            from-black
            via-black/75
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
};