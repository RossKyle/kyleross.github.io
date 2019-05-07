using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clonage
{
    class Program
    {
        static void Main(string[] args)
        {
            Vector2<float> point1 = new Vector2<float>(9, -3.1416f);
            Console.WriteLine(point1.Clone().ToString());
            
            Voiture maVoiture = new Voiture(4);
            Pilote leMeilleurPilote = new Pilote("XKCD-42", "Fox McCloud");
            Avion monAvion = new Avion(60, leMeilleurPilote);

            List<Véhicule> véhicules = new List<Véhicule>();
            véhicules.Add(maVoiture);
            véhicules.Add(monAvion);

            foreach(Véhicule v in véhicules)
            {
                Véhicule copie = v.Clone();
                Console.WriteLine(copie);
            }
        }
    }
}
