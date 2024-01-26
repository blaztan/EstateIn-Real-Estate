export default function HeroCards() {
  return (
    <div className="hero_cards gap-[16px] mt-[40px]">
      <div className="border border-faintWhite rounded-[10px] text-center py-4 bg-faintBg">
        <h3 className="font-bold text-[24px] leading-[36px]">200+</h3>
        <p className="text-sm leading-[21px] text-gray">Happy Customers</p>
      </div>

      <div className="border border-faintWhite rounded-[10px] text-center py-4 bg-faintBg">
        <h3 className="font-bold text-[24px] leading-[36px]">10K+</h3>
        <p className="text-sm leading-[21px] text-gray">Properties For Client</p>
      </div>

      <div className="border border-faintWhite rounded-[10px] text-center py-4 bg-faintBg">
        <h3 className="font-bold text-[24px] leading-[36px]">16+</h3>
        <p className="text-sm leading-[21px] text-gray">Years of Experience</p>
      </div>
    </div>
  );
}
