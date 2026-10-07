"use client";

import { useMemo, useState } from "react";

const inr=(n:number)=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);

function Chart({monthly,years}:{monthly:number;years:number}){
  const points=useMemo(()=>{
    const rate=.075;
    const values=Array.from({length:13},(_,i)=>{
      const m=Math.round(years*12*i/12);
      return m?monthly*((Math.pow(1+rate/12,m)-1)/(rate/12)):0;
    });
    const max=Math.max(...values,1);
    return values.map((v,i)=>(i/12*100)+","+(92-(v/max)*76)).join(" ");
  },[monthly,years]);
  return <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Illustrative investment growth chart" role="img">
    <defs><linearGradient id="chartFade" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="currentColor" stopOpacity=".22"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></linearGradient></defs>
    <polygon points={"0,100 "+points+" 100,100"} fill="url(#chartFade)"/>
    <polyline points={points} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
  </svg>;
}

export default function Home(){
  const [monthly,setMonthly]=useState(10000);
  const [years,setYears]=useState(10);
  const [open,setOpen]=useState(false);
  const months=years*12;
  const principal=monthly*months;
  const future=useMemo(()=>monthly*((Math.pow(1+.075/12,months)-1)/(.075/12)),[monthly,months]);
  const growth=Math.max(future-principal,0);

  return <main id="top">
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Fermor home">fermor<span>.</span></a>
        <div className="nav-links desktop-nav"><a href="#approach">How it works</a><a href="#simulator">Simulator</a><a href="#decisions">Decisions</a></div>
        <a className="nav-cta" href="#simulator">Try the model <span>↗</span></a>
        <button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
      </nav>
      <div className={"mobile-nav "+(open?"is-open":"")}><a href="#approach" onClick={()=>setOpen(false)}>How it works</a><a href="#simulator" onClick={()=>setOpen(false)}>Simulator</a><a href="#decisions" onClick={()=>setOpen(false)}>Decisions</a></div>
    </header>

    <section className="hero container">
      <div className="hero-copy reveal">
        <div className="eyebrow"><span className="pulse-dot"/> Financial clarity, without the noise</div>
        <h1>Your money,<br/><em>in context.</em></h1>
        <p className="hero-lede">Fermor turns scattered financial numbers into a picture you can actually use — so the next decision feels clearer, not heavier.</p>
        <div className="actions"><a className="button magnetic" href="#simulator">Explore your future <span>↗</span></a><a className="link" href="#approach">See the thinking <span>↓</span></a></div>
        <div className="hero-proof"><span><b>01</b> See</span><span><b>02</b> Understand</span><span><b>03</b> Decide</span></div>
      </div>
      <div className="snapshot-wrap reveal reveal-delay">
        <div className="floating-note note-one">+8.4% this year</div><div className="floating-note note-two">3 goals on track</div>
        <div className="snapshot">
          <div className="topline"><span>YOUR FINANCIAL PICTURE</span><span className="status"><i/> Live view</span></div>
          <div className="worth-row"><div><small>Net worth</small><div className="worth">₹12,48,000</div></div><span className="positive">+8.4%</span></div>
          <div className="chart hero-chart"><Chart monthly={12000} years={10}/></div><div className="axis"><span>Jan</span><span>Now</span><span>Dec</span></div>
          <div className="breakdown"><div><small>Investments</small><strong>₹8.48L</strong><span>68% of total</span></div><div><small>Savings</small><strong>₹2.75L</strong><span>22% of total</span></div><div><small>Goals</small><strong>03 active</strong><span className="green-text">on track</span></div></div>
          <div className="insight"><span>✦</span><div><b>Fermor sees a pattern.</b><br/>Your investments are doing most of the work this year.</div><span className="arrow">↗</span></div>
        </div>
      </div>
    </section>

    <div className="ticker"><div className="ticker-track"><span>Numbers are useful.</span><b>Context makes them actionable.</b><i>✦</i><span>Numbers are useful.</span><b>Context makes them actionable.</b><i>✦</i></div></div>

    <section className="section container" id="approach">
      <div className="section-kicker reveal"><span>01</span> The product idea</div>
      <div className="split-heading reveal"><h2>Most financial apps<br/>show you <em>numbers.</em></h2><p>Fermor's job is more useful: connect those numbers to the choices sitting in front of you.</p></div>
      <div className="steps">
        {[["01","See clearly","Bring spending, savings, investments and goals into one understandable picture."],["02","Understand better","Give every number context — what changed, why it matters, and what it could affect."],["03","Move forward","Compare the paths ahead and make a decision with the trade-off in view."]].map((x,i)=>
          <article className="step reveal" key={x[0]} style={{animationDelay:(i*80)+"ms"}}><span className="step-num">{x[0]}</span><div className="step-index">0{i+1}</div><h3>{x[1]}</h3><p>{x[2]}</p><span className="step-line"/></article>
        )}
      </div>
    </section>

    <section className="context"><div className="container context-grid">
      <div className="reveal"><div className="section-kicker"><span>02</span> One connected picture</div><h2>Your finances don't<br/><em>live in boxes.</em></h2><p className="copy">Spending affects savings. Savings affect goals. Goals affect investing. Fermor makes those connections visible instead of asking you to calculate them yourself.</p><a className="link" href="#simulator">Explore the model <span>↗</span></a></div>
      <div className="orbit reveal reveal-delay" aria-label="Connected financial picture"><div className="orbit-label label-invest">Investments<b>₹8.48L</b></div><div className="orbit-label label-save">Savings<b>₹2.75L</b></div><div className="orbit-label label-goal">Goals<b>03 active</b></div><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><div className="orbit-node node-a"/><div className="orbit-node node-b"/><div className="orbit-node node-c"/><div className="center"><small>NET WORTH</small><strong>₹12.48L</strong><span>+8.4%</span></div></div>
    </div></section>

    <section className="section container simulator-section" id="simulator">
      <div className="section-kicker reveal"><span>03</span> Make the future tangible</div>
      <div className="sim-grid"><div className="sim-intro reveal"><h2>What if you<br/><em>changed the plan?</em></h2><p className="copy">Don't just forecast. Explore. Move the inputs and watch the relationship between contribution, growth and time change instantly.</p><div className="mini-stat"><span>Illustrative return</span><strong>7.5% <small>p.a.</small></strong></div></div>
        <div className="sim-card reveal reveal-delay"><div className="sim-top"><span>FUTURE VALUE MODEL</span><span>Scenario {years}/20</span></div>
          <div className="result"><div><small>Projected value</small><strong key={future}>{inr(future)}</strong></div><span className="gain-pill">+{Math.round((growth/Math.max(principal,1))*100)}% growth</span></div>
          <div className="sim-chart"><Chart monthly={monthly} years={years}/></div>
          <div className="sim-values"><div><small>YOUR CONTRIBUTION</small><strong>{inr(principal)}</strong></div><div><small>ESTIMATED GROWTH</small><strong className="green-text">{inr(growth)}</strong></div></div>
          <div className="slider-group"><label htmlFor="monthly">Monthly investment <output>{inr(monthly)}</output></label><input id="monthly" type="range" min="5000" max="50000" step="1000" value={monthly} onChange={e=>setMonthly(Number(e.target.value))}/><div className="range-ends"><span>₹5k</span><span>₹50k</span></div></div>
          <div className="slider-group"><label htmlFor="years">Time horizon <output>{years} years</output></label><input id="years" type="range" min="1" max="20" value={years} onChange={e=>setYears(Number(e.target.value))}/><div className="range-ends"><span>1 year</span><span>20 years</span></div></div>
        </div>
      </div>
    </section>

    <section className="decision" id="decisions"><div className="decision-grid container">
      <div className="reveal"><div className="section-kicker light"><span>04</span> Decision, not just data</div><h2>Can I afford<br/><em>a ₹12L car?</em></h2><p className="copy">A useful financial product should surface the trade-off, not hide it behind another calculator.</p></div>
      <div className="decision-card reveal reveal-delay"><div className="decision-card-top"><span>FERMOR INSIGHT</span><span>Scenario 04</span></div><div className="insight-mark">✦</div><h3>You can — but it would move your ₹20L goal approximately 8 months further away.</h3><p>That is the difference between seeing an EMI and understanding its place in your wider financial picture.</p><div className="decision-rows"><div><span>Monthly impact</span><strong>₹8,400</strong></div><div><span>Goal impact</span><strong>+8 months</strong></div></div><div className="decision-footer"><span>Based on current commitments</span><span>View trade-off ↗</span></div></div>
    </div></section>

    <section className="section closing" id="start"><div className="closing-orb"/><div className="container reveal"><div className="section-kicker"><span>05</span> A clearer next step</div><h2>Know your money.<br/><em>Make your move.</em></h2><p className="copy">Finance feels better when the numbers have context.</p><a className="button magnetic" href="#top">Start with Fermor <span>↗</span></a></div></section>
    <footer className="footer container"><span className="wordmark">fermor<span>.</span></span><span>Product design assignment · 2026</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}
