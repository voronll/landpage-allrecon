export default function Home() {
  return (
    <div className="py-10 space-y-24">
      <section id="inicio" className="min-h-[60vh]">
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900">
          AllRecon
        </h1>
        <p className="mt-4 max-w-2xl text-slate-700">
          Landing page para apresentar visão, dor, produto e roadmap.
        </p>
      </section>

      <section id="dor" className="min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-slate-900">A dor</h2>
      </section>

      <section id="produto" className="min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-slate-900">Produto</h2>
      </section>

      <section id="historia" className="min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-slate-900">História</h2>
      </section>

      <section id="roadmap" className="min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-slate-900">Roadmap</h2>
      </section>

      <section id="contato" className="min-h-[40vh]">
        <h2 className="text-2xl font-semibold text-slate-900">Contato</h2>
      </section>
    </div>
  );
}
