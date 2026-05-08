import RangeAtoBSlider from "@/components/ui/RangeAtoBSlider";
import SelectBasic, { OptionBasic } from "@/components/ui/SelectBasic";

const FiltersOptions = ({min, max}) => {
  return (
    <section className="mt-3">
      <div className="filter_by_category">
        <h1 className="font-semibold">Filter by Category</h1>
        <SelectBasic className={`mt-3`}>
          <OptionBasic>apple </OptionBasic>
          <OptionBasic>samsung</OptionBasic>
        </SelectBasic>
      </div>
      <div className="filter_by_category mt-5">
        <h1 className="font-semibold">Filter by Price</h1>
        <div className="mt-5">
        <RangeAtoBSlider />
        <div className="flex items-center mt-3 justify-between">
          <p className="border border-gray-300 px-2 rounded-lg"> {min} </p>
          <p className="border border-gray-300 px-2 rounded-lg"> {max} </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FiltersOptions;
