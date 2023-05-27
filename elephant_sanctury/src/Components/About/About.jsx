import React from "react";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";

function About() {
  const image = [
    {
      src: "https://i.guim.co.uk/img/media/749c34ab1414dedd892c725527f2e377050d1963/0_400_5278_3167/master/5278.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0aa4bf8fbd90ef154523977415f59e22",
    },
    {
      src: "https://im.whatshot.in/img/2021/Mar/118972258-3252809258142163-3738031708818085449-n-1614571526.jpg",
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/09/be/45/elephant-sanctuary-in.jpg?w=1200&h=900&s=1",
    },
    {
      src: "https://yometro.com/images/places/elephantastic.jpg",
    },
    {
      src: "https://www.holidify.com/images/cmsuploads/compressed/3(1)_20181003202118_20181003202644.jpg",
    },
    {
      src: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2022/08/Elefantastic-Farm-Jaipur-5.jpg?resize=1200%2C900&ssl=1",
    },
    {
      src: "https://media-cdn.tripadvisor.com/media/photo-s/10/c8/3d/de/elefantastic-jaipur.jpg",
    },
    {
      src: "https://live.staticflickr.com/7407/16307222517_753230e509_b.jpg",
    },
    {
      src: "https://www.savista.com/wp-content/uploads/2017/07/elephjant-1.jpg",
    },
    {
      src: "https://ridinghistory.com/wp-content/uploads/2020/04/Elephant_village_amer_Jaipur_Rajasthan.jpg",
    },
    {
      src: "https://jaipurcitypost.files.wordpress.com/2013/03/elephants-bathing-at-hathigaon-jaipur.jpg",
    },
    {
      src: "https://www.rajasthantourplanner.com/images/Jaipur-Hathi-Gaon.jpg",
    },
    {
      src: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/08/12/896434-elephhant-day.jpg?im=FitAndFill=(1200,900)",
    },
    {
      src: "https://d3gw4aml0lneeh.cloudfront.net/assets/locations/tUyhb7EStT0G.jpg",
    },
    {
      src: "https://5.imimg.com/data5/SELLER/Default/2022/8/KW/CC/FA/137758419/elephant-farm-in-jaipur-500x500.jpeg",
    },
  ];

  return (
    <div  style={{
      position: "relative",
      top: "100px",
      width:'80vw',
      margin:'auto'
    }}>
    <br />
      <div>
        Elefun Elephant in Jaipur, India is a fantastic way for you to get
        hands-on experience and make a real difference in the lives of our
        elephants. Experience the most exciting, innovative, working elephant
        village in India, dedicated to conserving elephants. You can learn about
        their basic habits of food, life, and traditional decoration. People
        from Elefun Elephant is engaged with Elephant by birth, not by
        profession. Our family has been Elephant and taking care of Elephant's
        for 4 generations but now a days we have a very different world where
        everyone has a busy lives. So we have created these activities with
        Elephant's for people who want to be a Mahout (Care taker of Elephant)
        of a beautiful and gentle Giant.
      </div>
      <div
        style={{
          gap: "30px",
        }}
      >
        {image.map((e, src) => (
          <img
            style={{
              margin: "20px",
              borderRadius: "10px",
            }}
            src={e.src}
            alt=""
            width={300}
          />
        ))}
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default About;
