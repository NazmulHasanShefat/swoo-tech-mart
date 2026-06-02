import WishItem from "./WishItem";

export default function page() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-5 px-5 ">
      <h2 className="font-bold text-2xl lg:text-3xl">WishList</h2>
      <div className="w-full mt-5">
        <WishItem />
      </div>
    </section>
  );
}