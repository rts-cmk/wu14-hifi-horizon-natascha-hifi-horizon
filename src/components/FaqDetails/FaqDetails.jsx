import Delivery from '../Devilery/Delivery';
import Exchanges from '../Exchanges/Exchanges';
import Orders from '../Orders/Orders';
import Refunds from '../Refunds/Refunds';
import Returns from '../Returns/Returns';
import SaleItems from '../SaleItems/SaleItems';
import Shipping from '../Shipping/Shipping';
import './FaqDetails.sass';


export default function FaqDetails() {

    return (
        <section className="faq-details">

            <Orders />

            <Refunds />

            <Shipping />

            <Delivery />

            <Returns />

            <SaleItems />

            <Exchanges />

        </section>
    )

}