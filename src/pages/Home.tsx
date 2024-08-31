import VoucherItem from "../components/items/VoucherItem";
import Slider from "../components/shared/Slider";

const Home = () => {
  return (
    <div>
      <section>
        {/* <Slider/> */}
      </section>
      <section className="border border-primary-500">
        <VoucherItem/>
        <VoucherItem/>
        <VoucherItem/>
        <VoucherItem/>
      </section>
      <section>course sale</section>
    </div>
  );
};

export default Home;
