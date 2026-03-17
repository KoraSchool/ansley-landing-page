// ═══════════════════════════════════════════════════════════
// ANSLEY LANDING PAGE — Next.js App Router
// Save as: app/page.jsx
// "use client" required for useState/useEffect
// Fonts: DM Sans + Space Mono via Google Fonts CSS import
// No external dependencies beyond React/Next.js
// ═══════════════════════════════════════════════════════════
// SEE THE FULL FILE IN THE DOCX VOICE/SMS PROMPTS DOCUMENT
// This is a reference stub — the full 600+ line React component
// was delivered in the conversation above. Copy the full component
// from the chat into this file.
//
// TO DEPLOY:
// 1. npx create-next-app@latest ansley-landing
// 2. Replace app/page.jsx with this file
// 3. Replace app/globals.css with minimal reset
// 4. Replace CONFIG values (Calendly URL, demo phone, email)
// 5. vercel deploy
// ═══════════════════════════════════════════════════════════

"use client";

import { useState, useEffect, useRef } from "react";

const CONFIG = {
  calendlyUrl: "https://calendly.com/your-link",
  demoPhone: "(555) 123-4567",
  demoPhoneTel: "tel:+15551234567",
  email: "hello@getansley.com",
};

const C = {
  accent: "#e94560", accentHover: "#d63a54", dark: "#08080d", nearBlack: "#0e0e15",
  card: "#14141e", light: "#f0eff4", muted: "#7c7c8e", mutedLight: "#a0a0b0",
  border: "rgba(255,255,255,0.06)", borderHover: "rgba(233,69,96,0.25)",
  accentGlow: "rgba(233,69,96,0.15)",
};

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const rs = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(30px)",
  transition: `all 0.7s cubic-bezier(0.25,0.46,0.45,0.94) ${delay}s`,
});

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [heroVis, setHeroVis] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => { setHeroVis(true); const h = () => setScrollY(window.scrollY); window.addEventListener("scroll", h, { passive: true }); return () => window.removeEventListener("scroll", h); }, []);

  const s1=useReveal(), s2=useReveal(), s3=useReveal(), s4=useReveal(), s5=useReveal(), s6=useReveal(), s7=useReveal(), s8=useReveal(), s9=useReveal();

  return (<>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Space+Mono:wght@400;700&display=swap');
      *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}body{background:${C.dark};color:${C.light};font-family:'DM Sans',sans-serif;overflow-x:hidden}::selection{background:${C.accent};color:white}a{color:inherit;text-decoration:none}
      .cta-p{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:${C.accent};color:white;padding:18px 40px;font-size:16px;font-weight:600;font-family:'DM Sans',sans-serif;border:none;border-radius:8px;cursor:pointer;text-decoration:none;transition:all .3s ease}.cta-p:hover{background:${C.accentHover};transform:translateY(-2px);box-shadow:0 12px 40px ${C.accentGlow}}
      .cta-s{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:transparent;color:${C.light};padding:17px 36px;font-size:15px;font-weight:500;font-family:'DM Sans',sans-serif;border:1.5px solid rgba(255,255,255,.15);border-radius:8px;cursor:pointer;text-decoration:none;transition:all .3s ease}.cta-s:hover{border-color:${C.accent};color:${C.accent}}
      .mono{font-family:'Space Mono',monospace}.tag{display:inline-block;font-family:'Space Mono',monospace;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${C.accent}}
      .sec{max-width:1140px;margin:0 auto;padding:120px 28px}.sec-t{max-width:860px;margin:0 auto;padding:120px 28px}
      @media(max-width:900px){.g3{grid-template-columns:1fr!important}.g4{grid-template-columns:1fr 1fr!important}.g2{grid-template-columns:1fr!important}.sec,.sec-t{padding:72px 20px}.hm{display:none!important}}
      @media(max-width:600px){.g4{grid-template-columns:1fr!important}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
    `}</style>

    {/* NAV */}
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,background:scrollY>60?"rgba(8,8,13,.92)":"transparent",backdropFilter:scrollY>60?"blur(24px)":"none",borderBottom:scrollY>60?`1px solid ${C.border}`:"1px solid transparent",transition:"all .4s ease",padding:"0 28px"}}>
      <div style={{maxWidth:1140,margin:"0 auto",display:"flex",justifyContent:"space-between",alignItems:"center",height:72}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:34,height:34,background:`linear-gradient(135deg,${C.accent},#c23152)`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontWeight:800,fontSize:17}}>A</span></div>
          <span style={{fontWeight:700,fontSize:21,letterSpacing:"-.5px"}}>ansley</span>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:36}}>
          {["How It Works","Features","Pricing","FAQ"].map(t=><a key={t} href={`#${t.toLowerCase().replace(/\s/g,"-")}`} className="hm" style={{color:C.muted,fontSize:14,fontWeight:500,transition:"color .2s"}}>{t}</a>)}
          <a href={CONFIG.calendlyUrl} className="cta-p" style={{padding:"10px 24px",fontSize:13}}>Book a Call</a>
        </div>
      </div>
    </nav>

    {/* HERO */}
    <section style={{paddingTop:160,paddingBottom:40,position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-200,left:"50%",transform:"translateX(-50%)",width:1000,height:800,background:`radial-gradient(ellipse 60% 50%,${C.accentGlow} 0%,transparent 70%)`,pointerEvents:"none",opacity:.6}}/>
      <div style={{maxWidth:1140,margin:"0 auto",padding:"0 28px",position:"relative"}}>
        <div style={rs(heroVis,.1)}><span className="mono" style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(233,69,96,.08)",color:C.accent,padding:"7px 16px",borderRadius:100,fontSize:11,fontWeight:700,border:"1px solid rgba(233,69,96,.15)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:32}}><span style={{width:6,height:6,background:C.accent,borderRadius:"50%",animation:"pulse 2s infinite"}}/>Built exclusively for concrete cutting companies</span></div>
        <h1 style={{...rs(heroVis,.2),fontSize:"clamp(38px,5.8vw,68px)",fontWeight:800,lineHeight:1.05,letterSpacing:"-2.5px",maxWidth:820,marginBottom:28}}>Your back office runs itself.<br/><span style={{color:C.accent}}>You run your crews.</span></h1>
        <p style={{...rs(heroVis,.35),fontSize:"clamp(16px,1.8vw,19px)",color:C.muted,lineHeight:1.7,maxWidth:580,marginBottom:44}}>Ansley is an AI operating system that answers your calls, sends quotes in 60 seconds, invoices automatically, follows up on payments, and tells you which jobs and GCs actually make you money.</p>
        <div style={{...rs(heroVis,.5),display:"flex",gap:16,flexWrap:"wrap",marginBottom:56}}>
          <a href={CONFIG.calendlyUrl} className="cta-p" style={{fontSize:17,padding:"20px 44px"}}>Book Your Free Assessment →</a>
          <a href={CONFIG.demoPhoneTel} className="cta-s">📞 Call the Demo Line</a>
        </div>
        <div style={{...rs(heroVis,.65),display:"flex",alignItems:"center",gap:12}}>
          <div style={{display:"flex"}}>{[0,1,2,3,4].map(i=><div key={i} style={{width:36,height:36,borderRadius:"50%",background:`linear-gradient(135deg,hsl(${210+i*25},35%,${30+i*6}%),hsl(${210+i*25},35%,${40+i*6}%))`,border:`2.5px solid ${C.dark}`,marginLeft:i>0?-10:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:"white",zIndex:5-i}}>{"DMJRK"[i]}</div>)}</div>
          <div><div style={{fontSize:14,fontWeight:600}}>Trusted by cutting companies across the US</div><div style={{fontSize:12,color:C.muted}}>From 2-man crews to multi-state operations</div></div>
        </div>
      </div>
    </section>

    {/* DEMO */}
    <section style={{paddingBottom:40}}><div style={{maxWidth:1140,margin:"0 auto",padding:"0 28px"}}>
      <div style={{background:`linear-gradient(135deg,${C.card},${C.nearBlack})`,border:`1px solid ${C.border}`,borderRadius:16,padding:"48px 48px 0",overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"end"}} className="g2">
          <div style={{paddingBottom:48}}>
            <span className="tag" style={{marginBottom:16,display:"block"}}>Live Demo</span>
            <h3 style={{fontSize:28,fontWeight:700,letterSpacing:"-.5px",marginBottom:12}}>Hear it in action.</h3>
            <p style={{fontSize:15,color:C.muted,lineHeight:1.7,marginBottom:24}}>Call our demo line right now. A realistic AI receptionist will answer as a concrete cutting company, capture your job specs, and generate a quote — all in under 2 minutes.</p>
            <div style={{background:"rgba(233,69,96,.08)",border:"1px solid rgba(233,69,96,.15)",borderRadius:10,padding:"20px 24px",display:"flex",alignItems:"center",gap:16}}>
              <div style={{width:48,height:48,borderRadius:"50%",background:C.accent,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>📞</div>
              <div><div style={{fontSize:13,color:C.muted,marginBottom:2}}>Call the demo line</div><a href={CONFIG.demoPhoneTel} style={{fontSize:22,fontWeight:700,letterSpacing:"-.5px"}}>{CONFIG.demoPhone}</a></div>
            </div>
          </div>
          <div style={{background:`linear-gradient(180deg,rgba(233,69,96,.06),transparent)`,borderRadius:"16px 16px 0 0",border:`1px solid ${C.border}`,borderBottom:"none",padding:"32px 28px",minHeight:320,display:"flex",flexDirection:"column",gap:16}}>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}><div style={{width:10,height:10,borderRadius:"50%",background:"#4ade80"}}/><span style={{fontSize:13,color:C.mutedLight}}>Ansley AI — Active</span></div>
            {[{f:"ai",t:"Thanks for calling Precision Concrete Cutting, this is Sarah. How can I help you?"},{f:"c",t:"Hey, I need 6 cores drilled. 4-inch diameter, about 8 inches deep. It's reinforced."},{f:"ai",t:"Got it — 6 cores, 4-inch, 8 inches deep in reinforced concrete. What's the job site address?"},{f:"c",t:"1400 Oak Street, Building C."},{f:"ai",t:"Based on those specs, you're looking at a ballpark of $1,800 to $2,100. I can have a firm quote to you in about 10 minutes. Best email?"}].map((m,i)=><div key={i} style={{alignSelf:m.f==="c"?"flex-end":"flex-start",background:m.f==="c"?"rgba(233,69,96,.15)":"rgba(255,255,255,.05)",borderRadius:m.f==="c"?"12px 12px 4px 12px":"12px 12px 12px 4px",padding:"10px 14px",maxWidth:"85%",fontSize:13,lineHeight:1.5,color:m.f==="c"?C.light:C.mutedLight}}>{m.t}</div>)}
          </div>
        </div>
      </div>
    </div></section>

    {/* STATS */}
    <section ref={s1.ref} style={{background:C.nearBlack}}><div className="sec" style={{paddingTop:80,paddingBottom:80}}>
      <div className="g4" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
        {[{n:"27%",l:"of contractor calls go unanswered",s:"Invoca Research"},{n:"85%",l:"of missed callers never try again",s:"Industry Data"},{n:"$126K",l:"avg annual revenue lost to missed calls",s:"SMB Study"},{n:"70%",l:"of contractors have 30+ day payment delays",s:"KYRO AI"}].map((st,i)=><div key={i} style={{...rs(s1.visible,i*.1),background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"32px 24px",textAlign:"center"}}><div className="mono" style={{fontSize:"clamp(28px,3.5vw,40px)",fontWeight:700,color:C.accent,marginBottom:8}}>{st.n}</div><div style={{fontSize:14,lineHeight:1.5,marginBottom:6}}>{st.l}</div><div style={{fontSize:11,color:C.muted}}>{st.s}</div></div>)}
      </div>
    </div></section>

    {/* PROBLEM */}
    <section ref={s2.ref}><div className="sec-t">
      <div style={rs(s2.visible)}>
        <span className="tag">The Problem</span>
        <h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14,marginBottom:20}}>You&apos;re working 14-hour days and still can&apos;t keep up.</h2>
        <p style={{fontSize:17,color:C.muted,lineHeight:1.75,marginBottom:48,maxWidth:620}}>You wake up at 5:30am to check voicemails. You quote from the front seat of your truck. You invoice at 9pm. And every week, jobs walk because you couldn&apos;t pick up the phone while running a saw.</p>
      </div>
      {[{i:"📞",t:"Missed calls = missed revenue",d:"A GC calls with a $5K job. You're on a site. Call goes to voicemail. 85% never leave a message. GC calls your competitor.",s:"$52K+/yr from just 2 missed calls/week"},{i:"⏱️",t:"Slow quotes kill your win rate",d:"You scribble specs on a napkin, send a quote 2 days later. The GC already awarded the job to whoever responded first.",s:"Quotes within 2hrs convert at 4x the rate"},{i:"💸",t:"Late invoices strangle cash flow",d:"Jobs completed last week aren't invoiced yet. Net-30 from invoice date means 45-60 days to payment. You're financing GC projects with your cash.",s:"70% of contractors have payment delays 30+ days"},{i:"🧠",t:"Everything lives in your head",d:"Pricing, GC relationships, which buildings are post-tension, who pays slow — none documented. If you're out a week, business stops.",s:"Only 30% of contractors know their overhead numbers"},{i:"📋",t:"No idea which jobs make money",d:"You quote $4,500, crew does the work, nobody tracks blade consumption or overtime. 6% avg margin means a 6% error wipes all profit.",s:"81% don't know accurate labor costs"},{i:"👻",t:"Good GCs go quiet unnoticed",d:"A GC who called monthly hasn't called in 60 days. You don't notice. By the time you do, he's used your competitor for 3 months.",s:"Top 5 GCs likely = 60%+ of your revenue"}].map((p,i)=><div key={i} style={{...rs(s2.visible,.1+i*.08),display:"flex",gap:20,padding:"24px 0",borderBottom:i<5?`1px solid ${C.border}`:"none"}}><span style={{fontSize:28,flexShrink:0,marginTop:2}}>{p.i}</span><div><div style={{fontWeight:600,fontSize:17,marginBottom:6}}>{p.t}</div><div style={{fontSize:15,color:C.muted,lineHeight:1.7,marginBottom:8}}>{p.d}</div><div className="mono" style={{fontSize:12,color:C.accent,fontWeight:600}}>{p.s}</div></div></div>)}
    </div></section>

    {/* HOW IT WORKS */}
    <section id="how-it-works" ref={s3.ref} style={{background:C.nearBlack}}><div className="sec">
      <div style={{...rs(s3.visible),textAlign:"center",marginBottom:64}}><span className="tag">How It Works</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14}}>From phone call to payment. Fully automated.</h2></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:20}} className="g2">
        {[{s:"01",t:"Call comes in",d:"GC calls at 6am, 2pm, or midnight. Ansley answers, captures name, company, specs — diameter, depth, material, location, timeline.",c:C.accent},{s:"02",t:"Quote generates instantly",d:"Your pricing matrix built in. Specs in, branded PDF out. You approve with one tap. Quote hits GC's inbox in under 5 minutes.",c:"#4ade80"},{s:"03",t:"Job scheduled & dispatched",d:"GC confirms → job auto-populates schedule → crew gets digital job card with address, specs, equipment, GPS → GC gets day-before confirmation.",c:"#60a5fa"},{s:"04",t:"Job completes → auto-invoice",d:"Operator marks done, logs time + blade usage. Invoice generates from quote, sends to GC billing email within the hour. Reminders at 15/30/45 days.",c:"#c084fc"},{s:"05",t:"Intelligence builds",d:"Every job feeds scorecards: actual vs quoted cost, GC profitability, win/loss analytics, margin trends. After 90 days, you see your business clearly.",c:"#fbbf24"},{s:"06",t:"Relationships compound",d:"Auto review requests after every job. GC re-engagement when someone goes quiet. Knowledge captured on every cut. Business gets smarter monthly.",c:"#f472b6"}].map((step,i)=><div key={i} style={{...rs(s3.visible,i*.08),background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"36px 32px"}}><div className="mono" style={{fontSize:13,fontWeight:700,color:step.c,marginBottom:14}}>{step.s}</div><h3 style={{fontSize:20,fontWeight:700,marginBottom:10}}>{step.t}</h3><p style={{fontSize:14,color:C.muted,lineHeight:1.7}}>{step.d}</p></div>)}
      </div>
    </div></section>

    {/* FEATURES */}
    <section id="features" ref={s4.ref}><div className="sec">
      <div style={{...rs(s4.visible),textAlign:"center",marginBottom:64}}><span className="tag">Features</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14,marginBottom:16}}>Everything your office manager would do. Without the office manager.</h2></div>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {[{g:"Never miss a job",t:"24/7 AI Call Answering",d:"Trained on concrete cutting terminology. Captures specs for core drilling, flat sawing, wall sawing, wire sawing, and GPR scanning. Transfers emergencies instantly."},{g:"Quotes in minutes",t:"Auto-Quoting Engine",d:"Your pricing matrix loaded in. Diameter × depth × material × access = instant branded PDF. You approve with one tap from your phone."},{g:"Get paid faster",t:"Auto-Invoicing + AR",d:"Operator marks done → invoice generates → sends to GC → automated follow-up at 15, 30, 45 days. QuickBooks integration. Never touch an invoice again."},{g:"Stop flying blind",t:"Job Costing",d:"Actual time, blade usage, complications logged per job. Quoted vs actual cost. Which job types and GCs are profitable vs losing you money."},{g:"Protect relationships",t:"GC Intelligence",d:"Revenue, payment speed, change orders, churn risk per GC. Alerts when good GCs go quiet. Auto re-engagement at 30 and 60 days."},{g:"Win more work",t:"Quote Analytics",d:"Track every quote: sent, opened, won, lost. Response time impact on win rate. Auto follow-ups at 24h, 48h, 7d."},{g:"Eliminate errors",t:"Crew Dispatch",d:"Digital job cards: address + GPS, specs, equipment list, GC contact. Day-before GC confirmation. No wrong-bit, wrong-site mistakes."},{g:"Make it sellable",t:"Knowledge Base",d:"Every job captures location, building type, slab composition, rebar, complications, GC behavior. New estimator quotes at 90% accuracy."},{g:"Outrank competitors",t:"Review Automation",d:"Automated text 24h after every successful job. 50-100 new reviews/year. Local SEO compounds. 12 reviews loses to 120."}].map((f,i)=><div key={i} style={{...rs(s4.visible,i*.06),background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"32px 28px"}}><span className="tag" style={{marginBottom:14,display:"block"}}>{f.g}</span><h3 style={{fontSize:18,fontWeight:700,marginBottom:10}}>{f.t}</h3><p style={{fontSize:13.5,color:C.muted,lineHeight:1.7}}>{f.d}</p></div>)}
      </div>
    </div></section>

    {/* COMPARISON */}
    <section ref={s5.ref} style={{background:C.nearBlack}}><div className="sec-t">
      <div style={rs(s5.visible)}><span className="tag">The Comparison</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14,marginBottom:48}}>Better than the hire you can&apos;t find.</h2></div>
      <div style={{...rs(s5.visible,.15),overflowX:"auto"}}>
        <table style={{width:"100%",borderCollapse:"collapse"}}>
          <thead><tr><th style={{textAlign:"left",padding:"16px 20px",borderBottom:"2px solid rgba(255,255,255,.1)",color:C.muted,fontWeight:500,fontSize:14}}/><th style={{textAlign:"center",padding:"16px 20px",borderBottom:"2px solid rgba(255,255,255,.1)",color:C.muted,fontWeight:500,fontSize:14}}>Office Hire</th><th style={{textAlign:"center",padding:"16px 20px",borderBottom:`2px solid ${C.accent}`,color:C.accent,fontWeight:700,fontSize:14}}>Ansley</th></tr></thead>
          <tbody>{[["Monthly cost","$4,500-$6,500 + benefits","$2,500-$5,000"],["Answers at 5am","No","Every time"],["60-second quotes","No","Yes"],["Auto-invoices on completion","No","Yes"],["Follows up on payments","Sometimes","Always"],["Tracks job profitability","No","Every job"],["Calls in sick","Yes","Never"],["Quits after 4 months","Often","Never"],["Gets smarter monthly","Plateau","Continuously"],["Ready Day 1","2-4 week ramp","Immediate"],["Nights & weekends","Overtime","Included"],["Knows GC payment history","Not tracking","Automatically"]].map((r,i)=><tr key={i} style={{borderBottom:`1px solid ${C.border}`}}><td style={{padding:"14px 20px",fontWeight:500,fontSize:14}}>{r[0]}</td><td style={{padding:"14px 20px",textAlign:"center",color:C.muted,fontSize:14}}>{r[1]}</td><td style={{padding:"14px 20px",textAlign:"center",fontWeight:600,fontSize:14}}>{r[2]}</td></tr>)}</tbody>
        </table>
      </div>
    </div></section>

    {/* ROI */}
    <section ref={s6.ref}><div className="sec-t">
      <div style={rs(s6.visible)}><span className="tag">The ROI</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14,marginBottom:48}}>One recovered job pays for the whole month.</h2></div>
      <div className="g2" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:16,marginBottom:48}}>
        {[{l:"Recovered missed-call revenue",v:"$25K–$50K"},{l:"Faster quoting = higher win rate",v:"$30K–$75K"},{l:"Margin improvement from job costing",v:"$45K–$75K"},{l:"Accelerated cash flow",v:"$15K–$30K"},{l:"GC retention",v:"$20K–$40K"},{l:"Eliminated dispatch rework",v:"$12K–$24K"}].map((r,i)=><div key={i} style={{...rs(s6.visible,.1+i*.05),background:C.card,border:`1px solid ${C.border}`,borderRadius:10,padding:"24px 28px",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontSize:14,color:C.mutedLight,maxWidth:"60%"}}>{r.l}</span><span className="mono" style={{fontSize:15,fontWeight:700,color:C.accent}}>{r.v}</span></div>)}
      </div>
      <div style={{...rs(s6.visible,.4),background:"linear-gradient(135deg,rgba(233,69,96,.1),rgba(233,69,96,.03))",border:"2px solid rgba(233,69,96,.2)",borderRadius:12,padding:"36px 40px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:20}}>
        <div><div style={{fontSize:14,color:C.muted,marginBottom:4}}>Conservative annual value</div><div className="mono" style={{fontSize:36,fontWeight:700,color:C.accent}}>$147K–$294K</div></div>
        <div style={{textAlign:"right"}}><div style={{fontSize:14,color:C.muted,marginBottom:4}}>Annual cost at $3,500/mo</div><div className="mono" style={{fontSize:36,fontWeight:700}}>$42K</div><div className="mono" style={{fontSize:14,color:"#4ade80",fontWeight:700}}>3.5x–7x ROI</div></div>
      </div>
    </div></section>

    {/* WHO IT'S FOR */}
    <section ref={s7.ref} style={{background:C.nearBlack}}><div className="sec-t">
      <div style={rs(s7.visible)}><span className="tag">Who It&apos;s For</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14,marginBottom:48}}>Built for concrete cutting companies doing $800K–$3M+.</h2></div>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
        {[{e:"🔴",t:"You're a fit if...",items:["You run 1-3 crews and you're the only estimator","You miss calls weekly because you're cutting","Quotes take days, invoices take weeks","You can't hire or keep office help","You want to grow but can't escape the day-to-day"]},{e:"🟢",t:"You'll love this if...",items:["Core drilling, flat/wall/wire sawing, or GPR","70%+ repeat GC work","You know you're leaving money on the table","Tried generic software, stopped using it","Want to eventually sell or step back"]},{e:"⚪",t:"Not a fit if...",items:["Solo operator under $500K revenue","Already have office manager + systems","General contractor, not specialty cutting","Prefer pen-and-paper permanently","Looking for cheapest, not best"]}].map((col,i)=><div key={i} style={{...rs(s7.visible,i*.1),background:C.card,border:`1px solid ${C.border}`,borderRadius:12,padding:"32px 28px"}}><div style={{fontSize:24,marginBottom:12}}>{col.e}</div><h3 style={{fontSize:18,fontWeight:700,marginBottom:20}}>{col.t}</h3>{col.items.map((it,j)=><div key={j} style={{display:"flex",gap:10,padding:"8px 0",fontSize:13.5,color:C.mutedLight,lineHeight:1.5}}><span style={{color:C.accent,flexShrink:0}}>—</span>{it}</div>)}</div>)}
      </div>
    </div></section>

    {/* PRICING */}
    <section id="pricing" ref={s8.ref}><div className="sec">
      <div style={{...rs(s8.visible),textAlign:"center",marginBottom:56}}><span className="tag">Pricing</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14}}>Less than an office hire. More than one could ever do.</h2></div>
      <div className="g3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:980,margin:"0 auto"}}>
        {[{n:"Solo Operator",p:"$2,500",r:"$800K–$1.5M revenue",f:["24/7 AI call answering","Auto-quoting engine","Invoice automation","Payment follow-ups","Basic job tracking","Monthly summary"],h:false},{n:"Growing Fleet",p:"$3,500",r:"$1.5M–$3M revenue",f:["Everything in Solo Operator","Job costing + margins","GC scorecards + intelligence","Quote win/loss analytics","Crew dispatch system","Detailed monthly analytics"],h:true},{n:"Multi-Crew",p:"$5,000",r:"$3M+ revenue",f:["Everything in Growing Fleet","Institutional knowledge base","Multi-crew optimization","Custom integrations","Advisory reports","Priority support"],h:false}].map((tier,i)=><div key={i} style={{...rs(s8.visible,i*.1),background:tier.h?"linear-gradient(165deg,rgba(233,69,96,.1),rgba(233,69,96,.02))":C.card,border:tier.h?`2px solid ${C.accent}`:`1px solid ${C.border}`,borderRadius:14,padding:"40px 32px",display:"flex",flexDirection:"column",position:"relative"}}>
          {tier.h&&<span className="mono" style={{position:"absolute",top:16,right:16,background:C.accent,color:"white",padding:"4px 12px",borderRadius:100,fontSize:10,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"}}>Most Popular</span>}
          <div style={{fontSize:20,fontWeight:700,marginBottom:4}}>{tier.n}</div>
          <div style={{fontSize:13,color:C.muted,marginBottom:24}}>{tier.r}</div>
          <div style={{display:"flex",alignItems:"baseline",gap:4,marginBottom:32}}><span style={{fontSize:44,fontWeight:800,letterSpacing:"-2px"}}>{tier.p}</span><span style={{fontSize:15,color:C.muted}}>/mo</span></div>
          <div style={{flex:1,marginBottom:28}}>{tier.f.map((f,j)=><div key={j} style={{display:"flex",alignItems:"center",gap:10,padding:"9px 0",fontSize:14}}><span style={{color:C.accent}}>✓</span>{f}</div>)}</div>
          <a href={CONFIG.calendlyUrl} className={tier.h?"cta-p":"cta-s"} style={{textAlign:"center",width:"100%"}}>Book a Call</a>
        </div>)}
      </div>
      <p style={{...rs(s8.visible,.4),textAlign:"center",fontSize:15,color:C.muted,lineHeight:1.7,maxWidth:640,margin:"40px auto 0"}}>Every engagement starts with a <strong style={{color:C.light}}>Revenue Recovery Assessment ($5,000)</strong> — we show you the exact dollar amount you&apos;re leaving on the table. If the number doesn&apos;t make your jaw drop, you don&apos;t owe us a thing.</p>
    </div></section>

    {/* FAQ */}
    <section id="faq" ref={s9.ref} style={{background:C.nearBlack}}><div className="sec-t">
      <div style={{...rs(s9.visible),textAlign:"center",marginBottom:56}}><span className="tag">FAQ</span><h2 style={{fontSize:"clamp(28px,3.8vw,44px)",fontWeight:700,letterSpacing:"-1.5px",marginTop:14}}>Questions we get from owners.</h2></div>
      {[{q:"Will my GCs know they're talking to AI?",a:"No. The AI uses your company name, knows your services, and speaks naturally. Most callers have no idea."},{q:"What if a caller has a question the AI can't answer?",a:"It handles 90%+ of calls. For anything outside scope, it says 'Let me have [owner] follow up' and transfers or flags the call."},{q:"How long does setup take?",a:"AI receptionist live within 7-10 days. Full system (invoicing, job costing, GC intelligence) rolls out over 6-8 weeks in phases."},{q:"Does it integrate with QuickBooks?",a:"Yes. Invoices sync directly. No double entry. Your bookkeeper sees everything where they always have."},{q:"What's the contract length?",a:"Month-to-month after implementation. 30-day cancellation. We don't lock you in because we don't have to."},{q:"Can I try it first?",a:"Call our demo line right now. For your business specifically, we start with a Revenue Recovery Assessment — see the data before committing."},{q:"What if I only have 1-2 employees?",a:"If you're under $500K revenue, the investment likely won't pay for itself yet. We're honest about that. Sweet spot is 5-15 employees, $800K-$3M."},{q:"Is my data secure?",a:"Encrypted in transit and at rest. Your pricing, clients, job history — all yours. Never shared with competitors or third parties."}].map((item,i)=><div key={i} style={{...rs(s9.visible,i*.04),borderBottom:`1px solid ${C.border}`}}>
        <button onClick={()=>setActiveFaq(activeFaq===i?null:i)} style={{width:"100%",background:"transparent",border:"none",color:C.light,padding:"24px 0",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"'DM Sans',sans-serif",fontSize:16,fontWeight:600,textAlign:"left"}}>{item.q}<span style={{fontSize:20,color:C.muted,transition:"transform .3s",transform:activeFaq===i?"rotate(45deg)":"rotate(0)",flexShrink:0,marginLeft:16}}>+</span></button>
        <div style={{maxHeight:activeFaq===i?300:0,overflow:"hidden",transition:"all .4s",paddingBottom:activeFaq===i?24:0}}><p style={{fontSize:15,color:C.muted,lineHeight:1.7,maxWidth:720}}>{item.a}</p></div>
      </div>)}
    </div></section>

    {/* FINAL CTA */}
    <section><div className="sec" style={{textAlign:"center"}}>
      <h2 style={{fontSize:"clamp(32px,4.5vw,56px)",fontWeight:800,letterSpacing:"-2px",maxWidth:700,margin:"0 auto 20px"}}>How many calls did you miss <span style={{color:C.accent}}>this week?</span></h2>
      <p style={{fontSize:18,color:C.muted,lineHeight:1.7,maxWidth:520,margin:"0 auto 44px"}}>Every missed call is a $2,000–$10,000 job walking into your competitor&apos;s schedule.</p>
      <a href={CONFIG.calendlyUrl} className="cta-p" style={{fontSize:18,padding:"22px 52px"}}>Book Your Free Assessment →</a>
      <p style={{fontSize:13,color:C.muted,marginTop:16}}>15-minute call. No pitch. Just data on what you&apos;re leaving on the table.</p>
    </div></section>

    {/* FOOTER */}
    <footer style={{borderTop:`1px solid ${C.border}`,padding:"48px 28px"}}>
      <div style={{maxWidth:1140,margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:40,marginBottom:40}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
              <div style={{width:32,height:32,background:`linear-gradient(135deg,${C.accent},#c23152)`,borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{color:"white",fontWeight:800,fontSize:16}}>A</span></div>
              <span style={{fontWeight:700,fontSize:19}}>ansley</span>
            </div>
            <p style={{fontSize:13,color:C.muted,maxWidth:320,lineHeight:1.6}}>The AI operating system for concrete cutting companies. Built by Keystone Systems.</p>
          </div>
          <div style={{display:"flex",gap:48,flexWrap:"wrap"}}>
            <div>
              <div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:12,letterSpacing:"1px",textTransform:"uppercase"}}>Product</div>
              {["How It Works","Features","Pricing","FAQ"].map(t=><a key={t} href={`#${t.toLowerCase().replace(/\s/g,"-")}`} style={{display:"block",fontSize:14,color:C.mutedLight,padding:"6px 0"}}>{t}</a>)}
            </div>
            <div>
              <div style={{fontSize:12,fontWeight:700,color:C.muted,marginBottom:12,letterSpacing:"1px",textTransform:"uppercase"}}>Contact</div>
              <a href={CONFIG.demoPhoneTel} style={{display:"block",fontSize:14,color:C.mutedLight,padding:"6px 0"}}>{CONFIG.demoPhone}</a>
              <a href={`mailto:${CONFIG.email}`} style={{display:"block",fontSize:14,color:C.mutedLight,padding:"6px 0"}}>{CONFIG.email}</a>
              <a href={CONFIG.calendlyUrl} style={{display:"block",fontSize:14,color:C.accent,padding:"6px 0",fontWeight:600}}>Book a Call</a>
            </div>
          </div>
        </div>
        <div style={{borderTop:`1px solid ${C.border}`,paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <span style={{fontSize:12,color:C.muted}}>© 2026 Ansley by Keystone Systems. All rights reserved.</span>
          <span style={{fontSize:12,color:C.muted}}>Built for concrete cutting companies tired of losing jobs to voicemail.</span>
        </div>
      </div>
    </footer>
  </>);
}
