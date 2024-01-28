import PropertiesComponent from '../_components/PropertiesComponent';
import ReusableComponent from '../_components/reusableComponent';

export default function WorldPossibilities() {
  return (
    <div id="categories" className="max-w-[1440px] mx-auto px-4 md:px-[80px] mt-[61px]">
      <ReusableComponent
        heading="Discover a World of Possibilities"
        subHeading="Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home"
        isDifferentNav={true}
      >
        <div className="featured gap-5">
          <PropertiesComponent isTopTagVisible={true} title="Seaside Serenity Villa" description="Wake up to the soothing melody of waves. This beachfront villa offers... " tags={false} price="$1,250,000" />
        </div>
      </ReusableComponent>
    </div>
  );
}
