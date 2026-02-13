function ProdCard({name, price, inStock}) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 w-80 transition hover:shadow-xl">
            <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
            </div>

            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-lg font-bold mt-2">${price}</p>

            <span
                className={`inline-block mt-4 px-4 py-1 rounded-full text-sm font-medium ${
                    inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                }`}
            >
                {inStock ? "In Stock" : "Out of Stock"}
            </span>
        </div>
    );
}

export default function Exp1_3_1() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center gap-6 flex-wrap">
            <ProdCard name="Wireless Headphones" price="99.99" inStock={true} />
            <ProdCard name="Smart Watch" price="199.99" inStock={true} />
            <ProdCard name="Bluetooth Speaker" price="49.99" inStock={true} />
            <ProdCard name="Gaming Mouse" price="59.99" inStock={true} />
        </div>
    );
}