import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Index = () => {
  const positions = [
    { id: 1, top: "33%", left: "68%" },
    { id: 2, top: "33%", left: "55%" },
    { id: 3, top: "33%", left: "43%" },
    { id: 4, top: "20%", left: "30%" },
    { id: 5, top: "15%", left: "25%" },
    { id: 6, top: "15%", left: "20%" },
    { id: 7, top: "45%", left: "5%" },
    { id: 8, top: "55%", left: "5%" },
    { id: 9, top: "88.5%", left: "18%" },
    { id: 10, top: "88.5%", left: "43%" },
    { id: 11, top: "88.5%", left: "55%" },
    { id: 12, top: "88.5%", left: "68%" },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-helvetica">
      {/* Header */}
      <header className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left */}
          <div className="space-y-1">
            <h1 className="text-lg md:text-xl font-normal">Eun Kyeol Kim</h1>
            <p className="text-sm md:text-base text-gray-400 leading-tight">
              Ewha Womans University Visual Design major,
              <br />
              double major in Art History
            </p>
          </div>

          {/* Center */}
          <div className="space-y-1 max-w-[800px] md:ml-[-50px]">
            <h2 className="text-lg md:text-xl font-normal">Design + Contexts</h2>
            <p className="text-sm md:text-base text-gray-400 leading-snug">
              I pursue digital communication design that connects the contexts of everyday life.
              With an integrative mindset and flexible, experimental perspective, I strive to present creative visual solutions.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-end text-sm text-gray-400 space-y-1">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={`/project/${p.id}`}
                className="hover:text-black transition-colors"
              >
                <span className="italic">{p.title}</span> {p.year}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* MAP SECTION */}
      <section className="relative w-full h-[100vh] bg-white">
        {/* 영역 배경 텍스트 */}
        <p className="absolute bottom-[5%] left-[6%] -rotate-90 text-gray-400 text-lg md:text-sm tracking-wide w-[130px] origin-left">
          Brand Identity / Experience Design
        </p>
        <p className="absolute bottom-[5%] left-[35%] -rotate-90 text-gray-400 text-lg md:text-sm w-[110px] origin-left">
          Editorial / Graphic Design
        </p>
        <p className="absolute top-[15%] right-[87%] text-gray-400 text-lg w-[120px] md:text-sm">
          Video / Web Design
        </p>
          <p className="absolute top-[56%] right-[18%] text-gray-400 text-lg w-[120px] md:text-sm">
          UX/UI User Experience Design
        </p>

        {/* 프로젝트 번호 + 호버 원 */}
        {positions.map((item) => (
          <div key={item.id} className="absolute" style={{ top: item.top, left: item.left }}>
            <div className="relative inline-block group">
              <Link
                to={`/project/${item.id}`}
                className="relative z-10 font-garamond text-lg md:text-xl"
              >
                {item.id}
              </Link>

              {/* 호버 시 원 */}
              <span
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                           w-24 h-24 md:w-20 md:h-20 rounded-full bg-[#F8F3A1]
                           opacity-0 group-hover:opacity-100 group-hover:animate-hover-circle-show
                           z-0 transition-opacity duration-300"
                aria-hidden="true"
              />
            </div>
          </div>
        ))}

        {/* 선(Line) 예시 */}
        <div className="absolute top-[12%] left-[3%] w-[32%] h-[2px] bg-gray-300" />
        <div className="absolute top-[95%] left-[3%] w-[96%] h-[2px] bg-gray-300" />
        <div className="absolute top-[30%] left-[32.5%] w-[44%] h-[2px] bg-gray-300" />
        <div className="absolute top-[54%] left-[73.5%] w-[25.2%] h-[2px] bg-gray-300" />

        <div className="absolute top-[43.1%] left-[68%] w-[11.2%] h-[2px] rotate-90 bg-gray-300" />
        <div className="absolute top-[53.5%] left-[-18.2%] w-[42.5%] h-[2px] rotate-90 bg-gray-300" />
        <div className="absolute top-[74.5%] left-[87%] w-[18.6%] h-[2px] rotate-90 bg-gray-300" />
        <div className="absolute top-[22%] left-[28.45%] w-[8.2%] h-[2px] rotate-90 bg-gray-300" />





        {/* 십자가 기준선 */}
        <div className="absolute left-[25%] bottom-[40%] w-0 h-0">
          <div className="absolute w-[4vw] h-[0.3vh] bg-gray-300 left-1/2 -translate-x-1/2"></div>
          <div className="absolute h-[8vh] w-[0.2vw] bg-gray-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        </div>
        <div className="absolute left-[60%] bottom-[40%] w-0 h-0">
          <div className="absolute w-[4vw] h-[0.3vh] bg-gray-300 left-1/2 -translate-x-1/2"></div>
          <div className="absolute h-[8vh] w-[0.2vw] bg-gray-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Index;
