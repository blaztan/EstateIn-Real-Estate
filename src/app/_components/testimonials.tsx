import ReusableComponent from './reusableComponent';
import star from '../../../public/star_icon.svg';
import Image from 'next/image';
import wadePic from '../../../public/wade_pic.png';

export default function Testimonials() {
  const testArr = [1, 2, 3];
  const stars = [1, 2, 3, 4, 5];
  return (
    <ReusableComponent
      id="testimonials"
      heading="What Our Clients Say"
      subHeading="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
      btnTxt="View All Testimonials"
    >
      <div className="featured gap-5">
        {testArr.map((num, i) => (
          <div key={i} className="border border-faintWhite rounded-[10px] p-[30px] mb-[20px] md:mb-0">
            <div className="flex items-center mb-[24px] md:mb-[30px] gap-[8px]">
              {stars.map((num, i) => (
                <div key={i} className="h-[30px] w-[30px] rounded-[100px] border border-faintWhite flex items-center justify-center">
                  <Image src={star} alt="star icon" />
                </div>
              ))}
            </div>

            <h2 className="font-semibold text-lg md:text-xl leading-[27px] md:leading-[30px] mb-[6px]">Exceptional Service!</h2>
            <p className="text-sm md:text-base leading-[21px] md:leading-[24px] mb-[24px]">Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>

            <div className="flex items-start gap-[10px]">
              <Image src={wadePic} alt="wade's picture" />
              <div>
                <h3 className="leading-[24px] md:text-lg md:leading-[27px]">Wade Warren</h3>
                <p className="text-sm md:text-base leading-[21px] md:leaing-[24px] text-gray">USA, California</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ReusableComponent>
  );
}
