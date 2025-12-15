import { useLoaderData } from 'react-router';
import './History.sass';


export default function History() {

    const histories = useLoaderData();
    // console.log(histories);

    return (
        <>
            {histories.map(history => (
            
                <article key={history.id} className='history'>
                    
                    <img src={history.image || null} alt={history.title || ''} className='history__image' />
                    
                    <h2 className='history__title'>{history.title || ''}</h2>
                    <p className='history__subtitle'>{history.subtitle || ''}</p>
                        
                    {history.paragraphs.map((paragraph, index) => {
                        
                        // checks whether paragraph has a title, and trims any whitespace
                        // if title is empty or only whitespace, hasTitle will be false
                        const hasTitle = paragraph.title?.trim();

                        return (
                            // if there is NO title, add the class "history__paragraph--no-title"
                            <div
                                key={index}
                                className={`history__paragraph ${hasTitle ? '' : 'history__paragraph--no-title'}`}
                            >
                                {/* only show title if it exists */}
                                {hasTitle && (
                                    <p className="paragraph-title">
                                        {paragraph.title}
                                    </p>
                                )}

                                {/* maps paragraph texts */}
                                {/* if there is a title, show text with a dash in front */}
                                {/* if there is no title, show text without a dash */}
                                {paragraph.text.map((text, i) => (
                                    <p key={i} className="paragraph-text">
                                        {hasTitle ? ` - ${text}` : text}
                                    </p>
                                ))}
                            </div>
                        );
                    })}

                </article>
            ))}
        </>
    )
}