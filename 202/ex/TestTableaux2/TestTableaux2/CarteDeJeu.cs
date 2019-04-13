namespace TestTableaux2
{
    public class CarteDeJeu
    {
        private int[,] tuiles;
        
        //propriété pour un CONTENEUR
        private int[,] Tuiles
        {
            get { return tuiles; }
            set { tuiles = value; } //value est une matrice
        }

        public CarteDeJeu()
        {
            Tuiles = new int[5, 5];
        }

        //propriété indexée pour le CONTENU du conteneur
        public int this[int i, int j]
        {
            get { return Tuiles[i, j];}
            set
            {
                if (value >= 0)
                    Tuiles[i, j] = value;
            }
        }

        public int ChercherTuile(int ligne, int colonne)
        {
            return Tuiles[ligne, colonne];
        }
    }
}