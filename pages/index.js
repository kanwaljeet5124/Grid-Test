import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '../modules/box.js'
export default function Home() {
  const arr = [];
  for(let i=0;i<8;i++){
    let row = [];
    for(let j=0;j<8;j++){
      row.push(<Box />);
    }
    arr.push(row);
  }
  console.log(arr);
  return (
    <div className="container">
      <Head>
        <title>Grid Test</title>
        <meta name="Title" content="Ideausher Practical Test" />
        <meta name="description" content="The Grid has been accomplished by using simple React and CSS tricks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='chess-board'>
        {arr.map((item,index)=> {
          return (
            <div key={index} className="grid_row">
              {item.map((it,ind) => it)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
