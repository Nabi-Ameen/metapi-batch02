
const Card = (props) => {
    return (
        <div className="shadow-md bg-white rounded-lg overflow-hidden">
            <div>
                <img src={props.product.image} alt="" className="w-full h-80" />
            </div>
            <div className="p-4">
                <p className="font-semibold">{props.product.title}</p>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-600">{props.product.category}</p>
                    <p className="font-bold">Rs {props.product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;