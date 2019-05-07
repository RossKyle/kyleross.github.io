namespace Clonage
{
    public class Vector2<T> : IClonable<Vector2<T>>
    {
        private T x;
        private T y;

        public T X
        {
            get { return x; }
            private set { x = value; }
        }
        public T Y
        {
            get { return y; }
            private set { y = value; }
        }

        public Vector2(T xInit, T yInit)
        {
            X = xInit;
            Y = yInit;
        }

        protected Vector2(Vector2<T> vecteur2ÀCopier)
        {
            X = vecteur2ÀCopier.X;
            Y = vecteur2ÀCopier.Y;
        }
        
        public Vector2<T> Clone()
        {
            return new Vector2<T>(this);
        }
    }
}