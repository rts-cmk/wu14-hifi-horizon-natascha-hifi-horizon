import { FaChevronDown } from "react-icons/fa";
import './SortBy.sass';
import { useLoaderData } from "react-router";


export default function SortBy() {

    const products = useLoaderData();
    // console.log(products);

    // get brand names from products and collect unique names only
    const brands = [...new Set(products?.map(product => product.brand))];
    // console.log(brands);

    // get colors arrays from products and flatten them into one array, then get unique colors only
    const colorsArray = [...new Set(products?.map(product => product.colors).flat())];
    // console.log(colorsArray);

    // function to handle toggle of details element
    const handleToggle = event => {
        const element = event.target
        const openHeight = element.scrollHeight + "px"
        element.style.height = element.open ? openHeight : null
    }

    return (
        <section className="sort-by">
            <h3>Sort By</h3>

            <details onToggle={handleToggle} className="sort-by__details">
                <summary className="sort-by__title">
                    <p>Brand</p>
                    <FaChevronDown className="chevron-down" />
                </summary>
                <section className="sort-by__options">
                    {brands.map(brand => (
                        <section className="sort-by__option" key={brand}>
                            <p>{brand}</p>
                            <input type="checkbox" name={brand} />
                        </section>
                    ))}
                </section>
            </details>

            <details onToggle={handleToggle} className="sort-by__details">
                <summary className="sort-by__title">
                    <p>Color</p>
                    <FaChevronDown className="chevron-down" />
                </summary>
                <section className="sort-by__options">
                    {colorsArray.map(color => (
                        <section className="sort-by__option" key={color}>
                            <p>{color}</p>
                            <input type="checkbox" name={color} />
                        </section>
                    ))}
                </section>
            </details>

            <details onToggle={handleToggle} className="sort-by__details">
                <summary className="sort-by__title">
                    <p>Price</p>
                    <FaChevronDown className="chevron-down" />
                </summary>
                <section className="sort-by__options">
                    <section className="sort-by__option">
                        <p>£ 500 - £ 999</p>
                        <input type="checkbox" name="price" />
                    </section>
                    <section className="sort-by__option">
                        <p>£ 1,000 - £ 1,499</p>
                        <input type="checkbox" name="price" />
                    </section>
                    <section className="sort-by__option">
                        <p>£ 1,500 - £ 1,999</p>
                        <input type="checkbox" name="price" />
                    </section>
                    <section className="sort-by__option">
                        <p>£ 2,000 - £ 2,499</p>
                        <input type="checkbox" name="price" />
                    </section>
                    <section className="sort-by__option">
                        <p>£ 2,500 - £ 2,999</p>
                        <input type="checkbox" name="price" />
                    </section>
                    <section className="sort-by__option">
                        <p>£ 3,000+</p>
                        <input type="checkbox" name="price" />
                    </section>
                </section>
            </details>

        </section>
    )
}