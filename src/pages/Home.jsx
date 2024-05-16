import Cryptocurrencies from "../components/Cryptocurrencies";
import GlobalCryptoStats from "../components/GlobalCryptoStats";
import { useGetCryptosQuery } from "../services/createApi";
import NewsComp from "../components/NewsComp";
import Loader from 'react-js-loader'

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const globalStats = data?.data?.stats;
  console.log(globalStats);

  if(isFetching) return (
    <div className="h-screen flex justify-center">
      <Loader size="150" bgColor="#facc15" />
    </div>
  );

  return (
    <div className="w-full bg-black overflow-hidden">
      <GlobalCryptoStats globalStats={globalStats} />
      <Cryptocurrencies />
      <NewsComp />
    </div>
  );
};

export default Home;
