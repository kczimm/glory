import { categories, questionsByCategory } from "@/data";
import QuestionCard from "@/components/QuestionCard";

export const metadata = {
  title: "All Questions",
  description:
    "Every question in Glory — a question-driven study of who God is and our relationship with Him, grounded in Scripture.",
};

export default function QuestionsIndex() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <header className="mb-12 max-w-2xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
          The questions
        </p>
        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Every question leads to Scripture
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
          Each question is answered by reading the Word itself — whole chapters,
          and study points grounded in specific verses. And what you read will
          raise the next question.
        </p>
      </header>

      <div className="space-y-14">
        {categories.map((c, ci) => {
          const qs = questionsByCategory(c.slug);
          return (
            <section key={c.slug}>
              <div className="mb-6 flex items-center gap-4">
                <span className="font-display text-2xl italic text-gold">
                  {ci + 1}.
                </span>
                <div>
                  <h2 className="font-display text-2xl font-medium text-ink">
                    {c.title}
                  </h2>
                  <p className="text-[13.5px] text-ink-soft">{c.tagline}</p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {qs.map((q) => (
                  <QuestionCard key={q.slug} question={q} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <p className="mt-16 rounded-2xl border border-line bg-cream/50 p-6 text-center text-[13.5px] leading-relaxed text-ink-soft">
        More questions are being gathered — the Bible always has more to show
        us. If you have a question of your own, bring it: the Word has an
        answer.
      </p>
    </div>
  );
}