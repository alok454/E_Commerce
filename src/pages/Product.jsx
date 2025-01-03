import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { add } from "../store/slice/CartSlice";
import { useDispatch } from "react-redux";
import { IoMdStar } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
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

  const handleAddCart = (product) => {
    const newProduct = productForCart(product);
    dispatch(add(newProduct));
    toast.success("Product added to cart");
  }

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="w-full px-2 sm:px-8 py-5 min-h-screen flex flex-col items-center">
      {loading ? (
        <div className="w-12 sm:w-24 h-12 sm:h-24 text-4xl bg-[#fff] border-t-[#989898] border-[5px] sm:border-[10px] border-t-[5px] sm:border-t-[10px] rounded-full animate-spin"></div>
      ) : (
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col md:flex-row">
            {/* product image */}
            <div className="w-full max-w-[500px] max-h-[500px] border-2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full  object-cover "
              />
            </div>

            {/* product details */}
            <div className="w-full flex flex-col gap-3 md:gap-6 items-start pl-5 md:pl-10 pt-5 md:pt-0">
              <p className="font-semibold text-2xl md:text-3xl">{product.title}</p>
              <span className="text-xs sm:text-sm -mt-[1rem] md:-mt-[1.6rem]">(<strong>Brand:</strong> {product.brand})</span>
              <p className="font-bold text-2xl">
                ₹ {Math.round(product.price * 85)}
              </p>
              <div className="flex items-center justify-center gap-1 border-2 border-[grey] w-[60px] rounded">
                <span>{product.rating}</span>
                <IoMdStar size={15} />
              </div>
              <p className="text-sm font-medium">{product.description}</p>
              <button
                onClick={()=>handleAddCart(product)} 
                className="bg-black border-2 border-black hover:bg-white hover:text-black text-white font-semibold px-3 py-2 rounded"
              >
                Add to Cart
              </button>
              <div className="">
                <p className="font-bold -mb-[6px]">Category</p>
                <p className="font">{product.category}</p>
              </div>
              <div className="">
                <p className="font-bold -mb-[6px]">Tags</p>
                {product.tags.map((tag) => (
                  <span key={tag} className="mr-3">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
