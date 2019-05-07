using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clonage
{
    abstract class Véhicule : IClonable<Véhicule>
    {
        Vector2<float> position;
        double vitesseActuelle;
        double vitesseMax;

        Vector2<float> Position
        {
            get { return position; }
            set { position = value; }
        }
 
        public double VitesseActuelle
        {
            get { return vitesseActuelle; }
            set
            {
                if (value < 0)
                    throw new ApplicationException("La vitesse ne peut être négative");
                vitesseActuelle = value;
            }
        }

        public double VitesseMax
        {
            get { return vitesseMax; }
            set
            {
                if (value <= 0)
                    throw new ApplicationException("La vitesse maximale d'un véhicule doit être plus grand que 0");
                vitesseMax = value;
            }
        }

        public Véhicule(double vitesseActuelle, double vitesseMax)
        {
            Position = new Vector2<float>(0, 0);
            VitesseActuelle = vitesseActuelle;
            VitesseMax = vitesseMax;
        }

        protected Véhicule(Véhicule véhiculeÀCopier)
            :this(véhiculeÀCopier.VitesseActuelle, véhiculeÀCopier.VitesseMax)
        {}

        //Nous ne pouvons pas définir comment que tous les véhicules accélèrent
        //ex: un avion n'accélère pas selon les mêmes formules qu'une voiture
        public abstract void Accélérer();

        //Chaque type de véhicule fera appel à son constructeur de copie pour le clonage
        public abstract Véhicule Clone();
        
        public override string ToString()
        {
            return $"Vitesse actuelle : {VitesseActuelle}  -- Vitesse maximale : {VitesseMax}";
        }
    }
}
