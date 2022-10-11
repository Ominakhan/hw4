
import './App.css';
// import {Card} from './components/Card';
import Card from './components/Card';
import Card2 from './components/Card2';
import Card3 from './components/Card3';


const data = [
  {
    title: "Pen",
    price: 20,
    color: "blue",
    date: new Date(2022, 7, 5),
  }];

  const data2 = [
  {
    title: "Paper",
    price: 20,
    color: "blue",
    date: new Date(2020, 3, 14),
  }
 ]

  const data3 = [
  {
    title: "Apple",
    price: 20,
    color: "blue",
    date: new Date(2021, 7, 24),
  } 
];



function App() {
  return (
    <div className="App">
<Card 
title={data[0].title}
price={data[0].price} 
color={data[0].color}
date={data[0].date}/>

<Card2
title={data2[0].title}
price={data2[0].price} 
color={data2[0].color}
date={data2[0].date}/>

<Card3
title={data3[0].title}
price={data3[0].price} 
color={data3[0].color}
date={data3[0].date}/>
    </div>
  );
}

export default App;





