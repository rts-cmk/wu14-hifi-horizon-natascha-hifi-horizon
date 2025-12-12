import { useLoaderData } from 'react-router';
import './OurHistory.sass';


export default function OurHistory() {

    const histories = useLoaderData();
    // console.log(histories);


    return (
        <section className="our-history">

            {histories.map(history => (
                <article key={history.id}>
                    <img src={history.image || null} alt={history.title || ''} />
                    <h2 className='title'>{history.title || ''}</h2>
                    <p className='subtitle'>{history.subtitle || ''}</p>
                    <div className='paragraphs'>
                        {history.paragraphs.map((paragraph, index) => (
                            <div key={index} className="paragraph">
                                <p>{paragraph.title || ''}</p>
                                {paragraph.text.map((text, i) => (
                                    <p key={i}>- {text || ''}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </article>
            ))}

        </section>
    )
}