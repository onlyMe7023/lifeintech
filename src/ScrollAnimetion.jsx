import { useEffect, useState } from "react";

const ScrollAnimetion = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const getScrollPercentage = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const scrollableHeight = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / scrollableHeight) * 100;

    return scrollPercentage;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(getScrollPercentage());
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPercentage);
  return (
    <div className="bg-[#2b2c3c] h-screen w-full fixed">
      <div
        style={{
          height: `${4 * scrollPercentage}%`,
          width: `${4 * scrollPercentage}%`,
          bottom: 0,
          right: 0,
        }}
        className="bg-[#c4d7d6] absolute">
        {scrollPercentage > 30 ? (
          <>
            <div
              style={{
                height: `${scrollPercentage - 30}%`,
                width: `${scrollPercentage - 30}%`,
                bottom: 0,
                right: 0,
                maxHeight: `${(window.innerHeight / 4) * 3}px`,
                maxWidth: `${(window.innerWidth / 4) * 3}px`,
              }}
              className="bg-white absolute ">
              {scrollPercentage > 65 ? (
                <>
                  <div>
                    <h1 className="text-[14rem] px-32 font-['Bona_Nova_SC']">
                      9
                    </h1>
                  </div>
                  <div
                    style={{
                      height: `${2 * (scrollPercentage - 65)}%`,
                      width: `${2 * (scrollPercentage - 65)}%`,
                      bottom: 0,
                      right: 0,
                    }}
                    className="bg-[#e3ff79] absolute ">
                    {scrollPercentage > 96 ? (
                      <>
                        <div>
                          <h1 className="text-[14rem] px-32 font-['Bona_Nova_SC']">
                            2x
                          </h1>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ScrollAnimetion;
