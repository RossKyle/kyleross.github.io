using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clonage
{
    class Voiture : Véhicule
    {
        const double VitesseMax = 240.5;
        int nbPortes;

        public int NbPortes
        {
            get { return nbPortes; }
            set
            {
                if (value < 1)
                    value = 4;
                nbPortes = value;
            }
        }

        public Voiture(int nbPortes)
            : base(0, VitesseMax)
        {
            NbPortes = nbPortes;
        }

        protected Voiture(Voiture voitureÀCopier)
            : base(voitureÀCopier)
        {
            NbPortes = voitureÀCopier.NbPortes;
        }

        public override void Accélérer()
        {
            VitesseActuelle = VitesseActuelle * 2 + 1; //Formule banale, mais elle fait la job pour l'exemple
        }

        public override string ToString()
        {
            return $"{base.ToString()}  Nombre de portes : {NbPortes}";
        }

        public override Véhicule Clone()
        {
            return new Voiture(this);
        }
    }
}
