import Banner from "../banner/Banner";
import Card from "../card/Card";
import CustomHook from '../CustomHook/CustomHook';
const Home = () => {
  const {books} = CustomHook()
  console.log(books);
  return (
    <div>
      <Banner fromList={true}></Banner>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10">
        {
          books.map(book => <Card key={book.id} book={book}></Card>)
        }
      </div>
    </div>

  );
};

export default Home;