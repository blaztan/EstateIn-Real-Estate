import ReusableComponent from './reusableComponent';
import PropertiesComponent from './PropertiesComponent';

export default function FeaturedProperties() {
  return (
    <ReusableComponent
      id="properties"
      heading="Featured Properties"
      subHeading='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'
      btnTxt="View All Properties"
    >
      <div className="featured gap-5">
        <PropertiesComponent isTopTagVisible={false} title="Seaside Serenity Villa" description="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... " tags={true} price="$550,000" />
      </div>
    </ReusableComponent>
  );
}
