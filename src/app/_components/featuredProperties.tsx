import Image from 'next/image';
// import featuredImg from '../../../public/featured_img.png';
import ReusableComponent from './reusableComponent';
import PropertiesComponent from './PropertiesComponent';

export default function FeaturedProperties() {
  const testArr = [1, 2, 3];

  return (
    <ReusableComponent
      heading="Featured Properties"
      subHeading='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      btnTxt="View All Properties"
    >
      <div className="featured gap-5">
        {/* {testArr.map((num, i) => (
          <div key={i} className="border border-faintWhite rounded-[12px] p-[24px] mb-[20px] md:mb-0">
            <Image src={featuredImg} alt="featured image" priority className="mb-[16px] md:mb-5 mx-auto w-full" /> */}

        <PropertiesComponent isTopTagVisible={false} title="Seaside Serenity Villa" description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... " tags={true} price="$550,000" />
        {/* </div> */}
        {/* ))} */}
      </div>
    </ReusableComponent>
  );
}
