import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus, remove, removeAll } from "../store/slice/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMinus = (id) => { 
    dispatch(minus(id));
  }
  const handlePlus = (id) => {
    dispatch(plus(id));
  }
  const handleRemove = (id) => {
    dispatch(remove(id));
  }
  const handleRemoveAll = () => {
    dispatch(removeAll());
  }

  return (
    <section className="w-full flex justify-center items-center py-5 bg-[#E8F5E9]">
      <div className="w-[97%] flex flex-col gap-2">
        {products.map((product) => (
          <section className="bg-white w-full h-[250px] sm:h-[200px] md:h-[100px] flex flex-col sm:flex-row py-2 rounded-md shadow-xl" key={product.id}>
            <div className="w-full sm:w-[60%] md:w-[75%] h-[70%] flex sm:h-full cursor-pointer" onClick={() => navigate(`/product/${product.id}`)}>
              <div className="w-[40%] sm:w-[20%] h-full ">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="w-full h-full object-contain hover:scale-[1.15] duration-300"
                />
              </div>
              <div className="w-[60%] sm:w-[80%] flex flex-col md:flex-row justify-center sm:justify-around sm:items-center gap-3 pl-2">
                <p className="md:w-[33%] font-semibold sm:text-lg text-wrap">{product.title}</p>
                <div className="flex">
                  Rating: <p className="ml-2 flex items-center justify-center gap-1 bg-[green] text-white w-[60px] rounded">
                    <span>{product.rating}</span>
                    <IoMdStar size={15} />
                  </p>
                </div>
                <p className="font-semibold text-nowrap">Price: ₹ {product.price}</p>
              </div>
            </div>

            <div className="w-full sm:w-[40%] md:w-[25%] h-[30%] sm:h-full flex items-center justify-around">
              <div className="flex flex-col items-center text-xl">
                <div className="flex items-center  gap-1 ">
                  <CiCircleMinus onClick={()=>handleMinus(product.id)} className="cursor-pointer text-[1.6rem]" />
                  <span className="text-[1.3rem]">{product.quantity}</span>
                  <CiCirclePlus onClick={()=>handlePlus(product.id)} className="cursor-pointer text-[1.6rem]" />
                </div>
                <div className="text-sm">quantity</div>
              </div>
              <div className="">
                <button 
                  onClick={()=>handleRemove(product.id)}
                  className=" flex items-center gap-1 text-[red] px-3 py-1 rounded-md"
                ><RiDeleteBinLine size={20}/>Remove</button>
              </div>
            </div>
          </section>
        ))}

        {products.length>0 ? <button 
          onClick={()=>handleRemoveAll()}
          className="w-full bg-[red] hover:bg-[#cc0606] text-white text-lg text-center py-[6px] rounded-md"
        >Remove All</button> : 
        <div className="w-full h-[82vh] flex justify-center items-center text-3xl">
          <h2>No Item in Cart</h2>
        </div> }
      </div>
    </section>
  );
};

export default Cart;
