import './App.css'

function App() {
  return (
    <div className="landing">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🤖 NanoClaw</div>
        <div className="nav-links">
          <a href="#features">기능</a>
          <a href="#how-it-works">사용법</a>
          <a href="#actions">동작</a>
          <button className="btn-nav">시작하기</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">🚀 AI 기반 유지보수봇 — 개발팀의 든든한 동반자</div>
        <h1 className="hero-title">
          코드 유지보수,<br />
          <span className="gradient-text">NanoClaw에게</span><br />
          맡기세요.
        </h1>
        <p className="hero-sub">
          채팅으로 버그 수정, 기능 개발, PR 생성까지 — 개발 요청을 메시지 하나로 처리하는
          AI 유지보수봇입니다.
        </p>
        <div className="hero-cta">
          <button className="btn-primary">지금 시작하기 →</button>
          <button className="btn-ghost">데모 보기 ▶</button>
        </div>
        <div className="hero-stats">
          <div className="stat"><span>3-Pass</span><p>검증 시스템</p></div>
          <div className="divider" />
          <div className="stat"><span>자동</span><p>PR 생성</p></div>
          <div className="divider" />
          <div className="stat"><span>24/7</span><p>항시 대응</p></div>
        </div>
      </section>

      {/* How it works */}
      <section className="features" id="how-it-works">
        <h2>이렇게 사용하세요</h2>
        <div className="steps">
          <div className="step-card">
            <div className="step-num">01</div>
            <h3>채팅으로 요청</h3>
            <p>버그 수정, 기능 추가, 화면 개선 등 원하는 작업을 채팅으로 자연어로 요청하세요.</p>
            <div className="code-block">💬 "로그인 버튼 클릭 시 오류 수정해줘"</div>
          </div>
          <div className="step-card">
            <div className="step-num">02</div>
            <h3>Epic / Feature 분류</h3>
            <p>NanoClaw가 요청을 분석해 Epic과 단일 책임 Feature로 자동 분해합니다.</p>
            <div className="code-block">📋 Epic → Feature 1, 2, 3 자동 분류</div>
          </div>
          <div className="step-card">
            <div className="step-num">03</div>
            <h3>3-Pass 검증 구현</h3>
            <p>분석 → 구현 → 검증을 3회 반복하며 오류 없는 코드를 보장합니다.</p>
            <div className="code-block">✅ Pass 1 → Pass 2 → Pass 3</div>
          </div>
          <div className="step-card">
            <div className="step-num">04</div>
            <h3>PR 자동 생성</h3>
            <p>검증 완료 후 브랜치 생성, 커밋, PR 오픈까지 자동으로 처리합니다.</p>
            <div className="code-block">🔀 feat/fix-login-bug → PR #42 생성</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <h2>주요 기능</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🐛</div>
            <h3>버그 수정</h3>
            <p>오류 메시지나 증상을 알려주면 근본 원인을 분석하고 수정 코드를 작성합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>기능 개발</h3>
            <p>새로운 기능 요청을 받아 설계부터 구현, 테스트까지 완전히 처리합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📸</div>
            <h3>화면 캡처 & 확인</h3>
            <p>구현 후 실제 브라우저로 렌더링을 확인하고 스크린샷을 바로 전달합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔀</div>
            <h3>자동 PR 생성</h3>
            <p>작업마다 새 브랜치 생성 후 PR을 열어드립니다. main 직접 수정은 절대 없습니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✅</div>
            <h3>클라이언트 검수</h3>
            <p>검수 모드 활성화 시 작업 목록을 먼저 보고 승인 후 구현을 진행합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>안전한 브랜치 보호</h3>
            <p>main/master 브랜치 직접 수정은 절대 불가. 항상 PR을 통해서만 병합됩니다.</p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="features" id="actions">
        <h2>이런 동작을 합니다</h2>
        <div className="action-list">
          <div className="action-item">
            <span className="action-icon">💬</span>
            <div>
              <strong>채팅 수신</strong>
              <p>Slack, WhatsApp, Telegram 등 채널에서 개발 요청 메시지를 받습니다.</p>
            </div>
          </div>
          <div className="action-item">
            <span className="action-icon">🔍</span>
            <div>
              <strong>코드베이스 분석</strong>
              <p>GitHub 레포를 클론하고 관련 파일을 분석해 최적의 수정 방법을 찾습니다.</p>
            </div>
          </div>
          <div className="action-item">
            <span className="action-icon">⚙️</span>
            <div>
              <strong>코드 수정 & 테스트</strong>
              <p>3-Pass 검증으로 코드를 수정하고 빌드/테스트를 실행해 안정성을 확인합니다.</p>
            </div>
          </div>
          <div className="action-item">
            <span className="action-icon">📤</span>
            <div>
              <strong>PR 생성 & 알림</strong>
              <p>작업 완료 후 PR을 생성하고 채널에 링크와 상세 보고서를 전송합니다.</p>
            </div>
          </div>
          <div className="action-item">
            <span className="action-icon">📊</span>
            <div>
              <strong>상세 보고서</strong>
              <p>원인 분석, 해결 방법, 변경 파일, 3-Pass 결과를 PR 본문에 상세히 기록합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>지금 바로 유지보수봇을 도입하세요</h2>
        <p>개발 요청을 채팅 한 줄로 — NanoClaw가 처리합니다.</p>
        <button className="btn-primary large">무료로 시작하기 →</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2026 NanoClaw. All rights reserved.</span>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
