import React from 'react';
import styles from '../Screens/Home.module.css';


const Home = () => {
    return (
      <div className={styles.container}>
        <img 
          src='https://www.cisinformatica.cat/wp-content/uploads/2023/05/porque-son-importantes-las-paginas-web-en-la-actualidad-3.jpg' 
          alt="Digital Solution"
          className={styles.image} 
        />
        <h1>This is the home</h1>
        <p>
          At Digital Solution, we specialize in designing websites that stand out. 
          Our team of experts creates customized digital solutions 
          that reflect the essence of your business, combining functionality 
          with an attractive design. Whether you need an informational website, an online store, or a blog, we take care of every detail to ensure that your online presence is impactful and effective.
        </p>
      </div>
    );
}

export default Home;
