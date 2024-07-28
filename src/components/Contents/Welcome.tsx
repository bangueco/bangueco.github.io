import hi from '../../assets/images/hi.png'

export function Welcome() {
  return (
    <section id="welcome-section">
      <div className="section-container">
        <img id='welcome-avatar' src={hi} alt="hi hello" />
        <div id='welcome-introduction'>
          <p>Hello, I'm Justine Ivan Gueco</p>
          <div>
            <p>I'm a fullstack developer, with an expertise in web and mobile development. I am fully commited to delivering high quality projects from scratch.</p>
          </div>
        </div>
      </div>
    </section>
  )
}