import AboutComponent from './AboutComponent';

export default function OurAchievements() {
  return (
    <div id="our-works" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px]">
      <AboutComponent
        title="Our Achievements"
        subHeading="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
        maxWidth="max-w-[1297px]"
      />

      <div className="mt-[40px] gap-5 md:gap-[30px]">
        <div className="about_cards border border-faintWhite rounded-[10px] p-[30px] md:p-[40px]">
          <h3 className="mb-4 md:mb-[24px] text-xl md:text-[24px] leading-[30px] md:leading-[36px]">3+ Years of Excellence</h3>
          <p className="text-sm leading-[21px] md:text-base md:leading-[24px] text-gray">With over 3 years in the industry, we've amassed a wealth of knowledge and experience.</p>
        </div>

        <div className="about_cards border border-faintWhite rounded-[10px] p-[30px] md:p-[40px]">
          <h3 className="mb-4 md:mb-[24px] text-xl md:text-[24px] leading-[30px] md:leading-[36px]">Happy Clients</h3>
          <p className="text-sm leading-[21px] md:text-base md:leading-[24px] text-gray">Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.</p>
        </div>

        <div className="about_cards border border-faintWhite rounded-[10px] p-[30px] md:p-[40px]">
          <h3 className="mb-4 md:mb-[24px] text-xl md:text-[24px] leading-[30px] md:leading-[36px]">Industry Recognition</h3>
          <p className="text-sm leading-[21px] md:text-base md:leading-[24px] text-gray">We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.</p>
        </div>
      </div>
    </div>
  );
}
