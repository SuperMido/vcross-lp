import "@/styles/home.css";

import HomeNav from "@/components/layout/HomeNav";
import useSectionTransition from "@/hooks/useSectionTransition";
import { useEffect, useState } from "react";
import { useCommonState } from "@/store/useCommonState";
import { useTranslation } from "react-i18next";
import { Modal } from "antd";

// eslint-disable-next-line react-refresh/only-export-components
export const meta = () => {
  return [
    { title: "Vcross" },
    {
      name: "description",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ];
};

export default function Home() {
  const { t } = useTranslation();
  const setWidgetLoading = useCommonState((state) => state.setWidgetLoading);

  const [isReadMore, setIsReadMore] = useState(false);

  const bannerTitle = "Vcross";

  useSectionTransition({ pageId: "wheel-sections" });

  useEffect(() => {
    const panels = document.querySelectorAll(".panel");
    if (panels.length) {
      panels.forEach((item) => {
        item.addEventListener("click", () => {
          panels.forEach((p) => p.classList.remove("active"));
          item.classList.toggle("active");
        });
      });
    }
  }, []);

  useEffect(() => {
    setWidgetLoading(true);
  }, [setWidgetLoading]);

  // FIXME: Get real discord member using bot toekn and etc
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://discord.com/api/v10/guilds/1442465405342978048/members?limit=1000`,
  //         {
  //           headers: {
  //             Authorization: `Bot ${BOT_TOKEN}`,
  //           },
  //         }
  //       );
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error.response?.data || error.message);
  //     }
  //   }

  //   fetchUser()
  // } ,[])

  return (
    <div id="home" className="h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full pt-5 pb-20 z-10">
        <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-black/40 to-transparent"></div>
        <div className="relative w-full h-8">
          <HomeNav />
        </div>
      </div>

      <div id="wheel-sections" className="h-full">
        {/* Home banner section */}
        <section className="home relative h-full w-full">
          <div className="fadeInTitle absolute top-1/2 left-1/2 -translate-1/2 z-2 flex gap-10 delay-350">
            {bannerTitle.split("").map((char, index) => (
              <span
                key={`char-${char}-${index}`}
                className="fadeInCharacter text-6xl uppercase font-bold text-white"
                style={{
                  animationDelay: `${(index + 1) * 0.2 + 3.5}s`,
                }}
              >
                {char}
              </span>
            ))}
          </div>

          {/* Scroll anchor */}
          <div className="scroll-tip animate-updown absolute bottom-3 left-1/2 -translate-x-1/2 w-6 h-8 z-2"></div>
        </section>

        {/* About US */}
        <section className="about-us relative h-full w-full">
          <div className="about-us-side-img absolute top-16 left-16 right-1/2 bottom-0"></div>

          <div className="about-us-description absolute top-1/2 left-1/2 right-16 flex flex-col gap-5 py-8 px-16">
            <h1 className="text-4xl leading-none font-bold text-white">
              {t("home.aboutUs")}
            </h1>

            <p className="mt-5 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              quae voluptatem, eveniet nobis expedita velit voluptate animi
              autem alias ex dolore dolorem at adipisci natus voluptas labore?
              Dicta, pariatur totam.
            </p>

            <div className="mt-5 flex items-center gap-4">
              {Array.from(Array(5).keys()).map((i) => (
                <div
                  key={`member-${i}`}
                  className="rounded-full border-2 border-white p-1 overflow-hidden shadow-2xl shadow-white"
                >
                  <div className="member-icon size-10"></div>
                </div>
              ))}
            </div>

            <div
              className="mt-8 cursor-pointer rounded-[4px] bg-transparent border border-white py-4 px-8 text-base leading-none text-white font-semibold uppercase w-auto mx-auto"
              onClick={() => setIsReadMore(true)}
            >
              Read more
            </div>

            <Modal open={isReadMore} closable={false} footer={null} mask>
              <div className="p-3 relative">
                <div
                  className="cursor-pointer absolute top-0 right-0"
                  onClick={() => setIsReadMore(false)}
                >
                  X
                </div>

                <h1 className="text-2xl leading-8 font-bold">
                  {t("home.aboutUs")}
                </h1>

                <p className="mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                  quae voluptatem, eveniet nobis expedita velit voluptate animi
                  autem alias ex dolore dolorem at adipisci natus voluptas
                  labore? Dicta, pariatur totam.
                </p>
              </div>
            </Modal>
          </div>
        </section>

        {/* Gallery: Game we play */}
        <section className="game-we-play relative h-full w-full">
          <div className="flex gap-2 size-full">
            <div id="panel-1" className="panel bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative transition-all duration-600"></div>
            <div id="panel-2" className="panel bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative transition-all duration-600"></div>
            <div id="panel-3" className="panel bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative transition-all duration-600"></div>
            <div id="panel-4" className="panel bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative transition-all duration-600"></div>
            <div id="panel-5" className="panel bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative transition-all duration-600"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
