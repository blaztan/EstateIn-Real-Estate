import AboutComponent from './AboutComponent';

export default function Experience() {
  return (
    <div id="how-it-works" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px]">
      <AboutComponent
        title="Navigating the Estatein Experience"
        subHeading="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
        maxWidth="max-w-[1296px]"
      />

      <div className="stepper mt-[40px] gap-[30px] ">
        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 01</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">Discover a World of Possibilities</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">
              Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location.
            </p>
          </div>
        </div>

        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 02</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">Narrowing Down Your Choices</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">
              Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.
            </p>
          </div>
        </div>

        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 03</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">Personalized Guidance</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.</p>
          </div>
        </div>

        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 04</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">See It For Yourself</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">
              Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.
            </p>
          </div>
        </div>

        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 05</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">Making Informed Decision</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">
              Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.
            </p>
          </div>
        </div>

        <div>
          <div className="steps_num border-l border-l-[#703bf766] leading-[24px] p-4">Step 06</div>

          <div className="steps p-[30px] md:p-[40px] border border-faintWhite rounded-r-[10px] rounded-bl-[10px]">
            <h2 className="mb-[14px] md:mb-4 text-lg leading-[27px] md:text-xl md:leading-[30px]">Getting the Best Deal</h2>
            <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
