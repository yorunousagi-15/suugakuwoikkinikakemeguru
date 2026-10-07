const pages = {
  '/': {
    title: '数学航路',
    kind: 'home',
    kicker: 'A MAP OF MATHEMATICS',
    html: `
      <div class="hero">
        <div class="kicker">A MAP OF MATHEMATICS</div>
        <h1>中学から大学へ、<br>数学をつなぐ。</h1>
        <p class="sub">「公式」を覚えるだけで終わらず、図・式・定義を行き来しながら、なぜそうなるのかを追いかける。</p>
        <p class="hand">slow down · draw it · then calculate.</p>
      </div>
      <div class="graphic" aria-label="関数と図形のグラフィック">
        <svg viewBox="0 0 900 230" role="img">
          <rect width="900" height="230" fill="none"/>
          <g opacity=".25" stroke="currentColor" stroke-width="1">
            ${Array.from({length:18}, (_,i)=>`<path d="M ${20+i*50} 12 V218"/>`).join('')}
            ${Array.from({length:6}, (_,i)=>`<path d="M20 ${28+i*34} H880"/>`).join('')}
          </g>
          <path d="M22 184 C 120 165, 130 48, 250 90 S 390 195, 530 92 S 700 56, 875 28" fill="none" stroke="var(--accent)" stroke-width="5"/>
          <circle cx="250" cy="90" r="7" fill="var(--accent-2)"/>
          <circle cx="530" cy="92" r="7" fill="var(--accent-2)"/>
          <path d="M70 190 L160 85 L245 190 Z" fill="none" stroke="var(--accent-2)" stroke-width="4" opacity=".7"/>
          <text x="40" y="32" font-size="18" fill="currentColor" font-family="Georgia,serif">f(x)</text>
          <text x="735" y="200" font-size="17" fill="currentColor" font-family="Georgia,serif">x → y</text>
        </svg>
      </div>
      <div class="grid-3">
        <a class="card" href="#/middle"><span class="tag">01 / MIDDLE</span><strong>中学数学</strong><span>式・関数・図形。数学の基本文法を作る。</span></a>
        <a class="card" href="#/high"><span class="tag">02 / HIGH</span><strong>高校数学</strong><span>関数・三角・微積・確率をつなげる。</span></a>
        <a class="card" href="#/university"><span class="tag">03 / UNIVERSITY</span><strong>大学数学</strong><span>線形代数・解析へ。定義と構造を見る。</span></a>
      </div>
      <h2 id="route">学びの順路</h2>
      <div class="path">
        <div class="path-item"><div class="path-no">STEP 01</div><div class="path-title">理解</div><div>言葉と図で「何をしているか」をつかむ。</div></div>
        <div class="path-item"><div class="path-no">STEP 02</div><div class="path-title">例題</div><div>途中式を省かず、考え方を一本ずつ追う。</div></div>
        <div class="path-item"><div class="path-no">STEP 03</div><div class="path-title">演習</div><div>自力で解き、最後に答え合わせをする。</div></div>
      </div>
      <div class="callout"><b>UIの方針：</b> VitePressらしい「左サイドバー＋本文＋右の目次＋検索＋テーマ切替」を中心に、筆記体メモと控えめな数学グラフィックを重ねています。</div>
    `
  },
  '/middle': {
    title: '中学数学の地図',
    kicker: 'MIDDLE SCHOOL / START HERE',
    html: `
      <div class="kicker">MIDDLE SCHOOL / START HERE</div>
      <h1>中学数学の地図</h1>
      <p class="lead">中学数学は、数学の「基本文法」を作る場所です。式・関数・図形を別々の暗記項目ではなく、つながった道具として見ます。</p>
      <div class="callout"><b>ゴール：</b> 数や文字を式で表し、関数で関係を表し、図形を筋道立てて説明できる。</div>
      <h2 id="pillars">3本柱</h2>
      <div class="grid-3">
        <a class="card" href="#/middle-number-algebra"><span class="tag">01</span><strong>数と式</strong><span>文字式・分配法則・方程式。</span></a>
        <a class="card" href="#/middle-linear"><span class="tag">02</span><strong>一次関数</strong><span>変化の割合とグラフ。</span></a>
        <a class="card" href="#/middle-geometry"><span class="tag">03</span><strong>図形と証明</strong><span>条件から結論まで説明する。</span></a>
      </div>
    `
  },
  '/middle-number-algebra': {
    title: '数と式', kicker: 'MIDDLE / NUMBER & ALGEBRA', html: article({
      h1: '数と式 ― 文字は「数の代わり」ではなく「関係」を表す',
      sections: [
        ['文字式の意味', '「ある数」を x とおくと、未知の数そのものだけでなく、数量の関係を式にできます。1個120円のりんごを x 個なら代金は 120x です。', '120x'],
        ['分配法則は「まとまり」を開く操作', 'a(b+c)=ab+ac は単なる公式ではありません。長方形を分割した面積として見ると、全体＝部分の和という同じ関係が見えます。', '3(x+5)=3x+15'],
        ['方程式は「等しさを保つ」操作', '2x+3=11 では、両辺から3を引き、さらに2で割ります。大事なのは左だけを変えるのではなく、等号の両側に同じ操作をすることです。', '2x+3=11 → 2x=8 → x=4']
      ],
      check: ['2(x+3)=14 のとき x は？', ['2','4','7','8'],1,'両辺を2で割ると x+3=7、そこから3を引いて x=4。']
    })
  },
  '/middle-linear': {
    title: '一次関数', kicker: 'MIDDLE / LINEAR FUNCTION', html: article({
      h1: '一次関数 ― 「変化の仕方」を式とグラフで見る',
      sections: [
        ['一次関数の基本形', 'y=ax+b では a が変化の割合、b が y 切片です。x が1増えると y は a だけ変化します。', 'y=ax+b'],
        ['グラフは情報の可視化', '直線の傾きが大きいほど、x の変化に対して y が大きく変化します。式とグラフを行き来するのがポイントです。', '変化の割合 = (y₂−y₁)/(x₂−x₁)']
      ],
      check: ['y=2x+3 の変化の割合は？',['1','2','3'],1,'y=ax+b の a が変化の割合です。']
    })
  },
  '/middle-geometry': {
    title: '図形と証明', kicker: 'MIDDLE / GEOMETRY', html: article({
      h1: '図形と証明 ― 見た目ではなく「条件」から進む',
      sections: [
        ['証明の基本', '証明は「なぜそう言えるか」を、条件・定義・既知の性質から順に積み上げます。', '仮定 → 根拠 → 結論'],
        ['相似と合同', '対応する辺や角を見つけると、図形の関係が整理できます。最初に「何が等しいと分かっているか」を書き出すと迷いにくくなります。', '△ABC ≡ △DEF']
      ]
    })
  },
  '/high': {
    title: '高校数学の地図', kicker: 'HIGH SCHOOL / BUILD UP', html: `
      <div class="kicker">HIGH SCHOOL / BUILD UP</div><h1>高校数学の地図</h1>
      <p class="lead">中学で作った「式・グラフ・図」の感覚を、関数・三角・微積・確率へ拡張します。</p>
      <div class="grid-3">
        <a class="card" href="#/high-quadratic"><span class="tag">01</span><strong>二次関数</strong><span>平方完成・頂点・方程式との接続。</span></a>
        <a class="card" href="#/high-trig"><span class="tag">02</span><strong>三角関数</strong><span>角度を数として扱い、波を見る。</span></a>
        <a class="card" href="#/high-calculus"><span class="tag">03</span><strong>微分と積分</strong><span>変化率と面積の考え方へ。</span></a>
        <a class="card" href="#/high-probability"><span class="tag">04</span><strong>確率と統計</strong><span>不確実さを数字で表す。</span></a>
      </div>`
  },
  '/high-quadratic': {
    title: '二次関数', kicker: 'HIGH / QUADRATIC FUNCTION', html: article({
      h1: '二次関数 ― グラフの形を式から読む',
      sections: [
        ['基本形', '二次関数の代表は y=ax²+bx+c。平方完成すると頂点が見えます。', 'y=a(x-p)²+q'],
        ['例：頂点を求める', 'y=x²−4x+1 を平方完成します。', 'y=(x−2)²−3 → 頂点 (2,−3)'],
        ['なぜ平方完成するのか', '展開された式は係数を読みやすくします。平方完成した形では、中心と開き方が直接見えるのでグラフを想像しやすくなります。', '最小値・最大値の原型']
      ],
      graphic: true,
      check: ['y=(x−3)²+2 の頂点は？',['(−3,2)','(3,2)','(2,3)','(3,−2)'],1,'y=a(x−p)²+q の頂点は (p,q)。']
    })
  },
  '/high-trig': {
    title: '三角関数', kicker: 'HIGH / TRIGONOMETRY', html: article({
      h1: '三角関数 ― 角度を「数」として動かす',
      sections: [
        ['単位円から始める', '単位円上の点の座標を考えると、cos と sin は角度によって連続的に変化する量として見えてきます。', 'x=cosθ, y=sinθ'],
        ['波のグラフ', 'sin x のグラフは周期的に繰り返されます。物理や工学で現れる振動を記述する共通言語にもなります。', 'sin(x+2π)=sin x']
      ]
    })
  },
  '/high-calculus': {
    title: '微分と積分', kicker: 'HIGH / CALCULUS', html: article({
      h1: '微分と積分 ― 「変化」と「集める」をつなぐ',
      sections: [
        ['微分は変化率', '接線の傾き、つまり「x がほんの少し変わったとき y がどのくらい変わるか」を考えます。', 'f′(x)=lim[h→0] {f(x+h)−f(x)}/h'],
        ['積分は小さな量を集める', '面積を細かい長方形の和として考え、その幅を限りなく小さくします。', '∫ₐᵇ f(x) dx'],
        ['微分と積分の接続', '微分と積分は逆向きの操作として強く結びついています。高校数学の微積分は大学の解析への入口です。', 'd/dx ∫ₐˣ f(t)dt = f(x)']
      ],
      graphic: true,
      check: ['f(x)=x² の導関数は？',['x','2x','x²','2'],1,'べき乗の微分より、d/dx x² = 2x。']
    })
  },
  '/high-probability': {
    title: '確率と統計', kicker: 'HIGH / PROBABILITY & STATISTICS', html: article({
      h1: '確率と統計 ― 不確実さを数字で表す',
      sections: [
        ['確率', '全体の中でどれくらいの割合で起こるかを数値化します。', 'P(A)=有利な場合の数 / 全場合の数'],
        ['平均と分散', '平均はデータの中心、分散は散らばりの大きさを表します。標準偏差は分散の平方根です。', '分散 = E[(X−μ)²]']
      ]
    })
  },
  '/university': {
    title: '大学数学の地図', kicker: 'UNIVERSITY / STRUCTURE', html: `
      <div class="kicker">UNIVERSITY / STRUCTURE</div><h1>大学数学の地図</h1>
      <p class="lead">高校までの計算技術を、定義・構造・証明という視点で一般化していきます。</p>
      <div class="grid-3">
        <a class="card" href="#/university-linear"><span class="tag">01</span><strong>線形代数</strong><span>ベクトル・行列・線形写像。</span></a>
        <a class="card" href="#/university-multi"><span class="tag">02</span><strong>多変数微積分</strong><span>方向・偏微分・多重積分。</span></a>
        <a class="card" href="#/university-analysis"><span class="tag">03</span><strong>解析の入り口</strong><span>極限・連続・証明の言葉。</span></a>
      </div>`
  },
  '/university-linear': {
    title: '線形代数', kicker: 'UNIVERSITY / LINEAR ALGEBRA', html: article({
      h1: '線形代数 ― 連立方程式を「構造」として見る',
      sections: [
        ['ベクトル', 'ベクトルは矢印であると同時に数の組です。計算対象として一般化することで、空間そのものを扱えるようになります。', 'x⃗=(x₁,x₂)ᵀ'],
        ['行列', '連立方程式を A x⃗ = b⃗ とまとめると、係数の並びが「変換」として見えてきます。', 'A=[[2,1],[1,3]]'],
        ['線形写像', '足し算と定数倍を壊さない写像が線形写像です。個々の数字より構造が中心になります。', 'T(u+v)=T(u)+T(v)']
      ],
      check: ['A v = λv の λ は何と呼ぶ？',['固有値','行列式','階数'],0,'λ は固有値、v は固有ベクトルです。']
    })
  },
  '/university-multi': {
    title: '多変数微積分', kicker: 'UNIVERSITY / MULTIVARIABLE CALCULUS', html: article({
      h1: '多変数微積分 ― 変化の方向を増やす',
      sections: [
        ['偏微分', 'f(x,y) では x 方向だけを変化させたときの変化率と、y 方向だけを変化させたときの変化率を考えます。', '∂f/∂x, ∂f/∂y'],
        ['勾配', '偏微分を並べると勾配ベクトルになります。最も増加する方向を示すという幾何学的意味があります。', '∇f=(∂f/∂x,∂f/∂y)']
      ],
      graphic: true
    })
  },
  '/university-analysis': {
    title: '解析の入り口', kicker: 'UNIVERSITY / ANALYSIS', html: article({
      h1: '解析の入り口 ― 「極限」を数学の言葉にする',
      sections: [
        ['極限', '「近づく」という直感を、どのくらい近づけば十分かという条件に言い換えて厳密に扱います。', 'lim[x→a] f(x)=L'],
        ['連続', '点の近くで値が急に飛ばないことを、極限と関数値の一致として表します。', 'lim[x→a]f(x)=f(a)'],
        ['証明', '大学数学では計算だけでなく、定義から何が導かれるかを丁寧に示すことが中心になります。', '定義 → 命題 → 証明']
      ]
    })
  },
  '/practice': {
    title: '演習室', kicker: 'PRACTICE / CHECK YOUR IDEA', html: `
      <div class="kicker">PRACTICE / CHECK YOUR IDEA</div><h1>演習室</h1>
      <p class="lead">記事を読んだあとに、「自分で使えるか」を確かめる場所です。</p>
      <div id="practiceChecks"></div>
      <div class="callout"><b>学び方：</b> 先に答えを見ず、紙に式を書いてから選びましょう。</div>`
  }
};

function article({h1, sections = [], check, graphic}) {
  let out = `<h1>${h1}</h1>`;
  sections.forEach((s, i) => {
    const id = `section-${i+1}`;
    out += `<h2 id="${id}">${i+1}. ${s[0]}</h2><p>${s[1]}</p><div class="math">${s[2]}</div>`;
  });
  if (graphic) out += `
    <div class="graphic" aria-label="数学グラフィック">
      <svg viewBox="0 0 900 280" role="img">
        <g opacity=".22" stroke="currentColor" stroke-width="1">${Array.from({length:19},(_,i)=>`<path d="M ${20+i*48} 20 V260"/>`).join('')}${Array.from({length:7},(_,i)=>`<path d="M20 ${26+i*38} H880"/>`).join('')}</g>
        <path d="M60 220 C 170 210, 180 70, 300 92 S 510 210, 650 86 S 760 56, 840 38" fill="none" stroke="var(--accent)" stroke-width="5"/>
        <circle cx="300" cy="92" r="7" fill="var(--accent-2)"/><circle cx="650" cy="86" r="7" fill="var(--accent-2)"/>
        <path d="M90 220 L210 90 L320 220 Z" fill="none" stroke="var(--accent-2)" stroke-width="4" opacity=".65"/>
      </svg>
    </div>`;
  if (check) out += makeCheck(check);
  return out;
}

function makeCheck([q, options, answer, explanation]) {
  return `<div class="check" data-answer="${answer}"><div class="check-title">QUICK CHECK</div><div class="check-question">${q}</div><div class="options">${options.map((o,i)=>`<button class="option" data-i="${i}">${o}</button>`).join('')}</div><div class="check-result" hidden>${explanation}</div></div>`;
}

function slug(text) { return text.toLowerCase().replace(/[^a-z0-9ぁ-んァ-ヶ一-龯]+/g, '-').replace(/^-|-$/g, ''); }

function renderOutline() {
  const nav = document.getElementById('outlineNav');
  const headings = [...document.querySelectorAll('#content h2, #content h3')];
  nav.innerHTML = headings.map(h => `<a class="${h.tagName.toLowerCase()}" href="#${h.id}">${h.textContent}</a>`).join('');
  headings.forEach((h,i)=>{
    if (!h.id) h.id = `${slug(h.textContent)}-${i}`;
    const a = nav.querySelectorAll('a')[i]; if (a) a.href = `#${h.id}`;
  });
}

const searchDocs = Object.entries(pages).map(([path, page]) => ({ path, title: page.title, text: page.title + ' ' + page.html.replace(/<[^>]+>/g, ' ') }));

function updateActiveLinks(path) {
  document.querySelectorAll('.sidebar a, .topnav a').forEach(a => {
    const target = a.getAttribute('href');
    a.classList.toggle('active', target === `#${path}` || (path.startsWith(target?.slice(1) + '/') && target !== '#/'));
  });
}

function render(path) {
  const page = pages[path] || pages['/'];
  const content = document.getElementById('content');
  content.innerHTML = page.html;
  document.title = `${page.title} | 数学航路`;
  if (path === '/') document.title = '数学航路 — 中学・高校・大学数学';
  renderOutline();
  updateActiveLinks(path);
  document.getElementById('sidebar').classList.remove('open');
  wireChecks();
  if (path === '/practice') {
    const holder = document.getElementById('practiceChecks');
    holder.innerHTML = `
      ${makeCheck(['一次関数 y=2x+3 の変化の割合は？',['1','2','3'],1,'a=2 が変化の割合です。'])}
      ${makeCheck(['y=(x−2)²+1 の頂点は？',['(−2,1)','(2,1)','(1,2)'],1,'頂点は (2,1) です。'])}
      ${makeCheck(['A v = λv の λ は？',['固有値','行列式','階数'],0,'λ は固有値です。'])}`;
    wireChecks();
    renderOutline();
  }
  window.scrollTo({top:0, behavior:'instant'});
}

function wireChecks() {
  document.querySelectorAll('.check').forEach(check => {
    check.querySelectorAll('.option').forEach(btn => btn.addEventListener('click', () => {
      const answer = Number(check.dataset.answer);
      const i = Number(btn.dataset.i);
      check.querySelectorAll('.option').forEach(b => b.classList.remove('correct','wrong'));
      btn.classList.add(i === answer ? 'correct' : 'wrong');
      check.querySelector('.check-result').hidden = false;
    }));
  });
}

function currentPath() {
  let hash = location.hash.replace(/^#/, '') || '/';
  if (!hash.startsWith('/')) hash = '/' + hash;
  return hash;
}

window.addEventListener('hashchange', () => render(currentPath()));

const root = document.documentElement;
const savedTheme = localStorage.getItem('math-theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');

document.getElementById('themeButton').addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('math-theme', root.classList.contains('dark') ? 'dark' : 'light');
});

document.getElementById('searchButton').addEventListener('click', () => {
  const panel = document.getElementById('searchPanel');
  panel.hidden = !panel.hidden;
  if (!panel.hidden) document.getElementById('searchInput').focus();
});

document.getElementById('searchInput').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  const out = document.getElementById('searchResults');
  if (!q) { out.innerHTML=''; return; }
  const hits = searchDocs.filter(d => d.title.toLowerCase().includes(q) || d.text.toLowerCase().includes(q)).slice(0, 8);
  out.innerHTML = hits.length ? hits.map(d => `<a class="result" href="#${d.path === '/' ? '' : d.path.slice(1)}"><b>${d.title}</b><small>${d.path}</small></a>`).join('') : '<div class="result"><b>見つかりませんでした</b></div>';
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') document.getElementById('searchPanel').hidden = true; });
document.getElementById('menuButton').addEventListener('click', () => document.getElementById('sidebar').classList.toggle('open'));

render(currentPath());
