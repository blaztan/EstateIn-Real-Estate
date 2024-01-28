import ReusableComponent from './reusableComponent';

export default function FAQ() {
  const testArr = [1, 2, 3];

  return (
    <ReusableComponent
      id="faqs"
      heading="Frequently Asked Questions"
      subHeading="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
      btnTxt="View All FAQ’s"
    >
      <div className="featured gap-5">
        {testArr.map((num, i) => (
          <div key={i} className="border border-faintWhite rounded-[10px] p-[30px] md:p-[40px] mb-[20px] md:mb-0">
            <h2 className="font-semibold text-lg md:text-xl leading-[27px] md:leading-[30px]">How do I search for properties in Estatein?</h2>
            <p className="my-5 text-gray text-sm md:text-base leading-[21px] md:leading-[24px] tracking-[-0.6%]">Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
            <button className="border border-faintWhite bg-faintBg text-sm leadin-[18.34px] tracking-[-0.6%] h-[48px] px-5 w-full md:w-auto rounded-[8px]">Read More</button>
          </div>
        ))}
      </div>
    </ReusableComponent>
  );
}
