using System.Xml.Schema;

namespace TestTableaux2
{
    public class BulletinV2
    {
        private float[] notes;

        //Pour le CONTENEUR
        private float[] Notes
        {
            get { return notes; }
            set
            {
                if (value != null && value.Length > 0)
                    notes = value;
            }
        }
        
        //Pour le CONTENU du conteneur
        //niveau access typeContenu this [int i]
        public float this[int i]
        {
            get { return ChercherNote(i); }
            set { ModifierNote(value, i); }
        }

        public BulletinV2()
        {
            //utilise le SET
            //l'attribut va référer à un NOUVEAU tableau en mémoire
            Notes = new float[]{0, 0, 0};
        }

        //Modifie le CONTENU
        public void ModifierPremièreNote(float nouvelleNote)
        {
            if (nouvelleNote >= 0)
                Notes[0] = nouvelleNote;
        }

        public void ModifierNote(float nouvelleNote, int indice)
        {
            if (nouvelleNote >= 0)
                Notes[indice] = nouvelleNote;
        }

        //Chercher le CONTENU
        public float ChercherNote(int indice)
        {
            return Notes[indice];
        }
    }
}