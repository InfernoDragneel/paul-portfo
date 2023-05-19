import React from 'react';
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <nav>
          <div className="container">
            <h1>Mon Portfolio</h1>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <section id="accueil">
        <div className="container">
          <h2>Bienvenue sur mon portfolio</h2>
          <p>Je suis Paul, un développeur talentueux et passionné, spécialisé dans la création d'applications web et mobiles innovantes. Mon portfolio met en évidence ma maîtrise des langages de programmation et des frameworks modernes, ainsi que ma capacité à résoudre des problèmes complexes avec créativité et efficacité. Grâce à mon expertise technique et à ma volonté constante d'apprendre et de m'améliorer, je suis un atout précieux pour tout projet de développement. Mon portfolio est la preuve de mon engagement envers l'excellence et témoigne de ma capacité à créer des solutions numériques remarquables.</p>
        </div>
      </section>

      <section id="projets">
        <div className="container">
          <h2>Mes projets</h2>
          <div className="projet">
            <h3>Projet 1 Calculatrice Jquery</h3>
            <img src="https://repository-images.githubusercontent.com/411329600/d3cc5e40-c502-461d-afda-863dfe77864b" alt="Photo de l'élève" />
          </div>
          <div className="projet">
            <h3>Projet 2 Grid/Flexbox</h3>
            <img src="https://ludovicwyffels.dev/static/4e715df533b5882aeb279a15be76bc08/5707d/flexbox.png" alt="Photo de l'élève" style={{ width: '700px', height: '700px' }} />

          </div>
        </div>
      </section>

      <section id="a-propos">
        <div className="container">
          <h2>À propos de moi</h2>
          Paul, un développeur talentueux, passionné et créatif. Expert en programmation et résolution de problèmes. Atout précieux pour tout projet de développement. Toujours en quête d'apprentissage et d'amélioration. Créateur de solutions numériques remarquables.
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contactez-moi</h2>
          <form>
            <input type="text" placeholder="Nom complet" />
            <input type="email" placeholder="Adresse e-mail" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2023 Mon Portfolio. Tous droits réservés.</p>
        </div>
      </footer>

      <script src="app.js"></script>
    </div>
  );
}

export default App;
