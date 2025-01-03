import { useNavigate } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/CartSlice";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  const productForCart = (product) => {
    const newProduct = {
      id: product.id,
      title: product.title,
      price: Math.round(product.price * 85),
      rating: product.rating,
      thumbnail: product.thumbnail,
      quantity: 1,
    }

    return newProduct;
  }

  const handleAddCart = (e, product) => {
    e.stopPropagation();
    const newProduct = productForCart(product);
    dispatch(add(newProduct));
    toast.success("Product added to cart");
  }

  return (
    <div
      className="bg-[#ffffff] flex flex-col w-[280px] h-[400px]  rounded shadow-lg"
      key={product.id}
      onClick={() => navigate(`/product/${product.id}`)}
    >
      {/* Product Thumbnail */}
      <div className="w-full h-[60%] flex justify-center items-center ">
        <img src={product.thumbnail} alt="Product Image" className="w-full h-full object-contain cursor-pointer hover:scale-[1.15] duration-300" />
      </div>

      {/* Product Details */}
      <div className="w-full h-[40%] px-5 flex flex-col gap-1 justify-center">
        <p className="text-nowrap overflow-hidden overflow-ellipsis cursor-pointer font-semibold">{product.title}</p>
        <div className="flex items-center justify-center gap-1 bg-[green] text-white w-[60px] rounded">
          <span>{product.rating}</span>
          <IoMdStar size={15} />
        </div>
        <p className="font-bold">₹ {Math.round(product.price * 85)}</p>  {/* converting USD to INR */}
        <button 
          className="bg-[blue] text-white py-2 rounded"
          onClick={(e) => handleAddCart(e, product)}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
