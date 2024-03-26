import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import TriangleBar from "recharts"
import { getStorage } from '../utility/storage';
// import { IoTriangle } from 'react-icons/io5';
import "./Page.css"

const PageToRead = () => {
  let [chart, setChart] = useState([])
  useEffect(() => {
    const LS = getStorage('read')
    setChart(...chart, LS)
  }, [])
  console.log(chart);
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //  const name = chart.map(name => name.bookName.slice(0,10))
  // //  const scl = name.slice(0,10)
  //   console.log(name);
  return (
    <div className=' w-full lg:container mx-auto'>
      <ResponsiveContainer className={"min-w-[350px] mx-auto max-w-4xl min-h-96 p-0"}>
        <BarChart className='lg:m-10 mr-0'

          // width={1000}
          // height={500}
          data={chart}
          // margin={{
          //   top: 20,
          //   right: 30,
          //   // left: 20,
          //   bottom: 5,
          // }}
          // padding={{
          //   top: 50,
          //   bottom: 50
          // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className=" hidden md:block" dataKey="bookName" />
          <YAxis />
          <Tooltip />
          <Legend display={'page'} />
          <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }} >
            {chart.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageToRead;