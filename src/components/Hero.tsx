import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const VIDEO_URL = 'https://cdn.coverr.co/videos/coverr-diverse-business-meeting-5244/1080p.mp4';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        {/* Only render video if URL is valid */}
        {VIDEO_URL && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={VIDEO_URL}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center leading-tight mb-6">
          <span className="block mb-2">Transforming Communities</span>
          <span className="block mb-2">Empowering Leaders</span>
          <span className="block text-yellow-400">Driving Growth</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-8 text-gray-200">
          PropLit Consulting: Your partner in skills development, project management, and business startup support.
        </p>

        <Button>
          Get Started
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}