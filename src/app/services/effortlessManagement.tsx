import Image from 'next/image';
import AboutComponent from '../about/_components/AboutComponent';
import tenantIcon from '../../../public/tenant_icon.svg';
import maintenanceIcon from '../../../public/maintenance_icon.svg';
import financialIcon from '../../../public/financial_icon.svg';
import legalIcon from '../../../public/legal_icon.svg';

export default function EffortlessManagement() {
  return (
    <div id="property-management" className="mt-[61px]">
      <AboutComponent
        title="Effortless Property Management"
        subHeading="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you"
        maxWidth="max-w-[1296px]"
      />

      <div className="property_value mt-[40px] gap-5">
        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={tenantIcon} alt="tenant icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Tenant Harmony</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={maintenanceIcon} alt="maintenance icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Maintenance Ease</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={financialIcon} alt="finance icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Financial Peace of Mind</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Managing property finances can be complex. Our financial experts take care of rent collection</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[10px] mb-4">
            <Image src={legalIcon} alt="legal icon" />
            <h2 className="font-semibold text-lg leading-[27px] md:text-xl md:leading-[30px]">Legal Guardian</h2>
          </div>

          <p className="text-gray text-sm leading-[21px] md:text-base md:leading-[24px]">Stay compliant with property laws and regulations effortlessly.</p>
        </div>

        <div className="border border-faintWhite rounded-[10px] p-[24px] bg-faintBg bg-[url('/abstract_bg_design.svg')]">
          <div className="md:flex items-center justify-between">
            <h2 className="font-bold mb-5 text-xl md:text-[24px] md:leading-[36px]">Experience Effortless Property Management</h2>
            <button className="bg-background border border-faintWhite leading-[30px] w-full md:w-auto h-[49px] rounded-[8px] md:px-5">Learn More</button>
          </div>

          <p className="mt-5 text-sm leading-[21px] md:text-base md:leading-[24px]">
            Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.
          </p>
        </div>
      </div>
    </div>
  );
}
