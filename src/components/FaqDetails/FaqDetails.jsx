import Delivery from '../Devilery/Delivery';
import Refunds from '../Refunds/Refunds';
import Returns from '../Returns/Returns';
import SaleItems from '../SaleItems/SaleItems';
import Shipping from '../Shipping/Shipping';
import './FaqDetails.sass';


export default function FaqDetails() {

    return (
        <section className="faq-details">

            <article className="faq-details__article">
                <h2>Here at HiFi Horizon, our trained product specialists aim to provide the right product for you. We take great care with all of our orders to ensure you are fully happy with the product.</h2>
                <section className="faq-details__paragraphs">
                    <p>We aim to resolve any problems to your satisfaction.</p>
                    <p>Please contact us directly, if, for any reason, you have an issue with your order, your product or any other service provided. OUR GUARANTEE All items excluding ex-display and secondhand goods are covered by at least 12 months warranty; this is detailed on your receipt. Any secondhand or ex-display product is covered by at least 3 months warranty as noted in the original listing.</p>
                    <p>HiFi Horizon cannot guarantee against any misuse (i.e. blown speakers etc.), commercial use, wear and tear, erosion of parts, loss of data stored on any form of writeable/hard drive devices, dead pixels of an amount not covered by the manufacturer’s specifications or where you have not allowed repairs of goods to be carried out by authorised agents. If it has been more than 30 days since you have received a product and discovered a fault, we will still repair the goods free of charge or, if you prefer, replace them provided that you report the fault within 12 months of purchase. If we are unable to repair or replace the item(s) we will provide you with a full refund instead.</p>
                    <p>Please note that if it is after the initial 30 days of purchase you must be able to certify the fault was present upon delivery and not by misuse.</p>
                </section>
            </article>

            <Refunds />

            <Shipping />

            <Delivery />

            <Returns />

            <SaleItems />

        </section>
    )

}