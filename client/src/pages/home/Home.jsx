import * as React from 'react';
import Styles from './home.module.css';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



function Home() {

  useGSAP(() => {
    gsap.from(('#sushiDish'), {
      duration: 3, 
      opacity: 0,
      rotate:360,
      width:5,
    })
    gsap.fromTo(('#sakura'), { opacity: 0, y: -50 },{opacity:1, delay:1, y:30})
    gsap.fromTo(('#goToTables'), { opacity: 0, y: 50 },{opacity:1, delay:1, y: 0})

  }, []);

  // navigate to page
  const navigate = useNavigate();

  function goToPage() {
    navigate(`/clients`);
  }
  return (
    <div className={Styles.wrapper}>
      <div className={Styles.leftSide}>
        <div className={Styles.leftCenter}>
          <h1 id='sakura'>SAKURA</h1>
          <div id='goToTables'>
            <Button onClick={goToPage}>
              Vai ai tavoli
            </Button>
          </div>
        </div>
      </div>
      <div className={Styles.rightSide}>
        <Button className={Styles.adminBtn} variant='secondary' component={Link} to="/admin">Admin</Button>
        <img className={Styles.imgBox} id='sushiDish' src='/assets/sushi-dish.png' alt="sushi" />
      </div>
    </div>
  )
}

export default Home