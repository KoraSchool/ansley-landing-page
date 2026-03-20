"use client";

import { useState, useEffect, useRef } from "react";

const CONFIG = {
  calendlyUrl: "#",
  youtubeVideoId: "YOUR_VIDEO_ID",
  email: "hello@getansley.com",
};

const C = {
  accent: "#e94560", accentHover: "#d63a54", accentLight: "#fef2f4", accentBorder: "#fcd5dc",
  bg: "#ffffff", bgOff: "#f7f7fa", dark: "#111118", text: "#1a1a2e",
  muted: "#5c5c6e", mutedLight: "#8a8a9a", border: "#e8e8ee",
  greenBg: "#f0faf4", greenBorder: "#c6ecd4", green: "#1a8a4a", greenDark: "#16643a",
  redBg: "#fef2f4", red: "#c23152",
};

function useReveal() {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return { ref, v };
}
const rs = (v, d = 0) => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)", transition: `all 0.65s cubic-bezier(0.25,0.46,0.45,0.94) ${d}s` });

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [heroVis, setHeroVis] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => { setHeroVis(true); const h = () => setScrollY(window.scrollY); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);

  const r1=useReveal(),r2=useReveal(),r3=useReveal(),r4=useReveal(),r5=useReveal(),r6=useReveal(),r7=useReveal(),r8=useReveal();

  return (<>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Space+Mono:wght@400;700&display=swap');
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
      html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
      body{background:${C.bg};color:${C.text};font-family:'DM Sans',sans-serif;overflow-x:hidden}
      ::selection{background:${C.accent};color:white}a{color:inherit;text-decoration:none}
      .cta-p{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:${C.accent};color:white;padding:18px 40px;font-size:16px;font-weight:600;font-family:'DM Sans',sans-serif;border:none;border-radius:8px;cursor:pointer;text-decoration:none;transition:all .3s ease}
      .cta-p:hover{background:${C.accentHover};transform:translateY(-2px);box-shadow:0 8px 32px rgba(233,69,96,.25)}
      .mono{font-family:'Space Mono',monospace}
      .tag{display:inline-block;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.accent}}
      .sec{max-width:1060px;margin:0 auto;padding:96px 28px}
      .sec-t{max-width:820px;margin:0 auto;padding:96px 28px}
      @media(max-width:900px){.g3{grid-template-columns:1fr!important}.g4{grid-template-columns:1fr 1fr!important}.g2{grid-template-columns:1fr!important}.sec,.sec-t{padding:56px 20px}.hm{display:none!important}.ps-grid{grid-template-columns:1fr!important}}
      @media(max-width:600px){.g4{grid-template-columns:1fr!important}.hero-h{font-size:32px!important}}
    `}</style>

    {/* ═══ NAV ═══ */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrollY>50?"rgba(255,255,255,.97)":"transparent",backdropFilter:scrollY>50?"blur(16px)":"none",borderBottom:scrollY>50?`1px solid ${C.border}`:"1px solid transparent",transition:"all .35s ease",padding:"0 28px"}}>
      <div style={{maxWidth:1060,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:64}}>
        <div style={{display:"flex",alignItems:"center",gap:9}}>
          <div style={{width:30,height:30,background:C.accent,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontWeight:800,fontSize:15}}>A</span></div>
          <span style={{fontWeight:700,fontSize:19,letterSpacing:"-.5px",color:C.dark}}>ansley</span>
        </div>
        <a href={CONFIG.calendlyUrl} className="cta-p" style={{padding:"9px 22px",fontSize:13}}>Get Your Free Assessment</a>
      </div>
    </nav>

    {/* ═══ HERO ═══ */}
    <section style={{paddingTop:120,paddingBottom:0,background:`linear-gradient(180deg, ${C.bgOff} 0%, ${C.bg} 100%)`}}>
      <div style={{maxWidth:1060,margin:"0 auto",padding:"0 28px"}}>

        {/* Two-line headline */}
        <h1 className="hero-h" style={{...rs(heroVis,.15),fontSize:"clamp(34px,5vw,54px)",fontWeight:800,lineHeight:1.12,letterSpacing:"-2px",maxWidth:720,marginBottom:8,color:C.dark}}>
          Stop doing paperwork at 9pm.
        </h1>
        <h1 className="hero-h" style={{...rs(heroVis,.22),fontSize:"clamp(34px,5vw,54px)",fontWeight:800,lineHeight:1.12,letterSpacing:"-2px",maxWidth:720,marginBottom:20,color:C.accent}}>
          Let Ansley run your back office.
        </h1>

        {/* Value prop — what it actually does, plainly */}
        <p style={{...rs(heroVis,.32),fontSize:"clamp(15px,1.6vw,17px)",color:C.muted,lineHeight:1.75,maxWidth:560,marginBottom:12}}>
          Ansley answers your calls, sends quotes in minutes, invoices the day the job&apos;s done, chases payments, dispatches your crews, tracks your margins, and manages your supplies — automatically.
        </p>

        {/* Risk reversal — immediately visible */}
        <p style={{...rs(heroVis,.38),fontSize:14,color:C.green,fontWeight:600,marginBottom:28}}>
          ✓ AI receptionist goes live Day 1 &nbsp;&nbsp; ✓ Month-to-month, cancel anytime &nbsp;&nbsp; ✓ Free assessment to start
        </p>

        {/* CTA */}
        <div style={{...rs(heroVis,.44),marginBottom:20}}>
          <a href={CONFIG.calendlyUrl} className="cta-p" style={{fontSize:16,padding:"18px 40px"}}>
            See What You&apos;re Leaving on the Table →
          </a>
        </div>
        <p style={{...rs(heroVis,.48),fontSize:13,color:C.mutedLight,marginBottom:48}}>
          Free 15-minute call. We show you the numbers. No pitch, no pressure.
        </p>

        {/* Video */}
        <div style={{...rs(heroVis,.55),borderRadius:12,overflow:"hidden",border:`1px solid ${C.border}`,position:"relative",paddingBottom:"56.25%",height:0,background:C.bgOff}}>
          <iframe src={`https://www.youtube.com/embed/${CONFIG.youtubeVideoId}?rel=0&modestbranding=1`} title="Ansley Demo" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowFullScreen style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}}/>
        </div>
      </div>
    </section>

    {/* ═══ TRUST BAR — right after hero ═══ */}
    <section style={{background:C.bg,borderBottom:`1px solid ${C.border}`,padding:"32px 28px"}}>
      <div style={{maxWidth:1060,margin:"0 auto",display:"flex",justifyContent:"center",alignItems:"center",gap:40,flexWrap:"wrap"}}>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {[1,2,3,4,5].map(i=><span key={i} style={{color:"#f59e0b",fontSize:18}}>★</span>)}
          <span style={{fontSize:14,fontWeight:600,color:C.dark,marginLeft:4}}>Rated 5/5 by concrete cutting owners</span>
        </div>
        <div style={{width:1,height:24,background:C.border}} className="hm"/>
        <span style={{fontSize:14,color:C.muted}}>AI receptionist live <strong style={{color:C.dark}}>Day 1</strong></span>
        <div style={{width:1,height:24,background:C.border}} className="hm"/>
        <span style={{fontSize:14,color:C.muted}}>Month-to-month. <strong style={{color:C.dark}}>Cancel anytime.</strong></span>
      </div>
    </section>

    {/* ═══ THE PROBLEM (short, punchy) ═══ */}
    <section ref={r1.ref}>
      <div className="sec-t" style={{textAlign:"center"}}>
        <div style={rs(r1.v)}>
          <p style={{fontSize:17,color:C.dark,fontWeight:600,lineHeight:1.7,maxWidth:620,margin:"0 auto",marginBottom:12}}>
            The average contractor owner spends 15-20 hours a week on admin they can&apos;t bill for.
          </p>
          <p style={{fontSize:15,color:C.muted,lineHeight:1.7,maxWidth:560,margin:"0 auto"}}>
            That&apos;s answering calls, writing quotes, sending invoices, chasing checks, texting crews, and tracking supplies — while also running jobs. <strong style={{color:C.dark}}>That&apos;s half your work week gone to paperwork.</strong>
          </p>
        </div>
      </div>
    </section>

    {/* ═══ STATS ═══ */}
    <section ref={r2.ref} style={{background:C.bgOff,borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
      <div className="sec" style={{paddingTop:48,paddingBottom:48}}>
        <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:14}}>
          {[
            {n:"27%",l:"of contractor calls go unanswered"},
            {n:"85%",l:"of missed callers never try again"},
            {n:"$52K+",l:"lost per year from 2 missed calls/week"},
            {n:"15-20hrs",l:"per week on non-billable admin work"},
          ].map((st,i)=>(
            <div key={i} style={{...rs(r2.v,i*.08),background:C.bg,border:`1px solid ${C.border}`,borderRadius:10,padding:"24px 18px",textAlign:"center"}}>
              <div className="mono" style={{fontSize:"clamp(22px,2.5vw,28px)",fontWeight:700,color:C.accent,marginBottom:4}}>{st.n}</div>
              <div style={{fontSize:13,lineHeight:1.45,color:C.muted}}>{st.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ SOLUTIONS ═══ */}
    <section id="what-we-solve" ref={r3.ref}>
      <div className="sec">
        <div style={{...rs(r3.v),textAlign:"center",marginBottom:48}}>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:700,letterSpacing:"-1.5px",color:C.dark,marginBottom:10}}>
            Ansley gives you those 15-20 hours back.
          </h2>
          <p style={{fontSize:15,color:C.muted,maxWidth:500,margin:"0 auto"}}>
            Here&apos;s everything we take off your plate — automatically, starting Day 1.
          </p>
        </div>

        <div className="g2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:14}}>
          {[
            {icon:"📞",title:"Every call answered, 24/7",desc:"AI receptionist trained on concrete cutting. Picks up day, night, weekends. Captures name, company, specs, address, timeline. Texts you a summary. Transfers emergencies to your cell.",stat:"Catches the 27% of calls that currently go to voicemail"},
            {icon:"⚡",title:"Quotes sent in under 5 minutes",desc:"Your pricing matrix loaded in. Specs come in from a call, text, or email — branded PDF generates. You approve with one tap. GC gets it before he calls anyone else.",stat:"Quotes within 2 hours convert at 4x the rate"},
            {icon:"💰",title:"Invoiced the same hour the job's done",desc:"Operator marks complete on his phone. Invoice generates from the quote and sends to GC billing email immediately. Payment reminders follow at 15, 30, and 45 days.",stat:"Get paid 15-25 days faster without chasing a single check"},
            {icon:"🚛",title:"Crews dispatched with full details + GPS",desc:"Digital job card to every crew member: address with GPS, exact specs, equipment needed, GC contact, special notes. Day-before confirmation text to the GC.",stat:"Eliminates 2-4 wasted trips per month"},
            {icon:"📊",title:"Real job costing on every single job",desc:"Operator logs time and blade changes with one tap. System calculates actual cost vs. quoted price. See which job types and GCs are profitable — and which secretly aren't.",stat:"Owners typically find 3-5 margin points they were missing"},
            {icon:"👥",title:"GC scorecards + automatic re-engagement",desc:"Every GC scored on revenue, payment speed, change orders, and activity. Alerts when someone goes quiet. Check-in texts sent automatically at 30 and 60 days.",stat:"Your top 5 GCs are probably 60%+ of your revenue — now protected"},
            {icon:"🔧",title:"Supply tracking + reorder alerts",desc:"Blade and bit usage logged on every job. System tracks consumption and alerts you before you run low. Know when to reorder and what you're spending per job.",stat:"No more 6am scrambles or delayed jobs"},
            {icon:"🧠",title:"Institutional knowledge captured automatically",desc:"Location, building type, slab specs, rebar, cut times, complications, GC notes — all recorded on every job. After 12 months, a new hire quotes at 90% of your accuracy.",stat:"Makes your business transferable — and sellable"},
          ].map((s,i)=>(
            <div key={i} style={{
              ...rs(r3.v,.05+i*.04),
              background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,padding:"28px 24px",
              boxShadow:"0 1px 6px rgba(0,0,0,.03)",transition:"all .3s ease, opacity .65s ease, transform .65s ease",
            }}
              onMouseEnter={(e)=>{e.currentTarget.style.borderColor=C.accentBorder;e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,.06)"}}
              onMouseLeave={(e)=>{e.currentTarget.style.borderColor=C.border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 1px 6px rgba(0,0,0,.03)"}}
            >
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                <span style={{fontSize:22}}>{s.icon}</span>
                <h3 style={{fontSize:16,fontWeight:700,color:C.dark,letterSpacing:"-.2px"}}>{s.title}</h3>
              </div>
              <p style={{fontSize:14,color:C.muted,lineHeight:1.7,marginBottom:14}}>{s.desc}</p>
              <div className="mono" style={{fontSize:11,color:C.greenDark,fontWeight:600,background:C.greenBg,display:"inline-block",padding:"5px 10px",borderRadius:5,border:`1px solid ${C.greenBorder}`}}>{s.stat}</div>
            </div>
          ))}
        </div>

        <div style={{textAlign:"center",marginTop:44}}>
          <a href={CONFIG.calendlyUrl} className="cta-p">See What You&apos;re Leaving on the Table →</a>
        </div>
      </div>
    </section>

    {/* ═══ COMPARISON TABLE ═══ */}
    <section ref={r4.ref} style={{background:C.bgOff,borderTop:`1px solid ${C.border}`}}>
      <div className="sec-t">
        <div style={{...rs(r4.v),textAlign:"center",marginBottom:40}}>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:700,letterSpacing:"-1.5px",color:C.dark}}>
            Ansley vs. hiring an office person.
          </h2>
        </div>
        <div style={{...rs(r4.v,.12),overflowX:"auto",background:C.bg,borderRadius:12,border:`1px solid ${C.border}`,boxShadow:"0 2px 8px rgba(0,0,0,.03)"}}>
          <table style={{width:"100%",borderCollapse:"collapse"}}>
            <thead><tr>
              <th style={{textAlign:"left",padding:"14px 20px",borderBottom:`2px solid ${C.border}`,color:C.mutedLight,fontWeight:600,fontSize:13}}/>
              <th style={{textAlign:"center",padding:"14px 20px",borderBottom:`2px solid ${C.border}`,color:C.mutedLight,fontWeight:600,fontSize:13}}>Office Hire</th>
              <th style={{textAlign:"center",padding:"14px 20px",borderBottom:`2px solid ${C.accent}`,color:C.accent,fontWeight:700,fontSize:13}}>Ansley</th>
            </tr></thead>
            <tbody>{[
              ["Answers calls at 5am","No","Every time"],
              ["Quotes in minutes","Hours or days","Under 5 min"],
              ["Invoices same day","Usually late","Same hour"],
              ["Chases every payment","Sometimes","Automatically"],
              ["Tracks job profitability","No","Every job"],
              ["Dispatches with specs + GPS","Maybe a text","Full job card"],
              ["Tracks supply usage","No","Every job"],
              ["Alerts when GCs go quiet","Never","30 + 60 days"],
              ["Calls in sick / quits","Yes","Never"],
              ["Ready Day 1","2-4 week ramp","Immediate"],
            ].map((r,i)=><tr key={i} style={{borderBottom:`1px solid ${C.border}`}}>
              <td style={{padding:"12px 20px",fontWeight:500,fontSize:14,color:C.dark}}>{r[0]}</td>
              <td style={{padding:"12px 20px",textAlign:"center",color:C.mutedLight,fontSize:14}}>{r[1]}</td>
              <td style={{padding:"12px 20px",textAlign:"center",fontWeight:600,fontSize:14,color:C.dark}}>{r[2]}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </div>
    </section>

    {/* ═══ TESTIMONIALS ═══ */}
    <section ref={r5.ref} style={{borderTop:`1px solid ${C.border}`}}>
      <div className="sec">
        <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
          {[
            {quote:"I was doing invoices at 10pm every night and still 30 days behind on payments. Now they go out the same hour the job's done. My wife thinks I hired somebody.",name:"Mike Thornton",co:"Thornton Concrete Cutting",loc:"Houston, TX"},
            {quote:"We were missing 5-6 calls a week. That's $15K a month I didn't know I was losing. Ansley catches every single one now and quotes go out the same day.",name:"Dave Ramirez",co:"Ramirez Coring & Sawing",loc:"Phoenix, AZ"},
            {quote:"For the first time in 12 years I know which GCs make me money and which waste my time. Dropped two accounts that were secretly losing me $40K a year.",name:"Jim Kowalski",co:"Precision Cut Concrete",loc:"Chicago, IL"},
          ].map((t,i)=>(
            <div key={i} style={{...rs(r5.v,i*.1),background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,padding:"28px 24px",display:"flex",flexDirection:"column",justifyContent:"space-between",boxShadow:"0 1px 6px rgba(0,0,0,.03)"}}>
              <div>
                <div style={{display:"flex",gap:2,marginBottom:12}}>{[1,2,3,4,5].map(s=><span key={s} style={{color:"#f59e0b",fontSize:14}}>★</span>)}</div>
                <p style={{fontSize:14,color:C.muted,lineHeight:1.75,marginBottom:20}}>&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div>
                <div style={{fontWeight:700,fontSize:14,color:C.dark}}>{t.name}</div>
                <div style={{fontSize:13,color:C.muted}}>{t.co} · {t.loc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ HOW IT STARTS ═══ */}
    <section ref={r6.ref} style={{background:C.bgOff,borderTop:`1px solid ${C.border}`,borderBottom:`1px solid ${C.border}`}}>
      <div className="sec-t" style={{textAlign:"center"}}>
        <div style={rs(r6.v)}>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:700,letterSpacing:"-1.5px",color:C.dark,marginBottom:40}}>
            How it starts.
          </h2>
        </div>
        <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,textAlign:"left"}}>
          {[
            {step:"1",title:"Free assessment call",desc:"15 minutes. We look at your quoting speed, invoicing timeline, and call volume. We come back with a specific dollar number of what you're leaving on the table. If it doesn't impress you, that's the end of it.",highlight:"Free. No commitment."},
            {step:"2",title:"AI receptionist goes live Day 1",desc:"We load your company name, services, and pricing. Your phone starts getting answered 24/7 — that day. Every call captured, every spec logged, every quote started.",highlight:"Live within 24 hours."},
            {step:"3",title:"Full system builds around your business",desc:"We audit your workflow and build out invoicing, dispatch, job costing, GC intelligence, and supply tracking based on what YOUR business actually needs. No cookie-cutter setup.",highlight:"Custom to your operation."},
          ].map((s,i)=>(
            <div key={i} style={{...rs(r6.v,.1+i*.1),background:C.bg,border:`1px solid ${C.border}`,borderRadius:12,padding:"28px 24px",boxShadow:"0 1px 6px rgba(0,0,0,.03)"}}>
              <div className="mono" style={{fontSize:28,fontWeight:700,color:C.accent,opacity:.3,marginBottom:12}}>{s.step}</div>
              <h3 style={{fontSize:17,fontWeight:700,marginBottom:8,color:C.dark}}>{s.title}</h3>
              <p style={{fontSize:14,color:C.muted,lineHeight:1.7,marginBottom:12}}>{s.desc}</p>
              <div className="mono" style={{fontSize:11,fontWeight:700,color:C.green}}>{s.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ PRICING ═══ */}
    <section ref={r7.ref} style={{borderTop:`1px solid ${C.border}`}}>
      <div className="sec">
        <div style={{...rs(r7.v),textAlign:"center",marginBottom:48}}>
          <h2 style={{fontSize:"clamp(26px,3.5vw,38px)",fontWeight:700,letterSpacing:"-1.5px",color:C.dark,marginBottom:10}}>
            Less than an office hire. More than one could ever do.
          </h2>
        </div>
        <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:940,margin:"0 auto"}}>
          {[
            {name:"Solo Operator",price:"$2,500",per:"/mo",rev:"For companies doing $800K – $1.5M",features:["24/7 AI call answering","Auto-quoting engine","Invoice automation","Payment follow-ups","Basic job tracking","Monthly summary report"],hi:false},
            {name:"Growing Fleet",price:"$3,500",per:"/mo",rev:"For companies doing $1.5M – $5M",features:["Everything in Solo Operator","Job costing + margin analysis","GC scorecards + intelligence","Quote win/loss analytics","Crew dispatch system","Detailed monthly analytics"],hi:true},
            {name:"Multi-Crew",price:"$5,000",per:"/mo",rev:"For companies doing $5M – $10M+",features:["Everything in Growing Fleet","Institutional knowledge base","Multi-crew dispatch optimization","Supply tracking + reorder alerts","Custom integrations","Priority support line"],hi:false},
          ].map((tier,i)=>(
            <div key={i} style={{
              ...rs(r7.v,i*.1),
              background:tier.hi?"linear-gradient(165deg,rgba(233,69,96,.06),rgba(233,69,96,.01))":C.bg,
              border:tier.hi?`2px solid ${C.accent}`:`1px solid ${C.border}`,
              borderRadius:14,padding:"36px 28px",display:"flex",flexDirection:"column",
              position:"relative",boxShadow:"0 1px 6px rgba(0,0,0,.03)",
            }}>
              {tier.hi&&<span className="mono" style={{position:"absolute",top:14,right:14,background:C.accent,color:"white",padding:"3px 10px",borderRadius:100,fontSize:10,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"}}>Most Popular</span>}
              <div style={{fontSize:18,fontWeight:700,color:C.dark,marginBottom:3}}>{tier.name}</div>
              <div style={{fontSize:13,color:C.muted,marginBottom:20}}>{tier.rev}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:28}}>
                <span style={{fontSize:40,fontWeight:800,letterSpacing:"-2px",color:C.dark}}>{tier.price}</span>
                <span style={{fontSize:14,color:C.muted}}>{tier.per}</span>
              </div>
              <div style={{flex:1,marginBottom:24}}>
                {tier.features.map((f,j)=>(
                  <div key={j} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",fontSize:14,color:C.text}}>
                    <span style={{color:C.accent,flexShrink:0}}>✓</span>{f}
                  </div>
                ))}
              </div>
              <a href={CONFIG.calendlyUrl} className="cta-p" style={{textAlign:"center",width:"100%",padding:tier.hi?"16px 20px":"14px 20px",fontSize:14,background:tier.hi?C.accent:"transparent",color:tier.hi?"white":C.dark,border:tier.hi?"none":`1.5px solid ${C.border}`}}>Book a Call</a>
            </div>
          ))}
        </div>
        <p style={{textAlign:"center",fontSize:14,color:C.muted,lineHeight:1.7,maxWidth:580,margin:"36px auto 0"}}>
          Every engagement starts with a <strong style={{color:C.dark}}>free Revenue Recovery Assessment</strong> — we show you the exact dollar amount you&#39;re leaving on the table before you commit to anything.
        </p>
      </div>
    </section>

    {/* ═══ FAQ (tight) ═══ */}
    <section id="faq" ref={r8.ref}>
      <div className="sec-t">
        <div style={{...rs(r8.v),textAlign:"center",marginBottom:40}}>
          <h2 style={{fontSize:"clamp(24px,3vw,34px)",fontWeight:700,letterSpacing:"-1px",color:C.dark}}>Common questions.</h2>
        </div>
        {[
          {q:"Will my GCs know they're talking to AI?",a:"No. It uses your company name, knows concrete cutting terminology, and speaks naturally. Most callers have no idea."},
          {q:"Does it work with QuickBooks?",a:"Yes. Invoices sync directly. No double entry."},
          {q:"How much does it cost?",a:"We start with a free Revenue Recovery Assessment where we show you the exact dollar amount you're leaving on the table. Pricing depends on your company size — book a call and we'll walk you through it."},
          {q:"What's the contract?",a:"Month-to-month after setup. 30-day cancellation. We don't lock you in because we don't need to."},
          {q:"Who is this built for?",a:"Concrete cutting and coring companies doing $800K to $10M. If you're a solo operator under $500K, it likely won't pay for itself yet — and we'll tell you that."},
          {q:"What if the AI can't handle a call?",a:"It handles 90%+ of calls. For anything outside its scope, it transfers to your cell or flags it for your review. You never miss anything."},
        ].map((item,i)=>(
          <div key={i} style={{borderBottom:`1px solid ${C.border}`}}>
            <button onClick={()=>setActiveFaq(activeFaq===i?null:i)} style={{width:"100%",background:"transparent",border:"none",color:C.dark,padding:"20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontSize:15,fontWeight:600,textAlign:"left"}}>
              {item.q}
              <span style={{fontSize:16,color:C.mutedLight,transition:"transform .3s",transform:activeFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0,marginLeft:16}}>+</span>
            </button>
            <div style={{maxHeight:activeFaq===i?300:0,overflow:"hidden",transition:"all .35s",paddingBottom:activeFaq===i?20:0}}>
              <p style={{fontSize:14,color:C.muted,lineHeight:1.7}}>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ═══ FINAL CTA ═══ */}
    <section style={{background:C.dark,padding:"80px 28px",textAlign:"center"}}>
      <div style={{maxWidth:640,margin:"0 auto"}}>
        <h2 style={{fontSize:"clamp(28px,4vw,44px)",fontWeight:800,letterSpacing:"-2px",color:"white",marginBottom:16}}>
          Stop doing paperwork at 9pm.
        </h2>
        <p style={{fontSize:17,color:"rgba(255,255,255,.6)",lineHeight:1.7,marginBottom:10}}>
          Let Ansley run your back office. See what you&apos;re leaving on the table.
        </p>
        <p style={{fontSize:14,color:"rgba(255,255,255,.4)",marginBottom:32}}>
          Free assessment. AI receptionist live Day 1. Month-to-month. Cancel anytime.
        </p>
        <a href={CONFIG.calendlyUrl} className="cta-p" style={{fontSize:17,padding:"20px 48px"}}>Get Your Free Assessment →</a>
      </div>
    </section>

    {/* ═══ FOOTER ═══ */}
    <footer style={{borderTop:`1px solid ${C.border}`,padding:"36px 28px",background:C.bg}}>
      <div style={{maxWidth:1060,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <div style={{width:24,height:24,background:C.accent,borderRadius:5,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontWeight:800,fontSize:12}}>A</span></div>
          <span style={{fontWeight:600,fontSize:15,color:C.dark}}>ansley</span>
          <span style={{fontSize:12,color:C.mutedLight,marginLeft:4}}>by Keystone Systems</span>
        </div>
        <div style={{display:"flex",gap:24,alignItems:"center"}}>
          <a href={`mailto:${CONFIG.email}`} style={{fontSize:13,color:C.muted}}>{CONFIG.email}</a>
          <a href={CONFIG.calendlyUrl} style={{fontSize:13,color:C.accent,fontWeight:600}}>Book a Call</a>
        </div>
      </div>
    </footer>
  </>);
}
