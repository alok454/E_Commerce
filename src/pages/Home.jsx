import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Card from "../components/UI/Card";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/");
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="w-full min-h-screen flex justify-center bg-[#E8F5E9]">
      <div className="w-full sm:w-[95%] flex flex-wrap gap-4 justify-center py-5">
        {loading ? (
          <div className="w-12 sm:w-24 h-12 sm:h-24 bg-[#E8F5E9] border-t-[#7d7d7d] border-[5px] sm:border-[10px] border-t-[5px] sm:border-t-[10px] rounded-full animate-spin"></div>
        ) : (
          data.map((product) => <Card product={product} key={product.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
