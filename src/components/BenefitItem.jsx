import Reveal from "./Reveal";

/** Compact benefit entry — rule-separated, not a card grid. */
export default function BenefitItem({ icon: Icon, title, body, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-hairline pt-6">
        {Icon ? <Icon size={20} className="text-primary" aria-hidden="true" /> : null}
        <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </Reveal>
  );
}
