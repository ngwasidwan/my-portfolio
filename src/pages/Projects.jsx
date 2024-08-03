
import Images from "../components/Images";

function projects() {
  return (
    <div className="grid md:grid-cols-2 md:gap-10 gap-20 flex-col md:flex-row  my-12 grid-cols-1  pb-5 text-stone-100 relative">
      <Images
        src="image-1.png"
        title="Easy Travels"
        link="easy-travels.vercel.app"
      />
      <Images src="image-2.png" title="Queen Mother's Cuisine" />
      <Images src="image-3.png" title="Entertainment App" />
    </div>
  );
}

export default projects;
