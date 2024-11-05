import bannerImg from '../assets/restauranfood.jpg'


const Header = () => {
    return (
        <header className='header'>
             <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediteranean restaurant, focused on traditional recipes on trditional served with a modern twist.</p>
                    <button aria-label="On Click">Reserve Table</button>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt='bannerImg'/>
                </div>
             </section>
        </header>
    )
}

export default Header 