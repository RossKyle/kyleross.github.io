using System;

namespace TestTableaux2
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            Bulletin b1 = new Bulletin();
            
            //Change le CONTENEUR
            //utilise le SET
            b1.Notes = new float[]{2, 2};

            //Change le CONTENU
            //utilise le GET
            b1.Notes[0] = 9;
            b1.Notes[0] = -999;
            Console.WriteLine(b1.Notes[0]);

            float[] test = b1.Notes;
            test[0] = 100; //test réfère au même tableau que b1.Notes
            Console.WriteLine(b1.Notes[0]);

            float note = b1.Notes[0];
            note = -1000; //note n'est PAS une référence (float est une struct)
                          //note est une COPIE de la première valeur dans b1.Notes
            Console.WriteLine(b1.Notes[0]);
            
            ////////////////////////////////////
            
            BulletinV2 b2 = new BulletinV2();
            b2.ModifierPremièreNote(-1);
            b2.ModifierPremièreNote(99);
            b2.ModifierPremièreNote(-1);
            Console.WriteLine(b2.ChercherNote(0));

            float testNote = b2.ChercherNote(0);
            testNote = -1000; //testNote est une COPIE du premier élément
                              //dans le tableau de notes
            Console.WriteLine(b2.ChercherNote(0));
            
            b2.ModifierNote(100, 2);
            b2[2] = 100;
            Console.WriteLine(b2[2]);
            
            ////////
            
            CarteDeJeu c1 = new CarteDeJeu();
            c1[0, 2] = 1;
        }
    }
}