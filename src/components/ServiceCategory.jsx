import Reveal from "./Reveal";

/** Service category row used in "Built for Automobile Businesses". */
export default function ServiceCategory({ index, name, body, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="group grid items-baseline gap-2 border-t border-hairline py-7 transition-colors hover:border-primary md:grid-cols-[4rem_18rem_1fr] md:gap-8">
        <span className="eyebrow text-muted-foreground">{index}</span>
        <h3 className="text-xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{body}</p>
      </div>
    </Reveal>
  );
}
