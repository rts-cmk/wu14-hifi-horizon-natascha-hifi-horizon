import './AboutUs.sass'


export default function AboutUs() {
    return (
        <section className="about-us">
            <article className="about-us__what-we-do">
                <h2>What we do</h2>
                <p>We look forward to customising a system to meet your needs.</p>
                <p>We don’t favour one manufacturer over another – the only thing we do favour is making sure our customers get the right product that suits their needs and listening preferences. We will ask many questions in order to ensure that what you buy from us is tailored to you and you alone.</p>
                <p>If you are looking for a product not found in our demonstration showrooms or our online site, don’t fret as we have access to hundreds of brands.</p>
                <p>One of our biggest pleasures of working in this industry is to see the smile on our customers’ faces when they finally hear and see the system of their dreams.</p>
            </article>
            <article className='about-us__opening-hours'>
                <h2>Opening Hours</h2>
                <section className='about-us__city'>
                    <h3>Edinburgh</h3>
                    <p>2 Joppa Rd,Edinburgh, EH15 2EU</p>
                    <div className='about-us__hours'>
                        <p>Monday to Friday: 10:00am - 5:30pm</p>
                        <p>Saturday: 10:00am - 5:30pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                </section>
                <section className='about-us__city'>
                    <h3>Falkirk</h3>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <div className='about-us__hours'>
                        <p>Monday to Friday: 10:00am - 5:30pm</p>
                        <p>Saturday - By appointment only</p>
                        <p>Sunday: Closed</p>
                    </div>
                </section>
            </article>
        </section>
    )
}
