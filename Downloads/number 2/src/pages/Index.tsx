import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-black font-[Helvetica_Neue] relative">
      {/* Header */}
      <header>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Left */}
            <div className="space-y-1">
              <h1 className="text-[20px] text-2xl font-normal">
                Eun Kyeol Kim
              </h1>
              <p className="text-lg text-gray-400 leading-tight">
                Ewha Womans University Visual Design major,
                <br />
                double major in Art History
              </p>
            </div>

            {/* Center */}
            <div className="space-y-1 w-[500px]">
              <h2 className="text-[20px] text-2x1 font-normal">
                Design + Contexts
              </h2>
              <p className="text-lg text-gray-400 leading-snug">
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
        </div>
      </header>

      {/* MAP SECTION */}
      <section className="relative w-[1440px] h-[800px]">
        {/* 영역 배경 */}
        <div className="left-[5%] bottom-[0%] w-[28%] h-[0%] bg-[#FFFF]">
        <p className="absolute top-[705px] left-[85px] -translate-y-1/2 origin-left -rotate-90 text-gray-400 text-md tracking-wide w-[150px]">Brand Identity / Experience Design</p>
        </div>
        <div className="left-[5%] bottom-[0%] w-[44%] h-[0%] bg-[#FFFF]">
          <p className=" absolute top-[705px] left-[500px] -translate-y-1/2 origin-left -rotate-90 text-gray-400 text-md w-[120px]">Editorial / Graphic Design</p>
        </div>
        <div className="right-[3%] bottom-[0%] w-[17%] h-[0%] bg-[#FFFF]">
          <p className="absolute top-[440px] left-[1130px] -translate-y-1/2 origin-left text-gray-400 text-md w-[140px]">UX/UI User Experience Design</p>
          <p className="absolute top-[120px] left-[65px] -translate-y-1/2 origin-left text-gray-400 text-md w-[140px]">UX/UI User Experience Design</p>
        </div>

        {/* 프로젝트 번호 */}
        <Link to="/project/1" style={{ top: '260px', left: '980px' }} className="text-xl absolute font-garamond">1</Link>
<Link to="/project/2" style={{ top: '260px', left: '800px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">2</Link>
<Link to="/project/3" style={{ top: '260px', left: '620px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">3</Link>
<Link to="/project/4" style={{ top: '150px', left: '420px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">4</Link>
<Link to="/project/5" style={{ top: '100px', left: '350px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">5</Link>
<Link to="/project/6" style={{ top: '100px', left: '270px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">6</Link>
<Link to="/project/7" style={{ top: '350px', left: '85px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">7</Link>
<Link to="/project/7" style={{ top: '450px', left: '85px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">8</Link>
<Link to="/project/7" style={{ top: '675px', left: '220px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">9</Link>
<Link to="/project/7" style={{ top: '675px', left: '620px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">10</Link>
<Link to="/project/7" style={{ top: '675px', left: '800px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">11</Link>
<Link to="/project/7" style={{ top: '675px', left: '980px', fontFamily: '"EB Garamond", serif' }} className="text-xl absolute font-garamond">12</Link>



{/* 선 하나 추가 */}
      {/* 제일하단 가로선 */}
    <div className="absolute bottom-[68px] left-[3%] w-[94%] h-[3px] bg-gray-300"></div>
      {/* 맨오른쪽 가로선 */}
    <div className="absolute bottom-[400px] right-[3%] w-[20%] h-[3px] bg-gray-300"></div>
      {/* 제일상단 가로선 */}
    <div className="absolute bottom-[720px] left-[3%] w-[32%] h-[3px] bg-gray-300"></div>
      {/* 오른쪽 세로선 */}
    <div className="absolute bottom-[50%] right-[23%] w-[2px] h-[18%] bg-gray-300"></div>
      {/* 맨왼쪽 세로선 */}
    <div className="absolute bottom-[8.5%] left-[3%] w-[2px] h-[81.5%] bg-gray-300"></div>
      {/* 왼쪽 세로선 */}
    <div className="absolute bottom-[70%] left-[32%] w-[2px] h-[18%] bg-gray-300"></div>
      {/* 맨오른쪽 세로선 */}
    <div className="absolute bottom-[11%] right-[6%] w-[2px] h-[37%] bg-gray-300"></div>
      {/* 가운데 가로선 */}
    <div className="absolute bottom-[558px] left-[30%] w-[50%] h-[3px] bg-gray-300"></div>
      {/* 십자가 중심 기준 */}
    <div className="absolute left-[25%] bottom-[40%] w-0 h-0">
      {/* 가로선 */}
    <div className="absolute w-[4.5vw] h-[0.4vh] bg-gray-300 left-1/2 -translate-x-1/2"></div>
      {/* 세로선 */}
    <div className="absolute h-[8vh] w-[0.2vw] bg-gray-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>
    </div>
      {/* 십자가 중심 기준 */}
    <div className="absolute left-[60%] bottom-[40%] w-0 h-0">
      {/* 가로선 */}
    <div className="absolute w-[4.5vw] h-[0.4vh] bg-gray-300 left-1/2 -translate-x-1/2"></div>
      {/* 세로선 */}
    <div className="absolute h-[8vh] w-[0.2vw] bg-gray-300 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"></div>

</div>







      </section>
    </div>
  );
};

export default Index;