import React, { useState} from 'react';
import '../App.css';
import {Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Iframe from 'react-iframe';


function  DescriptionMovie({match}) {
    const [movie ,setMovie]=useState ([
        { title:"Bird Box" ,
          description:"Bird Box is a 2018 American post-apocalyptic horror thriller film directed by Susanne Bier from a screenplay written by Eric Heisserer, and based on the 2014 novel of the same name by Josh Malerman.",
          posterUrl:"https://fr.web.img6.acsta.net/pictures/18/10/24/16/32/3420946.jpg",
          rate:3.5,
          linkTrailer:"https://www.youtube.com/embed/o2AsIXSh2xo"
        },
        { title:"The Gift",
          description:"The Gift (known in Turkey as Atiye) is a Turkish psychological thriller Netflix series starring Beren Saat. It was written by Jason George and Nuran Evren Şit. ",
          posterUrl:"https://fr.web.img6.acsta.net/pictures/20/06/11/04/31/3474242.jpg",
          rate:4,
          linkTrailer:"https://www.youtube.com/embed/qXE7MkPXicM"
         },
        { title:"Derrière nos écrans de fumée",
          description:"In this unprecedented documentary, specialists, activists or even former employees of the giants of technology open our eyes to the truth hidden behind our screens. They are sounding the alarm about some of their inventions, which cause addictions and destabilize democracies.",
          posterUrl:"https://www.partage-le.com/wp-content/uploads/2020/09/kyle-v-james-4-hex-wishBBBB2.jpg",
          rate:4,
          linkTrailer:"https://www.youtube.com/embed/uaaC57tcci0"
        }
      ]);
      let moviedescription= movie.find(el => el.title === match.params.title);
    return(
      <div className="descrip">
   
      <div className="title">
        <h1>{moviedescription.title}</h1>
        <p> {moviedescription.description}</p> 
        <div className="iframe">
        <Iframe src={moviedescription.linkTrailer}
        width="800"
        height="600"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
       </div>
        <Link to="/">
        <h1 style={{fontSize:"small"}}>Back to the home page</h1>
        </Link>  
      </div> 
      </div>
    );
    }
    export default DescriptionMovie ;