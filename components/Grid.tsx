import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-28">
      <BentoGrid className="w-full py-16 md:py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            className={item.className}
            title={item.title}
            description={item.description}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
