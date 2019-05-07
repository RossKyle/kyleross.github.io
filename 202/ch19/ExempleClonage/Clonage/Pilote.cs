using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Clonage
{
    class Pilote
    {
        string code;
        string nom;

        public string Code
        {
            get { return code; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException();
                code = value;
            }
        }

        public string Nom
        {
            get { return nom; }
            set
            {
                if (string.IsNullOrWhiteSpace(value))
                    throw new ArgumentException();
                nom = value;
            }
        }

        public Pilote(string code, string nom)
        {
            Code = code;
            Nom = nom;
        }

        protected Pilote(Pilote piloteÀCopier)
            : this(piloteÀCopier.Code, piloteÀCopier.Nom)
        {}

        public Pilote Clone()
        {
            return new Pilote(this);
        }

        public override string ToString()
        {
            return $"Code : {Code}    Nom : {Nom}";
        }

    }
}
