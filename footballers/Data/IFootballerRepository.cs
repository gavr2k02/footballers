using System.Collections.Generic;
using footballers.Models;

namespace footballers.Data
{
    public interface IFootballerRepository
    {
        public IEnumerable<Footballer> GetFootballers();
        public bool AddFootballer(Footballer footballer);
        public bool UpdateFootballer(Footballer footballer);

    }
}