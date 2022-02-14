import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //pakai react hooks state

function App() {
  //initial state index pertama warna merah
  const [index, setIndex] = useState(0);
  //state untuk warna disimpan dalam bentuk object
  let color= [
    {color:'#cb3f3e', nama:'MERAH'},
    {color:'#3e80cc', nama:'BIRU'},
    {color:'#ccbf3f', nama:'KUNING'},
    {color:'#42cd40', nama:'HIJAU'},
    {color:'#ea3ba4', nama:'PINK'}
  ];

  //function untuk ganti state warna berdasarkan index color
  const clickColor = (val) => {
    setIndex(val);
  }

  //render hasil kotak
  return (
    <div className="App" style={{display:'flex', flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'center', height: '100vh', backgroundColor:'black'}}>
       <div className = 'box' style={{width:250, height:250, backgroundColor:color[index].color}}>
       </div>       
       <div style={{width:250, height:250, marginLeft: 20, display: 'flex', flexDirection:'column', justifyContent:'space-between'}}>
         {
           color.map((cl,key) => {
             return(
              <div key= {key} style={{backgroundColor:cl.color, color:'white', fontWeight:'bold', padding:10}} onClick={() => {clickColor(key)}}>{cl.nama}</div>
             )
           })
         }          
       </div>
    </div>
  );
}

export default App;
