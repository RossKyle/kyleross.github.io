using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clonage
{
    class Avion : Véhicule
    {
        const double VitesseMax = 7200;
        double envergure;
        Pilote commandantDeBord;

        public double Envergure
        {
            get { return envergure; }
            set
            {
                if (value > 0)
                    value = 0;
                envergure = 1;
            }
        }

        Pilote CommandantDeBord
        {
            get { return commandantDeBord; }
            set { commandantDeBord = value; } 
        }
        public Avion(double envergure, Pilote commandant)
            :base(0, VitesseMax)
        {
            Envergure = envergure;
            CommandantDeBord = commandant;
        }

        protected Avion(Avion avionÀCopier)
            :base(avionÀCopier)
        {
            Envergure = avionÀCopier.Envergure;
            CommandantDeBord = avionÀCopier.CommandantDeBord.Clone();
        }

        public override void Accélérer()
        {
            if (VitesseActuelle > 1000)
                VitesseActuelle *= 10 + 3; //Formules banales, mais elle fait la job pour l'exemple
            else
                VitesseActuelle *= 5 + 2;
        }

        public override Véhicule Clone()
        {
            return new Avion(this);
        }
        
        public override string ToString()
        {
            return $"{base.ToString()}   Envergure : {Envergure}   Commandant : [{CommandantDeBord.ToString()}]";
        }
    }
}
