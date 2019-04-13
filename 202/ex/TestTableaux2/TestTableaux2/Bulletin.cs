using System.Xml.Schema;

namespace TestTableaux2
{
    public class Bulletin
    {
        private float[] notes;

        public float[] Notes
        {
            get { return notes; }
            set
            {
                if (value != null && value.Length > 0)
                    notes = value;
            }
        }

        public Bulletin()
        {
            Notes = new float[]{0};
        }
    }
}