import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="mx-auto max-w-4xl py-10 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-purple">
          Beyond the Resume
        </p>
        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          I build software that makes workflows clearer.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white-200 sm:text-base">
         My work sits somewhere between engineering, storytelling, interface design, and psychology. I enjoy building products that feel clean, emotionally aware, and quietly useful.
        </p>
      </div>
      <BentoGrid className="w-full py-20">
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
