import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VideoIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="bg-black w-full py-20 px-6 md:px-12 relative overflow-hidden">

      {/* Subtle red glow top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#ff2a2a] opacity-10 rounded-full blur-3xl pointer-events-none" />
      {/* Subtle red glow bottom-right */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ff2a2a] opacity-10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">

        {/* Section Label */}
        <div
          data-aos="fade-down"
          className="flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-[#ff2a2a]" />
          <span className="text-[#ff2a2a] text-xs font-bold tracking-[0.3em] uppercase">
            Video Introduction
          </span>
          <span className="w-8 h-[2px] bg-[#ff2a2a]" />
        </div>

        {/* Heading */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-white text-3xl md:text-5xl font-black text-center leading-tight"
        >
          Meet Me in{' '}
          <span className="text-[#ff2a2a]">Person</span>
        </h2>

        {/* YouTube Embed */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full relative group"
        >
          {/* Red border glow on hover */}
          <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-[#ff2a2a] via-transparent to-[#ff2a2a] opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-sm pointer-events-none" />

          {/* Video wrapper — 16:9 */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(255,42,42,0.2)] border border-white/10 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/hGrWrhVfgr0?rel=0&modestbranding=1&color=white"
              title="Video Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoIntro;
