export const About = (props) => {
  return (
    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/fS4cH2fky5M`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Web agency: website creation and natural referencing</h2>
              <p>{props.data ? props.data.paragraph : 'loading...'}</p>
              <h3>We use the latest web technologies, the best innovative and creative solutions: self-managed sites, catalog sites, showcase sites, e-commerce sites and of course the most professional corporate presentations.

Our goal is to create online sites rich in communication, capable of conquering and maintaining the interest of a diversified target.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
