"use client";

import React, { useEffect, useState } from "react";
import { roadmapData } from "./roadmapData";

const Roadmap = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("roadmap-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="roadmap-section"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 overflow-full"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-32">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f5a623] mb-4">
            Development Roadmap
          </h2>
          <p className="text-gray-600 text-lg">A step-by-step journey to project success</p>
        </div>
        <div className="h-8"></div>

        {/* Roadmap Container */}
        <div className="relative pt-8">
          {/* Desktop Timeline SVG */}
          <svg
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full pointer-events-none"
            viewBox="0 0 2 2000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="verticalRoadGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#0066CC" />
                <stop offset="50%" stopColor="#0052A3" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>

            <line
              x1="1"
              y1="0"
              x2="1"
              y2="2000"
              stroke="url(#verticalRoadGradient)"
              strokeWidth="8"
              opacity="0.3"
            />

            <line
              x1="1"
              y1="0"
              x2="1"
              y2="2000"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="30,25"
              opacity="0.8"
            />
          </svg>

          {/* MOBILE VIEW - FIXED SPACING */}
          <div className="block md:hidden py-6">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: isVisible
                    ? "slideInUp 0.8s ease-out forwards"
                    : "none",
                }}
              >
                {/* Container with proper side margins */}
                <div className="w-full px-4 sm:px-6">
                  <RoadmapCard
                    item={item}
                    isVisible={isVisible}
                    animationDelay={`${index * 150}ms`}
                  />
                </div>

                {index !== roadmapData.length - 1 && (
                  <div className="flex flex-col items-center my-2">
                    <div className="w-1 h-8 bg-orange-300 rounded-full"></div>
                    <div className="text-2xl text-orange-400 animate-bounce">
                      ↓
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:block relative space-y-32 py-16 px-8 sm:px-12 lg:px-20 xl:px-28">
            {roadmapData.map((item, index) => (
              <RoadmapItem
                key={index}
                item={item}
                index={index}
                isVisible={isVisible}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-slide-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

interface RoadmapItemProps {
  item: (typeof roadmapData)[0];
  index: number;
  isVisible: boolean;
  isLeft: boolean;
}

const RoadmapCard: React.FC<{
  item: typeof roadmapData[0];
  isVisible: boolean;
  animationDelay: string;
}> = ({ item, isVisible, animationDelay }) => (
  <div
    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 px-6 sm:px-8 py-10 sm:py-12 lg:px-12 lg:py-16 h-full flex flex-col my-4"
  >
    {/* Icon */}
    <div className="flex justify-center mb-6">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          background: item.bgColor,
          animationDelay: isVisible ? animationDelay : "0ms",
          animation: isVisible
            ? "scaleIn 0.6s ease-out forwards"
            : "none",
        }}
      >
        <img 
          src={item.icon} 
          alt={item.title}
          className="w-full h-full object-cover border-6 border-white rounded-full"
        />
      </div>
    </div>

    {/* Title */}
    <h3 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-center text-gray-600 text-base sm:text-lg leading-8 sm:leading-9 mb-8 sm:mb-10 px-2 sm:px-4">
      {item.description}
    </p>

    {/* Features */}
    {item.features && (
      <div className="mt-6 sm:mt-8 flex justify-center">
        <ul className="space-y-4 sm:space-y-5 w-full max-w-md">
          {item.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-3 sm:gap-4 text-gray-700"
            >
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-blue-500 to-orange-500 shrink-0"></span>
              <span className="text-base sm:text-lg leading-7 sm:leading-8">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  item,
  index,
  isVisible,
  isLeft,
}) => {
  const animationDelay = `${index * 150}ms`;

  return (
    <div
      className="relative flex items-center justify-center px-4"
      style={{
        animationDelay: isVisible ? animationDelay : "0ms",
        animation: isVisible
          ? "slideInUp 0.8s ease-out forwards"
          : "none",
      }}
    >
      {/* LEFT */}
      <div className="w-[42%] flex justify-end pr-20">
        {isLeft && (
          <div className="w-full max-w-2xl px-6">
            <RoadmapCard
              item={item}
              isVisible={isVisible}
              animationDelay={animationDelay}
            />
          </div>
        )}
      </div>

      {/* CENTER TIMELINE */}
      <div className="w-[10%] flex justify-center relative">
        <div className="w-7 h-7 rounded-full bg-white border-4 border-orange-300 shadow-lg z-10" />
      </div>

      {/* RIGHT */}
      <div className="w-[42%] flex justify-start pl-20">
        {!isLeft && (
          <div className="w-full max-w-2xl px-6">
            <RoadmapCard
              item={item}
              isVisible={isVisible}
              animationDelay={animationDelay}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Roadmap;