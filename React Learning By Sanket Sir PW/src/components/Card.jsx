import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

function Card({title="Demo Title",desc="Demo Title",img="https://img.magnific.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80"}) {
  return (
    <div className="flex flex-col border items-center gap-1 pt-10 max-h-250 min-h-140 max-w-110">
      <Title title={title} />
      <Description desc={desc}/>
      <Image img={img}/>
    </div>
  );
}

export default Card
