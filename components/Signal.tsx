import {
  currentObsessions,
  currentlyBuilding,
  selectedInterests,
} from "@/data";

const Signal = () => {
  return (
    <section id="now" className="scroll-mt-28 py-16 md:py-24">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl border border-white/[0.12] bg-white/[0.03] p-6 backdrop-blur md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-purple">
            What Interests Me
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            I like software that turns messy systems into clear tools.
          </h2>
          <p className="mt-6 text-sm leading-7 text-white-200 md:text-base">
            I am drawn toward products that organize information, reduce
            repetitive work, and help people move through complicated
            workflows with less friction. Lately that means dashboards,
            knowledge tools, analytics systems, and polished web apps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {selectedInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-white/[0.12] bg-black-200 px-4 py-2 text-sm text-white-200"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-2xl border border-white/[0.12] bg-[#0b0b0b] p-6 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-700">
                  Currently Building
                </p>
                <h3 className="mt-3 text-2xl font-bold">Working notes</h3>
              </div>
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_24px_rgba(52,211,153,0.9)]" />
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {currentlyBuilding.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-white/[0.1] bg-white/[0.03] p-4 transition hover:-translate-y-1 hover:border-purple/50"
                >
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-purple">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white-200">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.03] p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-silver-700">
              Current Obsessions
            </p>
            <div className="mt-5 grid gap-3">
              {currentObsessions.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.08] bg-black/30 p-4"
                >
                  <span className="text-sm font-semibold text-purple">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-6 text-white-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signal;
