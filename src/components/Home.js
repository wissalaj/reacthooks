import React,{ useState } from 'react';
import '../App.css';
import ListMovie from './ListMovie';
import Filter from './Filter';
import AddMovie from './AddMovie';
import { v4 as uuidv4 } from 'uuid';


function Home() {
  const [movie ,setMovie]=useState ([
    { id : uuidv4(),
      title:"Bird Box",
      description:"Bird Box is a 2018 American post-apocalyptic horror thriller film directed by Susanne Bier from a screenplay written by Eric Heisserer, and based on the 2014 novel of the same name by Josh Malerman.",
      posterUrl:"https://fr.web.img6.acsta.net/pictures/18/10/24/16/32/3420946.jpg",
      rate:3.5,
      linkTrailer:"https://www.youtube.com/embed/o2AsIXSh2xo"
    },
    { id : uuidv4(),
      title:"The Gift",
      description:"The Gift (known in Turkey as Atiye) is a Turkish psychological thriller Netflix series starring Beren Saat. It was written by Jason George and Nuran Evren Şit. ",
      posterUrl:"https://fr.web.img6.acsta.net/pictures/20/06/11/04/31/3474242.jpg",
      rate:4,
      linkTrailer:"https://www.youtube.com/embed/qXE7MkPXicM"
     },
    { id : uuidv4(),
      title:"Derrière nos écrans de fumée",
      description:"In this unprecedented documentary, specialists, activists or even former employees of the giants of technology open our eyes to the truth hidden behind our screens. They are sounding the alarm about some of their inventions, which cause addictions and destabilize democracies.",
      posterUrl:"https://www.partage-le.com/wp-content/uploads/2020/09/kyle-v-james-4-hex-wishBBBB2.jpg",
      rate:4,
      linkTrailer:"https://www.youtube.com/embed/uaaC57tcci0"
    }
  ]);
 const Add =(e)=>{setMovie([...movie,e])};
 const[movietitle,setMovieTitle] =useState(" ");
 const filterTitle =(e)=>setMovieTitle(e);
 const[movierate,setMovieRate] =useState(0);
 const filterRate =(e)=>setMovieRate(e);


  return (
    <div className="home">
    <Filter  UpdateRate={filterRate} UpdateTitle={filterTitle}  />
    <ListMovie list={movie.filter(e=>e.title.toLowerCase().includes(movietitle.toLowerCase()) && e.rate >= movierate)} />
    <AddMovie Updatemovie={Add} />
    
    </div>
  );
}

export default Home;
