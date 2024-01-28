import Image from 'next/image';
import officeImg1 from '../../../public/office_img_1.png';
import officeImg2 from '../../../public/office_img_2.png';
import officeImg3 from '../../../public/office_img_3.png';
import officeImg4 from '../../../public/office_img_4.png';
import officeImg5 from '../../../public/office_img_5.png';
import officeImg6 from '../../../public/office_img_6.png';
import AboutComponent from '../about/_components/AboutComponent';

export default function EstateinWorld() {
  return (
    <div className="mt-[61px] bg-faintBg border border-faintWhite rounded-[12px] p-[24px] lg:p-[60px] mb-[80px] bg-[url('/abstract_bg_design.svg')]">
      <div className="office_images gap-[10px] md:gap-5">
        <Image src={officeImg1} alt="office image 1" priority />
        <Image src={officeImg2} alt="office image 2" priority />
        <Image src={officeImg3} alt="office image 3" priority />
        <Image src={officeImg4} alt="office image 4" priority />
        <Image src={officeImg5} alt="office image 5" priority />
        <div className="mt-[25px] mb-5 lg:mt-0 lg:mb-0">
          <AboutComponent
            title="Explore Estatein's World"
            subHeading="Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better."
            maxWidth="max-w-[549px]"
          />
        </div>
        <Image src={officeImg6} alt="office image 6" />
      </div>
    </div>
  );
}
