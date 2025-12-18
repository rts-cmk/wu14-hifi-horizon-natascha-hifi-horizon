import './Shipping.sass'



export default function Shipping() {
    return (
        <article className="shipping" id='shipping'>
            <h2>Shipping</h2>
            <section className="shipping__paragraphs">
                <div className="shipping__return-address">
                    <p>To return your product, you should mail your product to:</p>
                    <p>2 Joppa Road, Mackenzie House, Edinburgh, EH15 2EU.</p>
                </div>
                <p>If you would like to return an item, please note that we cannot arrange a collection of the item without additional cost; you will be responsible for ensuring the product reaches us. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund. Depending on where you live, the time it may take for your exchanged product to reach you may vary. We will process the refund when the item arrives with us.</p>
                <p>If you are shipping an item over £100, we would advise using a trackable shipping service or purchasing shipping insurance. We cannot guarantee that we will receive your returned item.</p>
            </section>
        </article>
    )

}