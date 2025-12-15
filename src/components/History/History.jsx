import { useLoaderData } from 'react-router';
import './History.sass';


export default function History() {

    const histories = useLoaderData();
    // console.log(histories);

    return (
        <>
            {histories.map(history => (
                <article key={history.id} className='histories__history'>
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
        </>
    )
}